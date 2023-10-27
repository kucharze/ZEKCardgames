import React from 'react'
import styles from './SuitPicker.module.css'

function SuitPicker({func}) {
  return (
    <div className={styles.SuitPicker}>
      <h2>Choose the new suit</h2>
      <button onClick={()=>func('c')}>Diamonds</button>
      <button onClick={()=>func('d')}>Hearts</button>
      <button onClick={()=>func('h')}>Clubs</button>
      <button onClick={()=>func('s')}>Spades</button>
    </div>
  )
}

export default SuitPicker
