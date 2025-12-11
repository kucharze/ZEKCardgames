const useCards = () => {
  const testPlayGiving = (card, hand) => {
    //Check Player hand for a given card
    console.log("Testing play hand");
    let i = 0;
    let tempHand = hand;
    let stillGiving = false;

    while (i < tempHand.length) {
      //Check if the card the computer is asking for is still in the player's hand
      if (tempHand[i].value === card.value) {
        stillGiving = true;
        break;
      }
      i++;
    }
    return stillGiving;
  };

  const testComHand = (card, hand) =>{
    //Test the computer's hand for the card that they are playing for
    let tempCardList = []
    
    while(i<hand.length){
      // console.log(tempHand[i])
      if(hand[i].value===card.value){
        tempCardList = [...tempCardList,hand.splice(i,1)];
      }
      else{
        i++
      }
      
    }
  };
  return { testPlayGiving,testComHand };
};

export default useCards;
