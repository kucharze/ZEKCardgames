import React,{useState, useEffect} from 'react'
import back from '../../../Images/BACKCARD.JPG'
import styles from './Matching.module.css'

function Matching() {
  const [matchList, setMatchList] = useState([])//List of elements that will get matched
  const [el1, setEl1] = useState(null)
  const [el2, setEl2] = useState(null)

  const newGame = () =>{

  }

  return (
    <div className={styles.Matching}>
      <h1>Matching</h1>
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
