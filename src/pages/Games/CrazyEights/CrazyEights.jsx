import React, {useState, useEffect} from 'react'
import styles from './CrazyEights.module.css'
import back from '../../../Images/BACKCARD.JPG'
import Deck from '../../../gamecomponents/Deck'
import SuitPicker from '../../../components/SuitPicker/SuitPicker'
import WinnerBoard from '../../../components/Winnerboard/WinnerBoard'
import { useAuth } from "../../contexts/app_context";

function CrazyEights({darkMode}) {
  const { user, uploadToLeaderboards } = useAuth();

  const [playHand, setPlayHand] = useState([])
  const [comHand, setComHand] = useState([])
  const [pile,setPile] = useState(null)
  const [tempPile, setTempPile] = useState(null)
  const [comTakeTurn, setComTakeTurn] = useState(false)
  const [deck, setDeck] = useState(new Deck())
  const [suit, setSuit] = useState("No current suit")
  const [value, setValue] = useState('No current value')
  const [suitDisplay, setSuitDisplay] = useState("No Current suite")
  const [pickSuit, setPickSuit] = useState(false)
  const [gameOver, setGameOver] = useState(false)
  const [youWin, setYouWin] = useState(false)
  const [rules, setRules] = useState(false)
  const [numMoves, setNumMoves] = useState(0)

  const endGame = () =>{
    setGameOver(true)
    setYouWin(true)

    if(user){
      uploadToLeaderboards(numMoves)
    }
  }

  const cardPicked = () =>{
    console.log("Picking a card")

    let newCard = deck.dealACard()
    setPlayHand([...playHand,newCard])
    console.log(deck.list.length)
    if(deck.list.length<5){
      resetDeck()
    }
    //player.setList([...playHand,newCard])
    comTurn();
  }

  const resetDeck = () =>{
    setDeck(()=>{
      let d = new Deck()
      d.shuffle();
      d.shuffle()
      return d;
    })
  }

  const chooseSuit = (suit) => {
    //Needs to set the pile with the temp pile card
    setSuit(suit)
    setPickSuit(false)
    setPile(tempPile)
    setComTakeTurn(true)
    // comTurn()
  }

  const playCard = (card,i) =>{
    // console.log("Playing card",card,i)
    //console.log("Ith position in player hand",playHand[i])
    console.log(pile.value)
    if(card.suit===suit || card.value===value || card.value==="8"){
        let newHand = playHand;
        newHand.splice(i,1)
        setPlayHand(newHand)
        
      if(card.value==="8"){
        setPickSuit(true)
        setTempPile(card)
        setValue("8")
      }
      else{
        // console.log("Play suite: ", card.suit)
        setSuit(card.suit)
        setValue(card.value)
        setPile(card)
        setComTakeTurn(true)
        if(newHand.length===0){
          endGame()
        }
      }
    }
    else{
      alert("That card is not valid")
    }
   
  }

  //The computer turn
  const comTurn = () =>{
    let newHand = comHand;
    let found = false;
    let foundPos = -1;
    let foundSuit = null;
    let foundValue = null;

    console.log(newHand);

    for(let i=0; i<newHand.length; i++){
      if(newHand[i].suit === suit || newHand[i].value === value){
        found = true;
        foundPos=i;
        // console.log("Found something to play",newHand[i].suit, newHand[i].value)
        foundSuit=newHand[i].suit
        foundValue=newHand[i].value
      }
    }

    if(found){
      // console.log("Found a card to play for Com")
      // console.log(comHand[foundPos])
      let playcard = newHand.splice(foundPos,1);
      console.log("Com suit: ",playcard,playcard.suit)
      setComHand(newHand)
      setPile(playcard)
      setSuit(foundSuit)
      setValue(foundValue)
      setComTakeTurn(false)
      if(newHand.length===0){
        endGame()
      }
    }
    else{
      // console.log("No card found")
      setComHand([...comHand, deck.dealACard()])
    }
  }

  const newGame = () =>{
    console.log("Start a new game")
    let tempHand = []
    for(let i=0; i<7; i++){
      tempHand.push(deck.dealACard())
    }
    setPlayHand(tempHand)

    tempHand = []
    for(let i=0; i<7; i++){
      tempHand.push(deck.dealACard())
    }

    setComHand(tempHand)

    let pileCard = deck.dealACard()
    setSuit(pileCard.suit)
    setValue(pileCard.value)
    setPile(pileCard)
    setGameOver(false)
    setYouWin(false)
    console.log(deck)
    resetDeck()
  }

  useEffect(()=>{
    deck.shuffle()
    deck.shuffle()
  },[])

  useEffect(()=>{
     if(suit === 'd' ){
      setSuitDisplay("Diamonds")
     }
     else if(suit === 'c' ){
      setSuitDisplay("Clubs")
     }
     else if(suit === 'h' ){
      setSuitDisplay("Hearts")
     }
     else if(suit === 's' ){
      setSuitDisplay("Spades")
     }
     else if(suit === "No current suit" ){
      setSuitDisplay("No current suit")
     }
     else{
      setSuitDisplay("Error " + suit)
     }
  },[suit])

  useEffect(()=>{
    if(comTakeTurn){
      comTurn()
    }
    
  },[pile, comTakeTurn])

  return (
    <div className={styles.CrazyEights}>
      <h1>Crazy Eights</h1>
      <div>
        <button onClick={newGame}>New game</button>
        <button onClick={()=>{setRules(!rules)}}>Show rules</button>
      </div>
      {
        rules &&
        <div className={styles.rules}>
          <ul>
            <li>Play cards from your hand</li>
            <li>To play a card, it must match the value or suit of the card on the pile</li>
            <li>If you can't play a card, click the deck to draw a card</li>
            <li>If you play an 8, you can change the suit to whatever you want</li>
            <li>First player to empty their hand wins</li>
          </ul>
        </div>
      }
      
      <h2>Computer</h2>
      <div className='com'>{
        comHand.map((item,i)=>{
          if(item){
          return <img className={styles.hand} key={i} src={back} 
            alt="" />
          }
          return <p>No value here</p>
        })
      }</div>
      <div>The current suit: {suitDisplay}</div>
      <div className='table'>
        <img className={styles.hand} src={back} alt="" onClick={cardPicked} />,
        {pile &&
         <img className={styles.hand} src={require(`../../../Images/Playcards/${pile}.png`)} alt=""/>
        }
        </div>
        {
          pickSuit && <SuitPicker func={chooseSuit}/>
        }
        {
          (//If a player has won
            gameOver && (
          <div>
            <WinnerBoard winner={youWin}/>
            <h2>Player</h2>
            <div className='player'>{
              playHand.map((item,i)=>{
                if(item){
                  return <img className={styles.hand} key={i} 
                    src={require(`../../../Images/Playcards/${item}.png`)} alt="" />
                }
                return <p>No value here</p>
              })
            }</div>
          </div>
          )) ||
          (//Noone has won yet
            <div>
              <h2>Player</h2>
            <div className='player'>{
              playHand.map((item,i)=>{
                if(item){
                  return <img className={styles.hand} key={i} 
                    src={require(`../../../Images/Playcards/${item}.png`)} alt=""
                    onClick={()=>playCard(item,i)} />
                }
                return <p>No value here</p>
              })
            }</div>
            </div>
          )
        }
        
      
    </div>
  )
}

export default CrazyEights
