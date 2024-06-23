// const readline = require("readline-sync");

// // Searching101

// // Write a program that solicits six numbers from the user 
// // and logs a message that describes whether the sixth number appears among the first five numbers

// // ask user for input 5 times
// // store input in an array each time
// // on 6th input, compare 6th input to itemsd in array and return either a positive or a negative string containing numbers, 6th number, and "does" or "does not"

// function searching101(){
//   let inputNumberArray = [];
//   let lastNumber = 0;

//   for (let i = 0; i < 6; i++) {
//     let count = ['1st', '2nd', '3rd', '4th', '5th', 'last']
//     let input = readline.question(`Enter the ${count[i]} number:`);

//     // no input sanitation
//     if (i === 5) {
//       lastNumber = input
//     } else {
//       inputNumberArray.push(input);
//     }
//   }

//   // check if array contains the last number
//   let arrayContainsLastNumber = inputNumberArray.includes(lastNumber); 

//   return `The number ${lastNumber} ${arrayContainsLastNumber ? "appears" : "does not appear"} in: ${inputNumberArray.join(',')}`;
// }

// console.log(searching101());




// Letter Counter (Part 1)
// Write a function that takes a string consisting of zero or more space separated words 
// and returns an object that shows the number of words of different sizes.

/* Understand the Problem
Input: String
Output: Object

Reworded: given a string of words, return an object that shows the number of words that have different sizes

Questions: Is size the only thing that matters? 
Iow, if two different words have the same size, do they count as the same sized word? 
I assume yes.

Explicit rules:
- Given a string of words, return an object
- String contains zero or more words

Implicit rules:
- empty string returns nothing, not even an empty object 
- a word consists of all characters before a space character (includes special characters)

Examples:
// Examples:

// Copy Code
// wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
// wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
// wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
// wordSizes('');     

Data Structure:
Object containing word length (key) and count (value)

Algorithm:
High Level:
- Given a string of words, split into a list on every space character
- Iterate over the list
  - count words of different lengths
  - store unique lengths and counts in a different list
- return different list

Low Level:
- Set a variable "wordsArray" to the string split on every space character
- Set a variable "lengthCountObject" to an empty object
- If "wordsArray" length is 0, return an empty string
- Loop over "wordsArray"
  - for every word in the array do the following:
    - count the words length
      - if the length exsits as a key in "lengthCountObject", increment that key's value by 1
      - else, create that length as a key in "lengthCountObject" and set it's initial value to 1
- return "lengthCountObject"
*/

// function wordSizes(str) {
//   if (!str) return "";

//   let wordsArray = str.split(" ");
//   let lengthCountObject = {};

//   wordsArray.forEach(word => {
//     lengthCountObject[word.length] = lengthCountObject[word.length] + 1 || 1;
//   });

//   return lengthCountObject;
// }

// console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
// console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
// console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
// console.log(wordSizes(''));



// Letter Counter (Part 2)
// Modify the wordSizes function from the previous exercise to exclude non-letters when determining word size. For instance, the word size of "it's" is 3, not 4.

// Examples:

// Copy Code
// wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 2 }
// wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 3 }
// wordSizes("What's up doc?");                              // { "2": 1, "3": 1, "5": 1 }
// wordSizes('');

/* 
Low Level:
- Set a variable "wordsArray" to the string split on every space character
- Set a variable "lengthCountObject" to an empty object
- If "wordsArray" length is 0, return an empty string
- Loop over "wordsArray"
  - for every word in the array do the following:
    - count letters in the word 
      - if the number of letters exsits as a key in "lengthCountObject", increment that key's value by 1
      - else, create that length as a key in "lengthCountObject" and set it's initial value to 1
- return "lengthCountObject"

*/


function wordSizesV2(str) {
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  if (!str) return "";

  let wordsArray = str.split(" ");
  let lengthCountObject = {};

  wordsArray.forEach(word => {
    let count = 0;

    word.split('').forEach(letter => {
      if (alphabet.includes(letter.toLowerCase())) count += 1;
    });
    lengthCountObject[count] = lengthCountObject[count] + 1 || 1;
  });

  return lengthCountObject;
}

console.log(wordSizesV2('Four score a"nd seven.'));                       // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizesV2('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
console.log(wordSizesV2("What's up doc?"));                              // { "2": 1, "3": 1, "5": 1 }
console.log(wordSizesV2(''));




// Convert a String to a Number
// The parseInt() method converts a string of numeric characters (including an optional plus or minus sign) to an integer. The method takes 2 arguments where the first argument is the string we want to convert and the second argument should always be 10 for our purposes. parseInt() and the Number() method behave similarly. In this exercise, you will create a function that does the same thing.

// Write a function that takes a string of digits and returns the appropriate number as an integer. You may not use any of the methods mentioned above.

// For now, do not worry about leading + or - signs, nor should you worry about invalid characters; assume all characters will be numeric.

// You may not use any of the standard conversion methods available in JavaScript, such as String() and Number(). Your function should do this the old-fashioned way and calculate the result by analyzing the characters in the string.

// Examples

// Copy Code
// console.log(stringToInteger("4321") === 4321); // logs true
// console.log(stringToInteger("570") === 570); // logs true




// Sum Of Digits
// Write a function that takes one argument, a positive integer, and returns the sum of its digits. Do this without using for, while, or do...while loops - instead, use a series of method calls to perform the sum.

// Examples:

// Copy Code
// sum(23);           // 5
// sum(496);          // 19
// sum(123456789);    // 45





// Alphabetical Numbers
// Write a function that takes an array of integers between 0 and 19 and returns an array of those integers sorted based on the English word for each number:

// zero, one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen

// Example:

// Copy Code
// alphabeticNumberSort(
//    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]);
// // [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]




// Multiply All Pairs
// Write a function that takes two array arguments, each containing a list of numbers, and returns a new array containing the products of all combinations of number pairs that exist between the two arrays. The returned array should be sorted in ascending numerical order.

// You may assume that neither argument will be an empty array.

// Example:

// Copy Code
// multiplyAllPairs([2, 4], [4, 3, 1, 2]);    // [2, 4, 4, 6, 8, 8, 12, 16]




// Leading Substrings
// Write a function that takes a string argument and returns a list of substrings of that string. Each substring should begin with the first letter of the word, and the list should be ordered from shortest to longest.

// Examples:

// Copy Code
// leadingSubstrings('abc');      // ["a", "ab", "abc"]
// leadingSubstrings('a');        // ["a"]
// leadingSubstrings('xyzzy');    // ["x", "xy", "xyz", "xyzz", "xyzzy"]