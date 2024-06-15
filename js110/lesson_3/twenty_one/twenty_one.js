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
}

// initialise and shuffle card deck
function initialiseDeck() {
  let sortedDeck = [];

  // create card deck
  for (let index = 0; index <= VALUES.length - 1; index++) {
    // create set of cards for 4 suites: clubs, spades, hearts, diamonds

    // add suite/card subarrays to array
    SUITES.forEach(suite => {
      sortedDeck.push([suite, VALUES[index]])
    })
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
function initialiseCardHands(player, dealer) {
  // give a random card to each player twice
  for (let count = 1; count < 3; count++) {
    // deck is already shuffled so just pop a card off the top
    player.push(shuffledDeck.pop())
    dealer.push(shuffledDeck.pop())
  }
}


function playerTurn(player){
  printMessage(`Your current hand is as follows: ${JSON.stringify(player.hand)}`);

  while (!player.stay && !player.bust) {
    let { hand } = player

    let hitOrStayResult = hitOrStay();

    if (hitOrStayResult === 'hit') {
      // give another card
      dealCard(hand);
      printMessage(`Your hand now has ${hand.length} cards: ${JSON.stringify(player.hand)}`);

      // check for bust
      if (isBust(hand)) {
        player.bust = true;
        setGameResult(player.name);
        displayResult();
      }
    };

    if (hitOrStayResult === 'stay') {
      player.stay = true;
      // if stays, dealerturn unless dealer has stayed (in which case compare cards)
      GAME_STATE.players.dealer.stay = false ? dealerTurn(GAME_STATE.players.dealer) : compareCards(GAME_STATE.players.player, GAME_STATE.players.dealer);
    }
  }
}

function dealerTurn(dealer) {
  let { hand } = dealer;
  dealer.score = sumCards(dealer.hand);

  while(!dealer.stay && !dealer.bust) {
    if ((dealer.score > DEALER_MIN_SUM) && (dealer.score <= GOAL_SUM)) {
      dealer.stay = true;
      compareCards(GAME_STATE.players.player, GAME_STATE.players.dealer);
    } else {
      dealCard(hand);

      // check for bust
      if (isBust(hand)) {
        player.bust = true;
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

function hitOrStay(){
  printMessage(messages.hitOrStay)
  // get user input
  userChoice = readline.question().slice(0, 1).toLowerCase();

  // check input on a loop until input is correct
  if (!['s', 'h'].includes(userChoice)) {
    printMessage(messages.notValidInput);
    userChoice = readline.question().slice(0, 1).toLowerCase();
  }

  return userChoice === 'h' ? 'hit' : 'stay';
}

function dealCard(hand) {
  return hand.push(shuffledDeck.pop());
}

function sumCards(hand) {
  let sum = 0;
  
  hand.forEach(card => {
    if (['J', 'Q', 'K'].includes(card[1])) {
      sum += FACE_VALUE;
    } else if (card[1] === 'A') {
      sum + HIGH_ACE_VALUE > 21 ? sum += LOW_ACE_VALUE : sum += HIGH_ACE_VALUE;
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
    
  // prints the winner or a tie
  winner ? printMessage(`${capitalized(winner)} is the winner!`) : printMessage("It's a tie!")
}

// GAME FLOW
let sortedDeck = initialiseDeck();
let shuffledDeck = shuffle(sortedDeck);
initialiseCardHands(GAME_STATE.players.player.hand, GAME_STATE.players.dealer.hand);
playerTurn(GAME_STATE.players.player);