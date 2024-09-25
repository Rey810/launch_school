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

// let readline = require('readline-sync');

// const getInteger = () => {
//   let input;

//   while (!(input > 0)) {
//     input = Number(readline.question("Please enter an integer greater than 0: "));
//   }

//   return input;
// };

// const getOperationType = () => {
//   let input;

//   while (input !== "s" && input !== "p") {
//     input = readline.question('Enter "s" to compute the sum, or "p" to compute the product. ');
//   }

//   return input;
// };

// const sumIntegers = (lastInteger) => {
//   let sum = 0;

//   for (let i = 1; i <= lastInteger; i++) {
//     sum += i;
//   }

//   return sum;
// };

// const multiplyIntegers = (lastInteger) => {
//   let product = 1;
//   for (let i = 1; i <= lastInteger; i++) {
//     product *= i;
//   }

//   return product;
// };

// function sumOrProductOfConsecutiveIntegers() {
//   let integer = getInteger();
//   let operationType = getOperationType();

//   let result;

//   if (operationType === 's') {
//     result = sumIntegers(integer);
//   } else if (operationType === 'p') {
//     result = multiplyIntegers(integer);
//   }

//   return result;
// }

// console.log(sumOrProductOfConsecutiveIntegers());



//////////////////////
// Short Long Short ///
/////////////////////

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

- Input
-- 2 strings
- Output
-- 1 string

- Requirements
-- determine length of the strings
-- concatenate the shorter string with a longer string then the shorter string
-- strings will be different lengths
-- empty string is valid
-- assuming that only strings are passed as arguments

- Own words
-- given two strings, return one string that is the result of concatenating the short with the long with the short

*/


/*
E: Examples and Test Cases

- Confirm or refute assumptions from "P" step
- Answer questions and provide implicit requirements
- Test cases are written in code and can be run to test your solution
- Codify the rules and boundaries of the problem

shortLongShort('abc', 'defgh');    // "abcdefghabc"
shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
shortLongShort('', 'xyz');         // "xyz"
*/


/*
D: Date Structure

- Helps reason with data logically
- Helps interact with data at the implementation stage
- Data structures are closely linked to the algorithm used in the solution
*/


/*
A: Algorithm

- Logical sequence of steps for accomplishing a task
- Closely related to data structures
- At first, keep algorithm abstract and high level
- Revisit during implementation step to update it or make notes
- Ignore efficiency at this stage

// 1. determine length of string inputs
// 2. set shorter string to "shortString"
// 3. set longer string to "longString"
// 4. concatenate "shortString", "longString", "shortString"
// 5. return concatenated string
*/


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

// function shortLongShort(str1, str2) {
//   return str1.length < str2.length ? str1 + str2 + str1 : str2 + str1 + str2;
// }

// console.log(shortLongShort('abc', 'defgh'));    // "abcdefghabc"
// console.log(shortLongShort('abcde', 'fgh'));    // "fghabcdefgh"
// console.log(shortLongShort('', 'xyz'));         // "xyz"
// console.log(shortLongShort('abc', 'xyz'));         // "xyzabcxyz"



////////////////////////////
/// Leap Years (Part 1) ///
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

- Input
-- year (number)
- Output
-- Boolean

- Requirements
-- a leap year is when:
--- a year is divisible by 4 (UNLESS the year is also divisble by 100)
--- a year is divisible by 100 AND 400

- Own words
-- a leap year is when a year is divisible by 4 only or by 100 AND 400. Return true if the input is a leap year

- Assumptions
-- input will be a year greater than 0

*/


/*
E: Examples and Test Cases

- Confirm or refute assumptions from "P" step
- Answer questions and provide implicit requirements
- Test cases are written in code and can be run to test your solution
- Codify the rules and boundaries of the problem

isLeapYear(2016);      // true
isLeapYear(2015);      // false
isLeapYear(2100);      // false
isLeapYear(2400);      // true
isLeapYear(240000);    // true
isLeapYear(240001);    // false
isLeapYear(2000);      // true
isLeapYear(1900);      // false
isLeapYear(1752);      // true
isLeapYear(1700);      // false
isLeapYear(1);         // false
isLeapYear(100);       // false
isLeapYear(400);       // true

*/


/*
D: Date Structure

- Helps reason with data logically
- Helps interact with data at the implementation stage
- Data structures are closely linked to the algorithm used in the solution
*/


/*
A: Algorithm

- Logical sequence of steps for accomplishing a task
- Closely related to data structures
- At first, keep algorithm abstract and high level
- Revisit during implementation step to update it or make notes
- Ignore efficiency at this stage

// 1. set input to "year"
// 2. if "year" is divisible by 4 but not 100, return true
// 3. if "year" is divisible by 100 and 400, return true

*/


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

// const isLeapYear = year => {
//   if ((year % 4 === 0) && (year % 100 !== 0)) return true;
//   if ((year % 100 === 0) && (year % 400 === 0)) return true;

//   else return false;
// };

// const isLeapYear = year => (year % 4 === 0) && (year % 100 !== 0) || (year % 100 === 0) && (year % 400 === 0);

// console.log(isLeapYear(2016));      // true
// console.log(isLeapYear(2015));      // false
// console.log(isLeapYear(2100));      // false
// console.log(isLeapYear(2400));      // true
// console.log(isLeapYear(240000));    // true
// console.log(isLeapYear(240001));    // false
// console.log(isLeapYear(2000));      // true
// console.log(isLeapYear(1900));      // false
// console.log(isLeapYear(1752));      // true
// console.log(isLeapYear(1700));      // false
// console.log(isLeapYear(1));         // false
// console.log(isLeapYear(100));       // false
// console.log(isLeapYear(400));       // true



