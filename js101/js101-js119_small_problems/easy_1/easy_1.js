// Write a function that takes one integer argument, which may be positive, negative, or zero. 
// This method returns true if the number's absolute value is odd. 
// You may assume that the argument is a valid integer value.

// function isOdd(num) {
//   console.log(num % 2);
//   return Boolean(num % 2);
// }

// console.log(isOdd(2)); // => false
// console.log(isOdd(5)); // => true
// console.log(isOdd(-17)); // => true
// console.log(isOdd(-8)); // => false
// console.log(isOdd(0)); // => false
// console.log(isOdd(7)); // => true




// Log all odd numbers from 1 to 99, inclusive, to the console, with each number on a separate line.

// P
// Number must be odd to be logged
// Number must also be between (and including) 1 and 99 to be logged
// Each number must be on a seperate line
// There is no input
// Output is the number

// E
// No test cases as there is no input

// D
// Use a 'for' loop as 1 to 99 needs to be iterated through
// Log a number if it meets the conditions then increment iterator by 1

// A
// start a 'for' loop
    // log the number to the console if number is odd
// exit loop when iterator is 99

// C
// function logOddNumbers() {
//   for(let i = 1; i <= 99; i++){
//     if (i % 2) console.log(i); 
//   }
// }

// logOddNumbers();

// Further exploration: Repeat this exercise with a technique different from the one that you used, 
// and different from the one provided. 
// Also consider adding a way for the user to specify the limits of the odd numbers logged to the console.
// const readline = require("readline-sync");

// function isInvalidNumber(num) {
//   return num.trimStart() === '' || 
//         Number.isNaN(Number(num)) || 
//         Number(num) === Infinity || 
//         Number(num) === -Infinity;
// }

// // welcome
// console.log("Let's print all the odd numbers.")

// // Get first number
// console.log("To begin, please enter a lower bound number");
// let lowerBound = readline.question();

// while(isInvalidNumber(lowerBound)) {
//   console.log("That's an invalid number. Please try again.");
//   lowerBound = readline.question();
// }

// // Get second number
// console.log("Thanks. Now enter the upper bound number");
// let upperBound = readline.question();

// while(isInvalidNumber(upperBound)) {
//   console.log("That's an invalid number. Please try again.");
//   upperBound = readline.question();
// }

// // print odd numbers to console
// for(let i = lowerBound; i <= upperBound; i++) {
//   if (i % 2) console.log(i); 
// }




// Log all even numbers from 1 to 99, inclusive, to the console, with each number on a separate line.
// for (let i = 2; i <= 99; i+=2) {
//   console.log(i);
// }




// How big is the room?
// Build a program that asks the user to enter the length and width of a room in meters, 
// and then logs the area of the room to the console in both square meters and square feet.

// Note: 1 square meter == 10.7639 square feet

// Do not worry about validating the input at this time. 
// Use the readlineSync.prompt method to collect user input.

// Example:

// Enter the length of the room in meters:
// 10
// Enter the width of the room in meters:
// 7
// The area of the room is 70.00 square meters (753.47 square feet).

// P
// Get user input for length and width
// Multiply the two 
// Log an answer in metres and in feet

// E
// Edge cases:
// Letter inputs AND 0 number and NaN/Undefined inputs

// D & A
// 1. Assign first user input to variable called length after checking validity
// 2. Assign second user input to variable called width after checking validity
// 3. Multiply two variables together and assign to variable called meters
// 4. Multiply meters variable by 10.7639 and assign result to variabled called feet
// 5. Log both results

// C
// const readlineSync = require('readline-sync');
// const ONE_METER_IN_FEET = 10.7639;

// function isNotValid(num) {
//   return num.trim() === '' ||
//           Number(num) === 0 ||
//           Number(num) === Infinity ||
//           Number(num) === -Infinity ||
//           Number.isNaN(Number(num));
// }

// function calculateRoomSize() {
//   console.log("Enter the length of the room in meters");
//   let length = readlineSync.question();
  
//   while (isNotValid(length)) {
//     console.log("That is invalid. Please try again.");
//     length = readlineSync.question();
//   }
  
//   console.log("Enter the width of the room in meters");
//   let width = readlineSync.question();
  
//   while (isNotValid(width)) {
//     console.log("That is invalid. Please try again.");
//     width = readlineSync.question();
//   }
  
//   let sizeInMeters = (length * width);
//   let sizeInFeet = (sizeInMeters * ONE_METER_IN_FEET);

//   return { sizeInMeters, sizeInFeet };
// }

// function displayRoomSize(meters, feet) {
//   console.log(`The area of the room is ${meters.toFixed(2)} square meters (${feet.toFixed(2)} square feet).`);
// }

// let { sizeInMeters, sizeInFeet } = calculateRoomSize();
// displayRoomSize(sizeInMeters, sizeInFeet);




// Tip Calculator
// Create a simple tip calculator. 
// The program should prompt for a bill amount and a tip rate. 
// The program must compute the tip, and then log both the tip and the total amount of the bill to the console. 
// You can ignore input validation and assume that the user will enter numbers.

// Example:

// What is the bill? 200
// What is the tip percentage? 15

// The tip is $30.00
// The total is $230.00

// P
// Number input is assumed to always be valid
// Calculation of the total amount after a tip has been added by user
// Log both the tip amount and the total bill

// E
// Bill of $0 should always log 0 for tipTotal and totalBill
// Tip of 0% should result in tipTotal of 0

