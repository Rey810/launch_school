const readline = require("readline-sync");

const NO_ANSWERS = Object.freeze(['n', 'no']);
const YES_ANSWERS = Object.freeze(['y', 'yes']);
const MONTHS_IN_A_YEAR = 12;

const MESSAGES = {
  welcome: "Welcome to the Loan Calculator!",
  loanAmount: "Enter the loan amount ($):",
  APR: "What is the interest rate?",
  loanDuration: "Enter the loan duration in months:",
  newCalculationAsk: "Do you want to perform another loan calculation? (y/n)",
  yesOrNo: "Please answer with (y)es or (n)o",
  kThanksBye: "Thanks for calculating with us :) Bye!",
  startNewCalculation: "Let's start a new calculation:",
};

function prompt(message) {
  console.log(`==> ${message}`);
}

function welcomeUser() {
  prompt(MESSAGES.welcome);
}

function invalidNumber(input) {
  return input.trimStart() === "" ||
    Number.isNaN(Number(input))   ||
    Number(input) < 0;
}

function invalidAnswer(answer) {
  return !YES_ANSWERS.includes(answer) && !NO_ANSWERS.includes(answer);
}


function checkNumberValidity(input, message) {

  let inputtedValue = input;

  while (invalidNumber(inputtedValue)) {
    console.log("Not a valid number");
    prompt(`${message}`);
    inputtedValue = readline.question();
  }

  return inputtedValue;
}

function getLoanAmount() {
  prompt(MESSAGES.loanAmount);
  let loanAmount = readline.question();
  loanAmount = checkNumberValidity(loanAmount, MESSAGES.loanAmount);

  return loanAmount;
}

function getAPR() {
  prompt(MESSAGES.APR);
  let APR = readline.question();
  APR = checkNumberValidity(APR, MESSAGES.APR);

  return APR;
}

function getLoanDuration() {
  prompt(MESSAGES.loanDuration);
  let loanDuration = readline.question();
  loanDuration = checkNumberValidity(loanDuration, MESSAGES.loanDuration);

  return loanDuration;
}

function getMonthlyPayment(loanAmount, APR, loanDurationMonths) {
  let monthlyPayment;

  if (Number(APR) === 0) {
    monthlyPayment = loanAmount / loanDurationMonths;
  } else {
    let monthlyInterestRate = APR / MONTHS_IN_A_YEAR;
    monthlyPayment = loanAmount * (monthlyInterestRate / (1 - Math.pow((1 + monthlyInterestRate), (-loanDurationMonths))));
  }

  return monthlyPayment;
}

function continueCalculatingCheck() {
  let continueCalculating = true;

  prompt(MESSAGES.newCalculationAsk);
  let answer = readline.question().toLowerCase();

  while (invalidAnswer(answer)) {
    prompt(MESSAGES.yesOrNo);
    answer = readline.question();
  }

  if (NO_ANSWERS.includes(answer)) {
    prompt(MESSAGES.kThanksBye);
    continueCalculating = false;
  } else {
    console.clear();
    prompt(MESSAGES.startNewCalculation);

  }

  return continueCalculating;
}

// program welcome message
welcomeUser();

//flow control
do {
  let loanAmount = getLoanAmount();
  let APR = getAPR();
  let loanDurationMonths = getLoanDuration();
  let monthlyPayment = getMonthlyPayment(loanAmount, APR, loanDurationMonths);

  prompt(`Your monthly payment is: ${monthlyPayment.toFixed(2)}`);

} while (continueCalculatingCheck());