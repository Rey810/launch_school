//////////////////////////////////
////// Double Char (Part 1) /////
////////////////////////////////

/*
Problem:

- input
-> a string
- output
-> string (every character duplicated)

- rules
-> double every character in the argument string (including whitespace)
-> return the doubled string
-> an empty string argument must return an empty string argument

- assumptinos
-> always receive a string argument

----
Algorithm:
1. Given a string
2. Iterate over the string
  - double each character
3. Return the doubled string

Main function:
repeater(string)
1. Create a new array "doubledArray"
2. Split the string into characters
3. Iterate over each character
  - add character twice to 'doubledArray'
4. Join characters in 'doubledArray' and return result
*/

// function repeater(string) {
//   return string.split('').map(char => char + char).join('');
// }

// console.log(repeater('Hello'));        // "HHeelllloo"
// console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
// console.log(repeater(''));             // ""



//////////////////////////////////
////// Double Char (Part 2) /////
////////////////////////////////

/*
Problem:

- inputs
-> string
- output
-> string (with consonants doubled)

- rules 
-> don't double vowels, whitespace, digits, punctuation
-> empty string returns an empty string

- assumption
-> always receive a string argument

---
Algorithm:
1. Given a string
2. Iterate over the string
  - if character is consonant, double it
3. Return string with doubled consonants

Main Function:
doubleConsonants(string)
1. Create array holding consonants called "consonants"
2. Create array called "doubledArray"
2. Split string
3. Iterate over string
  - if character is a consonant, double it and add to "doubledArray"
  - else add to "doubledArray"
4. Join elements in "doubledArray"
5. Return resultant string
*/

// function doubleConsonants(string) {
//   const CONSONANTS = [
//     'b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'
//   ];

//   return [...string].map(char => CONSONANTS.includes(char.toLowerCase()) ? char + char : char).join('');
// }

// console.log(doubleConsonants('String'));          // "SSttrrinngg"
// console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
// console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
// console.log(doubleConsonants(''));                // ""




//////////////////////////////////
////// Reverse Number /////
////////////////////////////////

// function reverseNumber(num) {
//   return Number(String(num).split('').reverse().join(''));
// }

// console.log(reverseNumber(12345));    // 54321
// console.log(reverseNumber(12213));    // 31221
// console.log(reverseNumber(456));      // 654
// console.log(reverseNumber(12000));    // 21 -- Note that leading zeros in the result get dropped!
// console.log(reverseNumber(1));        // 1




//////////////////////////////////
////////// Counting Up //////////
////////////////////////////////

/*
Problem:

-input
-> integer
- output
-> an array

- rules
-> array contain all integers from 1 to the input integer (inclusive)
-> integers must be in ascending order
-> argument will always be a positive integer

- own words
-> given a number, return an array containing all the integers between 1 and that number

----
Algorithm:
1. Given a number
2. Start counting from 1
  - add number to list
  - increase count
  - continue untill count is greater than the number
3. Return the list

Main function:
1. Create an array "seqArr"
2. start a for-loop, first number is equal to 1
  - add number to 'seqArr'
  - increment number 
  - continue until number is greater than arg
3. Return 'seqArr'
*/

// function sequence(integer) {
//   let seqArr = [];

//   for (let num = 1; num <= integer; num += 1) {
//     seqArr.push(num);
//   };

//   return seqArr;
// }

// console.log(sequence(5));    // [1, 2, 3, 4, 5]
// console.log(sequence(3));    // [1, 2, 3]
// console.log(sequence(1));    // [1]



//////////////////////////////////
////////// Counting Up //////////
////////////////////////////////

// function swapName(name) {
//   let nameArr = name.split(" ");
//   let firstName = nameArr.pop();

//   return firstName + ', ' + nameArr.join(" ");
// }

// console.log(swapName('Karl Oskar Henriksson Ragvals'));    // "Ragvals, Karl Oskar Henriksson"


//////////////////////////////////
//////// Sequence Count /////////
////////////////////////////////

