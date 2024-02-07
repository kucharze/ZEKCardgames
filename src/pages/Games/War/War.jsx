import React, {useState} from 'react'
import back from '../../../Images/BACKCARD.JPG'
import styles from './War.module.css'

function War() {
    const [rules, setRules] = useState(false)

    const newGame = () =>{
      console.log("New war game")
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
            <li>Each player starts with 7 cards in hand</li>
          </ul>
        </div>
      }
      <h1>War</h1>
      <h2>Com</h2>
      <img src={back} alt="" />
      <h2>Pile</h2>
      <img src={back} alt="" />
      <h2>Player</h2>
      <img src={back} alt="" />
    </div>
  )
}

export default War
