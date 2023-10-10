import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'

function GameNavbar() {
  return (
    <div className={styles.Navbar}>
      <Link>Crazy Eights</Link>
      <Link>Blackjack</Link>
      <Link>Snip Snap Snorum</Link>
      <Link>Matching</Link>
      <Link>Go Fish</Link>
      <Link>Spider Solitare</Link>
      <Link>War</Link>
    </div>
  )
}

export default GameNavbar
