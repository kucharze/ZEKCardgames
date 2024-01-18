import React,{useState, useEffect} from 'react'
import back from '../../../Images/BACKCARD.JPG'
import Deck from '../../../gamecomponents/Deck'
import styles from './GoFish.module.css'


function GoFish() {
  return (
    <div className={styles.GoFish}>
      <h1>Go Fish</h1>
      <h2>Com</h2>
      <img className={styles.card} src={back} alt="" />
      <h2>Player</h2>
      <img className={styles.card} src={back} alt="" />
    </div>
  )
}

export default GoFish
