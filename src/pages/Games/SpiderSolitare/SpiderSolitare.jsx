import React, {useState, useEffect} from 'react'
import back from '../../../Images/BACKCARD.JPG'
import Deck from '../../../gamecomponents/Deck'
import styles from './Spidersolitare.module.css'

function SpiderSolitare() {
  return (
    <div className={styles.SpiderSolitare}>
      <h1>Spider Solitare</h1>
      <div className={styles.plamat}>
        <div><img src={back} alt="" /></div>
        <div><img src={back} alt="" /></div>
        <div><img src={back} alt="" /></div>
        <div><img src={back} alt="" /></div>
        <div><img src={back} alt="" /></div>
      </div>
      
    </div>
  )
}

export default SpiderSolitare
