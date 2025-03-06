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
  constructor(suite, rank) {
    this.suite = suite;
    this.rank = rank;
    this.points = points(this.rank); // -> here or maybe only calculated later when checking card scores
  }

  // points(rank) {
  //   // STUB
  //   // face value, 2 values for ace, high card values
  //   // if the card is 1 - 10
  // }
}

class Deck {
  constructor() {
    this.cards = this.build();
  }

  deal() {
    // STUB
    // does the dealer or the deck deal?
  }

  build() {
    let suites = ['spades', 'clubs', 'hearts', 'diamonds'];
    let ranks = ['ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king'];
    let deck = [];

    for (let suite of suites) {
      for (let rank of ranks) {
        deck.push(new Card(suite, rank));
      }
    }

    return deck;
  }
}

class Participant {
  static INITIAL_SCORE = 0;

  constructor() {
    this.score = Participant.INITIAL_SCORE;
    this.hand = [];
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
    // given an array
    // find the score of each card's rank in the array
    // tally score
    // return score
    // if the current card rank is 1 - 9 
      // add face value to score
    // if the current card is a 10, JACK, QUEEN, or KING
      // add  10 to score
    // if the current card is ace AND current card + current score is >21
      // add 1 to score
    // else add 11 to socore
  }

}

class Player extends Participant {
  static INITIAL_MONEY = 5;

  constructor() {
    super();
    this.money = Player.INITIAL_MONEY;
  }
}

class Dealer extends Participant {
  constructor() {
    super();
  }

  hide() {
    // STUB
  }

  reveal() {
    // STUB
  }

  deal(deck, player) {
    let randomIndex = Math.floor(Math.random(1 * deck.length));
    let randomCard = deck.splice(randomIndex, 1)[0];

    player.hand.push(randomCard);
  }
}

class TwentyOneGame {
  constructor() {
    this.deck = new Deck();
    this.player = new Player();
    this.dealer = new Dealer();
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
    let cards = this.deck.cards;

    this.dealer.deal(cards, this.player);
    this.dealer.deal(cards, this.dealer);
    this.dealer.deal(cards, this.player);
    this.dealer.deal(cards, this.dealer);
  }

  showCards() {
    let oneDealerCard = `${this.dealer.hand[0].rank} of ${this.dealer.hand[1].suite}`;
    let playerCards = [];
    this.player.hand.forEach(card => playerCards.push(`${card.rank} of ${card.suite}`));

    console.log(`Dealer card: ${oneDealerCard}`);
    console.log(`Player cards: ${playerCards.join(' and ')}`);
  }

  playerTurn() {
    // STUB
  }

  dealerTurn() {
    // STUB
  }

  displayWelcomeMessage() {
    console.log("Welcome to 21!");
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