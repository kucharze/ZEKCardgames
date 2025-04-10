import React, {useState} from 'react'
import styles from './War.module.css'
import Deck from '../../../gamecomponents/Deck'
import WinnerBoard from '../../../components/Winnerboard/WinnerBoard'
import { useAuth } from "../../../contexts/app_context";

function War({darkmode}) {
  const { user, uploadToLeaderboards } = useAuth();

    const [rules, setRules] = useState(false)

    const [playDeck, setPlayDeck] = useState(new Deck())
    
    const [player, setPlayer] = useState(null)
    const [playerWar, setPlayerWar] = useState(null)
    const [playScore, setPlayScore] = useState(0)
    const [playWarScore, setPlayWarScore] = useState(0)
    const [playerWins, setPlayerWins] = useState(0)

    const [com, setCom] = useState(null)
    const [comWar, setComWar] = useState(null)
    const [comWins, setComWins] = useState(0)

    const [comDeck, setComDeck] = useState(new Deck())
    const [comScore, setComScore] = useState(0)
    const [comWarScore, setComWarScore] = useState(0)

    const [gameInProgress, setGameInProgress] = useState(false)
    const [winner, setWinner] = useState(false)
    const [gameOver, setGameOver] = useState(false)

    const uploadWins = () =>{
      if(user){
        uploadToLeaderboards("War Score",playerWins)
      }
    }

    const newGame = () =>{
      console.log("New war game")
      let com = new Deck();
      com.shuffle();
      com.shuffle()
      setComDeck(com)

      let play = new Deck()
      play.shuffle()
      play.shuffle()

      setPlayDeck(play)
      setGameInProgress(true)
      setPlayer(null)
      setPlayerWar(null)
      setPlayScore(0)
      setPlayWarScore(0)
      setPlayerWins(0)

      setCom(null)
      setComWar(null)
      setComScore(0)
      setComWarScore(0)
      setComWins(0)

      setGameOver(false)
    }

    const playCard = () =>{
      console.log("New war round")
      if(playDeck.isEmpty() || comDeck.isEmpty()){
        //Make this check for a win
        alert("A deck is out of cards")
        return
      }
      let playerCard = playDeck.dealACard();
      let comCard = comDeck.dealACard();
      setPlayScore(playerCard.warValue)
      setComScore(comCard.warValue)

      if(playerCard.warValue > comCard.warValue){
        console.log("player")
        setPlayerWins(playerWins+1)
      }
      else if(comCard.warValue > playerCard.warValue){
        setComWins(comWins+1)
        console.log("com")
      }
      else{
        let playWar = playDeck.dealACard()
        let commWar = comDeck.dealACard()

        setPlayerWar(playWar)
        setComWar(commWar)
        setComWarScore(commWar.warValue)
        setPlayWarScore(playWar.warValue)

        if(playWar.warValue > commWar.warValue){
          console.log("player war win")
          setPlayerWins(playerWins+1)
        }
        else if(commWar.warValue > playWar.warValue){
          setComWins(comWins+1)
          console.log("com War win")
        }
      }

      setPlayer(playerCard)
      setCom(comCard)
    }

    const war = () =>{
      
    }

    const checkForWinner = () =>{
      setGameInProgress(false)
      setGameOver(true)
      if(playerWins>comWins){
        //winner is player
        setWinner(true)
      }
      else if(comWins>playerWins){
        //winner is computer
        setWinner(false)
      }
      else{
        //draw
        setWinner(false)
      }
      uploadWins()
    }

    useState(()=>{
      if(playDeck.isEmpty()  && comDeck.isEmpty()){
        setGameInProgress(false)
        setGameOver(true)
        if(playerWins>comWins){
          setWinner(true)
        }
        else{
          setWinner(false)
        }
      }
    },[comWins,playerWins])

  return (
    <div className={styles.War}>
      <div>
        <button onClick={newGame}>New game</button>
        <button onClick={()=>{setRules(!rules)}}>Show rules</button>
      </div>
            {
        rules &&
        <div className={styles.rules}>
          <ul>
            <li>Each player has their own deck</li>
            <li>Each turn, players take the top card of their deck and compare values</li>
            <li>The player with the higher valued card wins a point</li>
            <li>In the event of a tie, repeat the above with two additional cards</li>
            <li>However has the most points after running out of cards wins</li>
          </ul>
        </div>
      }
      <h1>War</h1>
      <div className={styles.gamemat}>
        <div>
          <h2>Computer</h2>
          <h3>{comWins}</h3>
          <div className={styles.mat}>
            <div className={styles.Comwarmat}>
              <p>Computer war card</p> 
              <h3>{comWarScore}</h3>
              {
                comWar && <img alt={com} className={styles.card} src={require(`../../../Images/Playcards/${comWar}.png`)}/>
              }
            </div>
            <div className={styles.ComPlayMat}>
                <p>Computer Play card</p>
                <h3>{comScore}</h3>
              { 
              com && <img alt={com} className={styles.card} src={require(`../../../Images/Playcards/${com}.png`)}/>
              }
            </div>
          </div>
      </div>
      <div>
        {
          gameOver && <WinnerBoard winner={winner}/>
        }
        <button onClick={playCard} disabled={!gameInProgress}>Play a round</button>
      </div>
      
      <div>
        <h2>Player</h2>
        <h3>{playerWins}</h3>
        <div className={styles.mat}>
          <div className={styles.Playwarmat}>
            <p>Player war card</p>
            <h3>{playWarScore}</h3>
            {
              playerWar && <img alt={player} className={styles.card} src={require(`../../../Images/Playcards/${playerWar}.png`)}/>
            }
          </div>
          <div className={styles.PlayPlayMat}>
            <p>Player play card:</p>
            <h3>{playScore}</h3>
            { 
              player && <img alt={player} className={styles.card} src={require(`../../../Images/Playcards/${player}.png`)}/>
            }
          </div>
        </div>
      </div>

      </div>
      
     
      
    </div>
  )
}

export default War
