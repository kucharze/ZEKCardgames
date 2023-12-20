import React,{useState, useEffect} from 'react'
import back from '../../../Images/BACKCARD.JPG'
import styles from './SnipSnapSnorum.module.css'

function SnipSnapSnorum() {
  const [rules, setRules] = useState(false)

  const newGame = () =>{
    console.log("Start a new snip snap snorum game")
  }

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
            <li>Try to get as close to 21 as possible with your cards</li>
            <li>Jack, Queen, King are each 10 points</li>
            <li>An Ace can be either 11 points or 1 point</li>
            <li>Having 21 with two cards is a blackjack</li>
            <li>If you go over 21 you lose</li>
            <li>The dealer will continue to hit until they have at least a value of 17</li>
            <li>If neither player has gone above 21, the higher valued hand wins</li>
            <li>The dealer wins all tiebreakers</li>
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
