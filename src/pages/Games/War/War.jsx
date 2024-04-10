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
    const [playerWar, setPlayerWar] = useState(null)
    const [com, setCom] = useState(null)
    const [comWar, setComWar] = useState(null)
    const [gameInProgress, setGameInProgress] = useState(false)
    const [playScore, setPlayScore] = useState(0)
    const [comScore, setComScore] = useState(0)

    const newGame = () =>{
      console.log("New war game")
      let com = new Deck();
      com.shuffle();
      com.shuffle()
      setComDeck(com)
      let play = new Deck()
      play.shuffle()
      play.shuffle()
      setPlayDeck(play)
      setGameInProgress(true)
      setPlayer(null)
      setCom(null)
      setComWar(null)
      setPlayerWar(null)
    }

    const playCard = () =>{
      console.log("New war round")
      let playerCard = playDeck.dealACard();
      let comCard = comDeck.dealACard();

      if(playerCard.warValue > comCard.warValue){
        console.log("player")
        setPlayScore(playScore+1)
      }
      else if(comCard.warValue > playerCard.warValue){
        setComScore(comScore+1)
        console.log("com")
      }
      else{
        let playWar = playDeck.dealACard()
        let commWar = comDeck.dealACard()

        setPlayerWar(playWar)
        setComWar(commWar)
      }

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
      <h2>Computer</h2>
      <h3>{comScore}</h3>
      <p>Computer war card</p>
      {
        comWar && <img alt={com} className={styles.card} src={require(`../../../Images/${comWar}.png`)}/>

      }
      <p>Computer Play card</p>
      { 
      com && <img alt={com} className={styles.card} src={require(`../../../Images/${com}.png`)}/>
      }
      {
        gameOver && <WinnerBoard/>
      }
      <h2>Player</h2>
      <h3>{playScore}</h3>
      <p>Player war card</p>
      <button onClick={playCard} disabled={!gameInProgress}>Play a round</button>
      { 
      player && <img alt={player} className={styles.card} src={require(`../../../Images/${player}.png`)}/>
      }
    </div>
  )
}

export default War
