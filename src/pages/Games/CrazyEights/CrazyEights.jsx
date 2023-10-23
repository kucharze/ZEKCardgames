import React, {useState, useEffect, useRef} from 'react'
import styles from './CrazyEights.module.css'
// import p from '../Images/10c.png'
import back from '../../../Images/BACKCARD.JPG'
import HumanPlayer from '../../../gamecomponents/HumanPlayer'
import ComputerPlayer from '../../../gamecomponents/ComputerPlayer'
import Card from '../../../gamecomponents/Card'
import Deck from '../../../gamecomponents/Deck'


function CrazyEights() {
  const [playHand, setPlayHand] = useState(['2h','10c','10c','10h'])
  const [comHand, setComHand] = useState(['10c','10c','10c','10c'])
  const [player, setPlayer] = useState(null)
  const [com, setCom] = useState(null)
  const [pile,setPile] = useState('3h')
  const [deck, setDeck] = useState(new Deck())
  const imageRef = useRef('../../../Images/2c.png');

  const cardPicked = () =>{
    console.log("Picking a card")
  }

  const newGame = () =>{
    deck.shuffle()
    deck.shuffle()
    console.log("Start a new game")
    setPlayHand([deck.dealACard(),deck.dealACard(),deck.dealACard(),deck.dealACard(),])
    setComHand([deck.dealACard(),deck.dealACard(),deck.dealACard(),deck.dealACard(),])
    console.log(deck)
    console.log("hello")
  }

  useEffect(()=>{
    newGame()
  },[])

  return (
    <div className={styles.CrazyEights}>
      <h1>Crazy Eights</h1>
      <button onClick={newGame}>New game</button>
      <h2>Computer</h2>
      <div className='com'>{
        comHand.map((item,i)=>{
          return <img className={styles.hand} key={i} src={back} alt="" ref={imageRef} />
        })
      }</div>
      <div>The display section for the suit</div>
      <div className='table'>
        <img className={styles.hand} src={back} alt="" onClick={cardPicked} />,
         <img className={styles.hand} src={require(`../../../Images/${pile}.png`)} alt="" ref={imageRef} /></div>
      <h2>Player</h2>
      <div className='player'>{
        playHand.map((item,i)=>{
          return <img className={styles.hand} key={i} src={require(`../../../Images/${item}.png`)} alt="" ref={imageRef} />
        })
      }</div>
    </div>
  )
}

export default CrazyEights
