import React,{useState, useEffect} from 'react'
import back from '../../../Images/BACKCARD.JPG'
import styles from './Matching.module.css'
import apple from '../../../Images/cards/apple1.PNG'
import bear from '../../../Images/cards/bear1.PNG'
import blue from '../../../Images/cards/blue.PNG'
import bluefront from '../../../Images/cards/bluefront.PNG'
import body from '../../../Images/cards/body1.PNG'
import butterfly from '../../../Images/cards/butterfly1.PNG'
import cow from '../../../Images/cards/cow1.PNG'
import daisy from '../../../Images/cards/daisy1.PNG'
import dog from '../../../Images/cards/dog1.PNG'
import dove from '../../../Images/cards/dove1.PNG'
import fish from '../../../Images/cards/fish1.PNG'
import flower from '../../../Images/cards/flower.PNG'
import guy from '../../../Images/cards/guy1.JPG'
import hand from '../../../Images/cards/hand1.PNG'
import heart from '../../../Images/cards/heart1.PNG'

function Matching() {
  //List of elements that will get matched
  const [matchList, setMatchList] = 
  useState([apple, apple , bear, bear, blue, blue, bluefront, bluefront, 
    body, body, butterfly, butterfly, cow,  cow, 
    daisy, daisy, dog, dog, dove, dove, fish, fish, flower, flower,
    guy, guy, hand, hand, heart, heart])
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
