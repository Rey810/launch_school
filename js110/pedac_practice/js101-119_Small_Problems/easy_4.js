/* P

- input
-- 6 numbers
- output
-- string (describing where the 6th number appears)

- requirements
-- prompt user for 6 numbers
-- log a message that describes where the 6th number is among the 1st 5
-- if the number does not appear among the 5, tell the user so
-- reprompt the user for a number if they give some invalid input

- assumptions
-- a number may not always be provided
-- knowing where or how many time it appears among the 5 is not required

*/

/* E 
Enter the 1st number: 25
Enter the 2nd number: 15
Enter the 3rd number: 20
Enter the 4th number: 17
Enter the 5th number: 23
Enter the last number: 17

The number 17 appears in 25,15,20,17,23.

-----

Enter the 1st number: 25
Enter the 2nd number: 15
Enter the 3rd number: 20
Enter the 4th number: 17
Enter the 5th number: 23
Enter the last number: 18

The number 18 does not appear in 25,15,20,17,23.
*/

/* D 
- an array containg the numbers
[ num, num, num, num, num, num ]

- an array containing the currentNumber counts 
[ 1st, 2nd, 3rd, 4th, 5th, last]
*/

/* A
1. Prompt user for number
  -- check validity and reprompt if needed
  -- add number to 'numbers' array
  -- increment 
2. Repeat 6 times
3. Remove last number from array and set it to 'lastNumber'
4. Check if 'numbers' array includes 'lastNumber'
5. if it does, return "The number num appears in num1, num2, num3, num4, num5"
6. if it does not, return "The number num does not appear in num1, num2, etc"
*/

/* C */

// let readline = require('readline-sync');

// function searching101() {
//   let currentNumberArr = ['1st', '2nd', '3rd', '4th', '5th', 'last'];
//   let numberInputsArr = [];
//   let num;
//   let string;

//   for (let index = 0; index < currentNumberArr.length; index += 1) {
//     num = readline.questionInt(`Enter ${currentNumberArr[index]} number: `);
//     numberInputsArr[index] = Number(num);
//   }

//   let lastNumber = numberInputsArr.pop();

//   if (numberInputsArr.includes(lastNumber)) {
//     string = `The number ${lastNumber} appears in ${numberInputsArr.join(',')}`;
//   } else {
//     string = `The number ${lastNumber} does not appear in ${numberInputsArr.join(',')}`;
//   }

//   return string;
// }

// console.log(searching101());




/////////////////////////////////////
/// Palindromic Strings (Part 1) ///
///////////////////////////////////

/* P
- input
-- string
- output
-- Boolean

- requirements
-- return true if the string is a palindrome (reads same forwards and backwards)
-- casing and all characters matter (!!!)

- assumptions
-- a string will always be provided

- question
-- is an empty string a palindrome?
*/

/* E
isPalindrome('madam');               // true
isPalindrome('Madam');               // false (case matters)
isPalindrome("madam i'm adam");      // false (all characters matter)
isPalindrome('356653');              // true
*/

/* D
[ char1, char2, char3, charN ]
*/

/* A
1. set 'original' to array of string input
2. set 'reversed' to reverse of 'original'
3. check if every char in 'reversed' is equal to every char in 'original'
  -- loop over each character and perform the check
  -- exit the loop if a char is not equal
4. return true if it is and false if it is not
*/

/* C */

// function isPalindrome(str) {
//   return str.split('').every((el, idx) => el === [...str].reverse()[idx]);
// }

// function isPalindrome(str) {
//   return str === [...str].reverse().join('');
// }

// console.log(isPalindrome('madam'));               // true
// console.log(isPalindrome('Madam'));               // false (case matters)
// console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
// console.log(isPalindrome('356653'));              // true
// console.log(isPalindrome(''));                    // true



/////////////////////////////////////
/// Palindromic Strings (Part 2) ///
///////////////////////////////////

/* P
- input
-- string
- output
-- Boolean

- requirements
-- return true if the string is a palindrome (reads same forwards and backwards)
-- casing and all characters matter DON'T MATTER (!!!)

- assumptions
-- a string will always be provided
*/

