import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'

function Navbar({options}) {
  return (
    <div className={styles.Navbar}>
      <Link to={'/'}>Account management</Link>
      <Link>Suggestions</Link>
      <Link>Leaderboards</Link>
    </div>
  )
}

export default Navbar
