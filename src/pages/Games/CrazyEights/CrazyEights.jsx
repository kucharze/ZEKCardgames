import React from 'react'
import styles from './CrazyEights.module.css'

function CrazyEights() {
  return (
    <div className={styles.CrazyEights}>
      <h1>Crazy Eights</h1>
      <h2>Computer</h2>
      <div className='com'></div>
      <div>The display section for the suit</div>
      <div className='table'>deck,,, pile</div>
      <h2>Player</h2>
    </div>
  )
}

export default CrazyEights
