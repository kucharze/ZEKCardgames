import React,{useState, useEffect} from 'react'
import Deck from '../../../gamecomponents/Deck'
import styles from './GoFish.module.css'
import WinnerBoard from '../../../components/Winnerboard/WinnerBoard'
// import { useAuth } from "../../../contexts/app_context";
import useCards from "./Game_modules/checkHand"

function GoFish({darkmode}) {
  const [rules, setRules] = useState(false)
  const [deck, setDeck] = useState(new Deck())
  const [playHand,setPlayHand] = useState([])
  const [comHand, setComHand] = useState([])
  const [playScore, setPlayScore] = useState(0)
  const [comScore, setComScore] = useState(0)
  const [gameOver, setGameOver] = useState(false)//The game has completed
  const [askCard, setAskCard] = useState(null)//The card the computer is asking for
  const [disabled, setDisabled] = useState(true)//Should the goFish buttons be disabled
  const [inProgress, setInProgress] = useState(false)//A game is currently in progress
  const [asking, setAsking] = useState(false)//The computer is asking for a card
  const [winner, setWinner] = useState(false)

  //hooks
  const {testPlayGiving} = useCards()
  
  const setUpDeck = () =>{
    setDeck(new Deck())
  }

  const endGame = () =>{
    setGameOver(true)
    setInProgress(false)

    //check to see who won
    if(playScore>comScore){
      console.log("Player wins")
      setWinner(true)
    }
    else if(comScore>playScore){
      console.log("Computer wins")
      setWinner(false)
    }
    else{
      console.log("Tie")
      setWinner(null)
    }
  }

  const newGame = () =>{
    console.log("New gofish game")
    setUpDeck()
    deck.shuffle()
    deck.shuffle()
    
    let tempHand = [];
    for(let i=0; i<7; i++){
      tempHand.push(deck.dealACard())
    }
    setPlayHand(tempHand)

    tempHand = [];
    for(let i=0; i<7; i++){
      tempHand.push(deck.dealACard())
    }

    setComHand(tempHand)

    setDisabled(false)
    setInProgress(true)
    setAsking(false)
    setInProgress(true)
    setAskCard(null)
    setGameOver(false)
  }

  const askForCard = (card) =>{
    console.log("Do you have any ",card.suit,card.value,"?")
    checkComHand(card)
  }

  const checkComHand = (card) =>{
    let i = 0;
    let tempHand = comHand
    let tempCardList = []

    // testPlayGiving(card,comHand)

    while(i<tempHand.length){
      // console.log(tempHand[i])
      if(tempHand[i].value===card.value){
        tempCardList = [...tempCardList,tempHand.splice(i,1)];
      }
      else{
        i++
      }
      
    }
    // console.log("Temocardlist:",tempCardList)
    if(tempCardList.length===0){
      alert("Go Fish!")
      setPlayHand([...playHand,deck.dealACard()])
      if(deck.list.length===0){
        endGame()
      }
    }
    else{
      setPlayHand([...playHand,...tempCardList])
      checkForPlayPoints(card)
    }
    
    comTurn()
  }

  const checkPlayHand = (card) =>{
    console.log("Checking play hand")

    if(!testPlayGiving(card,playHand)){
      setAsking(false)
      setDisabled(true)
      checkForComPoints(card)
    }

  }

  const checkForComPoints = (card) =>{
    let count = 0
    let positions = []
    console.log("Checking for COM points")

    for(let i=0; i<comHand.length; i++){
      if(comHand[i].value===card.value){
        positions.push(i)
        count++
      }
    }
    if(count===4){
      for(let i=0; i<positions.length; i++){
        comHand.splice(positions[i],1)
        //Subtract one from other positions in order to prevent errors
      }
      setComScore(comScore+1)
    }
  }

  const checkForPlayPoints = (card) =>{
    let count = 0
    let positions = []
    console.log("Checking for play points")

    for(let i=0; i<playHand.length; i++){
      if(playHand[i].value===card.value){
        positions.push(i)
        count++
      }
    }
    if(count===4){
      for(let i=0; i<positions.length; i++){
        playHand.splice(positions[i],1)
        //Subtract one from other positions in order to prevent errors
      }
      setPlayScore(playScore+1)
    }
  }

  const comTurn = () =>{
    setDisabled(false)
    setAsking(true)
    
    setAskCard(Math.floor((Math.random() * comHand.length) + 1))
  }

  const goFish = () =>{
    //Tells computer to go fish
    console.log("Go fish")

    //Check if the player can give cards to the opponent
    if(testPlayGiving(askCard)){
      alert("You can still give cards")
      return
    }

    if(deck.list.length>0){
      let newCard = deck.dealACard()

      setComHand([...comHand,newCard])
      if(deck.list.length===0){
        endGame()
      }

      setDisabled(true)
      setAsking(false)
    }

  }

  const takeTurn = (card,pos) =>{
    // setDisabled(true) //Disable the buttons
    console.log("Card is",card)
    if(!asking){
      askForCard(card)
    }
    else{
      if(card.value===askCard.value){
        setComHand([...comHand,...playHand.splice(pos,1)])
        // setAsking(true)
        playHand.splice(pos,1)
        checkPlayHand(card)
      }
      else{
        alert("That is not the card that was asked for")
      }
    }
  }

  useEffect(() => {
    // newGame()
  }, [])

  return (
    <div className={styles.GoFish}>
      <div>
        <button onClick={newGame}>New game</button>
        <button onClick={()=>{setRules(!rules)}}>Show rules</button>
      </div>
            {
        rules &&
        <div className={styles.rules}>
          <ul>
            <li>Each player starts with 7 cards in hand</li>
            <li>Each player can ask the other if they have a given card in their hand</li>
            <li>IF they have the asked for cards, they give them all to you</li>
            <li>If they don't, you instead draw a card</li>
            <li>Score a point if you have 4 copies of each card</li>
             <li>Once the deck is out of cards, the player with the most points wins</li>
          </ul>
        </div>
      }
      <h1>Go Fish</h1>
      <h2>Com</h2>
      <h4>Score: {comScore}</h4>
      <div>
        {
            comHand.map((item,i)=>{
              return <img key={i} alt={item} className={styles.card} 
              src={require(`../../../Images/${item}.png`)}
                onClick={()=>{
                  console.log("Clicked")
                  
                }}/>
            })
        }
      </div>
      
      {
        gameOver &&  <WinnerBoard winner={winner}/>
      }
      {
        asking && <div>
          <h1>Do you have any {askCard.value}?</h1>
        </div>
      }
      {
        (!asking && inProgress) && <h1>Pick a card to ask for.</h1>
      }
      <h3>Cards left in deck: {deck.list.length}</h3>
      
      <h2>Player</h2>
      <h4>Score: {playScore}</h4>
      <button disabled={disabled} onClick={()=>{goFish()}}>Go Fish</button>
      <div>
        {
          playHand.map((item,i)=>{
            return <img key={i} alt={item} className={styles.card} src={require(`../../../Images/${item}.png`)}
              onClick={()=>{
                takeTurn(item,i)
              }}/>
          })
      }
      </div>
      
    </div>
  )
}

export default GoFish
