const faceCards = () => {
  //Run checks to see if we should move one face card to another
  const checkFaceMove = (mover, target) => {
    console.log("Moving a ", mover, " to a ", target);
    //Target is an ace
    if (target.value === "a") {
      console.log("Ace");
      //This can never be true, ace is the lowest number
      return false;
    }
    //Target is a king
    else if (target.value === "k") {
      //King is the highest value, this is always true
      console.log("King");
      return true;
    }
    //Target is a queen
    else if (target.value === "q") {
      console.log("Queen");
      if (mover.value === "j" || mover.value === "a") {
        return true;
      } else {
        console.log("Not a jack or ace");
        return false;
      }
    }
    //Target is a jack
    //Return true if ace otherwise return false
    else if (target.value === "j") {
      console.log("Jack");
      if (mover.value === "a") {
        console.log("Ace");
        return true;
      } else {
        console.log("Not an ace");
        return false;
      }
    }
  };

  return checkFaceMove;
};

export default faceCards;
// export { checkFaceMove };
