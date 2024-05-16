import React, {useState} from 'react'
import styles from './Suggestions.module.css'
import axios from 'axios'

function Suggestions() {
  const [suggestion, setSuggestion] = useState("")

  const sendSuggestion = async () =>{
    try {
      let res = await axios.post('http://localhost:3001/suggestions',
        suggestion,{
        headers:{
            "Content-Type": "application/json"
          }
        })

        console.log(res)
        // set("Successful Order Submision")
          
    } catch (error) {
        console.log("There was an error")
        console.log(error)
        // setAnnouncement('Error')
    }
  }

  return (
    <div className={styles.Suggestions}>
      <h1>Suggestions</h1>
      <h3>If you have any suggestions you would like to make or would like to report a bug
        You may submit them down below.
      </h3>
      <form>
        <input placeholder='Put your suggestions here' 
         onChange={(value)=>{setSuggestion(value)}}/><br/>
        <input type='submit' onClick={sendSuggestion()}/>
      </form>
    </div>
  )
}

export default Suggestions
