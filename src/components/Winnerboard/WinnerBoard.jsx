import React, {useState} from 'react'
import styles from './WinnerBoard.module.css'

function WinnerBoard(winner) {
  return (
    <div className={styles.WinnerBoard}>
      {(winner == "Player") && <h1>You win</h1>}
      {/* <h2>Play again?</h2>
      <button>Yes</button>
      <button>No</button> */}
    </div>
  )
}

export default WinnerBoard
