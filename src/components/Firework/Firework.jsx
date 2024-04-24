import React from 'react'
import styles from './Firework.module.css'
import Confetti from 'react-confetti'

function Firework() {
  return (
    <div >
      {/* <div className={styles.before}></div>
      <div className={styles.pyro}></div> */}
      <div className={styles.Firework}>
        <Confetti/>
      </div>
      
    </div>
  )
}

export default Firework
