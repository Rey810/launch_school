///////////////////
// ISN'T IT ODD?//
/////////////////

/*
P: Understanding the Problem

- Establish rulse and define the boundaries of the problem
- Restate the problem in your own words
- Identify problem requirements
  - Explicit
  - Implicit
- Identify inputs and outputs (!!!)
- Ask questions and identify unclear information
- Don't rush this step
*/

// Write a function that takes one integer argument, which may be positive, negative, or zero. This method returns true if the number's absolute value is odd. You may assume that the argument is a valid integer value.
// input: 1 integer
// output: boolean

// Rules:
// - integer can be positive or negative or zero
// - integer is always a valid value
// - returns true if absolute value is odd (remainder of 1 after being divided by 2)
// - 0 is not odd


/*
E: Examples and Test Cases

- Confirm or refute assumptions from "P" step
- Answer questions and provide implicit requirements
- Test cases are written in code and can be run to test your solution
- Codify the rules and boundaries of the problem
*/

/*
console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true
*/


/*
D: Date Structure

- Helps reason with data logically
- Helps interact with data at the implementation stage
- Data structures are closely linked to the algorithm used in the solution
*/

// N/A


/*
A: Algorithm

- Logical sequence of steps for accomplishing a task
- Closely related to data structures
- At first, keep algorithm abstract and high level
- Revisit during implementation step to update it or make notes
- Ignore efficiency at this stage
*/

// 1. Check whether provided integer is even or odd
//  a. Return true if it is odd
//  b. Return false if it is even

/*
C: Code
- Translate algorithm into code
- Code with intent in context of programming language
  - Features and constraints oflanguage
  - Characteristics of data structures
  - Built inmethods or functions
  - Syntax/ general patterns
- Write implementation notes as necessary
- Create any test cases needed
*/

// function isOdd(num) {
//   return !!(num % 2);
// }




///////////////////
// ODD NUMBERS ///
/////////////////

/*
P: Understanding the Problem

- Establish rulse and define the boundaries of the problem
- Restate the problem in your own words
- Identify problem requirements
  - Explicit
  - Implicit
- Identify inputs and outputs (!!!)
- Ask questions and identify unclear information
- Don't rush this step
*/

// Input: none
// Output: odd numbers

// Rules:
// - numbers must be logged on separate lines
// - start logging at 1, stop logging after 99



/*
E: Examples and Test Cases

- Confirm or refute assumptions from "P" step
- Answer questions and provide implicit requirements
- Test cases are written in code and can be run to test your solution
- Codify the rules and boundaries of the problem
*/

// N/A

/*
D: Date Structure

- Helps reason with data logically
- Helps interact with data at the implementation stage
- Data structures are closely linked to the algorithm used in the solution
*/

// N/A

/*
A: Algorithm

- Logical sequence of steps for accomplishing a task
- Closely related to data structures
- At first, keep algorithm abstract and high level
- Revisit during implementation step to update it or make notes
- Ignore efficiency at this stage
*/

// 1. Set number to 1
// 2. Output number to console
// 3. Increment number by 2
// 4. Repeat step 2-3 until number is number is greater than 99


/*
C: Code
- Translate algorithm into code
- Code with intent in context of programming language
  - Features and constraints oflanguage
  - Characteristics of data structures
  - Built inmethods or functions
  - Syntax/ general patterns
- Write implementation notes as necessary
- Create any test cases needed
*/

// function logOddNumbers() {
//   let num = 1;

//   while (num <= 99) {
//     console.log(num);
//     num += 2;
//   }
// }

// logOddNumbers();




////////////////////////////
// How big is the room? ///
//////////////////////////

/*
P: Understanding the Problem

- Establish rules and define the boundaries of the problem
- Restate the problem in your own words
- Identify problem requirements
  - Explicit
  - Implicit
- Identify inputs and outputs (!!!)
- Ask questions and identify unclear information
- Don't rush this step
*/

// Prompt a user for room details (length and width in metres) 
// then log the area of the room (in metres AND feet)

// Input: length (number), width (number)
// Ouput: A string showing the area in square metres and square feet

// Explicit:
// Validation is not required
// Implicit:
// ALl values provided by user will be valid


/*
E: Examples and Test Cases

- Confirm or refute assumptions from "P" step
- Answer questions and provide implicit requirements
- Test cases are written in code and can be run to test your solution
- Codify the rules and boundaries of the problem
*/

// Input: 10, 2 => The area of the room is 20 square meters (215.278 square feet)
// Input: 4, 16 => The area of the room is 64 square meters (688.83 square feet)

/*
D: Date Structure

- Helps reason with data logically
- Helps interact with data at the implementation stage
- Data structures are closely linked to the algorithm used in the solution
*/

// N/A


/*
A: Algorithm

- Logical sequence of steps for accomplishing a task
- Closely related to data structures
- At first, keep algorithm abstract and high level
- Revisit during implementation step to update it or make notes
- Ignore efficiency at this stage
*/

// 1. Prompt user for the length of the room in meters
// 2. Set lengthInMeters to that value coerced to a number
// 3. Prompt user for the width of the room in meters
// 4. Set widthInMeters to that value coerced to a number
// 5. Calculate the area and set the result to areaInMeters
// 6. Calculate area in feet and set result to areaInSquareFeet
// 7. Create a string containing the areaInMeters and areaInSquareFeet values
//  a. values should have 2 decimal points 
// 8. Return string

