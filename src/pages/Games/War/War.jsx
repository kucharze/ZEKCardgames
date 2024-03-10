import React, {useState} from 'react'
import back from '../../../Images/BACKCARD.JPG'
import styles from './War.module.css'
import Deck from '../../../gamecomponents/Deck'
import WinnerBoard from '../../../components/Winnerboard/WinnerBoard'

function War({darkmode}) {
    const [rules, setRules] = useState(false)
    const [comDeck, setComDeck] = useState(new Deck())
    const [playDeck, setPlayDeck] = useState(new Deck())

    const newGame = () =>{
      console.log("New war game")
      setComDeck(new Deck())
      setPlayDeck(new Deck())
    }

  return (
    <div className={styles.War}>
      <div>
        <button onClick={newGame}>New game</button>
        <button onClick={()=>{setRules(!rules)}}>Show rules</button>
      </div>
            {
        rules &&
        <div className={styles.rules}>
          <ul>
            <li>Each player has their own deck</li>
            <li>Each turn, players take the top card of their deck and compare values</li>
            <li>The player with the higher valued card wins a point</li>
            <li>In the event of a tie, repeat the above with two additional cards</li>
            <li>However has the most points after running out of cards wins</li>
          </ul>
        </div>
      }
      <h1>War</h1>
      <h2>Com</h2>
      <img src={back} alt="" />
      <h2>Pile</h2>
      <img src={back} alt="" />
      <WinnerBoard/>
      <h2>Player</h2>
      <img src={back} alt="" />
    </div>
  )
}

export default War
