import React,{useState, useEffect} from 'react'
import back from '../../../Images/BACKCARD.JPG'
import styles from './Blackjack.module.css'

function Blackjack() {
  const [value, setValue] = useState(0)
  const [comValue, setComValue] = useState(0)

  return (
    <div className={styles.Blackjack}>
      <h1>Blackjack</h1>
      <h2>Com</h2>
      <img src={back} alt="" />
      <h2>Player</h2>
      <img src={back} alt="" />
    </div>
  )
}

export default Blackjack
