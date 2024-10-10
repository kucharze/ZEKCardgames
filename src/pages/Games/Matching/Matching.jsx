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
            <li>Each player starts with 7 cards in hand</li>
            <li>Each player can ask the other if they have a given card in their hand</li>
            <li>IF they have the asked for cards, they give them all to you</li>
            <li>If they don't, you instead draw a card</li>
            <li>Score a point if you have 4 copies of each card</li>
             <li>Once the deck is out of cards, the player with the most points wins</li>
          </ul>
        </div>
      }

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
