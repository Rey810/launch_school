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

// game constants
const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';
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

// used to control game and match loop continuation. Reset each match
const GAME_STATE = {
  gamesWon: {
    player: 0,
    computer: 0
  },
  gamesOver: false,
  matchOver: false,
  exitProgram: false,
}

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
    
    clearConsole();
    displayBoard(board);
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
    if (square) return square;
  }
  
  return null;
}

function computerChoosesSquare(board){
  let square;

  // offense or defense (check for offense first)
  square = getDefenseOrOffenseSquare(board, COMPUTER_MARKER) || getDefenseOrOffenseSquare(board, HUMAN_MARKER);

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
      ) return 'player';
      else if (
        board[sq1] === COMPUTER_MARKER &&
        board[sq2] === COMPUTER_MARKER &&
        board[sq3] === COMPUTER_MARKER        
    ) return 'computer';
  }

  return null;
}

function updateScore(winner, board) {
  GAME_STATE.gamesWon[winner] += 1;

  // check if the match is over
  if (GAME_STATE.gamesWon[winner] === GAMES_TO_WIN_MATCH) {
    printMessage(`${capitalised(winner)} won the match with ${GAME_STATE.gamesWon[winner]} wins!`);
    GAME_STATE.matchOver = true;
  } else {
    // print winner of this game
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

function endMatchCheck() {
  return !!GAME_STATE.matchOver;
}

function playAnotherMatchCheck() {
  // ask user if they want to play a new match
  printMessage(messages.newMatch);
  
  let userMatchAnswer = "";
  
  while (!YES_OR_NO.includes(userMatchAnswer)) {
    printMessage(messages.yesOrNo)
    userMatchAnswer = readline.question().toLowerCase();
    
    // resets all match related variables if user wants to play another match
    if (YES_OR_NO[0] === userMatchAnswer) {
      GAME_STATE.gamesWon.player = 0;
      GAME_STATE.gamesWon.computer = 0;
      GAME_STATE.gamesOver = false;
      GAME_STATE.matchOver = false;
      playMatch();
    } else {
      GAME_STATE.exitProgram = true;
      printMessage(messages.bye);
    }
  }
}

function playMatch() {
  // a match continues until the user quits mid-match or the player/computer gets 5 game wins
  while (GAME_STATE.matchOver === false) {
    
    // continues until games are done being played 
    while(GAME_STATE.gamesOver === false) {
      printMessage(messages.details);
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
        clearConsole();
        updateScore(detectWinner(board), board);
        if (endMatchCheck()) break;
      } else {
        printMessage(messages.gameResult.tie)
      }

      displayBoard(board);
      printMessage(`The current score is: Player: ${GAME_STATE.gamesWon.player}, Computer: ${GAME_STATE.gamesWon.computer}`)

      // check if player wants to play another game
      let userGameAnswer = "";
    
      while (!YES_OR_NO.includes(userGameAnswer)) {
        clearConsole();
        printMessage(messages.newGame);
        printMessage(messages.yesOrNo)
        userGameAnswer = readline.question().toLowerCase();
        
        // stops the current match if user chooses to not play any more games
        if (YES_OR_NO[1] === userGameAnswer) {
          GAME_STATE.gamesOver = true;
          GAME_STATE.matchOver = true;
        } 
      };

    }
  }


}

// welcomes user to tictactoe
printMessage(messages.welcome);

// controls program flow
// exitProgram set to true within playAnotherMatchCheck if user does not want to play another match
while (GAME_STATE.exitProgram === false) {
  playMatch();
  // invoked when a user quits mid-match or a match is over due to a score reaching GAMES_TO_WIN_MATCH
  playAnotherMatchCheck();
};