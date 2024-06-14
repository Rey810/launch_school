const fs = require('fs');
const messages = JSON.parse(fs.readFileSync('./messages.json'));

const readline = require('readline-sync');

// utility functions
function printMessage(msg) {
  console.log(`=> ${msg}`);
}

function capitalized(word) {
  return word[0].toUpperCase() + word.slice(1);
}

const GAME_STATE = {
  players: {
    player1:
    {
      name: 'player',
      hand: [],
      stay: false,
      bust: false,
    },
    player2: 
    {
      name: 'dealer',
      hand: [],
      stay: false,
      bust: false
    },
  },
  winner: null
}

let sortedDeck = initialiseDeck();
let shuffledDeck = shuffle(sortedDeck);
initialiseCardHands(GAME_STATE.players.player1.hand, GAME_STATE.players.player2.hand);
playerTurn(GAME_STATE.players.player1)


// initialise and shuffle card deck
function initialiseDeck() {
  let sortedDeck = [];

  const suites = ['C', 'S', 'H', 'D'];
  const cards = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
  
  // create card deck
  for (let index = 0; index <= cards.length - 1; index++) {
    // create set of cards for 4 suites: clubs, spades, hearts, diamonds

    // add suite/card subarrays to array
    suites.forEach(suite => {
      sortedDeck.push([suite, cards[index]])
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
function initialiseCardHands(player1, player2) {
  // give a random card to each player twice
  for (let count = 1; count < 3; count++) {
    // deck is already shuffled so just pop a card off the top
    player1.push(shuffledDeck.pop())
    player2.push(shuffledDeck.pop())
  }
}

// playerturn
//       - player hits or stays
//         - continues until player busts or stays
//           - if busts, dealer wins
//             - display that dealer is the winner
//           - if stays, dealerturn unless dealer has stayed (in which case compare cards)
function playerTurn(player){

  while (!player.stay && !player.bust) {
    let { hand } = player

    if (hitOrStay() === 'hit') {
      // give another card
      dealCard(hand);
      // check for bust
      if (isBust(hand)) {
        player.bust = true;
        setGameResult(player.name);
        displayWinner();
      }

      console.log(GAME_STATE);
      // hitOrStay
    };
  }


  // if (bust) return displayWinner(dealer);
  // if (stay) dealerTurn(DEALER_HAND);
}

function hitOrStay(){
  printMessage(messages.hitOrStay)
  // get user input
  userChoice = readline.question().slice(0, 1).toLowerCase();

  console.log(userChoice);
  // check input
  // loop until input is correct
  if (!['s', 'h'].includes(userChoice)) {
    printMessage(messages.notValidInput);
    userChoice = readline.question().slice(0, 1).toLowerCase();
  }

  return userChoice === 'h' ? 'hit' : 'stay';

  // if stay, player.stay = true
  // if hit, deal card, check for bust, hitOrStay again
}

function dealCard(hand) {
  return hand.push(shuffledDeck.pop());
}

function isBust(hand) {
  let sum = 0;
  
  hand.forEach(card => {
    if (['J', 'Q', 'K'].includes(card[1])) {
      sum += 10;
    } else if (card[1] === 'A') {
      sum + 11 > 21 ? sum += 1 : sum += 11;
    } else {
      sum += Number(card[1]);
    }
  });

  console.log('isBust score', sum);

  return sum > 21;
}

function setGameResult(loserName) {
  let winner;
  for (let player in GAME_STATE.players) {
    if (player.name !== loserName) winner = GAME_STATE.players[player];
  }

  GAME_STATE.winner = winner;
  console.log('inside set game result', { GAME_STATE })
}

function displayWinner() {
  let winner = GAME_STATE.winner.name;

  printMessage(`${capitalized(winner)} is the winner!`)
}

/* data structure 
deck: {
  spades: [
    2, 3, 4... , J, Q, K, A
  ],
  clubs: {
    ...
  }

}

player: [
  ['S', '2']
]

dealer: [
  ...cards
]

*/





// DEALEAR TURN
// function dealerTurn() {
  // hit until:
  //              1. score is at least 17 but <= 21 (then stay)
  //              2. score goes above 17 (bust)
// }
// PLAYER TURN
// function playerTurn() {
//   while (true) {
//     console.log('Hit or stay');
//     let answer = readline.question();
//     if (answer === 'stay' || bust()) break
//   }
// }

// if (busted()) {
//   // end game or ask player to play again
// } else {
//   console.log('You chose to stay!')
// }

// SHUFFLE CARDS BEFORE DEALING
// function shuffle(arr){
//   for (let index = arr.length - 1; index > 0; index--) {
//     let otherIndex = Math.floor(Math.random() * (index + 1));
//     [arr[otherIndex], arr[index]] = [arr[index], arr[otherIndex]];
//   }

//   return arr;
// }

// console.log(shuffle([1, 2, 3, 4, 5]));


// FUNCTION FOR RESULT OF GAME

// FUNCTION FOR DISPLAYING GAME RESULT


// ALGORITHM
// create data structures for the deck, player cards and dealer cards
// start gameloop
//    shuffle deck
//    give player two cards, give dealer two cards
//    playerturn
//       - player hits or stays
//         - continues until player busts or stays
//           - if busts, dealer wins
//             - display that dealer is the winner
//           - if stays, dealerturn unless dealer has stayed (in which case compare cards)
//    dealerturn
//       - dealer hits until stay (when total is at least 17 but less than 21) or bust
//         - if stay, back to player
//         - if bust, player wins
//           - display that player is the winner
//    ask user if they want to play again, 
//        - if yes, shuffle cards and rerun game loop 
//        - if no, say bye and quit


