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
  const [condition, setCondition] = useState("Snip")
  const [curCard, setCurCard] = useState(null)

  const newGame = () =>{
    console.log("Start a new snip snap snorum game")

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
    console.log("Playing a card " + card)
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
      
      <h2>Pile</h2>
      <img src={back} alt="" />
      <div className={styles.playSpace}>
        <h2>Player</h2>
          {
            playHand.map((item,i)=>{
              return <img key={i} className={styles.card} src={require(`../../../Images/${item}.png`)}/>
            })
          }
      </div>
      
    </div>
  )
}

export default SnipSnapSnorum
