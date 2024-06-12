// initialise and shuffle card deck
function initialiseDeck() {
  let sortedDeck = [];

  // create card deck
  for (let index = 0; index <= 12; index++) {
    // create set of cards for 4 suites: clubs, spades, hearts, diamonds
    const suites = ['C', 'S', 'H', 'D'];
    const cards = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

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

let sortedDeck = initialiseDeck();
let shuffledDeck = shuffle(sortedDeck);

console.log(shuffledDeck);

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


// CALCULATING HAND SCORE
// let playerCards = [['H', '3'], ['S', 'Q'], ['D', 'A'] ]

// function total(cards) {
//   let values = cards.map(subArr => subArr[1]);
//   let sum = 0;

//   values.forEach(value => {
//     if (['J', 'Q', 'K'].includes(value)) {
//       sum += 10
//     } else if (value === 'A') {
//       sum + 11 > 21 ? sum += 1 : sum += 11;
//     } else {
//       sum += Number(value);
//     }
//   })

//   return sum;

// }

// console.log(total(playerCards))


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


