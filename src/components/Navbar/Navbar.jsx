import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'

function Navbar({options}) {
  return (
    <div className={styles.Navbar}>
      <Link>Account management</Link>
      <Link>Suggestions</Link>
      <Link>Leaderboards</Link>
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

export default Navbar