////////////////////////////
/// Leap Years (Part 1) ///
//////////////////////////

/* P
- input
-- year (number)
- output 
-- Boolean

- Requirements
-- if year is less than 1752, a leap year is every 4 years
-- if a year is 1752 or more, the previous leap year rules apply
*/

/* E
isLeapYear(2016);      // true
isLeapYear(2015);      // false
isLeapYear(2100);      // false
isLeapYear(2400);      // true
isLeapYear(240000);    // true
isLeapYear(240001);    // false
isLeapYear(2000);      // true
isLeapYear(1900);      // false
isLeapYear(1752);      // true
isLeapYear(1700);      // true
isLeapYear(1);         // false
isLeapYear(100);       // true
isLeapYear(400);       // true
*/


// D

/* A
// 1. Set input to "year"
// 2. if "year" is less than 1752, apply first leap year rule
// 3. if "year" is 1752 or more, apply second leap year rule
*/

// C
// const isLeapYear = year => {
//   if (year >= 1752) {
//     return (year % 400 === 0) || ((year % 4 === 0) && year % 100 !== 0);
//   } else {
//     return year % 4 === 0;
//   }
// };

// console.log(isLeapYear(2016));      // true
// console.log(isLeapYear(2015));      // false
// console.log(isLeapYear(2100));      // false
// console.log(isLeapYear(2400));      // true
// console.log(isLeapYear(240000));    // true
// console.log(isLeapYear(240001));    // false
// console.log(isLeapYear(2000));      // true
// console.log(isLeapYear(1900));      // false
// console.log(isLeapYear(1752));      // true
// console.log(isLeapYear(1700));      // true
// console.log(isLeapYear(1));         // false
// console.log(isLeapYear(100));       // true
// console.log(isLeapYear(400));       // true




////////////////////////////
/// Multiples of 3 and 5 ///
//////////////////////////

/* P 
- input
-- number
-- number (sum of other numbers)

- requirements
-- sum all numbers betweeen 1 and the given number (inclusive) that are multiples of 3 or 5
-- multiples: can be divided evenly by
-- if number is a multiple of 3 and 5, only include it once

- assumptions
-- number passed is an integer greater than 1
-- default return value is 0

- own words
-- given a number, return the sum of all the numbers (that are multiples of 3 and 5) between 1 and the given number.
*/


/* E 
multisum(3);       // 3
multisum(5);       // 8
multisum(10);      // 33
multisum(1000);    // 234168
*/

/* D */

/* A
1. set 'currentNumber' to 1
2. set 'endNumber' to input
3. set 'sum' to 0
4. if number is divisible by 3 or 5,
    -- add it to 'sum'
5. increment 'currentNumber'
6. Repeat #4 and #5 until 'currentNumber' is equal to 'endNumber'
*/

/* C */
// function multisum(num) {
//   let currentNumber = 1;
//   let endNumber = num;
//   let sum = 0;

//   while (currentNumber <= endNumber) {
//     if (currentNumber % 3 === 0 || currentNumber % 5 === 0) {
//       sum += currentNumber;
//     }
//     currentNumber += 1;
//   }

//   return sum;
// }

// console.log(multisum(1));       // 0
// console.log(multisum(3));       // 3
// console.log(multisum(5));       // 8
// console.log(multisum(10));      // 33
// console.log(multisum(1000));    // 234168



////////////////////////////
/// UTF-16 String Value ///
//////////////////////////

/* P
- input
-- string
- output
-- number (sum of UTF-16 values)

- requirements
-- UTF-16 value is obtained using String.prototype.charCodeAt()
-- the returned number is the sum of all the UTF-16 values of every character

- assumption
-- a string is always provided, even if it's empty

- own words
-- given a string, return the sum of it's characters UTF-16 values

*/


/* E
utf16Value('Four score');         // 984
utf16Value('Launch School');      // 1251
utf16Value('a');                  // 97
utf16Value('');                   // 0

// The next three lines demonstrate that the code
// works with non-ASCII characters from the UTF-16
// character set.
const OMEGA = "\u03A9";             // UTF-16 character 'Ω' (omega)
utf16Value(OMEGA);                  // 937
utf16Value(OMEGA + OMEGA + OMEGA);  // 2811
*/

/* D */

/* A
1. set 'string' to input
2. set 'sum' to 0
3. loop over each character,
  -- determine it's UTF-value
  -- add UTF-value to 'sum'
4. return 'sum;
*/

/* C */
function utf16Value(str) {
  let string = str;
  let sum = 0;

  for (let i = 0; i < string.length; i += 1) {
    sum += string.charCodeAt(i);
  }

  return sum;
}

console.log(utf16Value('Four score'));         // 984
console.log(utf16Value('Launch School'));      // 1251
console.log(utf16Value('a'));                  // 97
console.log(utf16Value(''));                   // 0

// The next three lines demonstrate that the code
// works with non-ASCII characters from the UTF-16
// character set.
const OMEGA = "\u03A9";             // UTF-16 character 'Ω' (omega)
console.log(utf16Value(OMEGA));                  // 937
console.log(utf16Value(OMEGA + OMEGA + OMEGA));  // 2811