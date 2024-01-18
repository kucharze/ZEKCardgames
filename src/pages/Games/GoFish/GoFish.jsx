import React,{useState, useEffect} from 'react'
import back from '../../../Images/BACKCARD.JPG'

function GoFish() {
  return (
    <div>
      <h1>Go Fish</h1>
      <h2>Com</h2>
      <img src={back} alt="" />
      <h2>Player</h2>
      <img src={back} alt="" />
    </div>
  )
}

export default GoFish
