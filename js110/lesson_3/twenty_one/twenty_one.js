const fs = require('fs');
const messages = JSON.parse(fs.readFileSync('./messages.json'));

const readline = require('readline-sync');

const SUITES = ['Clubs', 'Spades', 'Hearts', 'Diamonds'];
const VALUES = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
const ACE_VALUE = 11;
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
      score: 0,
      wins: 0
    },
    dealer: {
      name: 'dealer',
      hand: [],
      stay: false,
      bust: false,
      score: 0,
      wins: 0
    }
  },
  winner: null,
  firstGame: true,
};

// initialise and shuffle card deck
function initialiseDeck() {
  let sortedDeck = [];

  // create card deck
  // add suite/card subarrays to array
  SUITES.forEach(suite => {
    for (let index = 0; index <= VALUES.length - 1; index++) {
      sortedDeck.push({ suite: suite, value: VALUES[index]});
    }
  });

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
  printMessage(`You have a ${player.hand[0].value} of ${player.hand[0].suite} and a ${player.hand[1].value} of ${player.hand[1].suite}`);
  printMessage(`This gives your hand a score of ${player.score}`);

  while (!player.stay && !player.bust) {
    let { hand } = player;
    let hitOrStayResult = hitOrStay();

    if (hitOrStayResult === 'hit') {
      // give another card
      dealCard(hand, shuffledDeck, player.name);

      // check for bust
      if (isBust(player)) {
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
  while (!dealer.stay && !dealer.bust) {
    if ((dealer.score >= DEALER_MIN_SUM) && (dealer.score <= GOAL_SUM)) {
      dealer.stay = true;
      compareCards(GAME_STATE.players.player, GAME_STATE.players.dealer);
    } else {
      dealCard(dealer.hand, shuffledDeck, dealer.name);

      // check for bust
      if (isBust(dealer)) {
        dealer.bust = true;
        setGameResult(dealer.name);
        displayResult();
      }
    }
  }
}

function compareCards(player, dealer) {
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
  // get user input
  let userChoice = readline.question(messages.hitOrStay);

  // check input on a loop until input is correct
  while (!['s', 'h'].includes(userChoice.toLowerCase())) {
    userChoice = readline.question(messages.notValidInput);
  }

  return userChoice === 'h' ? 'hit' : 'stay';
}

function dealCard(hand, shuffledDeck, player) {
  printMessage(`${capitalized(player)} dealt new card...`);

  hand.push(shuffledDeck.pop());

  GAME_STATE.players[player].score = sumCards(hand);

  if (player === 'player') {
    let { value, suite } = GAME_STATE.players[player].hand[hand.length - 1];
    printMessage(`... ${value} of ${suite}`);
    printMessage(`This gives ${player} a score of ${GAME_STATE.players[player].score}`);
  }

  return hand;
}

function sumCards(hand) {
  let sum = 0;

  hand.forEach(card => {
    if (['Jack', 'Queen', 'King'].includes(card.value)) {
      sum += FACE_VALUE;
    } else if (card.value === 'Ace') {
      sum += ACE_VALUE;
    } else {
      sum += Number(card.value);
    }
  });

  // correct for aces by subtracting 10 for each ace (if score is over GOAL_SUM)
  hand.filter(card => card.value === 'Ace').forEach(_ => {
    if (sum > GOAL_SUM) {
      sum -= 10;
    }
  });

  return sum;
}

function isBust(player) {
  return  player.score > GOAL_SUM;
}

function setGameResult(loserName) {
  let winner;

  for (let player in GAME_STATE.players) {
    if (player !== loserName) winner = GAME_STATE.players[player];
  }

  GAME_STATE.winner = winner;
  winner.wins += 1;

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

function numOfWins(winner) {
  if (GAME_STATE.players[winner].wins === 1) {
    return "1 win";
  } else {
    return `${GAME_STATE.players[winner].wins} wins`;
  }
}

function winnerOrTie(winner) {
  let message = '';

  if (winner) {
    let score = GAME_STATE.players[winner].score;
    message = `${capitalized(winner)} is the winner with a score of ${score} (${numOfWins(winner)})`;
  } else {
    message = 'It is a tie!';
  }

  return message;
}


function playAgain() {
  let answer = readline.question(messages.newGame);

  while (!['y', 'n'].includes(answer.toLowerCase())) {
    answer = readline.question(messages.newGame);
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

function matchWinner() {
  let matchWinner = false;
  // find if someone has a score of 3 wins
  for (let player in GAME_STATE.players) {
    let numOfWins = GAME_STATE.players[player].wins;
    if (numOfWins === 3) {
      printMessage(`${capitalized(player)} is the match winner with ${numOfWins} wins!`);
      matchWinner = true;
    }
  }

  return matchWinner;
}


while (true) {

  console.clear();

  // welcomes user to twenty one
  if (GAME_STATE.firstGame) printMessage(messages.welcome);
  // welcomes user to twenty one
  else printMessage(messages.welcomeToNewGame);

  resetGameState();

  // main game loop

  let playerHand = GAME_STATE.players.player.hand;
  let dealerHand = GAME_STATE.players.dealer.hand;

  let sortedDeck = initialiseDeck();
  let shuffledDeck = shuffle(sortedDeck);
  initialiseCardHands(playerHand, dealerHand, shuffledDeck);

  GAME_STATE.players.player.score = sumCards(playerHand);
  GAME_STATE.players.dealer.score = sumCards(dealerHand);

  playerTurn(GAME_STATE.players.player, shuffledDeck);

  if (matchWinner()) break;
  if (!playAgain()) break;

  // at this point, the first game is completed
  GAME_STATE.firstGame = false;
}

printMessage(messages.bye);