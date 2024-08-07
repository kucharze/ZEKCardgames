import React from 'react'
import styles from './Accounts.module.css'
import axios from 'axios'

function Accounts() {

  const createAccount = async () => {
    try {
      let res = await axios.post('http://localhost:3001/accounts',
        {
          name: "test",
          username: "test",
          password: "test",

        },
        {
          headers: {
            "Content-Type": "application/json"
          }
        })
    } catch (error) {
      console.log(error)
    }
  }

  const login = async () => {
    try {
      let res = await axios.post('http://localhost:3001/accounts',
        {
          username: "test",
          password: "test",
        },
        {
          headers: {
            "Content-Type": "application/json"
          }
        })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className={styles.Accounts}>
      <h3>Active User: No active user</h3>
      <h2>Create a Login to have your name added to Leaderboards</h2>
      <form>
        <input placeholder='Name'/>
        <input placeholder='Username'/>
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
