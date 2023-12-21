import React,{useState, useEffect} from 'react'
import back from '../../../Images/BACKCARD.JPG'
import styles from './SnipSnapSnorum.module.css'
import Deck from '../../../gamecomponents/Deck'

function SnipSnapSnorum() {
  const [rules, setRules] = useState(false)
  const [comHand, setComHand] = useState([])
  const [playHand, setPlayHand] = useState([])
  const [deck, setDeck] = useState(new Deck())

  const newGame = () =>{
    console.log("Start a new snip snap snorum game")
  }

  useEffect(()=>{
    deck.shuffle()
    deck.shuffle()
  },[deck])

  return (
    <div className={styles.SnipSnapSnorum}>
      <h1>Snip Snap Snorum</h1>
            <div>
        <button onClick={newGame}>New game</button>
        <button onClick={()=>{setRules(!rules)}}>Show rules</button>
      </div>
            {
        rules &&
        <div className={styles.rules}>
          <ul>
            <li>Play cards from your hand</li>
            <li>The first card can be anything(snip)</li>
            <li>The second and third card must match the value of the first card(snap, snorum)</li>
            <li>If you cannot play a card you pass the turn</li>
            <li>If both players cannot play a card, we will reset and go back to snip status</li>
            <li>First player to empty their hand wins</li>
          </ul>
        </div>
      }
      <h2>Com</h2>
      <img src={back} alt="" />
      <h2>Pile</h2>
      <img src={back} alt="" />
      <h2>Player</h2>
      <img src={back} alt="" />
    </div>
  )
}

export default SnipSnapSnorum
