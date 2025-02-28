/* eslint-disable quote-props */
let readline = require("readline-sync");
class Square {
  static UNUSED_SQUARE = " ";
  static HUMAN_MARKER = "X";
  static COMPUTER_MARKER = "O";

  constructor(marker = Square.UNUSED_SQUARE) {
    // We need some way to keep track of this square's marker.
    this.marker = marker;
  }

  setMarker(marker) {
    this.marker = marker;
  }

  toString() {
    return this.marker;
  }
}

class Board {
  constructor() {
    this.squares = {};

    for (let counter = 1; counter <= 9; counter++) {
      this.squares[counter] = new Square();
    }
  }

  markSquareAt(key, marker) {
    this.squares[key].setMarker(marker);
  }

  display() {
    console.log("");
    console.log("     |     |");
    console.log(`  ${this.squares["1"]}  |  ${this.squares["2"]}  |  ${this.squares["3"]}`);
    console.log("     |     |");
    console.log("-----+-----+-----");
    console.log("     |     |");
    console.log(`  ${this.squares["4"]}  |  ${this.squares["5"]}  |  ${this.squares["6"]}`);
    console.log("     |     |");
    console.log("-----+-----+-----");
    console.log("     |     |");
    console.log(`  ${this.squares["7"]}  |  ${this.squares["8"]}  |  ${this.squares["9"]}`);
    console.log("     |     |");
    console.log("");
  }
}

class Row {
  constructor() {
    // We need some way to identify a row of 3 squares
  }
}

class Player {
  constructor(marker) {
    // maybe a "marker" to keep track of this player's symbol (i.e., 'X' or 'O')
    this.marker = marker;
  }

  getMarker() {
    return this.marker;
  }

  play() {
    // We need a way for each player to play the game.
    // Do we need access to the board?
  }
}

class Human extends Player {
  constructor() {
    super(Square.HUMAN_MARKER);
  }
}

class Computer extends Player {
  constructor() {
    super(Square.COMPUTER_MARKER);
  }
}

class TTTGame {
  constructor() {
    // Need a board and two players
    this.board = new Board();
    this.human = new Human();
    this.computer = new Computer();
  }

  play() {
    this.displayWelcomeMessage();

    while (true) {
      this.board.display();

      this.humanMoves();
      this.board.display();
      if (this.gameOver()) break;

      this.computerMoves();
      this.board.display();
      if (this.gameOver()) break;
      break; // <= execute loop only once for now
    }

    this.displayResults();
    this.displayGoodbyeMessage();
  }

  displayWelcomeMessage() {
    console.log("Welcome to Tic Tac Toe!");
  }

  displayGoodbyeMessage() {
    console.log("Thanks for playing Tic Tac Toe! Goodbye!");
  }

  displayResults() {
    // show the results of this game (win, lose, tie)
  }

  humanMoves() {
    let choice;

    while (true) {
      choice = readline.question("Choose a square between 1 and 9: ");

      let integerValue = parseInt(choice, 10);
      if (integerValue >= 1 && integerValue <= 9) {
        break;
      }

      console.log("Sorry, that's not a valid choice.");
      console.log("");
    }

    this.board.markSquareAt(choice, this.human.getMarker());
  }

  computerMoves() {
    let choice = Math.floor((9 * Math.random()) + 1);
    this.board.markSquareAt(choice, this.computer.getMarker());
  }

  gameOver() {
    return false;
  }
}

let game = new TTTGame();
game.play();