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
  const [rules, setRules] = useState(false)

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
      <h2>Dealer</h2>
      <h2>Computer hand value: {comValue}</h2>
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
        <h2>Player hand value: {value}</h2>
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
