import React,{useState} from 'react'
import styles from './Accounts.module.css'
import axios from 'axios'
import { useAuth } from "../../contexts/app_context";

function Accounts() {
  const { user, setUser } = useAuth();

  const [username,setUsername] = useState("")
  const [password,setPassword] = useState("")
  const [name,setName] = useState("")
  const [confirm,setConfirm] = useState("")

  const [loginUsername,setLoginUsername] = useState("")
  const [loginPassword,setLoginPassword] = useState("")

  const [errorMessage, setErrorMessage] = useState("")

  const createAccount = async (e) => {
    e.preventDefault()
    if(password !== confirm){
      alert("Passwords do not match")
    }
    try {
      let res = await axios.post('http://localhost:3001/users/createuser',
        {
          name: name,
          userName: username,
          password: password,

        },
        {
          headers: {
            "Content-Type": "application/json"
          }
        })
        console.log(res)
        setUsername('')
        setName('')
        setPassword('')
        setConfirm('')
        setUser(res.data.userName)
        setErrorMessage('')
    } catch (error) {
      console.log(error)
      setErrorMessage(error.response.data)
    }
  }

  const login = async (e) => {
    e.preventDefault()
    try {
      let res = await axios.post('http://localhost:3001/users/login',
        {
          userName: loginUsername,
          password: loginPassword,
        },
        {
          headers: {
            "Content-Type": "application/json"
          }
        })
        console.log(res)
        setLoginUsername('')
        setLoginPassword('')

        setUser(res.data.userName)
        setErrorMessage('')
    } catch (error) {
      console.log(error)
      setErrorMessage(error.response.data)
    }
  }

  return (
    <div className={styles.Accounts}>
      <h3>Active User: {user}</h3>
      {
        errorMessage === "" ? '' :
        <div className={styles.errorMessage}>
          <h2>{errorMessage}</h2>
        </div>
      }
      
       
      <h2>Create a Login to have your name added to Leaderboards</h2>
      <form onSubmit={createAccount}>
        <input 
        value={name}
        onChange={(e) => {setName(e.target.value)}} placeholder='Name'
        minLength={3}
        />
        <input onChange={(e) => {setUsername(e.target.value)}} 
        value={username}
        placeholder='Username'/>
        <br />
        <input type='password' onChange={(e) => {setPassword(e.target.value)}} 
        value={password}
        placeholder='Password'
        minLength={8}/>
        <input type='password' onChange={(e) => {setConfirm(e.target.value)}} 
        value={confirm}
        placeholder='Confirm password'/><br/>
        <input type='submit' value='Create an Account'/>
      </form>

     

      <h2>Already have an account? Sign in here</h2>
      <form onSubmit={login}>
        <input value={loginUsername} onChange={(e) => {setLoginUsername(e.target.value)}} 
        placeholder='Screenname'
        minLength={3}/>
        <input value={loginPassword} onChange={(e) => {setLoginPassword(e.target.value)}} 
        placeholder='Password'
        type='password'
        minLength={8}/><br/>
        <input type='submit' value='Login'/>
      </form>
    </div>
  )
}

export default Accounts
