import React,{useState} from 'react'
import styles from './Leaderboards.module.css'
import axios from 'axios'

function Leaderboards() {
  const [option,setOption] = useState("")

  const getLeaderboardData = async () =>{

  }
  return (
    <div className={styles.Leaderboards}>
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
      <p>Where leaderboards will be loaded to</p>
      <p>This feature is not yet implemented</p>
    </div>
  )
}

export default Leaderboards
