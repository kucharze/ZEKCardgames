import React from 'react'
import styles from './Leaderboards.module.css'

function Leaderboards() {
  return (
    <div>
      <h1>Leaderboards</h1>
      <h2>Select a game to bring up the leaderboards relating to it.</h2>
      <form>
        <select>
            <option>Select a leaderboard option</option>
            <option>Crazy Eights</option>
            <option>Blackjack</option>
            <option>Snip Snap Snorum</option>
            <option>Matching</option>
            <option>Go Fish</option>
            <option>Spider Solitare</option>
            <option>War</option>
        </select>
        <input type='submit' />
      </form>
    </div>
  )
}

export default Leaderboards