/* 
Problem:

- input 
-> two integers (1 is a count, 1 is a starting number)
- output
-> an array 

- rules
-> array must contain same num of elements as the "count" arg
-> elements must be multiples of starting number
-> "count" will be integer >= 0
-> "startingInteger" can be any integer
-> if "count" is 0, return empty array
-> keep number sign the same for each element in array

- own words
-> given a count and a starting number, return an array that contains a "count" number of incrementing elements starting at "startingInteger"

----
Algorithm:
1. Given a "count" and a "startingInteger"
  - if "count" is 0, return empty array
2. Add an integer to an array "count" number of times
  - on each iteration, mulitply integer by current count of iterations
3. Return array

Main function:
1. Create "seqArr" array
2. Create a for-loop that ends when it has looped "count" number of times
  - multiply "startingInteger" by loop iteration count
  - add result to 'seqArr'
  - increment loop iteration count
3. Return 'seqArr'
*/

// function sequence(count, startingInteger) {
//   let seqArr = [];

//   for (let iter = 1; iter <= count; iter++) {
//     seqArr.push(startingInteger * iter);
//   }

//   return seqArr;
// }

// console.log(sequence(5, 1));          // [1, 2, 3, 4, 5]
// console.log(sequence(4, -7));         // [-7, -14, -21, -28]
// console.log(sequence(3, 0));          // [0, 0, 0]
// console.log(sequence(0, 1000000));    // []



//////////////////////////////////
////// Reverse It (Part 1) ///////
////////////////////////////////

// function reverseSentence(words) {
//   return words.split(" ").reverse().join(" ");
// }

// console.log(reverseSentence(''));                       // ""
// console.log(reverseSentence('Hello World'));            // "World Hello"
// console.log(reverseSentence('Reverse these words'));    // "words these Reverse"



//////////////////////////////////
////// Reverse It (Part 2) ///////
////////////////////////////////

// function reverseWords(words) {
//   return words.split(" ").map(word => word.length >= 5 ? word.split("").reverse().join('') : word).join(" ");
// }

// console.log(reverseWords('Professional'));             // "lanoisseforP"
// console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
// console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"



//////////////////////////////////
//////// Reversed Arrays /////////
////////////////////////////////

// function reverse(arr) {
//   let leftIndex = 0;
//   let rightIndex = arr.length - 1;

//   while (leftIndex < arr.length / 2) {
//     [arr[leftIndex], arr[rightIndex]] = [arr[rightIndex], arr[leftIndex]];
//     leftIndex += 1;
//     rightIndex -= 1;
//   }

//   return arr;
// }

// let list = [1, 2, 3, 4];
// let result = reverse(list);
// console.log(result); // logs [4,3,2,1]
// console.log(list === result); // logs true

// let list1 = ["a", "b", "c", "d", "e"];
// let result1 = reverse(list1);
// console.log(result1); // logs  ["e", "d", "c", "b", "a"]
// console.log(list1 === result1); // logs true

// let list2 = ["abc"];
// let result2 = reverse(list2);
// console.log(result2); // logs  ["abc"]
// console.log(list2 === result2); // logs true

// let list3 = [];
// let result3 = reverse(list3);
// console.log(result3); // logs []
// console.log(list3 === result3); // logs true



//////////////////////////////////
///// Matching Parentheses? //////
////////////////////////////////

// function isBalanced(string) {
//   let parens = 0;

//   for (let idx = 0; idx < string.length; idx++) {
//     if (string[idx] === '(') {
//       parens += 1;
//     } else if (string[idx] === ')') {
//       parens -= 1;
//     }
//     if (parens < 0) return false;
//   }
//   return parens === 0;
// }

// console.log(isBalanced("What (is) this?") === true);
// console.log(isBalanced("What is) this?") === false);
// console.log(isBalanced("What (is this?") === false);
// console.log(isBalanced("((What) (is this))?") === true);
// console.log(isBalanced("((What)) (is this))?") === false);
// console.log(isBalanced("Hey!") === true);
// console.log(isBalanced(")Hey!(") === false);
// console.log(isBalanced("What ((is))) up(") === false);