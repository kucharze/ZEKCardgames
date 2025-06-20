import React,{useState, useEffect} from 'react'
import WinnerBoard from '../../../components/Winnerboard/WinnerBoard'
import back from '../../../Images/BACKCARD.JPG'
import styles from './Matching.module.css'
import apple from '../../../Images/cards/apple1.PNG'
import bear from '../../../Images/cards/bear1.PNG'
import body from '../../../Images/cards/body1.PNG'
import butterfly from '../../../Images/cards/butterfly1.PNG'
import cow from '../../../Images/cards/cow1.PNG'
import daisy from '../../../Images/cards/daisy1.PNG'
import dog from '../../../Images/cards/dog1.PNG'
import dove from '../../../Images/cards/dove1.PNG'
import fish from '../../../Images/cards/fish1.PNG'
import flower from '../../../Images/cards/flower.PNG'
import hand from '../../../Images/cards/hand1.PNG'
import heart from '../../../Images/cards/heart1.PNG'
import lightbulb from '../../../Images/cards/lightbulb1.PNG'
import rabitline from '../../../Images/cards/rabbitline1.PNG'
import sun from '../../../Images/cards/sun1.PNG'
import turtle from '../../../Images/cards/turtle1.PNG'
import umbrella from '../../../Images/cards/umbrella1.PNG'
import watermellon from '../../../Images/cards/watermellon1.PNG'
import { useAuth } from "../../../contexts/app_context";

function Matching({darkMode}) {
  const { user, uploadToLeaderboards } = useAuth();

  //List of elements that will get matched
  const [matchList, setMatchList] = 
  useState([{value: apple, flipped: false}, {value: apple, flipped: false}, 
    {value: bear, flipped: false}, {value: bear, flipped: false},
    {value: body, flipped: false}, {value: body, flipped: false},
    {value: butterfly, flipped: false}, {value: butterfly, flipped: false}, 
    {value: cow, flipped: false},  {value: cow, flipped: false}, 
    {value: daisy, flipped: false}, {value: daisy, flipped: false}, 
    {value: dog, flipped: false}, {value: dog, flipped: false}, 
    {value: dove, flipped: false}, {value: dove, flipped: false},
    {value: fish, flipped: false}, {value: fish, flipped: false},
    {value: flower, flipped: false}, {value: flower, flipped: false},
    {value: hand, flipped: false}, {value: hand, flipped: false}, 
    {value: heart, flipped: false}, {value: heart, flipped: false},
    {value: lightbulb, flipped: false}, {value: lightbulb, flipped: false},
    {value: rabitline, flipped:false}, {value: rabitline, flipped: false}, 
    {value: sun, flipped: false}, {value: sun,flipped: false}, 
    {value: turtle, flipped: false}, {value: turtle, flipped: false}, 
    {value: umbrella, flipped: false}, {value: umbrella, flipped: false}, 
    {value: watermellon, flipped: false}, {value: watermellon, flipped: false}])

  const [el1, setEl1] = useState(null)
  const [el2, setEl2] = useState(null)
  const [rules, setRules] = useState(false)
  const [score, setScore] = useState(0)
  const [inProgress, setInProgress] = useState(false)
  const [gameOver, setGameOver] = useState(false)
  const [frozen, setFrozen] = useState(false)
  const [totalMoves, setTotalMoves] = useState(0)

  const shuffle = () => {
    for (let n = matchList.length; n >= 2; n--) {
      let r = Math.floor(Math.random() * n);
      // Swap cards at r and n-1
      let card = matchList[r];
      matchList[r] = matchList[n - 1];
      matchList[n - 1] = card;
    }
  }

  const uploadMoves = () =>{
    if(user){
      uploadToLeaderboards("Matching Moves", totalMoves)
    }
    else{
      console.log("No user logged in")
      alert("No user logged in")
    }
  }

  const resetPics = () =>{
    //Reset all flipped items to not flipped
    for (let n = 0; n<matchList.length;  n++) {
      if(matchList[n].flipped === true){
        matchList[n].flipped = false;
      }
    }
  }

  const newGame = () =>{
    console.log("A new game of mathing")
    console.log("Load in pictures and randomize their positions")
    shuffle()
    resetPics()

    setEl1(null)
    setEl2(null)
    setScore(0)
    setTotalMoves(0)
    setInProgress(true)
    setGameOver(false)
  }

  const resetCards = () =>{
    if(el1.value !== el2.value){
      el1.flipped = !el1.flipped;
      el2.flipped = !el2.flipped
      return;
    }
    else{
      setScore(prev=>prev+1)
    }
  }

  const setElement = (el) =>{
    console.log("Flip card")

    el.flipped = !el.flipped

    if(el1 === null){
      console.log("Setting el1")
      setEl1(el)
    }else{
      console.log("Setting el2")
      setEl2(el)
    }
    
  }

  useEffect(()=>{
    if(el1!=null){
      setFrozen(true)
    }
    
    if(el2!=null){
      console.log("Resetting cards")

      setTimeout(() => {
        resetCards()

        setEl1(null)
        setEl2(null)
        setFrozen(false)
      }, 700);
      
    }
  },[el2])

  useEffect(()=>{
    if(score===18){
      //end game
      setGameOver(true)
      uploadMoves()
    }
  },[score])

  return (
    <div className={styles.Matching}>
      <h1>Matching</h1>
            <div>
        <button id={darkMode} onClick={newGame}>New game</button>
        <button id={darkMode} onClick={()=>{setRules(!rules)}}>Show rules</button>
      </div>
            {
        rules &&
        <div className={styles.rules}>
          <ul>
            <li>Flip two cards over and see if they match</li>
            <li>If the two pairs match, they will stay flipped</li>
            <li>If they don't match, they will be flipped back</li>
            <li>Keep flipping until you find all pairs</li>
            <li>Try to use as few moves as possible</li>
          </ul>
        </div>
      }

      <div className={styles.matchzone}>
        {
          inProgress && (
            matchList.map((el, index) => {
                if(el.flipped){
                  return <img key={index} src={el.value} num={index} 
                  alt="back" />
                }
                else{
                  return <img key={index} src={back} num={index} 
                  alt="back" onClick={() => {if(!gameOver && !frozen) {
                     setElement(el)
                     setTotalMoves(prev=>prev+1)
                    }
                  }} />
                }
              })
          )
        }
      </div>
      <div>
        {
        gameOver && 
          <WinnerBoard winner={true} moves={totalMoves}/>
        }
      </div>

    </div>
  )
}

export default Matching
