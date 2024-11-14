import React from 'react'
import styles from './WinnerBoard.module.css'
import Firework from '../Firework/Firework'

function WinnerBoard({winner,moves}) {
  return (
    <div className={styles.WinnerBoard}>
      {winner && <h1>You win</h1>}
      {(!winner) && <h1>You lose</h1>}
      {winner && <Firework/>}
      {/* <h2>Play again?</h2>
      <button>Yes</button>
      <button>No</button> */}
      {
        moves
        && 
        <h3>You had {moves} moves</h3>
      }
    </div>
  )
}

export default WinnerBoard
