import React, {useState, useEffect, useCallback} from 'react'
import back from '../../../Images/BACKCARD.JPG'
// import empty from '../../../Images/empty.jpg'
import Deck from '../../../gamecomponents/Deck'
import styles from './Spidersolitare.module.css'
import { useAuth } from "../../../contexts/app_context";
// import WinnerBoard from '../../../components/Winnerboard/WinnerBoard'

function SpiderSolitare({darkMode}) {
  const { user, uploadToLeaderboards } = useAuth();

  const {online, setOnline} = useState(false)

  //Deck
  const [deck, setDeck] = useState(new Deck())

  //Each row
  const [row1, setRow1] = useState([])
  const [row2, setRow2] = useState([])
  const [row3, setRow3] = useState([])
  const [row4, setRow4] = useState([])
  const [row5, setRow5] = useState([])
  const [row6, setRow6] = useState([])
  const [row7, setRow7] = useState([])
  // const [rowChange, setRowChange] = useState(false)

  //Card to move
  const [movecard, setMoveCard] = useState(null)

  //The position of cards to be moved
  const [movePos, setMovePos] = useState([0,0])
  const [moveRow, setMoveRow] = useState(null)
  const [rules, setRules] = useState(false)
  const [score, setScore] = useState(0)

  const [decksLeft, setDecksLeft] = useState([])

  const RANK_ORDER = ["a", "2", "3", "4", "5", "6", "7",
                      "8", "9", "10", "j", "q", "k"]

  
  const setList = () =>{//Quick setup for a row to start a game
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

  const flipRowCard = (row) =>{//Flips a card in a row to face down
    row[row.length-1].back = false
    //!row[row.length-1].back
  }

  //Make sure the end card of each row is face up
  const makeFlips = () =>{
    if(row1.length!==0 && !checkEmpty(row1[row1.length-1]))
    {
      flipRowCard(row1)
    }
    else{
      deployEmpty(row1)
    }
    
    if(row2.length!==0 && !checkEmpty(row2[row2.length-1]))
    {
      flipRowCard(row2)
    }
    else{
      deployEmpty(row2)
    }
    
    if(row3.length!==0 && !checkEmpty(row3[row3.length-1]))
    {
      flipRowCard(row3)
    }
    else{
      deployEmpty(row3)
    }
    
    if(row4.length!==0 && !checkEmpty(row4[row4.length-1]))
    {
      flipRowCard(row4)
    }
    else{
      deployEmpty(row4)
    }
    
    if(row5.length!==0 && !checkEmpty(row5[row5.length-1]))
    {
      flipRowCard(row5)
    }
    else{
      deployEmpty(row5)
    }
    
    if(row6.length!==0 && !checkEmpty(row6[row6.length-1]))
    {
      flipRowCard(row6)
    }
    else{
      deployEmpty(row6)
    }

    if(row7.length!==0 && !checkEmpty(row7[row7.length-1]))
    {
      flipRowCard(row7)
    }
    else{
      deployEmpty(row7)
    }
    
  }

/**
 * Check if the given card is "empty".
 * @param {string} card - card to check
 * @returns {boolean} - true if the card is "empty", false otherwise
 */
  const checkEmpty = (card) =>{
    if(card === "empty"){
      return true
    }
    else{
      return false
    }
  }

  //Deploy empty card to the beginning of the row
  const deployEmpty =(row) =>{
    // console.log("Deploying empty")
    if(row.length === 0){
      row.unshift("empty")
    }
    return
  }

  //Remove empty card from the front of the row
  const removeEmpty = (row) =>{
    //Rework to not use empty
    row.shift()
  }

  /**
   * Deals one card from the deck to each row.  If the deck is empty, 
   * this function does nothing.  Also, if the deck is empty, the 
   * last element of the decksLeft array is popped off.
   */
  const dealCards = () =>{
    console.log("Dealing cards")
    decksLeft.pop()
    setRow1(row1.concat(deck.dealACard()))
    setRow2(row2.concat(deck.dealACard()))
    setRow3(row3.concat(deck.dealACard()))
    setRow4(row4.concat(deck.dealACard()))
    setRow5(row5.concat(deck.dealACard()))
    setRow6(row6.concat(deck.dealACard()))
    setRow7(row7.concat(deck.dealACard()))
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
    setRow7(setList())

    setDeck(()=>{
      let deck = new Deck()
      deck.shuffle()
      deck.shuffle()
      return deck
    })

    setDecksLeft([1,2,3,4])
    setScore(0)
    
  }

  const findIndex = (row, card) =>{
    for(let i=0; i<row.length; i++){
      if(row[i].value === card.value){
        return i
      }
    }
  }

  const checkForPoint = useCallback((row) =>{
    console.log("Checking for point")
    let pointlist = ['k','q','j','10','9','8','7','6','5','4','3','2','a']
    let points = 0

    if(row.length <13){//Not enough space to check for a point
      console.log("Not enough space to check for a point")
      return
    }

    //Check for a king in the row
    let index = findIndex(row, 'k')
    console.log("Found a king at:",index)

    for(let i=0; i<row.length; i++){
      console.log("Points loop")
      if(points===0){
        console.log("0 PointsValue: ",row[i].value, "Points: ", points)
        console.log("PointsValue: "+row[i].value,"Points: ",points)
        if(row[i].value===pointlist[points]){
          points++
        }
      }
      else if(points>0){
        console.log("Greater than 0 PointsValue: "+row[i].value,"Points: ",points)
        if(row[i].value===pointlist[points]){
          points++
        }
        else{
          break
        }
      }
      else{
        console.log("Less than 0 PointsValue: "+row[i].value,"Points: ",points)
        break
      }
    }

    console.log("Points: "+points)
    if(points===12){
      addPoint(row)
    }
  },[])

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
    else if(row===row7){
      row7.splice((row7.length-1)-12)
    }
  }

  const checkRank = (card) =>{
    console.log("Taking turn")

    // console.log("Card value:", card.value, RANK_ORDER.indexOf(card.value))
    // console.log("Movecard value",movecard.value, RANK_ORDER.indexOf(movecard.value))

    if(card === "empty"){
      return true
    }

    //Theses are now correct
    if(RANK_ORDER.indexOf(card.value) === (RANK_ORDER.indexOf(movecard.value)+1)){
      // console.log("Card is lower or equal than movecard")
      return true
    }
    else{
      // console.log("Card is higher than movecard")
      return false
    }
  }

  const checkEndCard = (row,card) =>{
    if(row[row.length-1].value === card.value){
      return true
    }
    else{
      return false
    }
  }

  //Function for player taking there turn
  const takeTurn = (card, row) =>{
    if(movecard){//Moving a card and checking if move is valid
      let rank = checkRank(card)

      // console.log("Rank is", rank)
      if(rank){
        ///check if card is at the end of the row
        if(!checkEndCard(row,card)){
          denyMove(movecard, card)
          return;
        }
        if(moveRow.length === 0){
          //Check if move row will be empty
          //If so, add the empty card
          deployEmpty(moveRow)
        }
        if(card === 'empty'){
          //Check if we moved to an empty row
          //If so remove the empty card
          removeEmpty(row)
        }

        moveCards(moveRow, movePos, row) 
        setMoveCard(null)
        setRow(0)
        makeFlips()

        return
      }
      else{
        denyMove(movecard, card)
        return
      }
      
    }
    else{//Selecting a card to move
      setMoveCard(card)
      setRow(row)
      setMovePos(row.indexOf(card))
    }
  }

  const setRow = (row) =>{
    setMoveRow(row)
  }

  const moveCards = (row, pos, endrow) =>{
    //Set up list starting at pos and move to new row
    let movelist = row.splice(pos,row.length)
    
    // console.log("Movelist",movelist)

    if(endrow===row1){
      setRow1([...row1,...movelist])
    }
    else if(endrow===row2){
      setRow2([...row2,...movelist])
    }
    else if(endrow===row3){
      setRow3([...row3,...movelist])
    }
    else if(endrow===row4){
      setRow4([...row4,...movelist])
    }
    else if(endrow===row5){
      setRow5([...row5,...movelist])
    }
    else if(endrow===row6){
      setRow6([...row6,...movelist])
    }
    else if(endrow===row7){
      setRow7([...row7,...movelist])
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

  useEffect(()=>{
    if(user){
      setOnline(true)
    }
  },[user])

  useEffect(()=>{
    if(!gameOver){
      checkForPoint(row1, row1[row1.length-1])
    }
  },[row1, checkForPoint, gameOver])

  useEffect(()=>{
    if(!gameOver){
      checkForPoint(row2, row2[row2.length-1])
    }
   
  },[row2, checkForPoint, gameOver])

  useEffect(()=>{
    if(!gameOver){
      checkForPoint(row3, row3[row3.length-1])
    }
  },[row3, checkForPoint, gameOver])

  useEffect(()=>{
    if(!gameOver){
      checkForPoint(row4, row4[row4.length-1])
    }
  },[row4, checkForPoint, gameOver])

  useEffect(()=>{
    if(!gameOver){
      checkForPoint(row5, row5[row5.length-1])
    }
  },[row5, checkForPoint, gameOver])

  useEffect(()=>{
    if(!gameOver){
      checkForPoint(row6, row6[row6.length-1])
    }
  },[row6, checkForPoint, gameOver])

  useEffect(()=>{
    if(!gameOver){
      checkForPoint(row7, row7[row7.length-1])
    }
  },[row7, checkForPoint, gameOver])

  return (
    <div className={styles.SpiderSolitare}>
      <h1>Spider Solitare</h1>
      <div>
        <button id={darkMode} onClick={newGame}>New game</button>
        <button id={darkMode} onClick={()=>{setRules(!rules)}}>Show rules</button>
        <button id={darkMode} disabled={!online} onClick={()=>{updateScore(score)}}>Upload Score</button>
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
        <div className={styles.row}>
          {
            row7.map((item, i)=>{
                if(item.back){
                  return <img key={i} alt={item} className={styles.card} 
                  src={back}
                  />
                }
                else{
                  return <img key={i} alt={item} className={styles.card} 
                  onClick={()=>{takeTurn(item, row7)}}
                  src={require(`../../../Images/Playcards/${item}.png`)}
                  />
                }
              
            })
          }
        </div>
        <div className={styles.moveCards}>
            <h3>Card to be moved:</h3>
            {
              movecard && 
              <img alt={movecard} className={styles.card} 
                    src={require(`../../../Images/Playcards/${movecard}.png`)}
                    />
            }
        </div>
        <div className={styles.deal}>
          {
            decksLeft.map((item, i)=>{
              return <img key={i} alt={item} className={styles.card}
                onClick={()=>{dealCards() }}
                src={back}
                />
            })
          }
        </div>
      </div>
      
      
    </div>
  )
}

export default SpiderSolitare
