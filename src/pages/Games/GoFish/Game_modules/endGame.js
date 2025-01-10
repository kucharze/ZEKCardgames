//Have we met the conditions to end the game
const checkEndConditions = (player,computer) =>{
    if(player.length===0 && computer.length===0){
      return true
    }
    else{
      return false
    }
  }

  const findWinner = (playScore,comScore) =>{

    //check to see who won
    if(playScore>comScore){
      console.log("Player wins")
      return true
    }
    else if(comScore>playScore){
      console.log("Computer wins")
      return false
    }
    else{
      console.log("Tie")
      return null
    }
  }

  export default {checkEndConditions, findWinner}