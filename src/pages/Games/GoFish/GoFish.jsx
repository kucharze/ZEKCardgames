import React,{useState, useEffect} from 'react'
import back from '../../../Images/BACKCARD.JPG'
import Deck from '../../../gamecomponents/Deck'
import styles from './GoFish.module.css'
import WinnerBoard from '../../../components/Winnerboard/WinnerBoard'

function GoFish({darkmode}) {
  const [rules, setRules] = useState(false)
  const [deck, setDeck] = useState(new Deck())
  const [playHand,setPlayHand] = useState([])
  const [comHand, setComHand] = useState([])
  const [gameOver, setGameOver] = useState(false)
  const [askCard, setAskCard] = useState(null)
  const [disabled, setDisabled] = useState(true)

  const newGame = () =>{
    console.log("New gofish game")
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

    setDeck(new Deck())
  }

  const askForCard = (card) =>{
    console.log("Do you have any ",card.suit,card.value,"?")
  }

  const comTurn = () =>{
    setDisabled(false)
  }

  const goFish = () =>{
    //Tells computer to go fish
    console.log("Go fish")
    let newCard = deck.dealACard()

    setComHand([...comHand,newCard])

    setDisabled(true)
  }

  useEffect(()=>{
    console.log(comHand)
  },[comHand])

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
      <div>
        {
            comHand.map((item,i)=>{
              return <img key={i} alt={item} className={styles.card} src={`${back}`}
                onClick={()=>{
                  console.log("Clicked")
                  
                }}/>
            })
        }
      </div>
      
      {
        gameOver &&  <WinnerBoard/>
      }
      <h2>Player</h2>
      <button disabled={disabled} onClick={()=>{goFish()}}>Go Fish</button>
      <div>
        {
          playHand.map((item,i)=>{
            return <img key={i} alt={item} className={styles.card} src={require(`../../../Images/${item}.png`)}
              onClick={()=>{
                askForCard(item)
              }}/>
          })
      }
      </div>
      
    </div>
  )
}

export default GoFish
