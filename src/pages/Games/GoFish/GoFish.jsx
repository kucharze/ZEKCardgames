import React,{useState, useEffect} from 'react'
import back from '../../../Images/BACKCARD.JPG'
import Deck from '../../../gamecomponents/Deck'
import styles from './GoFish.module.css'
import WinnerBoard from '../../../components/Winnerboard/WinnerBoard'

function GoFish() {
  const [rules, setRules] = useState(false)
  const [deck, setDeck] = useState(new Deck())
  const [playHand,setPlayHand] = useState([])
  const [comHand, setComHand] = useState([])

  const newGame = () =>{
    console.log("New gofish game")

    setDeck(new Deck())
  }
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
      <img className={styles.card} src={back} alt="" />
      <WinnerBoard/>
      <h2>Player</h2>
      <img className={styles.card} src={back} alt="" />
    </div>
  )
}

export default GoFish
