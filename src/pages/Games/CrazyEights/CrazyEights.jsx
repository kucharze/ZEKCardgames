import React, {useState, useEffect, useRef} from 'react'
import styles from './CrazyEights.module.css'
import back from '../../../Images/BACKCARD.JPG'
import Deck from '../../../gamecomponents/Deck'
import SuitPicker from '../../../components/SuitPicker/SuitPicker'

function CrazyEights() {
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
  const imageRef = useRef('../../../Images/2c.png');

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
  }

  const playCard = (card,i) =>{
    console.log("Playing card",card,i)
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
        console.log("Play suite: ", card.suit)
        setSuit(card.suit)
        setValue(card.value)
        setPile(card)
        setComTakeTurn(true)
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

    for(let i=0; i<newHand.length; i++){
      console.log(newHand[i]);
      if(newHand[i].suit === pile.suit || newHand[i].value === pile.value){
        found = true;
        foundPos=i;
        console.log("Found something to play",newHand[i].suit, newHand[i].value)
        foundSuit=newHand[i].suit
      }
    }

    if(found){
      console.log("Found a card to play for Com")
      console.log(comHand[foundPos])
      let playcard = newHand.splice(foundPos,1);
      console.log("Com suit: ",playcard,playcard.suit)
      setComHand(newHand)
      setPile(playcard)
      setSuit(foundSuit)
      setComTakeTurn(false)
    }
    else{
      console.log("No card found")
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
    
  },[pile])

  return (
    <div className={styles.CrazyEights}>
      <h1>Crazy Eights</h1>
      <button onClick={newGame}>New game</button>
      <h2>Computer</h2>
      <div className='com'>{
        comHand.map((item,i)=>{
          if(item){
          return <img className={styles.hand} key={i} src={back} 
            alt="" ref={imageRef} />
          }
          return <p>No value here</p>
        })
      }</div>
      <div>The display section for the suit: {suitDisplay}</div>
      <div className='table'>
        <img className={styles.hand} src={back} alt="" onClick={cardPicked} />,
        {pile &&
         <img className={styles.hand} src={require(`../../../Images/${pile}.png`)} alt="" ref={imageRef} />
        }
        </div>
        {
          pickSuit && <SuitPicker func={chooseSuit}/>
        }
        
      <h2>Player</h2>
      <div className='player'>{
        playHand.map((item,i)=>{
          if(item){
            return <img className={styles.hand} key={i} 
              src={require(`../../../Images/${item}.png`)} alt="" ref={imageRef}
              onClick={()=>playCard(item,i)} />
          }
          return <p>No value here</p>
        })
      }</div>
    </div>
  )
}

export default CrazyEights
