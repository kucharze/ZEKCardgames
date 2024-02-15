import React,{useState, useEffect} from 'react'
import styles from './SnipSnapSnorum.module.css'
import back from '../../../Images/cardback.png'
import Deck from '../../../gamecomponents/Deck'
import WinnerBoard from '../../../components/Winnerboard/WinnerBoard'

function SnipSnapSnorum() {
  const [rules, setRules] = useState(false)
  const [comHand, setComHand] = useState([])
  const [playHand, setPlayHand] = useState([])
  const [deck, setDeck] = useState(new Deck())
  const [pile, setPile] = useState("cardback")
  const [condition, setCondition] = useState(null)
  const [curCard, setCurCard] = useState(null)
  const [disabled, setDisabled] = useState(true)
  const [comCanPlay, setComCanPlay] = useState(false)
  const [win, setWin] = useState(false)
  const [gameOver, setGameOver] = useState(false)

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
    
    let d = new Deck()
    d.shuffle()
    d.shuffle()
    setDeck(d)
    setPile("cardback")
    setDisabled(false)
  }

  const removeCard = (card) => {
    let tempHand = playHand;
    // console.log("Trying to remove a card")

    let spot = -1

    for(let i=0; i<tempHand.length; i++){
      if(tempHand[i]===card){
        // console.log("FOund our target")
        spot = i
        break
      }
    }

    // console.log(spot)
    if(spot!==-1){
      tempHand.splice(spot,1)
    }

    setPlayHand(tempHand)
    if(tempHand.length === 0){
      setWin(true)
      setDisabled(true)
    }
  }

  // const removeComCard = (card) =>{
  //   console.log("ComCard:",card)
  // }

  const comTurn = () =>{
    console.log("Computer turn")
    let tempHand = comHand

    let cond = condition
    let pileCard = pile

    while(true){
      console.log("Turn")
      if(cond === "Snip"){ 
        // console.log("Playing a card Snip " + card.value)
        pileCard = tempHand[0]
        tempHand.splice(0,1)
        cond = "Snap"
      }
      else if(cond === "Snap"){
        // console.log("Playing a card Snap " + card.value)
        let tempcard = null
        let tempSpot = -1
        for(let i=0; i<tempHand.length; i++){
          if(tempHand[i].value===pileCard.value){
            tempcard = tempHand[i]
            tempSpot=i
            break
          }
        }

        if(tempcard==null){
          break
        }
        else{
          pileCard=tempcard
          tempHand.splice(tempSpot,1)
        }
        
      }
      else{
        // console.log("Playing a card Snorum " + card.value)
        let tempcard = null
        let tempSpot = -1
        for(let i=0; i<tempHand.length; i++){
          if(tempHand[i].value===pileCard.value){
            tempcard = tempHand[i]
            tempSpot=i
            break
          }
        }

        if(tempcard==null){
          break
        }
        else{
          pileCard=tempcard
          tempHand.splice(tempSpot,1)
        }
      }
    }
    console.log("Done")
    setPile(pileCard)
    setCondition(cond)
    setComHand(tempHand)
    setDisabled(false)
  }

  const playCard = (card) =>{
    if(condition === "Snip"){
      
      // console.log("Playing a card Snip " + card.value)
      setCurCard(card)
      setPile(card)
      removeCard(card)
      setCondition("Snap")
    }
    else if(condition === "Snap"){
      // console.log("Playing a card Snap " + card.value)
      if(card.value !== curCard.value){
        alert("You need to play a version of the card on the pile")
      }
      else{
        setCurCard(card)
        setPile(card)
        removeCard(card)
        setCondition("Snorum")
      }
    }
    else{
      // console.log("Playing a card S  norum " + card.value)
      if(card.value !== curCard.value){
        alert("You need to play a version of the card on the pile")
      }
      else{
        setCurCard(card)
        setPile(card)
        removeCard(card)
        setCondition("Snip")
      }
    }
    
  }

  useEffect(()=>{
    deck.shuffle()
    deck.shuffle()
  },[deck])

  useEffect(()=>{
    if(comCanPlay){
      console.log("Com turn")
      comTurn()
    }
  },[comCanPlay])

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
            return <img key={i} alt={item} className={styles.card} src={back}/>
          })
        }
      </div>
      
      <h1>{condition}</h1>
      {
        pile && <img alt={pile} src={require(`../../../Images/${pile}.png`)}/>
      }
      {
        gameOver && <div>
          {
            win && <WinnerBoard/>
          }
        </div>
      }
      
      <div className={styles.playSpace}>
        <button onClick={()=>{setDisabled(true); setComCanPlay(true)}} disabled={disabled}>Pass the turn</button>
        <h2>Player</h2>
          {
            playHand.map((item,i)=>{
              return <img key={i} alt={item} className={styles.card} src={require(`../../../Images/${item}.png`)}
              onClick={()=>{
                if(!disabled){
                  playCard(item)
                }
                
              }}/>
            })
          }
      </div>
      
    </div>
  )
}

export default SnipSnapSnorum
