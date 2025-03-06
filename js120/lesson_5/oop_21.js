/* nouns and verbs
REQUIREMENTS:
1. Each time the player has an opportunity to hit or stay:
  - Display the computer's hand; one card should remain hidden.
  - Display the player's hand and her point total.

2. For the dealer's turn:
  - The dealer doesn't play at all if the player busts.
  - Display the dealer's hand, including the hidden card, and report his point total.
  - Redisplay the dealer's hand and point total and each time he hits.
  - Display the results when the dealer stays.

3. After each game is over, ask the player if they want to play again. Start a new game if they say yes, else end the game.

4. When the program starts, give the player 5 dollars with which to bet. Deduct 1 dollar each time she loses, and add 1 dollar each time she wins. The program should quit when she is broke (0 dollars) or rich (has a total of 10 dollars).

5. Be prepared to run out of cards. You can either create a new deck for each game, or keep track of how many cards remain and create a new deck as needed.
*/

class Card { 
  constructor(suit, rank, points) {
    // STUB
    // What sort of state does a card need?
    // Rank? Suit? Points?
    this.suit = suit;
    this.rank = rank;
    this.points = points;
  }
}

class Deck {
  // static suits = ['spades', 'clubs', 'hearts', 'diamonds'];
  // static rank = ['ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king'];

  constructor() {
    this.deck = this.build();
    // STUB
    // What sort of state does a deck need?
    // 52 cards?
    // data strucutre to keep track of the cards
  }

  deal() {
    // STUB
    // does the dealer or the deck deal?
  }

  build() {
    let suits = ['spades', 'clubs', 'hearts', 'diamonds'];
    let ranks = ['ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king'];
    let deck = [];

    for (let suit of suits) {
      for (let rank of ranks) {
        deck.push([suit, rank]);
      }
    }
    return deck.length;
  }
}

class Participant {
  constructor() {
    // STUB
    // What sort of state does the participant need?
    // Score? Hand? Amount of money available?
    // What else? What's redundant in Player and Dealer?
  }
}

class Player extends Participant {
  constructor() {
    // STUB
    // What sort of state does a player need?
    // Score? Hand? Amount of money available?
  }

  hit() {
    // STUB
  }

  stay() {
    // STUB
  }

  isBusted() {
    // STUB
  }

  score() {
    // STUB
  }
}

class Dealer extends Participant {
  // very similar to a Player; is it needed?

  constructor() {
    // STUB
    // What sort of state does a dealer need?
    // Score? Hand? Deck of cards?
  }

  hit() {
    // STUB
  }

  stay() {
    // STUB
  }

  isBusted() {
    // STUB
  }

  score() {
    // STUB
  }

  hide() {
    // STUB
  }

  reveal() {
    // STUB
  }

  deal() {
    // STUB
    // does the dealer or the deck deal?
  }
}

class TwentyOneGame {
  constructor() {
    // STUB
    // What sort of state does the game need?
    // A deck? Two participants?
  }

  start() {
    // SPIKE
    this.displayWelcomeMessage();
    this.dealCards();
    this.showCards();
    this.playerTurn();
    this.dealerTurn();
    this.displayResult();
    this.displayGoodbyeMessage();
  }

  dealCards() {
    // STUB
  }

  showCards() {
    // STUB
  }

  playerTurn() {
    // STUB
  }

  dealerTurn() {
    // STUB
  }

  displayWelcomeMessage() {
    // STUB
  }

  displayGoodbyeMessage() {
    // STUB
  }

  displayResult() {
    // STUB
  }
}

let game = new TwentyOneGame();
game.start();

let deck = new Deck();
console.log(deck);