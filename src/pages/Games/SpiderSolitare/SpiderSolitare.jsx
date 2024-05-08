import React, {useState, useEffect} from 'react'
import back from '../../../Images/BACKCARD.JPG'
import Deck from '../../../gamecomponents/Deck'
import styles from './Spidersolitare.module.css'

function SpiderSolitare() {
  const [deck, setDeck] = useState(new Deck())
  const [row1, setRow1] = useState([])
  const [row2, setRow2] = useState([])
  const [row3, setRow3] = useState([])
  const [row4, setRow4] = useState([])
  const [row5, setRow5] = useState([])
  
  const newGame = () =>{
    row1.push(deck.dealACard())
    row2.push(deck.dealACard())
    row3.push(deck.dealACard())
    row4.push(deck.dealACard())
    row5.push(deck.dealACard())
  }

  return (
    <div className={styles.SpiderSolitare}>
      <h1>Spider Solitare</h1>
      <button onClick={newGame}>New game</button>
      <div className={styles.playmat}>
        <div className={styles.row}>
          <img src={back} alt="1" />
          <img src={back} alt="2" />
          <img src={back} alt="3" />
          <img src={back} alt="1" />
        </div>
        <div className={styles.row}>
          <img src={back} alt="" />
          <img src={back} alt="2" />
          <img src={back} alt="2" />
          <img src={back} alt="2" />
        </div>
        <div className={styles.row}>
          <img src={back} alt="" />
          <img src={back} alt="3" />
          <img src={back} alt="3" />
          <img src={back} alt="1" />
        </div>
        <div className={styles.row}>
          <img src={back} alt="" />
          <img src={back} alt="" />
          <img src={back} alt="" />
          <img src={back} alt="" />
        </div>
        <div className={styles.row}>
          <img src={back} alt="" />
          <img src={back} alt="3" />
          <img src={back} alt="3" />
          <img src={back} alt="3" />
        </div>
        <div className={styles.row}>
          <img src={back} alt="" />
          <img src={back} alt="5" />
          <img src={back} alt="5" />
          <img src={back} alt="5" />
        </div>
      </div>
      
    </div>
  )
}

export default SpiderSolitare
