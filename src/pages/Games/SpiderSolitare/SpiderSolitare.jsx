import React, {useState, useEffect} from 'react'
import back from '../../../Images/BACKCARD.JPG'
import Deck from '../../../gamecomponents/Deck'
import styles from './Spidersolitare.module.css'

function SpiderSolitare() {
  return (
    <div className={styles.SpiderSolitare}>
      <h1>Spider Solitare</h1>
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
