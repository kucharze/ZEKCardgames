import React,{useState, useEffect} from 'react'
import back from '../../../Images/BACKCARD.JPG'
import styles from './Matching.module.css'

function Matching() {
  const [matchList, setMatchList] = useState([])//List of elements that will get matched
  const [el1, setEl1] = useState(null)
  const [el2, setEl2] = useState(null)
  const [rules, setRules] = useState(false)

  const newGame = () =>{
    console.log("A new game of mathing")
    console.log("Load in pictures and randomize their positions")

    setEl1(null)
    setEl2(null)
  }

  return (
    <div className={styles.Matching}>
      <h1>Matching</h1>
            <div>
        <button onClick={newGame}>New game</button>
        <button onClick={()=>{setRules(!rules)}}>Show rules</button>
      </div>
            {
        rules &&
        <div className={styles.rules}>
          <ul>
            <li>Flip two cards over and see if they match</li>
            <li>If the two pairs match, they will stay flipped</li>
            <li>If they don't match, they will be flipped back</li>
            <li>Keep flipping until you find all pairs</li>
          </ul>
        </div>
      }

      <div className={styles.matchzone}>
        {
          matchList.map((el, index) => (
            <img src={back} num={index} alt="back" />
          ))
          
        }
      </div>

    </div>
  )
}

export default Matching
