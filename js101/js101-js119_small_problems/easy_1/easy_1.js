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
for (let i = 2; i <= 99; i+=2) {
  console.log(i);
}