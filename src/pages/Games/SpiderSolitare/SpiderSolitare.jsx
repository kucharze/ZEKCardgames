import React, {useState, useEffect} from 'react'
import back from '../../../Images/BACKCARD.JPG'
import Deck from '../../../gamecomponents/Deck'

function SpiderSolitare() {
  return (
    <div>
      <h1>Spider Solitare</h1>
      <div><img src={back} alt="" /></div>
      <div><img src={back} alt="" /></div>
      <div><img src={back} alt="" /></div>
      <div><img src={back} alt="" /></div>
      <div><img src={back} alt="" /></div>
    </div>
  )
}

export default SpiderSolitare