// D & A
// Get user input for the bill amount and set it to a variabled called "billAmount"
// Get user input for the tip percent and set it to a variable called "tipPercent"
// Multiply tipPercent by bill and set to tipTotal 
// Sum tipTotal and billAmount and set to totalBill
// Log tipTotal and totalBill

// const readline = require('readline-sync');

// console.log("What is the bill?");
// let billAmount = parseFloat(readline.question());

// console.log("What is the tip percentage?");
// let tipPercent = parseFloat(readline.question());

// let tipTotal = tipPercent / billAmount;
// let billTotal = tipTotal + billAmount;

// console.log(`The tip is ${tipTotal}`);
// console.log(`The total is ${billTotal}`);




// Write a program that asks the user to enter an integer greater than 0, 
// then asks whether the user wants to determine the sum or the product of all numbers 
// between 1 and the entered integer, inclusive.

// Examples:

// Please enter an integer greater than 0: 5
// Enter "s" to compute the sum, or "p" to compute the product. s

// The sum of the integers between 1 and 5 is 15.
// Please enter an integer greater than 0: 6
// Enter "s" to compute the sum, or "p" to compute the product. p

// The product of the integers between 1 and 6 is 720.

// P
// inputs
//  an integer greater than 0
// "s" or "p"
// outputs
//  the sum or the product of all numbers between 1 and the entered integer (inclusive)
//
// inputs
//  5
//  "s"
// outputs
//  15

// E
// 1
// inputs
//  10
//  "p"
// output
//  3628800
// 2
// inputs
// 5
// 's'
// output
// 15

// D & A
// Get integer from user and set to variable "number"
// Get "s" or "p" from user and set to computeOption
// if "s"
//  initialize "total" variable
//  loop from 1 up to and including "number"
//    add the value of the iterator to "total"
//    increment iterator by 1
// if "p"
//  initialize "total" variable and set to 1
//  loop from 1 up to and including "number"
//    multiply iterator by "total" and "total" to result
//    increment iterator by 1

// C
// const readline = require('readline-sync');

// function computeSum() {
//   let total = 0;

//   if (computeChoice === 's') {
//     for (let i = 1; i <= number; i++) {
//       total += i;
//     }
//   }

//   return total;
// }

// function computeProduct() {
//   let total = 1;

//   if (computeChoice === 'p') {
//     for (let i = 1; i <= number; i++) {
//       total *= i
//     }
//   }
  
//   return total
// }

// console.log("Please enter an integer greater than 0:")
// let number = readline.question();

// console.log("Enter 's' to compute the sum, or 'p' to compute the product.");
// let computeChoice = readline.question();

// if (computeChoice === 's') {
//   let sum = computeSum();
//   console.log(`The product of the integers between 1 and ${number} is ${sum}.`)
// } else if (computeChoice === 'p') {
//   let product = computeProduct();
//   console.log(`The sum of the integers between 1 and ${number} is ${product}.`)
// } else {
//   console.log("Invalid operation")
// }

// Further Exploration
// What if the input was an array of integers instead of just a single integer? 
// How would your computeSum and computeProduct functions change? 
// Given that the input is an array, how might you make use of the Array.prototype.reduce() method?

// const readline = require('readline-sync');

// function computeSum(arr) {
//   return arr.reduce((sum, num) => sum += parseInt(num), 0)
// }

// function computeProduct(arr) {
//   return arr.reduce((product, num) => product *= parseInt(num), 1)
// }

// function cleanInputArray(inputArray) {
//   return inputArray.split(',')
//             .filter(val => !Number.isNaN(parseInt(val)))
//             .map(val => parseInt(val));
// }

// console.log("Please enter an array of numbers:")
// let input = readline.question();

// let cleanedInputArray = cleanInputArray(input);

// console.log("Enter 's' to compute the sum, or 'p' to compute the product.");
// let computeChoice = readline.question();

// if (computeChoice === 's') {
//   let sum = computeSum(cleanedInputArray);
//   console.log(`The sum of the integers in the array [${cleanedInputArray}] is ${sum}.`)
// } else if (computeChoice === 'p') {
//   let product = computeProduct(cleanedInputArray);
//   console.log(`The product of the integers between [${cleanedInputArray}] is ${product}.`)
// } else {
//   console.log("Invalid operation")
// }



// Write a function that takes two strings as arguments, 
// determines the length of the two strings, 
// and then returns the result of concatenating the shorter string, 
// the longer string, and the shorter string once again. 
// You may assume that the strings are of different lengths.

// P
// input 2 strings as arguments
// output is one string which is the result of concatentating the short string then the long string then the short string
// strings are of different lengths
// function should also determine the lengths of the two strings

// E
// input: 
// 'abc', 'def'
// output: 
// 'abcdefabc'

// D + A
// declare and initialie a variable called "firstString"
// declare and initialize a variable called "secondString"
// set firstString to the value of the 1st arg
// set secondString to the value of the 2nd arg
// determine the length of each string and save value to new variables ("firstStringLength" and "secondStringLength")
// declare and initialize a variable called concatedString and set it to the sum of the short string, the long string and the short string
// return concatedString

// C
// function shortLongShort(str1, str2) {
//     if (str1.length < str2.length) {
//         return str1 + str2 + str1;
//     } else {
//         return str2 + str1 + str2;
//     }
// }

// console.log(shortLongShort('abc', 'defgh'));    // "abcdefghabc"
// console.log(shortLongShort('abcde', 'fgh'));    // "fghabcdefgh"
// console.log(shortLongShort('', 'xyz'));         // "xyz"

