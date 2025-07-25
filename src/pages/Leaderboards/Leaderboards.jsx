import React,{useState} from 'react'
import styles from './Leaderboards.module.css'
import axios from 'axios'
import { useAuth } from "../../contexts/app_context";

function Leaderboards() {
  const {user} = useAuth();

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
      let res = await axios.get("http://localhost:3000/leaderboards/"+option)
      console.log(res.data)
      setData(res.data)
    } catch (error) {
      console.log("There was an error",error)
      alert("Error: Network error or leaderboard option not available")
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
      {
        data.length > 0 &&
        <button onClick={()=>{setData([])}}>Clear Data</button>
      }
      {
        data.length <= 0 && user &&
        <button onClick={getLeaderboardData}>Refresh Data</button>
      }
     
     <div className={styles.board}>
      <p>Leaderboard data:</p>
        {
          data.length <= 0 &&
          <h2>No data to display</h2>
        }
       <ol>
          {data.map((data)=>{
            //Highlight in bold if we find an entry that matches the user
            if(data === user){
              return <li><b>{data}</b></li>
            }
            return <li>{data}</li>
          })}
        </ol>
     </div>
     
    </div>
  )
}

export default Leaderboards
