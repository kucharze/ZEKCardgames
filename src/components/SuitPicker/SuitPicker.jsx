import React from 'react'
import styles from './SuitPicker.module.css'

function SuitPicker({func}) {
  return (
    <div className={styles.SuitPicker}>
      <h2>Choose the new suit</h2>
      <button onClick={()=>func('d')}>Diamonds</button>
      <button onClick={()=>func('h')}>Hearts</button>
      <button onClick={()=>func('c')}>Clubs</button>
      <button onClick={()=>func('s')}>Spades</button>
    </div>
  )
}

export default SuitPicker
