import React,{useState, useEffect} from 'react'
import back from '../../../Images/BACKCARD.JPG'
import styles from './SnipSnapSnorum.module.css'
import Deck from '../../../gamecomponents/Deck'

function SnipSnapSnorum() {
  const [rules, setRules] = useState(false)
  const [comHand, setComHand] = useState([])
  const [playHand, setPlayHand] = useState([])
  const [deck, setDeck] = useState(new Deck())
  const [pile, setPile] = useState(null)
  const [condition, setCondition] = useState(null)
  const [curCard, setCurCard] = useState(null)

  const newGame = () =>{
    console.log("Start a new snip snap snorum game")
    setCondition("Snip")

    let tempPlayHand = []
    let tempComHand = []

    while(!deck.isEmpty()){
      tempPlayHand.push(deck.dealACard())

      tempComHand.push(deck.dealACard())
      console.log("Load")
    }

    console.log("Done")
    setComHand(tempComHand)

    setPlayHand(tempPlayHand)
  }

  const playCard = (card) =>{
    if(condition == "Snip"){
      
      console.log("Playing a card Snip " + card.value)
      setCurCard(card)
      setPile(card)

      setCondition("Snap")
    }
    else if(condition == "Snap"){
      console.log("Playing a card Snap " + card.value)
    }
    else{
      console.log("Playing a card Snorum " + card.value)
    }
    
  }

  const comTurn = () =>{
    console.log("Computer turn")
  }

  useEffect(()=>{
    deck.shuffle()
    deck.shuffle()
  },[deck])

  return (
    <div className={styles.SnipSnapSnorum}>
      <h1>Snip Snap Snorum</h1>
            <div>
        <button onClick={newGame}>New game</button>
        <button onClick={()=>{setRules(!rules)}}>Show rules</button>
      </div>
            {
        rules &&
        <div className={styles.rules}>
          <ul>
            <li>Play cards from your hand</li>
            <li>The first card can be anything(snip)</li>
            <li>The second and third card must match the value of the first card(snap, snorum)</li>
            <li>If you cannot play a card you pass the turn</li>
            <li>If both players cannot play a card, we will reset and go back to snip status</li>
            <li>First player to empty their hand wins</li>
          </ul>
        </div>
      }
      
      <div className={styles.playSpace}>
        <h2>Com</h2>
        {
          comHand.map((item,i)=>{
            return <img key={i} className={styles.card} src={back}/>
          })
        }
      </div>
      
      <h1>{condition}</h1>
      {
        pile && <img src={require(`../../../Images/${pile}.png`)}/>
      }
      <div className={styles.playSpace}>
        <h2>Player</h2>
          {
            playHand.map((item,i)=>{
              return <img key={i} className={styles.card} src={require(`../../../Images/${item}.png`)}
              onClick={()=>{playCard(item)}}/>
            })
          }
      </div>
      
    </div>
  )
}

export default SnipSnapSnorum
