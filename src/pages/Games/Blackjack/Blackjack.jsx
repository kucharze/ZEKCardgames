import React,{useState, useEffect} from 'react'
import back from '../../../Images/BACKCARD.JPG'
import styles from './Blackjack.module.css'
import Deck from '../../../gamecomponents/Deck'
import SuitPicker from '../../../components/SuitPicker/SuitPicker'
import WinnerBoard from '../../../components/Winnerboard/WinnerBoard'

function Blackjack() {
  const [playHand, setPlayHand] = useState([])
  const [comHand, setComHand] = useState([])
  const [value, setValue] = useState(0)
  const [comValue, setComValue] = useState(0)
  const [deck, setDeck] = useState(new Deck())
  const [gameOver, setGameOver] = useState(false)
  const [youWin, setYouWin] = useState(false)

  const newGame = () =>{
    console.log("New Blackjack game")
  }

  return (
    <div className={styles.Blackjack}>
      <h1>Blackjack</h1>
      <button onClick={newGame}>New Game</button>
      <h2>Dealer</h2>
      <img src={back} alt="" />
      <h2>Player</h2>
      <img src={back} alt="" />
    </div>
  )
}

export default Blackjack
