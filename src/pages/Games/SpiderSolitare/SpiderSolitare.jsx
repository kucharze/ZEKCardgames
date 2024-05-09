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
  
  const newGame = () =>{
    let templist = []
    for(let i=0; i<5; i++){
      templist.push(deck.dealACard())
    }
    setRow1(templist)
    
    templist = []
    for(let i=0; i<5; i++){
      templist.push(deck.dealACard())
    }
    setRow2(templist)

    templist = []
    for(let i=0; i<5; i++){
      templist.push(deck.dealACard())
    }

    setRow3(templist)

    templist = []
    for(let i=0; i<5; i++){
      templist.push(deck.dealACard())
    }

    setRow4(templist)

    templist = []
    for(let i=0; i<5; i++){
      templist.push(deck.dealACard())
    }

    setRow5(templist)
  }

  return (
    <div className={styles.SpiderSolitare}>
      <h1>Spider Solitare</h1>
      <button onClick={newGame}>New game</button>
      <div className={styles.playmat}>
        <div className={styles.row}>
          {
            row1.map(()=>{
              return <img key={i} alt={item} className={styles.card} 
              src={require(`../../../Images/${item}.png`)}
              />
            })
          }
        </div>
        <div className={styles.row}>
          {
            row2.map(()=>{
              return <img key={i} alt={item} className={styles.card} 
              src={require(`../../../Images/${item}.png`)}
              />
            })
          }
        </div>
        <div className={styles.row}>
          {
            row3.map(()=>{
              return <img key={i} alt={item} className={styles.card} 
              src={require(`../../../Images/${item}.png`)}
              />
            })
          }
        </div>
        <div className={styles.row}>
          {
            row4.map(()=>{
              return <img key={i} alt={item} className={styles.card} 
              src={require(`../../../Images/${item}.png`)}
              />
            })
          }
        </div>
        <div className={styles.row}>
          {
            row5.map(()=>{
              return <img key={i} alt={item} className={styles.card} 
              src={require(`../../../Images/${item}.png`)}
              />
            })
          }
        </div>
      </div>
      
    </div>
  )
}

export default SpiderSolitare
