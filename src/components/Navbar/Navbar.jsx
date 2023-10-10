import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'

function Navbar({options}) {
  return (
    <div className={styles.Navbar}>
      <Link to={'/'}>Account management</Link>
      <Link to={'/suggestions'}>Suggestions</Link>
      <Link to={'/leaderboards'}>Leaderboards</Link>
    </div>
  )
}

export default Navbar
