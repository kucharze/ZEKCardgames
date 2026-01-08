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

  const testComGiving = (card, hand) =>{
    //Test the computer's hand for the card that they are playing for
    let tempCardList = []
    
    let i=0
    while(i<hand.length){
      if(hand[i].value===card.value){
        //We found a card, add to list
        tempCardList = [...tempCardList,hand.splice(i,1)];
      }
      else{
        //No value found at given position. Increment i
        i++
      }
      
    }

    return tempCardList;
  };
  return { testPlayGiving,testComGiving };
};

export default useCards;
