const faceCards = () => {


// const faceMove = (mover, target, card, row) => {
//   if (
//     (mover === "j" || mover === "q" || mover === "k" || mover === "a") &&
//     (target !== "j" || target !== "q" || target !== "k" || target !== "a")
//   ) {
//     //Move facecard to not facecard
//     //This isn't allowed so deny the move
//     alert("That card can't be moved there value", card.value, movecard.value);
//     console.log(
//       "That card can't be moved there value",
//       card.value,
//       movecard.value
//     );
//     setMoveCard(null);
//     setRow(0);
//   } else if (
//     (mover !== "j" || mover !== "q" || mover !== "k" || mover !== "a") &&
//     (target === "j" || target === "q" || target === "k" || target === "a")
//   ) {
//     //Move not face card to face card
//     moveCards(moveRow, movePos, row);
//   } else {
//     //Move one face card to another face card
//     if (checkFaceMove(mover, target)) {
//       moveCards(moveRow, movePos, row);
//     } else {
//       alert("That card can't be moved there value", card.value, movecard.value);
//       console.log(
//         "That card can't be moved there value",
//         card.value,
//         movecard.value
//       );
//       setMoveCard(null);
//       setRow(0);
//     }
//   }
// };

//Run checks to see if we should move one face card to another
const checkFaceMove = (mover, target) => {
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
    if (mover.value === "q" || mover.value === "k") {
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

return checkFaceMove

};

export default faceCards;
// export { checkFaceMove };
