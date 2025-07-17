const faceCards = () => {
  //Run checks to see if we should move one face card to another
  const checkFaceMove = (mover, target) => {
    console.log("Moving a ",mover, " to a ", target)
    //Target is an ace
    if (target.value === "A") {
      //This can never be true, ace is the lowest number
      return false;
    }
    //Target is a king
    else if (target.value === "k") {
      //King is the highest value, this is always true
      
      return true;
    }
    //Target is a queen
    else if (target.value === "q") {
      if (mover.value === "j" || mover.value === "a") {
        return true;
      } else {
        return false;
      }
    }
    //Target is a jack
    //Return true if ace otherwise return false
    else if (target.value === "j") {
      if (mover.value === "a") {
        return true;
      } else {
        return false;
      }
    }
  };

  return checkFaceMove;
};

export default faceCards;
// export { checkFaceMove };