/* E
isRealPalindrome('madam');               // true
isRealPalindrome('Madam');               // true (case does not matter)
isRealPalindrome("Madam, I'm Adam");     // true (only alphanumerics matter)
isRealPalindrome('356653');              // true
isRealPalindrome('356a653');             // true
isRealPalindrome('123ab321');            // false
*/

/* D
[ char1, char2, char3, charN ]
*/

/* A
1. set 'original' to array of string input
  -- change case to lowercase
  -- remove non-alphanumerics
      -- use a isAlphaNumeric to deal with this
2. set 'reversed' to reverse of 'original'
3. check if every char in 'reversed' is equal to every char in 'original'
  -- loop over each character and perform the check
  -- exit the loop if a char is not equal
4. return true if it is and false if it is not
*/

/* C */
// function isRealPalindrome(str) {
//   return isPalindrome(str.toLowerCase().replace(/[^a-z0-9]/g, ''));
// }

// console.log(isRealPalindrome('madam'));               // true
// console.log(isRealPalindrome('Madam'));               // true (case does not matter)
// console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
// console.log(isRealPalindrome('356653'));              // true
// console.log(isRealPalindrome('356a653'));             // true
// console.log(isRealPalindrome('123ab321'));            // false



////////////////////////////
/// Palindromic Numbers ///
//////////////////////////

/* P 
- input
-- number
- output
-- boolean

- requirements
-- if it's palindromic, return true, else return false

- assumptions
-- a number is always provided


*/

/* E
isPalindromicNumber(34543);        // true
isPalindromicNumber(123210);       // false
isPalindromicNumber(22);           // true
isPalindromicNumber(5);            // true
*/

/* D */

/* A 
1. reverse number
2. compare to input
  - if same, return true
  - else return false
*/

/* C */

// const isPalindromicNumber = num => num === String(num).split('').reverse().join('');

// console.log(isPalindromicNumber(34543));        // true
// console.log(isPalindromicNumber(123210));       // false
// console.log(isPalindromicNumber(22));           // true
// console.log(isPalindromicNumber(5));            // true




////////////////////////////
/// Running Totals ///
//////////////////////////

/* P

- input
-- array of numbers
- output
-- array of numbers

- requirements
-- each number in the returned array must be the running total
-- returned array has same number of numbers as input array
-- empty array as input returns an empty array as output

- assumptions
-- only 1 array will be provided

*/

/* E
runningTotal([2, 5, 13]);             // [2, 7, 20]
runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
runningTotal([3]);                    // [3]
runningTotal([]);                     // []
*/

/* D */
/* A 
1. set input array to "input"
2. create new array "runningTotalsArr"
3. create "runningTotal" and set to 0
3. loop over "input"
  -- add current number to "running Total" then add "runningTotal" to "runningTotalsArr"
4. return "runningTotalsArr"
*/

/* C */
// const runningTotal = arr => {
//   let input = arr;
//   let runningTotalsArr = [];

//   let runningTotal = 0;

//   input.forEach(el => {
//     runningTotal += el;
//     runningTotalsArr.push(runningTotal);
//   });

//   return runningTotalsArr;
// };

// const runningTotal = arr => {
//   let runningTotal = 0;
//   return arr.map(el => runningTotal += el);
// };

// console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
// console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
// console.log(runningTotal([3]));                    // [3]
// console.log(runningTotal([]));                     // []


////////////////////////////////
/// Letter Counter (Part 1) ///
//////////////////////////////

/* P
- input
-- string
- output
-- object

- requirements
-- object must show the word length as the key and the number of occurences as the value
-- empty strings should return an empty object
-- words are separated by spaces
-- special characters form part of the word
*/

/* E 
wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
wordSizes('');                                            // {}
*/

/* D 
{ wordLength: numOfWords } -> keeps track of word length count
*/

/* A
1. Split string up on every space into separate strings
2. create object "wordSizeObj" that will keep track of word lengths
3. loop over strings
  -- count the length of the string
  -- if length of that string exists in "wordSizeObj", increment it's value by 1
  -- else, create a new property of the current word's length and set it's value to 1
4. return the "wordSizeObj"
*/

/* C */
// const wordSizes = string => {
//   const wordSizeObj = {};

