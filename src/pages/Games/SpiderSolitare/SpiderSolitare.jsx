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

  const takeTurn = (card) =>{
    if(movecard){
      if(card.value===movecard.value){
        if(card.suit===movecard.suit){
          setRow1([...row1,movecard])
        }
      }
    }
    else{
      setMoveCard(card)
    }
  }

  const findCard = (card) =>{

  }

  useEffect(()=>{
    deck.shuffle()
    deck.shuffle()
  },[])

  return (
    <div className={styles.SpiderSolitare}>
      <h1>Spider Solitare</h1>
      <button onClick={newGame}>New game</button>
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
