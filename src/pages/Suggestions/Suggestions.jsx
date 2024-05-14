import React, {useState} from 'react'
import styles from './Suggestions.module.css'
import axios from 'axios'

function Suggestions() {
  const [suggestion, setSuggestion] = useState("")

  const sendSuestion = () =>{

  }

  return (
    <div className={styles.Suggestions}>
      <h1>Suggestions</h1>
      <h3>If you have any suggestions you would like to make or would like to report a bug
        You may submit them down below.
      </h3>
      <form>
        <input placeholder='Put your suggestions here'/><br/>
        <input type='submit'/>
      </form>
    </div>
  )
}

export default Suggestions
