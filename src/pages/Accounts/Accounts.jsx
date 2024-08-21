import React,{useState} from 'react'
import styles from './Accounts.module.css'
import axios from 'axios'

function Accounts() {

  const [username,setUsername] = useState("")
  const [password,setPassword] = useState("")
  const [name,setName] = useState("")
  const [confirm,setConfirm] = useState("")

  const [loginUsername,setLoginUsername] = useState("")
  const [loginPassword,setLoginPassword] = useState("")

  const createAccount = async (e) => {
    e.preventDefault()
    if(password !== confirm){
      alert("Passwords do not match")
    }
    try {
      let res = await axios.post('http://localhost:3001/accounts',
        {
          name: name,
          username: username,
          password: password,

        },
        {
          headers: {
            "Content-Type": "application/json"
          }
        })
        console.log(res)
    } catch (error) {
      console.log(error)
    }
  }

  const login = async (e) => {
    e.preventDefault()
    try {
      let res = await axios.post('http://localhost:3001/accounts',
        {
          username: loginUsername,
          password: loginPassword,
        },
        {
          headers: {
            "Content-Type": "application/json"
          }
        })
        console.log(res)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className={styles.Accounts}>
      <h3>Active User: No active user</h3>
      <h2>Create a Login to have your name added to Leaderboards</h2>
      <form onSubmit={createAccount}>
        <input onChange={(e) => {setName(e.target.value)}} placeholder='Name'
        minLength={3}
        />
        <input onChange={(e) => {setUsername(e.target.value)}} placeholder='Username'/>
        <br />
        <input type='password' onChange={(e) => {setPassword(e.target.value)}} placeholder='Password'
        minLength={8}/>
        <input type='password' onChange={(e) => {setConfirm(e.target.value)}} placeholder='Confirm password'/><br/>
        <input type='submit' value='Create an Account'/>
      </form>

      <h2>Already have an account? Sign in here</h2>
      <form onSubmit={login}>
        <input onChange={(e) => {setLoginUsername(e.target.value)}} 
        placeholder='Screenname'
        minLength={3}/>
        <input onChange={(e) => {setLoginPassword(e.target.value)}} 
        placeholder='Password'
        type='password'
        minLength={8}/><br/>
        <input type='submit' value='Login'/>
      </form>
    </div>
  )
}

export default Accounts
