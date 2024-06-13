const fs = require('fs');
const messages = JSON.parse(fs.readFileSync('./messages.json'));

const readline = require('readline-sync');

// utility functions
function clearConsole() {
  console.clear();
}

function capitalised(word) {
  let capitalised = word.slice(0, 1).toUpperCase() + word.slice(1);
  return capitalised;
}

// game constants
const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O'
const GAMES_TO_WIN_MATCH = 5;
const WINNING_LINES = [
  [1, 2, 3], [4, 5, 6], [7, 8, 9],
  [1, 4, 7], [2, 5, 8], [3, 6, 9],
  [1, 5, 9], [3, 5, 7]
];
// can be hardcoded to "player" or "computer" if one does not want to give user the choice
const WHO_STARTS = 'choose';
// used when evaluating user input to continue playing 
const YES_OR_NO = ['y','n'];

// used to control game and match loop continuation
let gamesOver = false;
let matchOver = false;

function printMessage(message) {  
  console.log(message);
}

function displayBoard(board) {  
  console.log('');
  console.log('     |     |');
  console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}`);
  console.log('     |     |');
  console.log('');
}

function initializeBoard() {
  let board = {};

  for (let square = 1; square <= 9; square++){
    board[square] = INITIAL_MARKER;
  }

  return board;
}

function emptySquares(board) {
  return Object.keys(board).filter(key => board[key] === INITIAL_MARKER);
}

function playerChoosesSquare(board) {
  let square;


  while(true) {
    printMessage(`Choose a square: ${joinOr(emptySquares(board))}`);
    square = readline.question().trim();

    if (emptySquares(board).includes(square)) break;
    
    printMessage(messages.notValidSquare);

  }

  board[square] = HUMAN_MARKER;
}

function findAtRiskSquare(line, board, marker) {
  let markersInLine = line.map(square => board[square]);

  if (markersInLine.filter(val => val === marker).length === 2) {
    let unusedSquare = line.find(square => board[square] === INITIAL_MARKER);
    if (unusedSquare !== undefined) {
      return unusedSquare
    }
  }
  
  return null;
}

function getDefenseOrOffenseSquare(board, marker) {
  let square;
  // defend or attack depending on whether there is a threat from the HUMAN_MARKER or an opportunity to attack and finish the game
  for(let index = 0; index < WINNING_LINES.length; index++) {
    let line = WINNING_LINES[index];
    square = findAtRiskSquare(line, board, marker);
    if (square) break;
  }

  // returns undefined if there is no need to defend or opportunity to attack
  return square;
}

function computerChoosesSquare(board){
  let square;

  // offense
  square = getDefenseOrOffenseSquare(board, COMPUTER_MARKER);

  // defense
  square = getDefenseOrOffenseSquare(board, HUMAN_MARKER);

  // pick square #5 (if available) 
  if (board['5'] === INITIAL_MARKER) {
    square = 5;
  } 
  
  // pick a random square
  if (!square) {    
    let randomIndex = Math.floor(Math.random() * emptySquares(board).length);
    square = emptySquares(board)[randomIndex];
  }

  board[square] = COMPUTER_MARKER;

}

function boardFull(board){
  return emptySquares(board).length === 0;
}

function someoneWon(board){
  return !!detectWinner(board);
}

function detectWinner(board){

  for (let line = 0; line < WINNING_LINES.length; line ++) {
    let [ sq1, sq2, sq3 ] = WINNING_LINES[line];

    if (
        board[sq1] === HUMAN_MARKER &&
        board[sq2] === HUMAN_MARKER &&
        board[sq3] === HUMAN_MARKER
      ) return 'player'
      else if (
        board[sq1] === COMPUTER_MARKER &&
        board[sq2] === COMPUTER_MARKER &&
        board[sq3] === COMPUTER_MARKER        
    ) return 'computer'
  }

  return null;
}

function joinOr(array, delimiter = ', ', joiningWord = 'or'){
  let result = '';

  if (array.length === 0) return result;

  if (array.length === 1) return `${array[0]}`;

  if (array.length < 3) return result = `${array[0]} ${joiningWord} ${array[1]}`

  if (array.length > 2) {
    return result = array.slice(0, array.length - 1)
                         .join(delimiter) + `${delimiter}${joiningWord} ${array[array.length - 1]}`;
  }
}

function updateScore(winner, gamesWon, board) {
  gamesWon[winner] += 1;
  
  if (gamesWon[winner] === GAMES_TO_WIN_MATCH) {
    printMessage(`${capitalised(winner)} won the match with ${gamesWon[winner]} wins!`);
    matchOver = true;
  } else {
    printMessage(`${capitalised(detectWinner(board))} won!`)
  }
}

function determineWhoStarts(who) {
  let starter = null;

  if (who === 'choose') {

    while (!starter) {
      printMessage(messages.whoStarts);
      let starterInput = readline.question()[0]

      if (starterInput === 'p') {
        starter = 'player';
      }

      if (starterInput === 'c') {
        starter = 'computer';
      }
    }

  }

  return starter;
}

function chooseSquare(board, currentPlayer) {
  currentPlayer === 'player' ? playerChoosesSquare(board) : computerChoosesSquare(board);
}

function alternatePlayer(currentPlayer) {
  // returns the other player (not the current player)
  return currentPlayer === 'player' ? 'computer' : 'player'; 
}

// a match continues until the user quits mid-match or the player/computer gets 5 game wins
while (matchOver === false) {
  printMessage(messages.welcome);

  // reset each match
  const gamesWon = {
    player: 0,
    computer: 0
  }

  // continues until games are done being played 
  while(gamesOver === false) {
    let board = initializeBoard();
    let starter = determineWhoStarts(WHO_STARTS);
    let currentPlayer = starter;

    // continues until there is a winner or the board is full
    while (true) {
      clearConsole();
      displayBoard(board);
      
      chooseSquare(board, currentPlayer)
      currentPlayer = alternatePlayer(currentPlayer)
      if (someoneWon(board) || boardFull(board)) break; 
    }
  
  
    if (someoneWon(board)) {
      updateScore(detectWinner(board), gamesWon, board);
    } else {
      printMessage(messages.gameResult.tie)
    }

    displayBoard(board);
    printMessage(`The current score is: Player: ${gamesWon.player}, Computer: ${gamesWon.computer}`)
    printMessage(messages.newGame);

    // check if player wants to play another game
    let userGameAnswer = "";
  
    while (!YES_OR_NO.includes(userGameAnswer)) {
      printMessage(messages.YesOrNo)
      userGameAnswer = readline.question().toLowerCase();
      
      if (YES_OR_NO[1] === userGameAnswer) {
        gamesOver = true;
      }
    };

  }

  if (gamesOver) {
    printMessage(messages.bye);
    break;
  }

  printMessage(messages.newMatch);

  let userMatchAnswer = "";
  
  while (!YES_OR_NO.includes(userMatchAnswer)) {
    printMessage(messages.YesOrNo)
    userMatchAnswer = readline.question().toLowerCase();
    
    if (YES_OR_NO[1] === userMatchAnswer) {
      gamesWon.player = 0;
      gamesWon.computer = 0;
      matchOver = false;
    }
  };

  printMessage(messages.bye);
}