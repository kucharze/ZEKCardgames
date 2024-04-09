import React, {useState} from 'react'
import back from '../../../Images/BACKCARD.JPG'
import styles from './War.module.css'
import Deck from '../../../gamecomponents/Deck'
import WinnerBoard from '../../../components/Winnerboard/WinnerBoard'

function War({darkmode}) {
    const [rules, setRules] = useState(false)
    const [comDeck, setComDeck] = useState(new Deck())
    const [playDeck, setPlayDeck] = useState(new Deck())
    const [gameOver, setGameOver] = useState(false)
    const [player, setPlayer] = useState(null)
    const [com, setCom] = useState(null)
    const [gameInProgress, setGameInProgress] = useState(false)

    const newGame = () =>{
      console.log("New war game")
      setComDeck(new Deck())
      setPlayDeck(new Deck())
      setGameInProgress(true)
    }

    const playCard = () =>{
      console.log("New war round")
      let playerCard = playDeck.dealACard();
      let comCard = comDeck.dealACard();

      setPlayer(playerCard)
      setCom(comCard)

      if(playDeck.isEmpty()  && comDeck.isEmpty()){
        setGameInProgress(false)
      }
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
      { 
      com && <img alt={player} className={styles.card} src={require(`../../../Images/${com}.png`)}/>
      }
      {
        gameOver && <WinnerBoard/>
      }
      <h2>Player</h2>
      <button onClick={playCard} disabled={!gameInProgress}>Play a round</button>
      { 
      player && <img alt={player} className={styles.card} src={require(`../../../Images/${player}.png`)}/>
      }
    </div>
  )
}

export default War
