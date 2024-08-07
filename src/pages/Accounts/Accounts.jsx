import React from 'react'
import styles from './Accounts.module.css'
import axios from 'axios'

function Accounts() {
  return (
    <div className={styles.Accounts}>
      <h3>Active User: No active user</h3>
      <h2>Create a Login to have your name added to Leaderboards</h2>
      <form>
        <input placeholder='Name'/>
        <input placeholder='Screenname'/>
        <input placeholder='Password'/>
        <input placeholder='Confirm password'/><br/>
        <input type='submit' value='Create an Account'/>
      </form>

      <h2>Already have an account? Sign in here</h2>
      <form>
        <input placeholder='Screenname'/>
        <input placeholder='Password'/><br/>
        <input type='submit' value='Login'/>
      </form>
    </div>
  )
}

export default Accounts
