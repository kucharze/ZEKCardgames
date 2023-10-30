import React, {useState, useEffect, useRef} from 'react'
import styles from './CrazyEights.module.css'
import back from '../../../Images/BACKCARD.JPG'
import Deck from '../../../gamecomponents/Deck'
import SuitPicker from '../../../components/SuitPicker/SuitPicker'

function CrazyEights() {
  const [playHand, setPlayHand] = useState([])
  const [comHand, setComHand] = useState([])
  const [pile,setPile] = useState(null)
  const [deck, setDeck] = useState(new Deck())
  const [suit, setSuit] = useState("No current suit")
  const [suitDisplay, setSuitDisplay] = useState("No Current suite")
  const [pickSuit, setPickSuit] = useState(false)
  const imageRef = useRef('../../../Images/2c.png');

  const cardPicked = () =>{
    console.log("Picking a card")

    // player.add(deck.dealACard())
    let newCard = deck.dealACard()
    setPlayHand([...playHand,newCard])
    console.log(deck.list.length)
    if(deck.list.length<5){
      resetDeck()
    }
    //player.setList([...playHand,newCard])
    //console.log(player.list)
  }

  const resetDeck = () =>{
    setDeck(()=>{
      let d = new Deck()
      d.shuffle();
      d.shuffle()
      return d;
    })
  }

  const chooseSuit = (suit) => {
    setSuit(suit)
    setPickSuit(false)
  }

  const playCard = (card,i) =>{
    console.log("Playing card",card,i)
    //console.log("Ith position in player hand",playHand[i])
    //console.log(player.list)
    if(card.suit===suit || card.value===pile.value || card.value==="8"){
        //player.remove(i);
        let newHand = playHand;
        newHand.splice(i,1)
        setPlayHand(newHand)
        setPile(card)
      if(card.value==="8"){
        setPickSuit(true)
        setPile(card)
      }
      else{
        setSuit(card.suit)
      }
    }
    else{
      alert("That card is not valid")
    }
   
  }

  const newGame = () =>{
    console.log("Start a new game")
    let tempHand = []
    for(let i=0; i<7; i++){
      tempHand.push(deck.dealACard())
    }
    setPlayHand(tempHand)

    tempHand = []
    for(let i=0; i<7; i++){
      tempHand.push(deck.dealACard())
    }

    setComHand(tempHand)

    let pileCard = deck.dealACard()
    setSuit(pileCard.suit)
    setPile(pileCard)
    console.log(deck)
    resetDeck()
  }

  const setUp = () =>{
    deck.shuffle()
    deck.shuffle()
  }

  useEffect(()=>{
    setUp()
  },[])

  useEffect(()=>{
     if(suit === 'd' ){
      setSuitDisplay("Diamonds")
     }
     else if(suit === 'c' ){
      setSuitDisplay("Clubs")
     }
     else if(suit === 'h' ){
      setSuitDisplay("Hearts")
     }
     else if(suit === 's' ){
      setSuitDisplay("Spades")
     }
     else if(suit === "No current suit" ){
      setSuitDisplay("No current suit")
     }
     else{
      setSuitDisplay("Error")
     }
  },[suit])

  return (
    <div className={styles.CrazyEights}>
      <h1>Crazy Eights</h1>
      <button onClick={newGame}>New game</button>
      <h2>Computer</h2>
      <div className='com'>{
        comHand.map((item,i)=>{
          if(item){
          return <img className={styles.hand} key={i} src={back} 
            alt="" ref={imageRef} />
          }
          return <p>No value here</p>
        })
      }</div>
      <div>The display section for the suit: {suitDisplay}</div>
      <div className='table'>
        <img className={styles.hand} src={back} alt="" onClick={cardPicked} />,
        {pile &&
         <img className={styles.hand} src={require(`../../../Images/${pile}.png`)} alt="" ref={imageRef} />
        }
        </div>
        {
          pickSuit && <SuitPicker func={chooseSuit}/>
        }
        
      <h2>Player</h2>
      <div className='player'>{
        playHand.map((item,i)=>{
          if(item){
            return <img className={styles.hand} key={i} 
              src={require(`../../../Images/${item}.png`)} alt="" ref={imageRef}
              onClick={()=>playCard(item,i)} />
          }
          return <p>No value here</p>
        })
      }</div>
    </div>
  )
}

export default CrazyEights
