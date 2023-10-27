import React from 'react'
import styles from './SuitPicker.module.css'

function SuitPicker({func}) {
  return (
    <div className={styles.SuitPicker}>
      <h2>Ths suit picker for Crazy eights</h2>
      <button>Diamonds</button>
      <button>Hearts</button>
      <button>Clubs</button>
      <button>Spades</button>
    </div>
  )
}

export default SuitPicker
