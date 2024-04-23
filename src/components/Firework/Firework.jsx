import React from 'react'
import styles from './Firework.module.css'

function Firework() {
  return (
    <div className={styles.pyro}>
      <div className={styles.before}></div>
      <div className={styles.pyro}></div>
    </div>
  )
}

export default Firework
