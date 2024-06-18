const fs = require('fs');
const messages = JSON.parse(fs.readFileSync('./messages.json'));

const readline = require('readline-sync');

const SUITES = ['C', 'S', 'H', 'D'];
const VALUES = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
const HIGH_ACE_VALUE = 11;
const LOW_ACE_VALUE = 1;
const FACE_VALUE = 10;
const GOAL_SUM = 21;
const DEALER_MIN_SUM = 17;

// utility functions
function printMessage(msg) {
  console.log(`=> ${msg}`);
}

function capitalized(word) {
  return word[0].toUpperCase() + word.slice(1);
}

const GAME_STATE = {
  players: {
    player: {
      name: 'player',
      hand: [],
      stay: false,
      bust: false,
      score: 0
    },
    dealer: {
      name: 'dealer',
      hand: [],
      stay: false,
      bust: false,
      score: 0,
    }
  },
  winner: null
};

// initialise and shuffle card deck
function initialiseDeck() {
  let sortedDeck = [];

  // create card deck
  for (let index = 0; index <= VALUES.length - 1; index++) {
    // create set of cards for 4 suites: clubs, spades, hearts, diamonds

    // add suite/card subarrays to array
    SUITES.forEach(suite => {
      sortedDeck.push([suite, VALUES[index]]);
    });
  }

  return sortedDeck;
}

function shuffle(arr) {
  let array = [...arr];

  for (let index = array.length - 1; index > 0; index--) {
    let otherIndex = Math.floor(Math.random() * (index + 1));
    [array[otherIndex], array[index]] = [array[index], array[otherIndex]];
  }

  return array;
}

// give player two cards, give dealer two cards
function initialiseCardHands(player, dealer, shuffledDeck) {
  // give a random card to each player twice
  for (let count = 1; count < 3; count++) {
    // deck is already shuffled so just pop a card off the top
    player.push(shuffledDeck.pop());
    dealer.push(shuffledDeck.pop());
  }
}


function playerTurn(player, shuffledDeck) {
  printMessage(`${JSON.stringify(player.hand)}`);
  printMessage(`This gives your hand a score of ${sumCards(player.hand)}`);

  while (!player.stay && !player.bust) {
    let { hand } = player;
    let hitOrStayResult = hitOrStay();

    if (hitOrStayResult === 'hit') {
      // give another card
      dealCard(hand, shuffledDeck, player.name);

      // check for bust
      if (isBust(hand)) {
        player.bust = true;
        setGameResult(player.name);
        displayResult();
      }
    }

    if (hitOrStayResult === 'stay') {
      player.stay = true;
      dealerTurn(GAME_STATE.players.dealer, shuffledDeck);
    }
  }
}

function dealerTurn(dealer, shuffledDeck) {
  let { hand } = dealer;
  dealer.score = sumCards(dealer.hand);

  while (!dealer.stay && !dealer.bust) {
    if ((dealer.score >= DEALER_MIN_SUM) && (dealer.score <= GOAL_SUM)) {
      dealer.stay = true;
      compareCards(GAME_STATE.players.player, GAME_STATE.players.dealer);
    } else {
      dealCard(hand, shuffledDeck, dealer.name);
      dealer.score = sumCards(dealer.hand);

      // check for bust
      if (isBust(hand)) {
        dealer.bust = true;
        setGameResult(dealer.name);
        displayResult();
      }
    }
  }
}

function compareCards(player, dealer) {
  player.score = sumCards(player.hand);
  dealer.score = sumCards(dealer.hand);

  if (player.score > dealer.score) {
    // dealer is the loser
    setGameResult(dealer.name);
    displayResult();
  } else if (player.score < dealer.score) {
    setGameResult(player.name);
    displayResult();
  } else {
    // in the event of a tie
    displayResult();
  }
}

function hitOrStay() {
  printMessage(messages.hitOrStay);
  // get user input
  let userChoice = readline.question().slice(0, 1).toLowerCase();

  // check input on a loop until input is correct
  if (!['s', 'h'].includes(userChoice)) {
    printMessage(messages.notValidInput);
    userChoice = readline.question().slice(0, 1).toLowerCase();
  }

  return userChoice === 'h' ? 'hit' : 'stay';
}

function dealCard(hand, shuffledDeck, player) {
  printMessage(`${capitalized(player)} dealt new card...`);

  hand.push(shuffledDeck.pop());

  if (player === 'player') {
    printMessage(`This gives ${player} a score of ${sumCards(hand)}`);
  }

  return hand;
}

function correctAceValue(sum) {
  if (sum + HIGH_ACE_VALUE > 21) {
    sum += LOW_ACE_VALUE;
  } else {
    sum += HIGH_ACE_VALUE;
  }

  return sum;
}

function sumCards(hand) {
  let sum = 0;

  hand.forEach(card => {
    if (['J', 'Q', 'K'].includes(card[1])) {
      sum += FACE_VALUE;
    } else if (card[1] === 'A') {
      sum = correctAceValue(sum);
    } else {
      sum += Number(card[1]);
    }
  });

  return sum;
}

function isBust(hand) {
  return sumCards(hand) > GOAL_SUM;
}

function setGameResult(loserName) {
  let winner;

  for (let player in GAME_STATE.players) {
    if (player !== loserName) winner = GAME_STATE.players[player];
  }

  GAME_STATE.winner = winner;
}

function displayResult() {
  let winner = GAME_STATE.winner?.name ?? null;

  // find if someone went bust, display message for that, continue to the winner
  let bustedPlayer = null;

  for (let player in GAME_STATE.players) {
    if (GAME_STATE.players[player].bust) {
      bustedPlayer = GAME_STATE.players[player];
    }
  }

  if (bustedPlayer) {
    printMessage(`${capitalized(bustedPlayer.name)} went bust!`);
  }

  // prints the winner or a tie
  printMessage(winnerOrTie(winner));

}

function winnerOrTie(winner) {
  let message = '';

  if (winner) {
    let score = sumCards(GAME_STATE.players[winner].hand);
    message = `${capitalized(winner)} is the winner with a score of ${score}`;
  } else {
    message = 'It is a tie!';
  }

  return message;
}


function playAgain() {
  let answer = "";

  while (!['y', 'n'].includes(answer)) {
    printMessage(messages.newGame);
    answer = readline.question().slice(0, 1).toLowerCase();
  }

  return answer === 'y';
}

function resetGameState() {
  GAME_STATE.players.player.hand = [];
  GAME_STATE.players.player.stay = false;
  GAME_STATE.players.player.bust = false;
  GAME_STATE.players.player.score = 0;
  GAME_STATE.players.dealer.hand = [];
  GAME_STATE.players.dealer.stay = false;
  GAME_STATE.players.dealer.bust = false;
  GAME_STATE.players.dealer.score = 0;
  GAME_STATE.winner = null;
}

// welcomes user to twenty one
printMessage(messages.welcome);

while (true) {
  console.clear();
  resetGameState();

  // main game loop
  let playerHand = GAME_STATE.players.player.hand;
  let dealerHand = GAME_STATE.players.dealer.hand;

  let sortedDeck = initialiseDeck();
  let shuffledDeck = shuffle(sortedDeck);
  initialiseCardHands(playerHand, dealerHand, shuffledDeck);
  playerTurn(GAME_STATE.players.player, shuffledDeck);

  if (!playAgain()) break;
}

printMessage(messages.bye);