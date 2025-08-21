import React, {useState, useEffect} from 'react'
import back from '../../../Images/BACKCARD.JPG'
import Deck from '../../../gamecomponents/Deck'
import styles from './Spidersolitare.module.css'
import { useAuth } from "../../../contexts/app_context";
// import WinnerBoard from '../../../components/Winnerboard/WinnerBoard'
import face from './Game modules/faceCards'

function SpiderSolitare({darkMode}) {
  const { user, uploadToLeaderboards } = useAuth();
  const { checkFaceMove} = face()

  //Deck
  const [deck, setDeck] = useState(new Deck())

  //Each row
  const [row1, setRow1] = useState([])
  const [row2, setRow2] = useState([])
  const [row3, setRow3] = useState([])
  const [row4, setRow4] = useState([])
  const [row5, setRow5] = useState([])
  const [row6, setRow6] = useState([])

  //Card to move
  const [movecard, setMoveCard] = useState(null)
  //The position of cards to be moved
  const [movePos, setMovePos] = useState([0,0])
  const [moveRow, setMoveRow] = useState(null)
  const [rules, setRules] = useState(false)
  const [score, setScore] = useState(0)

  const RANK_ORDER = ["a", "2", "3", "4", "5", "6", "7",
                      "8", "9", "10", "j", "q", "k"]
  
  const setList = () =>{
    let card = null

    let templist = []
    for(let i=0; i<5; i++){
      card = deck.dealACard()
      if(i!==4){
        card.back = true
      }
      else{
        card.back = false
      }     
      templist.push(card)
    }
    return templist
  }

  const updateScore = () =>{
    console.log("Trying to upload score")
    if(user && score !== 0){
      uploadToLeaderboards("Spider Solitare Score", score)
    }
    else{
      alert("Error, Not signed in or score not present")
    }
  }

  const newGame = () =>{
    setRow1(setList())
    setRow2(setList())
    setRow3(setList())
    setRow4(setList())
    setRow5(setList())
    setRow6(setList())

    setDeck(()=>{
      let deck = new Deck()
      deck.shuffle()
      deck.shuffle()
      return deck
    })
    
  }

  const checkForPoint = (row) =>{
    let pointlist = ['k','q','j','10','9','8','7','6','5','4','3','2']
    let points = 0
    for(let i=0; i<row.length; i++){
      if(points===0){
        if(row[i].value===pointlist[points]){
          points++
        }
      }
      else{
        if(row[i].value===pointlist[points].value){
          points++
        }
      }
    }

    if(points===13){
      addPoint(row)
    }
  }

  const addPoint = (row) =>{
    setScore(score+1)
    //remove cards from row where point was scored
    //May have to change logic in this to match other function
    if(row===row1){
      row1.splice((row1.length-1)-12)
    }
    else if(row===row2){
      row2.splice((row2.length-1)-12)
    }
    else if(row===row3){
      row3.splice((row3.length-1)-12)
    }
    else if(row===row4){
      row4.splice((row4.length-1)-12)
    }
    else if(row===row5){
      row5.splice((row5.length-1)-12)
    }
    else if(row===row6){
      row6.splice((row6.length-1)-12)
    }
  }

  const refTakeTurn = (card) =>{
    console.log("Ref taking turn")

    console.log("Card value:", card.value, RANK_ORDER.indexOf(card.value))
    console.log("Movecard value",movecard.value, RANK_ORDER.indexOf(movecard.value))
  }

  const takeTurn = (card, row) =>{
    if(movecard){
      // console.log(RANK_ORDER.indexOf(card.value), RANK_ORDER.indexOf(movecard.value))
      refTakeTurn(card)
      
      let target = parseInt(card.value)
      if(!target){
        target = card.value
        console.log("Targt is not a number",target)
      }
      let mover = parseInt(movecard.value)
      if(!mover){
        mover=movecard.value
        console.log("Mover is not a number",mover)
      }
      console.log("Card value:", target, "Movecard value",mover)

      //Either the movecard or the card being moved to is a face card
      if(mover === "j" || mover === "q" || mover === "k" || mover === "a"
        || target === "j" || target === "q" || target === "k" || target === "a"
      ){
        faceMove(mover, target, card, row)
      }
      else{
        if((target-1)===(mover)){
          // depositcard(movecard, row)
          //Remove cards from previous row and move to new row
          moveCards(moveRow, movePos, row)
        }
        else{
          denyMove(movecard, card)
        }
      }
    }
    else{
      setMoveCard(card)
      setRow(row)
      setMovePos([row,0])
    }
  }

  const faceMove = (mover, target, card, row) =>{
    console.log("Attempting to check logic for moves involving face cards")
    if((mover === "j" || mover === "q" || mover === "k" || mover === "a") &&
          (target !== "j" && target !== "q" && target !== "k" && target !== "a")
    ){
      //Move facecard to not facecard
      //Allow the move if we are moving an Ace otherwise deny
      console.log("Moving face card to not face card")
      if(mover === 'a'){
        moveCards(moveRow,movePos, row)
      }
      else{
        denyMove(movecard, card)
      }
      
    }
    else if((mover !== "j" && mover !== "q" && mover !== "k" && mover !== "a") && 
        (target === "j" || target === "q" || target === "k" || target === "a")
    ){
      //Move not face card to face card
      //Only allow the move if we are not moving an ace
      console.log("Moving not face card to face card")
      if(mover !== 'a'){
        moveCards(moveRow,movePos, row)
      }
      else{
        denyMove(movecard, card)
      }
    }
    else{
      console.log("Moving one face card to another")
      //Move one face card to another face card
      if(checkFaceMove(mover, target)){
        moveCards(moveRow, movePos, row)
      }
      else{
        denyMove(movecard, card)
      }
    }
  }

  const setRow = (row) =>{
    if(row===row1){
      setMoveRow(row1)
    }
    else if(row===row2){
      setMoveRow(row2)
    }
    else if(row===row3){
      setMoveRow(row3)
    }
    else if(row===row4){
      setMoveRow(row4)
    }
    else if(row===row5){
      setMoveRow(row5)
    }
    else if(row===row6){
      setMoveRow(row6)
    }
    else{
      setMoveRow(null)
    }
  }

  const moveCards = (row, pos, endrow) =>{
    //Set up list starting at pos and move to new row
    let movelist = []
    if(row===row1){
      console.log(row1)
      movelist = row1.splice(0,pos)
    }
    else if(row===row2){
      console.log(row2)
      movelist = row2.splice(0,pos)
    }
    else if(row===row3){
      console.log(row3)
      movelist = row3.splice(0,pos)
    }
    else if(row===row4){
      console.log(row4)
      movelist = row4.splice(0,pos)
    }
    else if(row===row5){
      console.log(row5)
      movelist = row5.splice(0,pos)
    }
    else if(row===row6){
      console.log(row6)
      movelist = row6.splice(0,pos)
    }
    
    console.log("Movelist",movelist)

    if(endrow===row1){
     setRow1([...row1,...movelist])
     checkForPoint(row1)
    }
    else if(endrow===row2){
      setRow2([...row2,...movelist])
      checkForPoint(row2)
    }
    else if(endrow===row3){
      setRow3([...row3,...movelist])
      checkForPoint(row3)
    }
    else if(endrow===row4){
      setRow4([...row4,...movelist])
      checkForPoint(row4)
    }
    else if(endrow===row5){
      setRow5([...row5,...movelist])
      checkForPoint(row5)
    }
    else if(endrow===row6){
      setRow6([...row6,...movelist])
      checkForPoint(row6)
    }

    setMoveCard(null)
    setRow(0)
  }

  const denyMove = (mover, target) => {
    alert("Cannot move card", mover.value,"on top of card" , target.value)
    console.log("Cannot move card", mover.value, "on top of card", target.value)
    setMoveCard(null)
    setRow(0)
  }

  useEffect(()=>{
    deck.shuffle()
    deck.shuffle()
  },[deck])

  return (
    <div className={styles.SpiderSolitare}>
      <h1>Spider Solitare</h1>
      <div>
        <button id={darkMode} onClick={newGame}>New game</button>
        <button id={darkMode} onClick={()=>{setRules(!rules)}}>Show rules</button>
        <button id={darkMode} disabled onClick={()=>{updateScore(score)}}>Upload Score</button>
      </div>
          {
        rules &&
        <div className={styles.rules}>
          <ul>
            <li>Their are 6 rows of cards, each with 5 cards.</li>
            <li>4 Cards are face down while the last is face up</li>
            <li>You can move cards from one row to another</li>
            <li>You cannot move cards that are face down</li>
            <li>You can only move a card to another pile if it 
              is one value lower than the card of the pile you are
              moving it to.
            </li>
            <li>If there are multiple cards in a row that are properly
              ordered, you can move them all to another row.
            </li>
            <li>If their are only face down cards on a pile, turn 
              the card on the end face up.
            </li>
            <li>If their are no moves left to make, you may deal a new set
              of cards to the end of the row.  You may do this 5 times.
            </li>
            <li>When you organize a row from A to K in order, remove those 
              cards and score a point.
            </li>
            <li>Your final score is determined by how many points you have
              when you can't make any more moves or deal any more cards.
            </li>
          </ul>
        </div>
      }
      
      <div className={styles.score}>Score: {score}</div>
     
      <div className={styles.playmat}>
        <div className={styles.row}>
          {
            row1.map((item, i)=>{
             if(item.back){
                return <img key={i} alt={item} className={styles.card}
                style={{top: 30*i}}
                src={back}
                />
              }
              else{
                return <img key={i} alt={item} className={styles.card} 
                onClick={()=>{takeTurn(item, row1)}}
                style={{top: 30*i}}
                src={require(`../../../Images/Playcards/${item}.png`)}
                />
              }
            })
          }
        </div>
        <div className={styles.row}>
          {
            row2.map((item, i)=>{
              if(item.back){
                return <img key={i} alt={item} className={styles.card} 
                src={back}
                />
              }
              else{
                return <img key={i} alt={item} className={styles.card}
                onClick={()=>{takeTurn(item, row2)}} 
                src={require(`../../../Images/Playcards/${item}.png`)}
                />
              }
            })
          }
        </div>
        <div className={styles.row}>
          {
            row3.map((item, i)=>{
              if(item.back){
                return <img key={i} alt={item} className={styles.card}
                style={{top : (30*i)}}
                src={back}
                />
              }
              else{
                return <img key={i} alt={item} className={styles.card} 
                onClick={()=>{takeTurn(item, row3)}}
                src={require(`../../../Images/Playcards/${item}.png`)}
                />
              }
            })
          }
        </div>
        <div className={styles.row}>
          {
            row4.map((item, i)=>{
              if(item.back){
                return <img key={i} alt={item} className={styles.card} 
                src={back}
                />
              }
              else{
                return <img key={i} alt={item} className={styles.card} 
                onClick={()=>{takeTurn(item, row4)}}
                src={require(`../../../Images/Playcards/${item}.png`)}
                />
              }
            })
          }
        </div>
        <div className={styles.row}>
          {
            row5.map((item, i)=>{
              if(item.back){
                return <img key={i} alt={item} className={styles.card} 
                src={back}
                />
              }
              else{
                return <img key={i} alt={item} className={styles.card}
                onClick={()=>{takeTurn(item, row5)}}
                src={require(`../../../Images/Playcards/${item}.png`)}
                />
              }
            })
          }
        </div>
        <div className={styles.row}>
          {
            row6.map((item, i)=>{
              if(item.back){
                return <img key={i} alt={item} className={styles.card} 
                src={back}
                />
              }
              else{
                return <img key={i} alt={item} className={styles.card} 
                onClick={()=>{takeTurn(item, row6)}}
                src={require(`../../../Images/Playcards/${item}.png`)}
                />
              }
              
            })
          }
        </div>
        <div>
            <h3>Card to be moved:</h3>
            {
              movecard && 
              <img alt={movecard} className={styles.card} 
                    src={require(`../../../Images/Playcards/${movecard}.png`)}
                    />
            }
        </div>
      </div>
      
      
    </div>
  )
}

export default SpiderSolitare
