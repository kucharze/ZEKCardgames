import React, {useState, useEffect} from 'react'
import back from '../../../Images/BACKCARD.JPG'
import Deck from '../../../gamecomponents/Deck'
import styles from './Spidersolitare.module.css'

function SpiderSolitare() {
  const [deck, setDeck] = useState(new Deck())
  const [row1, setRow1] = useState([])
  const [row2, setRow2] = useState([])
  const [row3, setRow3] = useState([])
  const [row4, setRow4] = useState([])
  const [row5, setRow5] = useState([])
  const [row6, setRow6] = useState([])
  const [movecard, setMoveCard] = useState(null)
  const [rules, setRules] = useState(false)
  const [score, setScore] = useState(0)
  
  const newGame = () =>{
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
    setRow1(templist)
    
    templist = []
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
    setRow2(templist)

    templist = []
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

    setRow3(templist)

    templist = []
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

    setRow4(templist)

    templist = []
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

    setRow5(templist)

    templist = []
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

    setRow6(templist)

    setDeck(new Deck())
    deck.shuffle()
    deck.shuffle()
  }

  const takeTurn = (card, row) =>{
    if(movecard){
      if(card.value===movecard.value-1){
        if(card.suit===movecard.suit){
          depositcard(movecard, row)
          //Remove cards from previous row
        }
      }
    }
    else{
      setMoveCard(card)
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
              <button onClick={()=>{setRules(!rules)}}>Show rules</button>
            {
        rules &&
        <div className={styles.rules}>
          <ul>
            <li>Their are 6 rows of cards, each with 5 cards.</li>
            <li>4 Cards are face down while the last is face up</li>
            <li>You can move cards from one row to another</li>
            <li>You can only move cards of the same value</li>
            <li>You can only move cards of the same suit</li>
            <li>You can only move cards that are one value lower 
              than the card you are moving</li>
          </ul>
        </div>
      }

      <button onClick={newGame}>New game</button>
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
                src={require(`../../../Images/${item}.png`)}
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
                src={require(`../../../Images/${item}.png`)}
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
                src={require(`../../../Images/${item}.png`)}
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
                src={require(`../../../Images/${item}.png`)}
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
                src={require(`../../../Images/${item}.png`)}
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
                src={require(`../../../Images/${item}.png`)}
                />
              }
              
            })
          }
        </div>
      </div>
      
    </div>
  )
}

export default SpiderSolitare
