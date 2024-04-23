import React, {useState} from 'react'
import styles from './WinnerBoard.module.css'
// import Firework from '../Firework/Firework'

function WinnerBoard({winner}) {
  return (
    <div className={styles.WinnerBoard}>
      {winner && <h1>You win</h1>}
      {(!winner) && <h1>You lose</h1>}
      {/* <Firework/> */}
      {/* <h2>Play again?</h2>
      <button>Yes</button>
      <button>No</button> */}
    </div>
  )
}

export default WinnerBoard
