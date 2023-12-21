import React,{useState, useEffect} from 'react'
import back from '../../../Images/BACKCARD.JPG'
import styles from './Blackjack.module.css'
import Deck from '../../../gamecomponents/Deck'
import WinnerBoard from '../../../components/Winnerboard/WinnerBoard'

function Blackjack() {
  const [playHand, setPlayHand] = useState([])
  const [comHand, setComHand] = useState([])
  const [tempComVal, setTempComVal] = useState(0)
  const [comTurn, setComTurn] = useState(false)
  const [value, setValue] = useState(0)
  const [comValue, setComValue] = useState(0)
  const [deck, setDeck] = useState(new Deck())
  const [gameOver, setGameOver] = useState(false)
  const [youWin, setYouWin] = useState(false)
  const [rules, setRules] = useState(false)
  const [disabled, setDisabled] = useState(true)
  const [blackjack, setBlackjack] = useState(false)

  const newGame = () =>{
    console.log("New Blackjack game")
    setComValue(0)
   
    let tempHand = []
    for(let i=0; i<2; i++){
      tempHand.push(deck.dealACard())
    }
    setPlayHand(tempHand)

    tempHand = []
    for(let i=0; i<2; i++){
      tempHand.push(deck.dealACard())
    }

    setComHand(tempHand)
    setDisabled(false)

    setDeck(new Deck())
    setGameOver(false)
    setComTurn(false)
    setBlackjack(false)
  }

  const findValues = () =>{
    let handVal=0
    playHand.forEach(element => {
      handVal+=Number(element.jackValue)
    });
    if(handVal>21){
      setDisabled(true)
      setComValue(tempComVal)
      setComTurn(true)
    }
    if(handVal==21 && playHand.length==2){
      setBlackjack(true)
      setDisabled(true)
      setGameOver(true)
      setYouWin(true)
    }
    setValue(handVal)

    handVal = 0
    comHand.forEach(element =>{
      handVal+=Number(element.jackValue)
    })
    setTempComVal(handVal)
    console.log(tempComVal)
  }

  const dealCard = () =>{
    setPlayHand([...playHand, deck.dealACard()])
  }

  const playComTurn = () =>{
    setComTurn(true)
    setDisabled(true)
    console.log("The computer turn")

    let newHand = comHand;
    let handVal = tempComVal;
    console.log(comHand)
    setComValue(tempComVal)

    while(handVal<=17){
      // newHand
      let card = deck.dealACard()
      console.log(card.jackValue)
      newHand.push(card)
      handVal+=Number(card.jackValue)
    }

    setComValue(handVal)
    setComHand(newHand)
  }

  useEffect(()=>{
    deck.shuffle()
    deck.shuffle()
  },[deck])

  useEffect(()=>{
    findValues()
  },[playHand, comHand])

  useEffect(()=>{
    if(comValue>0){
     setGameOver(true)
      if(comValue>21 || value>21){
        if(comValue>21){
          setYouWin(true)
        }
        if(value>21){
          setYouWin(false)
        }
      }
      else{
        if(comValue>=value){
            setYouWin(false)
        }
        else{
          setYouWin(true)
        }
      }
    }
    
  },[comValue])

  return (
    <div className={styles.Blackjack}>
      <h1>Blackjack</h1>
      <div>
        <button onClick={newGame}>New game</button>
        <button onClick={()=>{setRules(!rules)}}>Show rules</button>
      </div>
            {
        rules &&
        <div className={styles.rules}>
          <ul>
            <li>Try to get as close to 21 as possible with your cards</li>
            <li>Jack, Queen, King are each 10 points</li>
            <li>An Ace can be either 11 points or 1 point</li>
            <li>Having 21 with two cards is a blackjack</li>
            <li>If you go over 21 you lose</li>
            <li>The dealer will continue to hit until they have at least a value of 17</li>
            <li>If neither player has gone above 21, the higher valued hand wins</li>
            <li>The dealer wins all tiebreakers</li>
          </ul>
        </div>
      }
      <h2>Dealer</h2>
      <h2>Computer hand value: {comValue}</h2>
      <div className={styles.dealer}>
        {
          comTurn && 
          comHand.map((item,i)=>{
              if(item){
                return <img className={styles.hand} key={i} 
                  src={require(`../../../Images/${item}.png`)} alt="" />
              }
              return <p>No value here</p>
            })
        }
        {
          !comTurn && 
          <div>
            <img src={back} alt="" />
            {
              comHand.length>0 && <img className={styles.hand} 
                        src={require(`../../../Images/${comHand[1]}.png`)} alt="" />
            }
          </div>
        }
        
      </div>
      <div>
        {
          gameOver && <div><WinnerBoard winner={youWin}/></div>
        }
      </div>
      <div>
        {
          blackjack && <h2>BLACKJACK</h2>
        }
      </div>
      
      <h2>Player</h2>
      <div className='interface'>
        <button onClick={dealCard} disabled={disabled}>Hit</button>
        <button onClick={playComTurn} disabled={disabled}>Stand</button>
      </div>
      
      <div className='player'>
        <h2>Player hand value: {value}</h2>
        {
          playHand.map((item,i)=>{
              if(item){
                return <img className={styles.hand} key={i} 
                  src={require(`../../../Images/${item}.png`)} alt="" />
              }
              return <p>No value here</p>
            })
          }</div>
    </div>
  )
}

export default Blackjack
