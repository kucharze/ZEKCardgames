import React from 'react'
import styles from './SuitPicker.module.css'

function SuitPicker({func}) {
  return (
    <div className={styles.SuitPicker}>
      <h1>Ths suit picker for Crazy eights</h1>
      <button>Diamonds</button>
      <button>Hearts</button>
      <button>Clubs</button>
      <button>Spades</button>
    </div>
  )
}

export default SuitPicker
