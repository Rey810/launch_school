/* eslint-disable max-lines-per-function */
const readline = require(`readline-sync`);

const RPSGame = {
  human: createHuman(),
  computer: createComputer(),
  gameWinner: false,

  displayMessage() {
    console.log('Welcome to Rock, Paper, Scissors');
  },

  displayGoodbyeMessage() {
    console.log('Thanks for playing Rock, Paper, Scissors. Goodbye!');
  },


  displayRoundWinner() {
    let humanMove = this.human.move;
    let computerMove = this.computer.move;

    console.log(`\nYou chose: ${this.human.move}`);
    console.log(`The computer chose: ${this.computer.move}\n`);

    // key beats properties
    const rules = {
      rock: ['lizard', 'scissors'],
      paper: ['rock', 'spock'],
      scissors: ['lizard', 'paper'],
      spock: ['rock', 'scissors'],
      lizard: ['spock', 'paper'],
    };

    if (rules[humanMove].includes(computerMove)) {
      this.human.updateScore();
      this.checkGameWinner();
      console.log(`\nYou win this round!\nThe ${this.gameWinner ? 'final' : 'current'} score is...\nYou: ${this.human.score}, Computer: ${this.computer.score}`);
    } else if (rules[computerMove].includes(humanMove)) {
      this.computer.updateScore();
      this.checkGameWinner();
      console.log(`Computer wins this round!\nThe ${this.gameWinner ? 'final' : 'current'} score is...\nYou: ${this.human.score}, Computer: ${this.computer.score}`);
    } else {
      console.log(`This round is a tie\nThe ${this.gameWinner ? 'final' : 'current'} score is...\nYou: ${this.human.score}, Computer: ${this.computer.score}`);
    }
  },

  displayMoveHistory() {
    let humanHistory = this.human.allMoves;
    let computerHistory = this.computer.allMoves;

    console.log(`\nMOVE HISTORY\nYou: ${humanHistory.join(', ')}\nComputer: ${computerHistory.join(', ')}\n`);
  },

  checkGameWinner() {
    let humanScore = this.human.score;
    let computerScore = this.computer.score;

    if (humanScore === 5 || computerScore === 5) {
      this.gameWinner = true;
    }
  },

  playAgain() {
    console.log('Would you like to play again? (y/n)');
    let answer = readline.question();
    return answer.toLowerCase()[0] === 'y';
  },

  play() {
    this.displayMessage();
    while (true) {
      this.human.choose();
      this.computer.choose();
      this.displayRoundWinner();
      this.displayMoveHistory();
      if (this.gameWinner || !this.playAgain()) break;
      console.clear();
    }
    this.displayGoodbyeMessage();
  }
};

RPSGame.play();

function createPlayer() {
  return {
    move: null,
    allMoves: [],
    score: 0,
    choices: ['rock', 'paper', 'scissors', 'spock', 'lizard'],

    updateScore() {
      this.score += 1;
    }
  };
}


function createComputer() {
  let playerObject = createPlayer();

  let computerObject = {
    move: null,

    choose() {
      const choices = this.choices;
      let randomIndex = Math.floor(Math.random() * choices.length);
      this.move = choices[randomIndex];
      this.allMoves.push(choices[randomIndex]);
    },
  };

  return Object.assign(playerObject, computerObject);
}

function createHuman() {
  let playerObject = createPlayer();

  let humanObject = {
    move: null,

    choose() {
      let choice;

      while (true) {
        console.log(`Please choose ${this.choices.slice(0, this.choices.length - 1).join(', ')}, or ${[...this.choices].pop()}:`);
        choice = readline.question();
        if (this.choices.includes(choice)) break;
        console.log('Sorry, invalid choice.');
      }

      this.move = choice;
      this.allMoves.push(choice);
    },
  };

  return Object.assign(playerObject, humanObject);
}