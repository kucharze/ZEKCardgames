import React,{useState, useEffect} from 'react'
import back from '../../../Images/BACKCARD.JPG'
import styles from './Matching.module.css'
import apple from '../../../Images/cards/apple1.PNG'
import bear from '../../../Images/cards/bear1.PNG'
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
import lightbulb from '../../../Images/cards/lightbulb1.PNG'
import rabitline from '../../../Images/cards/rabbitline1.PNG'
import sun from '../../../Images/cards/sun1.PNG'
import turtle from '../../../Images/cards/turtle1.PNG'
import umbrella from '../../../Images/cards/umbrella1.PNG'
import watermellon from '../../../Images/cards/watermellon1.PNG'

function Matching() {
  //List of elements that will get matched
  const [matchList, setMatchList] = 
  useState([{value: apple, flipped: false}, {value: apple, flipped: false}, 
    {value: bear, flipped: false}, {value: bear, flipped: false},
    {value: butterfly, flipped: false}, {value: butterfly, flipped: false}, 
    {value: cow, flipped: false},  {value: cow, flipped: false}, 
    {value: daisy, flipped: false}, {value: daisy, flipped: false}, 
    {value: dog, flipped: false}, {value: dog, flipped: false}, 
    {value: dove, flipped: false}, {value: dove, flipped: false},
    {value: fish, flipped: false}, {value: fish, flipped: false},

    {value: flower}, {value: flower},
    {value: hand}, {value: hand}, 
    {value: heart}, {value: heart}, 
    {value: lightbulb}, {value: lightbulb}, {value: rabitline}, {value: rabitline}, 
    {value: sun}, {value: sun}, {value: turtle}, {value: turtle}, 
    {value: umbrella}, {value: umbrella}, {value: watermellon}, {value: watermellon}])
  const [el1, setEl1] = useState(null)
  const [el2, setEl2] = useState(null)
  const [rules, setRules] = useState(false)

  const shuffle = () => {
    for (let n = matchList.length; n >= 2; n--) {
      let r = Math.floor(Math.random() * n);
      // Swap cards at r and n-1
      let card = matchList[r];
      matchList[r] = matchList[n - 1];
      matchList[n - 1] = card;
    }
  }

  const newGame = () =>{
    console.log("A new game of mathing")
    console.log("Load in pictures and randomize their positions")
    shuffle()

    setEl1(null)
    setEl2(null)
  }

  const setElement = (el) =>{
    if(el1 === null){
      setEl1(el)
    }else{
      setEl2(el)
    }
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
            <img key={index} src={el.value} num={index} 
            alt="back" onClick={() => setElement(el)} />
          ))
          
        }
      </div>

    </div>
  )
}

export default Matching
