import React,{useState} from 'react'
import styles from './Leaderboards.module.css'
import axios from 'axios'

function Leaderboards() {
  const [option,setOption] = useState("")
  const [data,setData] = useState([])

  const getLeaderboardData = async (e) =>{
    if(option === 'Select a leaderboard option'){
      alert("Please select a valid option")
      return
    }
    
    e.preventDefault()
    console.log("Leaderboard server test")
    try {
      let res = await axios.get("http://localhost:3001/leaderboards/"+option)
      console.log(res.data)
      setData(res.data)
    } catch (error) {
      console.log("There was an error",error)
      alert("Error: "+error.response.data)
    }
  }

  return (
    <div className={styles.Leaderboards}>
      <h1>Leaderboards</h1>
      <h2>Select a game to bring up the leaderboards relating to it.</h2>
      <form>
        <select value={option} onChange={(e) =>{setOption(e.target.value)}}>
            <option>Select a leaderboard option</option>
            <option>Crazy Eights Moves</option>
            <option>Blackjack Wins</option>
            <option>Snip Snap Snorum</option>
            <option>Matching Moves</option>
            <option>Go Fish High Score</option>
            <option>Spider Solitare Score</option>
            <option>War Score</option>
        </select>
        <input type='submit' onClick={getLeaderboardData}/>
      </form>
      <p>Leaderboard data:</p>
       <ol>
          {data.map((data)=>{return <li>{data}</li>})}
        </ol>
    </div>
  )
}

export default Leaderboards
