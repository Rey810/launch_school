/* eslint-disable quote-props */
class Square {
  static UNUSED_SQUARE = " ";
  static HUMAN_MARKER = "X";
  static COMPUTER_MARKER = "O";

  constructor(marker = Square.UNUSED_SQUARE) {
    // We need some way to keep track of this square's marker.
    this.marker = marker;
  }

  toString() {
    return this.marker;
  }
}

class Board {
  constructor() {
    // We need a way to model the 3x3 grid. Perhaps "squares"?
    // What data structure should we use? An Array? An Object? Something else?
    // What should the data structure store? Strings? Numbers? Square objects?
    this.squares = {};

    for (let counter = 1; counter <= 9; counter++) {
      this.squares[counter] = new Square();
    }
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

class Marker {
  constructor() {
    // A marker is something that represents a player's "piece" on the board.
  }
}

class Player {
  constructor() {
    // maybe a "marker" to keep track of this player's symbol (i.e., 'X' or 'O')
  }

  mark() {
    // We need a way to mark the board with this player's marker.
    // How do we access the board?
  }

  play() {
    // We need a way for each player to play the game.
    // Do we need access to the board?
  }
}

class Human extends Player {
  constructor() {
  }
}

class Computer extends Player {
  constructor() {
  }
}

class TTTGame {
  constructor() {
    // Need a board and two players
    this.board = new Board();
  }

  play() {
    this.displayWelcomeMessage();

    while (true) {
      this.board.display();

      this.firstPlayerMoves();
      if (this.gameOver()) break;

      this.secondPlayerMoves();
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

  firstPlayerMoves() {
    // the first player makes a move
  }

  secondPlayerMoves() {
    // the second player makes a move
  }

  gameOver() {
    return false;
  }
}

let game = new TTTGame();
game.play();