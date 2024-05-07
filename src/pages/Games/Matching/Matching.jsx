import React,{useState, useEffect} from 'react'
import back from '../../../Images/BACKCARD.JPG'
import styles from './Matching.module.css'

function Matching() {
  const [matchList, setMatchList] = useState([])//List of elements that will get matched
  const [el1, setEl1] = useState(null)
  const [el2, setEl2] = useState(null)

  const newGame = () =>{
    console.log("A new game of mathing")
    console.log("Load in pictures and randomize their positions")

    setEl1(null)
    setEl2(null)
  }

  return (
    <div className={styles.Matching}>
      <h1>Matching</h1>
      <button onClick={newGame}>New game</button>

      <div className={styles.matchzone}>
        <img src={back} alt="" />
        <img src={back} alt="" />
        <img src={back} alt="" />
        <img src={back} alt="" />
        <img src={back} alt="" />
        <img src={back} alt="" />
        <img src={back} alt="" />
        <img src={back} alt="" />
        <img src={back} alt="" />
        <img src={back} alt="" />
        <img src={back} alt="" />
        <img src={back} alt="" />
        <img src={back} alt="" />
        <img src={back} alt="" />
        <img src={back} alt="" />
        <img src={back} alt="" />
        <img src={back} alt="" />
        <img src={back} alt="" />
        <img src={back} alt="" />
        <img src={back} alt="" />
      </div>

    </div>
  )
}

export default Matching
