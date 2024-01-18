import React,{useState, useEffect} from 'react'
import back from '../../../Images/BACKCARD.JPG'
import Deck from '../../../gamecomponents/Deck'
import styles from './GoFish.module.css'


function GoFish() {
  const [rules, setRules] = useState(false)

  const newGame = () =>{
    console.log("New gofish game")
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
            <li>Insert Gofish rules here</li>
          </ul>
        </div>
      }
      <h1>Go Fish</h1>
      <h2>Com</h2>
      <img className={styles.card} src={back} alt="" />
      <h2>Player</h2>
      <img className={styles.card} src={back} alt="" />
    </div>
  )
}

export default GoFish