//   if (string.length === 0) return wordSizeObj;

//   string.split(" ").forEach(word => {
//     wordSizeObj[word.length] += wordSizeObj[word.length] + 1 || 1;
//   });

//   return wordSizeObj;
// };

// console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
// console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
// console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
// console.log(wordSizes(''));                                            // {}



////////////////////////////////
/// Letter Counter (Part 2) ///
//////////////////////////////

/* P
- inputs
-- string
- outputs
-- object

- requirements
-- given a string, count the number of strings with different lengths
-- split the string on whitespace
-- ignore special characters from the length count
-- empty strings return empty objects
*/

/* E 
wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 2 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 3 }
wordSizes("What's up doc?");                              // { "2": 1, "3": 1, "5": 1 }
wordSizes('');                                            // {}
*/

/* D 
- an object that has number keys for word lengtths and number values for no. of occurrences
*/

/* A 
1. split string into multiple strings on whitespace
2. remove non-letters from each string
  - split word into characters
    - if character is a letter, keep it
    - if character is not a letter, leave it out
3. loop over each string
  -- count the length of the string
  -- if length of that string exists in "wordSizeObj", increment it's value by 1
  -- else, create a new property of the current word's length and set it's value to 1
4. return the "wordSizeObj"
*/

/* C */

// function removeNonLetters(string) {
//   return string.split("").filter(letter => /[a-zA-Z]/.test(letter)).join('');
// }

// function wordSizes(string) {
//   return string.split(" ").map(removeNonLetters).reduce((obj, word) => {
//     obj[word.length] = obj[word.length] + 1 || 1;
//     return obj;
//   }, {});
// }

// console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
// console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
// console.log(wordSizes("What's up doc?"));                              // { "2": 1, "3": 1, "5": 1 }
// console.log(wordSizes(''));                                            // {}



////////////////////////////////
///////// Letter Swap /////////
//////////////////////////////

/* P
- input
-- string
- output
-- string with first and last letters swapped

- requirements
-- swap the first and last letter of each word
-- return string of words with swapped letters

- assumptions
-- string is always provided
-- string only contains words and spaces
-- no leading, trailing or repeated spaces
*/

/* E
swap('Oh what a wonderful day it is');  // "hO thaw a londerfuw yad ti si"
swap('Abcde');                          // "ebcdA"
swap('a');                              // "a"
*/

/* D
- an array to hold the different words
*/

/* A
1. split string into array
2. loop over each word in the array
  -- remove the first letter
  -- remove last letter
  -- add first letter to end of string
  -- add last letter to start of string
3. join words into single string seperated by spaces
4. return string
*/

/* C */

// function swap(string) {
//   return string.split(" ").map(word => {
//     if (word.length === 1) return word;
//     return word[word.length - 1] + word.slice(1, -1) + word[0];
//   }).join(" ");
// }

// console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
// console.log(swap('Abcde'));                          // "ebcdA"
// console.log(swap('a'));                              // "a"




///////////////////////////////////
// Convert a String to a Number //
/////////////////////////////////

/* P 
- input
-- string
- output
-- number

- requirements
-- no use of parseInt() or Number() etc allowed
-- calculate result by analysing characters in the string

- assumptions
-- input will always be a string of numeric characters
-- no floating point numeric characters will be given as inputs

*/

/* E 
console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true
*/

/* D */

/* A
1. split string into characters
2. set object containing numbers as values
3. loop over characters
    -- for each character, replace it with the number from the object
4. join split characters
5. return joined characters as one number
*/

/* C */

// function stringToInteger(string) {
//   const DIGITS = {
//     0: 0,
//     1: 1,
//     2: 2,
//     3: 3,
//     4: 4,
//     5: 5,
//     6: 6,
//     7: 7,
//     8: 8,
//     9: 9
//   };
//   let arrayOfDigits = string.split("").map(char => DIGITS[char]);
//   let value = 0;
//   arrayOfDigits.forEach(digit => (value = (10 * value) + digit));
//   return value;
// }

// console.log(stringToInteger("4321") === 4321); // logs true
// console.log(stringToInteger("570") === 570); // logs true