import React, {useState, useEffect, useRef} from 'react'
import styles from './CrazyEights.module.css'
// import p from '../Images/10c.png'
import back from '../../../Images/BACKCARD.JPG'
import HumanPlayer from '../../../gamecomponents/HumanPlayer'
import ComputerPlayer from '../../../gamecomponents/ComputerPlayer'
// import Card from '../../../gamecomponents/Card'
import Deck from '../../../gamecomponents/Deck'
import SuitPicker from '../../../components/SuitPicker/SuitPicker'

function CrazyEights() {
  const [playHand, setPlayHand] = useState(['2h','10c'])
  const [comHand, setComHand] = useState(['10c','10c'])
  const [player, setPlayer] = useState(null)
  const [com, setCom] = useState(null)
  const [pile,setPile] = useState(null)
  const [deck, setDeck] = useState(new Deck())
  const [suit, setSuit] = useState("No current suit")
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
    player.setList([...playHand,newCard])
    console.log(player.list)
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
    console.log(player.list)
    if(card.suit===suit || card.value===pile.value || card.value==="8"){
        player.remove(i);
        setPlayHand(player.list)
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
    setPlayHand(player.list)
    setComHand(com.list)
    let pileCard = deck.dealACard()
    setSuit(pileCard.suit)
    setPile(pileCard)
    console.log(deck)
  }

  const setUp = () =>{
    deck.shuffle()
    deck.shuffle()
    setPlayer(new HumanPlayer(deck, pile))
    setCom(new ComputerPlayer(deck, pile))
  }

  useEffect(()=>{
    setUp()
  },[])

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
      <div>The display section for the suit: {suit}</div>
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
