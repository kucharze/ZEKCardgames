import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'

function GameNavbar() {
  return (
    <div className={styles.Navbar}>
      <Link to={'/crazyeights'}>Crazy Eights</Link>
      <Link to={'/blackjack'}>Blackjack</Link>
      <Link to={'/snipsnapsnorum'}>Snip Snap Snorum</Link>
      <Link to={'/matching'}>Matching</Link>
      <Link to={'/gofish'}>Go Fish</Link>
      <Link to={'/spidersolitare'}>Spider Solitare</Link>
      <Link to={'/war'}>War</Link>
    </div>
  )
}

export default GameNavbar
