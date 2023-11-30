import React,{useState, useEffect} from 'react'
import back from '../../../Images/BACKCARD.JPG'
import styles from './Blackjack.module.css'
import Deck from '../../../gamecomponents/Deck'
import SuitPicker from '../../../components/SuitPicker/SuitPicker'
import WinnerBoard from '../../../components/Winnerboard/WinnerBoard'
import { type } from '@testing-library/user-event/dist/type'

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

        let tempHand = []
    for(let i=0; i<2; i++){
      tempHand.push(deck.dealACard())
    }
    setPlayHand(tempHand)

    tempHand = []
    for(let i=0; i<2; i++){
      tempHand.push(deck.dealACard())
    }

    setComHand(tempHand)

    setDeck(new Deck())
  }

  const findValues = () =>{
    let handVal=0
    playHand.forEach(element => {
      handVal+=Number(element.jackValue)
    });
    console.log(typeof(handVal))
    setValue(handVal)
  }
  
  useEffect(()=>{
    deck.shuffle()
    deck.shuffle()
  },[])

  useEffect(()=>{
    findValues()
  },[playHand, comHand])

  return (
    <div className={styles.Blackjack}>
      <h1>Blackjack</h1>
      <button onClick={newGame}>New Game</button>
      <h2>Dealer</h2>
      <div className={styles.dealer}>
        <img src={back} alt="" />
        {
          comHand.length>0 && <img className={styles.hand} 
                    src={require(`../../../Images/${comHand[1]}.png`)} alt="" />
        }
      </div>
      
      
      <h2>Deck</h2>
      <img src={back} alt="" />
      <h2>Player</h2>
      <div className='player'>
        <h2>Player hand {value}</h2>
        {
          playHand.map((item,i)=>{
              if(item){
                return <img className={styles.hand} key={i} 
                  src={require(`../../../Images/${item}.png`)} alt="" />
              }
              return <p>No value here</p>
            })
          }</div>
    </div>
  )
}

export default Blackjack
