import React, {useState} from 'react'
import styles from './Suggestions.module.css'
import axios from 'axios'

function Suggestions() {
  const [suggestion, setSuggestion] = useState("")

  const sendSuggestion = async () =>{
    console.log("Sending a suggestion",suggestion)
    try {
      let res = await axios.post('http://localhost:3001/suggestions',
        {suggestion},{
        headers:{
            "Content-Type": "application/json"
          }
        }
      )

      console.log("Back from the server")
      console.log(res)
    } catch (error) {
        console.log("There was an error")
        console.log(error)
    }
  }

  return (
    <div className={styles.Suggestions}>
      <h1>Suggestions</h1>
      <h3>If you have any suggestions you would like to make or would like to report a bug
        You may submit them down below.
      </h3>
      {/* <form onSubmit={sendSuggestion}> */}
        <input placeholder='Put your suggestions here' 
         onChange={(e)=>{setSuggestion(e.target.value)}}/><br/>
        <input type='submit' onClick={() =>{sendSuggestion()}}/>
      {/* </form> */}
    </div>
  )
}

export default Suggestions
