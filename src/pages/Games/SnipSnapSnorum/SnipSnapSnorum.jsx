import React from 'react'
import back from '../../../Images/BACKCARD.JPG'
import styles from './SnipSnapSnorum.module.css'

function SnipSnapSnorum() {
  return (
    <div className={styles.SnipSnapSnorum}>
      <h1>Snip Snap Snorum</h1>
      <h1>Com</h1>
      <img src={back} alt="" />
      <h1>Pile</h1>
      <img src={back} alt="" />
      <h1>Player</h1>
      <img src={back} alt="" />
    </div>
  )
}

export default SnipSnapSnorum
