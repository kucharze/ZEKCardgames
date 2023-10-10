import React from 'react'

function Accounts() {
  return (
    <div>
      <h1>The accounts page</h1>
      <h3>Active User: No active user</h3>
      <h2>Create a Login to have your name added to Leaderboards</h2>
      <form>
        <input placeholder='name'/>
        <input placeholder='screenname'/><br/>
        <input placeholder='password'/>
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
