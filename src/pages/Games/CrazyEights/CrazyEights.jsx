import React, {useState, useEffect, useRef} from 'react'
import styles from './CrazyEights.module.css'
import p from '../Images/10c.png'
import back from '../../../Images/back.png'

function CrazyEights() {
  const [playHand, setPlayHand] = useState([])
  const [comHand, setComHand] = useState(['10c'])
  const imageRef = useRef('../../../Images/2c.png');

  const cardPicked = () =>{
    console.log("Picking a card")
  }

  return (
    <div className={styles.CrazyEights}>
      <h1>Crazy Eights</h1>
      <h2>Computer</h2>
      <div className='com'>{
        comHand.map((item,i)=>{
          console.log(item)
          return <img key={i} src={require(`../../../Images/${item}.png`)} alt="" ref={imageRef} />
        })
      }</div>
      <div>The display section for the suit</div>
      <div className='table'>
        <img src={back} alt="" onClick={cardPicked} />,,, pile</div>
      <h2>Player</h2>
      <div className='player'>{
        
      }</div>
    </div>
  )
}

export default CrazyEights
