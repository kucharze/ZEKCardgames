import React, {useState, useEffect} from 'react'
import back from '../../../Images/BACKCARD.JPG'
import Deck from '../../../gamecomponents/Deck'
import styles from './Spidersolitare.module.css'
import { set } from 'mongoose'

function SpiderSolitare() {
  const [deck, setDeck] = useState(new Deck())
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
  const [rules, setRules] = useState(false)
  const [score, setScore] = useState(0)
  
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

  const moveCards = (row, pos, endrow) =>{
    //Set up list starting at pos and move to new row
    let movelist = []
    if(row===row1){
      movelist = row1.splice(pos)
    }
    else if(row===row2){
      movelist = row2.splice(pos)
    }
    else if(row===row3){
      movelist = row3.splice(pos)
    }
    else if(row===row4){
      movelist = row4.splice(pos)
    }
    else if(row===row5){
      movelist = row5.splice(pos)
    }
    else if(row===row6){
      movelist = row6.splice(pos)
    }
    
    Console.log(movelist)

    if(endrow===row1){
     setRow1([...row1,...movelist])
    }
    else if(endrow===row2){
      setRow1([...row2,...movelist])
    }
    else if(endrow===row3){
      setRow1([...row3,...movelist])
    }
    else if(endrow===row4){
      setRow1([...row4,...movelist])
    }
    else if(endrow===row5){
      setRow1([...row5,...movelist])
    }
    else if(endrow===row6){
      setRow1([...row6,...movelist])

    }
    
  }

  const checkForPoint = (row) =>{
    let pointlist = ['k','q','j','10','9','8','7','6','5','4','3','2']
    let points = 0
    for(let i=0; i<row.length; i++){
      if(points==0){
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
      setScore(score+1)
    }
    }

  const takeTurn = (card, row) =>{
    if(movecard){
      if(card.value===movecard.value-1){
          depositcard(movecard, row)
          //Remove cards from previous row and move to new row
          moveCards()
      }
      else{
        alert("That card can't be moved there value",card.value, movecard.value)
        setMoveCard(null)
        setMoveCardList([])
      }
    }
    else{
      setMoveCard(card)
      setMovePos([row,0])
    }
  }

  const depositcard = (card,row) =>{
    if(row===row1){
      setRow1([...row1,movecard])
    }
    else if(row===row2){
      setRow2([...row2,movecard])
    }
    else if(row===row3){
      setRow3([...row3,movecard])
    }
    else if(row===row4){
      setRow4([...row4,movecard])
    }
    else if(row===row5){
      setRow5([...row5,movecard])
    }
    else if(row===row6){
      setRow6([...row6,movecard])
    }
  }

  useEffect(()=>{
    deck.shuffle()
    deck.shuffle()
  },[])

  return (
    <div className={styles.SpiderSolitare}>
      <h1>Spider Solitare</h1>
      <div>
        <button onClick={newGame}>New game</button>
        <button onClick={()=>{setRules(!rules)}}>Show rules</button>
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
                src={back}
                />
              }
              else{
                return <img key={i} alt={item} className={styles.card} 
                onClick={()=>{takeTurn(item, row1)}}
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
  )
}

export default SpiderSolitare