/*
C: Code
- Translate algorithm into code
- Code with intent in context of programming language
  - Features and constraints oflanguage
  - Characteristics of data structures
  - Built inmethods or functions
  - Syntax/ general patterns
- Write implementation notes as necessary
- Create any test cases needed
*/

// function roomArea() {
//   let readline = require('readline-sync');

//   let lengthInMeters = Number(readline.question("Enter the length of the room in meters: "));
//   let widthInMeters = Number(readline.question("Enter the width of the room in meters: "));

//   let areaInMeters = lengthInMeters * widthInMeters;
//   let areaInSquareFeet = areaInMeters * 10.7639;

//   let roomAreaString = `The area of the room is ${areaInMeters.toFixed(2)} square meters (${areaInSquareFeet.toFixed(2)} square feet)`;

//   console.log(roomAreaString);
// }

// roomArea();




////////////////////////////
///// Tip Calculator //////
//////////////////////////

/*
P: Understanding the Problem

- input:
-- bill amount (number) and tip rate (number)
- output:
-- tip amount (string)
-- total bill amount (string)

- requirements
-- prompt user for bill amount and tip rate
-- user will only provide numbers greater than or equal to 0
*/



/*
E: Examples and Test Cases

- Confirm or refute assumptions from "P" step
- Answer questions and provide implicit requirements
- Test cases are written in code and can be run to test your solution
- Codify the rules and boundaries of the problem

- Example 1
- input:
-- 200, 15
- output:
-- "The tip is $30.00"
-- "The total is $230.00"
*/


/*
D: Date Structure

{ bill: number, tipPercentage: number }
*/




/*
A: Algorithm

1. Prompt user for bill amount
2. Set bill to this value
3. Prompt user for tip percentage
4. Set tipPercent to this value divided by 100
5. Set tip to bill multiplied by tipPercent
6. Set total to bill plus tip
7. Print two strings
  - First string contains the tip
  - Second string contains the total
*/



/*
C: Code
- Translate algorithm into code
- Code with intent in context of programming language
  - Features and constraints of language
  - Characteristics of data structures
  - Built in methods or functions
  - Syntax/ general patterns
- Write implementation notes as necessary
- Create any test cases needed
*/

// let readline = require('readline-sync');

// function getBill() {
//   return Number(readline.question("What is the bill? "));
// }

// function getTipPercent() {
//   return Number(readline.question("What is the tip percentage? "));
// }

// function calculateTip(bill, tipPercent) {
//   return bill * (tipPercent / 100);
// }

// function calculateTotal(bill, tip) {
//   return bill + tip;
// }

// function displayTip(tip) {
//   console.log(`The tip is $${tip.toFixed(2)}`);
// }

// function displayTotal(total) {
//   console.log(`The total is $${total.toFixed(2)}`);
// }

// function tipCalculator() {
//   let bill = getBill();
//   let tipPercent = getTipPercent();

//   let tip = calculateTip(bill, tipPercent);
//   let total = calculateTotal(bill, tip);

//   displayTip(tip);
//   displayTotal(total);

// }

// tipCalculator();




/////////////////////////////////////////////
// Sum or Product of Consecutive Integers //
///////////////////////////////////////////

/*
P: Understanding the Problem

- Input:
-- Integer > 0
-- "s" or "p" (string)
- Output:
-- sum or product of integers (string)

- Requirements:
-- prompt user for integer greater than 0 (reprompt if integer is not valid)
-- prompt user for sum or product (reprompt if input is not valid)
-- sum/product must incl. the 1st and last number (i.e. 1 and the given integer)
*/



/*
E: Examples and Test Cases
- Example 1
- input:
-- 5, "s"
- output:
-- "The sum of the integers between 1 and 5 is 15"

*/


/*
D: Date Structure
*/




/*
A: Algorithm
// 1. Prompt user for integer greater than 0 and set to "integer"
// --- reprompt until input is a number greater than 0
// 2. Prompt user for "s" or "p" and set to "operationType"
// --- reprompt until input is exactly "s" or "p"
// 3. If input is "s":
//    --- sum integers from 1 to input integer (inclusive)
//    --- set "sum" to result
//    If input is "p":
//    --- multiply integers from 1 to input integer (inclusive)
//    --- set "product" to result
// 4. Return "result"
*/



/*
C: Code
- Translate algorithm into code
- Code with intent in context of programming language
  - Features and constraints of language
  - Characteristics of data structures
  - Built in methods or functions
  - Syntax/ general patterns
- Write implementation notes as necessary
- Create any test cases needed
*/

let readline = require('readline-sync');

const getInteger = () => {
  let input;

  while (!(input > 0)) {
    input = Number(readline.question("Please enter an integer greater than 0: "));
  }

  return input;
};

const getOperationType = () => {
  let input;

  while (input !== "s" && input !== "p") {
    input = readline.question('Enter "s" to compute the sum, or "p" to compute the product. ');
  }

  return input;
};

const sumIntegers = (lastInteger) => {
  let sum = 0;

  for (let i = 1; i <= lastInteger; i++) {
    sum += i;
  }

  return sum;
};

const multiplyIntegers = (lastInteger) => {
  let product = 1;
  for (let i = 1; i <= lastInteger; i++) {
    product *= i;
  }

  return product;
};

function sumOrProductOfConsecutiveIntegers() {
  let integer = getInteger();
  let operationType = getOperationType();

  let result;

  if (operationType === 's') {
    result = sumIntegers(integer);
  } else if (operationType === 'p') {
    result = multiplyIntegers(integer);
  }

  return result;
}

console.log(sumOrProductOfConsecutiveIntegers());
