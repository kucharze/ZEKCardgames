import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'

function GameNavbar() {
  return (
    <div className={styles.Navbar}>
      <Link to={'/crazyeights'}>Crazy Eights</Link>
      <Link to={'/blackjack'}>Blackjack</Link>
      <Link to={'/snipsnapsnorum'}>Snip Snap Snorum</Link>
      <Link>Matching</Link>
      <Link>Go Fish</Link>
      <Link>Spider Solitare</Link>
      <Link>War</Link>
    </div>
  )
}

export default GameNavbar
