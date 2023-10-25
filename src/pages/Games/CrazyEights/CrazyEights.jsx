import React, {useState, useEffect, useRef} from 'react'
import styles from './CrazyEights.module.css'
// import p from '../Images/10c.png'
import back from '../../../Images/BACKCARD.JPG'
import HumanPlayer from '../../../gamecomponents/HumanPlayer'
import ComputerPlayer from '../../../gamecomponents/ComputerPlayer'
import Card from '../../../gamecomponents/Card'
import Deck from '../../../gamecomponents/Deck'

function CrazyEights() {
  const [playHand, setPlayHand] = useState(['2h','10c','10h'])
  const [comHand, setComHand] = useState(['10c','10c','10c'])
  const [player, setPlayer] = useState(null)
  const [com, setCom] = useState(null)
  const [pile,setPile] = useState(null)
  const [deck, setDeck] = useState(new Deck())
  const imageRef = useRef('../../../Images/2c.png');

  const cardPicked = () =>{
    console.log("Picking a card")

    setPlayHand([...player.list])
  }

  const playCard = (card,i) =>{
    console.log("Playing card",card,i)
    console.log("Ith position in player hand",playHand[i])
    let tempHand = [...playHand]
    let playedCard = tempHand.splice(i,1);
    setPlayHand(tempHand)
    setPile(playedCard)
  }

  const newGame = () =>{
    console.log("Start a new game")
    setPlayHand(player.list)
    setComHand(com.list)
    setPile(deck.dealACard())
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
      <div>The display section for the suit:{}</div>
      <div className='table'>
        <img className={styles.hand} src={back} alt="" onClick={cardPicked} />,
        {pile &&
         <img className={styles.hand} src={require(`../../../Images/${pile}.png`)} alt="" ref={imageRef} />
        }
        </div>
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
