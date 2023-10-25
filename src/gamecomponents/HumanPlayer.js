const Deck = require("./Deck");
const Card = require("./Card");
const Player = require("./Player");
/**
 * Interact with the human player to obtain their desired play.
 */
class HumanPlayer extends Player {
  /**
   * Record arguments for later use.
   * @param {Deck} deck - The deck of cards used for this game.
   * @param {Pile} pile - The discard pile.
   * @param {View} view - The View object used for all user interaction.
   */
  constructor(deck, pile) {
    super(deck);

    //this.presenter=presenter;
    this.deck = deck;
    this.pile = pile;

    //True if it is the players turn to ask opponent for a card
    this.fish = true;
  }

  replaceDeck(deck) {
    this.deck = deck;
  }

  cardPicked() {
    let newCard = this.deck.dealACard();
    this.list.push(newCard);
  }

  fishCardPicked() {
    let newCard = this.deck.dealACard();
    this.list.push(newCard);
  }

  cardSelected(cardString) {
    // let moving = true;
    let card = this.find(cardString);
    // let image = document.getElementById(cardString + "E");
    // let pimage = document.getElementById("pile");

    //picked an ineligible card to play
    if (card == null || !this.pile.isValidToPlay(card)) {
      this.view.displayWrongCardMsg(cardString);
      return false; //Call cardPicked() after user selects a different card
    } else {
      //card is eligible to play
      let suit = card.getSuit();
      //this.view.moveToPile(d);
      this.remove(this.list.indexOf(card));
      this.pile.acceptACard(card);

      //this.view.displayPileTopCard(card);
      // this.view.displayHumanHand(this.getHandCopy());

      if (card.getValue() === "8") {
        //user played an eight
        if (this.isHandEmpty()) {
          return true;
        } else {
          // this.view.displaySuitPicker();
          return false;
        }
        // Continue after user picks a suit.
      }
      // this.view.displaySuit(card.getSuit());
      return true;
    }
  }

  nullifyCard() {
    this.fishCard = null;
    this.fishCards.splice(0);
  }

  fish(cardString) {
    if (this.hasDuplicate()) {
      this.view.displayDupCardMsg();
      //let dup=this.findDups();
      //this.removeDups(dup);
      return null;
    }
    let card = this.find(cardString);
    if (card == null) {
      this.view.displayWrongCardMsg(cardString);
      //this.remove(this.list.indexOf(card));
      return null;
    } else {
      return card;
      //presenter.askComputerforcard
    }
  }

  give(cardString, comCard) {
    let card = this.find(cardString);
    if (card == null || card.getValue() !== comCard.getValue()) {
      this.view.displayWrongCardMsg(comCard);
      return false;
    } else {
      this.fishCard = card;
      this.remove(this.list.indexOf(card));
      //this.pile.acceptACard(card);
      this.view.displayHumanHand(this.getHandCopy());
      return true;
    }
  }

  suitPicked(suit) {
    if (!(suit === "c" || suit === "d" || suit === "h" || suit === "s")) {
      return false; // Have the user pick different suit.
    }
    this.pile.setAnnouncedSuit(suit);
    this.view.undisplaySuitPicker();
    return true;
  }
}

if (typeof module === "object") {
  module.exports = HumanPlayer;
}
