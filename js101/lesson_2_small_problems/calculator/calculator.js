const readline = require('readline-sync');
const MESSAGES = require('./calculator_messages.json');
const LANGUAGE = "en";

// used to control flow
const yesAnswers = ['y', 'yes'];
const noAnswers = ['n', 'no'];

// functions
function messages(message, lang = LANGUAGE) {
  return MESSAGES[lang][message];
}

function prompt(message) {
  return console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

function invalidYesOrNo(answer) {
  return !yesAnswers.includes(answer) && !noAnswers.includes(answer);
}

function welcomeUser() {
  prompt(messages("welcome"));
}

function getFirstNumber() {
  prompt(messages("firstNumber"));
  let num1 = readline.question();

  while (invalidNumber(num1)) {
    prompt(messages("invalidNumber"));
    num1 = readline.question();
  }

  return num1;
}

function getSecondNumber() {
  prompt(messages("secondNumber"));
  let num2 = readline.question();

  while (invalidNumber(num2)) {
    prompt(messages("invalidNumber"));
    num2 = readline.question();
  }

  return num2;
}

function getOperation() {
  prompt(messages("operation"));
  let operation = readline.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt(messages("invalidNumber"));
    operation = readline.question();
  }

  return operation;
}

function performDivisionOperation(num1, num2) {
  let output;
  if (checkDivideOperationEdgeCases(num1, num2) === undefined) {
    output = null;
  } else {
    output = Number(num1) / Number(num2);
  }
  return output;
}

function performCalculation(num1, num2, operation) {
  let output;
  switch (operation) {
    case '1':
      output = Number(num1) + Number(num2);
      break;
    case '2':
      output = Number(num1) - Number(num2);
      break;
    case '3':
      output = Number(num1) * Number(num2);
      break;
    case '4':
      output = performDivisionOperation(num1, num2);
      break;
  }

  return output;
}

function checkDivideOperationEdgeCases(num1, num2) {
  let operationResult = false;

  // 1. 0/0
  if (Math.abs(Number(num1)) === 0 && Math.abs(Number(num2)) === 0) {
    operationResult = undefined;
  }
  // 2. Infinity/Infinity
  if (Math.abs(Number(num1)) === Infinity
  && Math.abs(Number(num2)) === Infinity) {
    operationResult = undefined;
  }

  return operationResult;
}

function reportCalculation(output) {
  // For 0/0 and Infinity/Infinity edge case operations
  if (output === null) {
    prompt("Try not to use 0/0 or Infinity/Infinity for a meaningful result :)");
    return;
  }

  prompt(`${messages("result")} ${output}`);
}

function continueCalculatingCheck() {
  prompt(messages("continueCalculating"));
  let newCalculation = readline.question().toLowerCase();
  let continueCalculating = true;

  while (invalidYesOrNo(newCalculation)) {
    prompt(messages("invalidYesOrNo"));
    newCalculation = readline.question().toLowerCase();
  }

  if (noAnswers.includes(newCalculation)) {
    prompt(messages("bye"));
    continueCalculating = false;
  } else {
    console.clear();
    prompt(messages("newCalculation"));
  }

  return continueCalculating;
}

// start of program
welcomeUser();

// flow control
do {
  let num1 = getFirstNumber();
  let num2 = getSecondNumber();
  let operation = getOperation();
  let output = performCalculation(num1, num2, operation);
  reportCalculation(output);

  // exits loop if continueCalculatingCheck() returns false
} while(continueCalculatingCheck());
