import React from 'react'
import styles from './SuitPicker.module.css'

function SuitPicker({func}) {
  return (
    <div className={styles.SuitPicker}>
      <h2>Choose the new suit</h2>
      <button onClick={()=>func('Diamonds')}>Diamonds</button>
      <button onClick={()=>func('Hearts')}>Hearts</button>
      <button onClick={()=>func('Clubs')}>Clubs</button>
      <button onClick={()=>func('Spades')}>Spades</button>
    </div>
  )
}

export default SuitPicker
