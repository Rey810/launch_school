const readline = require('readline-sync');
const MESSAGES = require('./messages.json');

// prompt styling
const BOLD_RED_ESCAPE_CODE = '\x1b[1m\x1b[31m%s\x1b[0m';
const BOLD_GREEN_ESCAPE_CODE = '\x1b[1m\x1b[32m%s\x1b[0m';
const BOLD_BLUE_ESCAPE_CODE = '\x1b[1m\x1b[34m%s\x1b[0m';
const BOLD = '\x1b[1m%s\x1b[0m';
const ITALICS = '\x1b[3m%s\x1b[0m';


const USER = "user";
const COMPUTER = "computer";
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'spock', 'lizard'];
const WINNING_SCORE = 3;
const WINNING_COMBOS = {
  rock:     ['scissors', 'lizard'],
  paper:    ['rock',     'spock'],
  scissors: ['paper',    'lizard'],
  lizard:   ['paper',    'spock'],
  spock:    ['rock',     'scissors'],
};

function prompt(message, optionalColor = '') {
  console.log(optionalColor, `=> ${message}`);
}

function displayWelcome() {
  prompt(MESSAGES.welcome, BOLD);
}

function displayRules() {
  prompt(MESSAGES.rules, ITALICS);
}

function preGameIntro() {
  displayWelcome();
  displayRules();
  prompt("Press Enter to start:", BOLD);
  readline.question();
  console.clear();
}

function getFullChoiceName(abbreviatedChoice) {

  switch (abbreviatedChoice) {
    case "ro":
      return VALID_CHOICES[0];
    case "pa":
      return VALID_CHOICES[1];
    case "sc":
      return VALID_CHOICES[2];
    case "sp":
      return VALID_CHOICES[3];
    case "li":
      return VALID_CHOICES[4];
    default:
      return null;
  }

}

function getUserChoice() {
  prompt(`Enter one of the following - ${VALID_CHOICES.join(', ')} (or the first two letters)`);
  let input = readline.question().toLowerCase();
  let choice = getFullChoiceName(input) || input;

  while (!VALID_CHOICES.includes(choice)) {
    prompt(MESSAGES.error);
    input = readline.question().toLowerCase();
    choice = getFullChoiceName(input) || input;
  }

  return choice;
}

function getComputerChoice() {
  let randomIndex = Math.round(Math.random() * (VALID_CHOICES.length - 1));
  let computerChoice = VALID_CHOICES[randomIndex];

  return computerChoice;
}

function displayChoices(choice, computerChoice) {
  prompt(`You chose ${choice}, computer chose ${computerChoice}\n`, BOLD);
}


function userWin(choice, computerChoice) {
  return WINNING_COMBOS[choice].includes(computerChoice);
}

function computerWin(choice, computerChoice) {
  return WINNING_COMBOS[computerChoice].includes(choice);
}

function calculateWinner(choice, computerChoice) {
  let winner = null;

  if (userWin(choice, computerChoice)) {
    winner = USER;
  } else if (computerWin(choice, computerChoice)) {
    winner = COMPUTER;
  }

  return winner;
}

function displayWinner(winner) {
  if (winner === USER) {
    prompt(MESSAGES.userWon, BOLD_GREEN_ESCAPE_CODE);
  } else if (winner === COMPUTER) {
    prompt(MESSAGES.computerWon, BOLD_RED_ESCAPE_CODE);
  } else {
    prompt(MESSAGES.tie, BOLD_BLUE_ESCAPE_CODE);
  }
}

function incrementWinner(winner, scoreObj) {
  let copyOfscoreObj = { ...scoreObj };
  copyOfscoreObj[winner] += 1;

  return copyOfscoreObj[winner];
}

function displayCurrentScore(scoreObj) {
  prompt('--------------------------------------------', BOLD);
  prompt(`The current score is: USER: ${scoreObj.user} COMPUTER: ${scoreObj.computer}`);
  prompt('--------------------------------------------\n', BOLD);
}

function overallWinnerCheck(scoreObj) {
  let overallWinner = null;

  if (scoreObj.user === WINNING_SCORE) {
    overallWinner = USER;
  } else if (scoreObj.computer === WINNING_SCORE) {
    overallWinner = COMPUTER;
  }

  return overallWinner;
}

function displayNextRoundPrompts(gameStateObj) {
  let copyOfGameStateObj = { ...gameStateObj };

  displayWinner(copyOfGameStateObj.lastWinner);
  displayCurrentScore(copyOfGameStateObj.score);
  prompt("Press Enter for the next round", BOLD);
  readline.question();
  console.clear();
}

function displayOverallWinner(overallWinner) {
  if (overallWinner === USER) {
    prompt("-------------------------------", BOLD_GREEN_ESCAPE_CODE);
    prompt(MESSAGES.userWonOverall, BOLD_GREEN_ESCAPE_CODE);
    prompt("-------------------------------\n", BOLD_GREEN_ESCAPE_CODE);
  } else {
    prompt("-------------------------------", BOLD_RED_ESCAPE_CODE);
    prompt(MESSAGES.computerWonOverall, BOLD_RED_ESCAPE_CODE);
    prompt("-------------------------------\n", BOLD_RED_ESCAPE_CODE);
  }
}

function runGame() {
  const gameState = {
    score: { user: 0, computer: 0 },
    overallWinner: null,
    lastWinner: null
  };

  do {
    // get choices
    let choice = getUserChoice();
    let computerChoice = getComputerChoice();
    displayChoices(choice, computerChoice);

    // update scores
    let winner = calculateWinner(choice, computerChoice);
    let incrementedScore = incrementWinner(winner, gameState.score);
    gameState.score[winner] = incrementedScore;

    // check for overall winner
    gameState.overallWinner = overallWinnerCheck(gameState.score);

    // checks if next round prompts should be shown
    if (gameState.overallWinner) {
      displayOverallWinner(gameState.overallWinner);
    } else displayNextRoundPrompts(gameState);

  } while (!gameState.overallWinner);
}

// program flow control
preGameIntro();
runGame();

