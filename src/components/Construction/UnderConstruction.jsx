import React from 'react'
import construction from '../../Images/Construction pic.png'
import styles from './UnderConstruction.module.css'

function UnderConstruction() {
  return (
    <div className={styles.UnderConstruction}>
      <img src={construction} alt="" />
    </div>
  )
}

export default UnderConstruction
