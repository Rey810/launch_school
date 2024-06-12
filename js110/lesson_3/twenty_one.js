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