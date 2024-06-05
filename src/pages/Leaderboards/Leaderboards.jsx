import React,{useEffect, useState} from 'react'
import styles from './Leaderboards.module.css'
import axios from 'axios'

function Leaderboards() {
  const [option,setOption] = useState("")

  const getLeaderboardData = async (e) =>{
    if(option === 'Select a leaderboard option'){
      alert("Please select a valid option")
      return
    }
    
    e.preventDefault()
    console.log("Leaderboard server test")
    try {
      let res = await axios.get("http://localhost:3001/leaderboards/gofish")

      console.log(res)
    } catch (error) {
      console.log("There was an error",error)
    }
  }

  useEffect(()=>{
    console.log(option)
  },[option])

  return (
    <div className={styles.Leaderboards}>
      <h1>Leaderboards</h1>
      <h2>Select a game to bring up the leaderboards relating to it.</h2>
      <form>
        <select value={option} onChange={(e) =>{setOption(e.target.value)}}>
            <option>Select a leaderboard option</option>
            <option>Crazy Eights</option>
            <option>Blackjack</option>
            <option>Snip Snap Snorum</option>
            <option>Matching</option>
            <option>Go Fish</option>
            <option>Spider Solitare</option>
            <option>War</option>
        </select>
        <input type='submit' onClick={getLeaderboardData}/>
      </form>
      <p>Where leaderboards will be loaded to</p>
      <p>This feature is not yet implemented</p>
    </div>
  )
}

export default Leaderboards
