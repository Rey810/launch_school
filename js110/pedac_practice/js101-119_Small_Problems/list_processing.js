
/*
SUM OF DIGITS

Write a function that takes one argument, a positive integer, and returns the sum of its digits. Do this without using for, while, or do...while loops - instead, use a series of method calls to perform the sum.

*/

function sum(number){
  return String(number).split('').reduce((sum, curr) => Number(sum) + Number(curr));
}

// console.log(sum(23));           // 5
// console.log(sum(496));          // 19
// console.log(sum(123456789));    // 45




/*
Alphabetical Numbers

Write a function that takes an array of integers between 0 and 19 and returns an array of those integers sorted based on the English word for each number:

- input
-> array of numbers (20)
- output
-> array of numbers (20)

- rules
-> sort the array based on the words for the numbers 
-> alphabetic sorting (a-z)
-> 20 in, 20 out

------
Algorithm
- Replace the numbers with their strings
- Sort them in alphabetic order

Main function
alphabeticNumberSort(array)
1. create numberStrings array 
2. sort the array alphabetically
  - sort according to the string of the number in the numberStrings array
3. Return the sorted array
*/

function alphabeticNumberSort(array) {
  const NUMBERS_ARRAY = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];

  return array.sort((a, b) => NUMBERS_ARRAY[a] > NUMBERS_ARRAY[b] ? 1 : -1);
}

// alphabeticNumberSort(
//   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]);
// // [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]




/*
Multiply All Pairs

Write a function that takes two array arguments, each containing a list of numbers, and returns a new array containing the products of all combinations of number pairs that exist between the two arrays. The returned array should be sorted in ascending numerical order.

You may assume that neither argument will be an empty array.

- input
-> two arrays of numbers
- output
-> one array of ascending numbers

- rules
-> multiply numbers across arrays
-> add all product combinations to final array

- assumptions
-> arrays will always contain numbers

----
Algorithm
- Multiply all numbers across arrays
- Sort all the products

Main function 
multiplyAllPairs(arr1, arr2)
1. create 'productsArray'
2. for-loop, starting at 0, ending at first array length
  - for loop, starts at 0, ends at second array length
    - multiply current number in first array with current number in second array
    - add result to 'productsArray'
3. sort 'productsArray' in ascending order
4. Return 'productsArray'
*/

function multiplyAllPairs(arr1, arr2) {
  let productsArray = [];

  for (let i = 0; i < arr1.length ; i++) {
    for (let k = 0; k < arr2.length; k++) {
      productsArray.push(arr1[i] * arr2[k]);
    }
  }

  return productsArray.sort((a, b) => a - b);
}

// multiplyAllPairs([2, 4], [4, 3, 1, 2]);    // [2, 4, 4, 6, 8, 8, 12, 16]




/*
LEADING SUBSTRINGS

Write a function that takes a string argument and returns a list of substrings of that string. Each substring should begin with the first letter of the word, and the list should be ordered from shortest to longest.

- input
-> string
- output
-> array of substrings

- rules
-> each substring must begin with the first letter of the string
-> substrings in array must be sorted shortest to longest
-> number of substrings is equal to the length of the word

- own words
-> given a string, return a list of substrings from shortest to longest

----
Algorithm:
- Build substrings
- Sort substrings (shortest to longest)

Main function:
leadingSubstrings(string)
1. create "substrings" array
2. for loop, "index" starts at 1, stops at string.length
  - slice starting at 0, ending at "index"
  - add return value to "substrings" array
3. Return "substrings"
*/

function leadingSubstrings(string) {
  let substrings = [];

  for (let index = 1; index <= string.length; index++) {
    substrings.push(string.slice(0, index));
  }

  return substrings;
}


// console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
// console.log(leadingSubstrings('a'));        // ["a"]
// console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]

// FURTHER EXPLORATION: Build using list processing functions (eg. map, filter, reduce)

function leadingSubstrings(string) {
  return [...string].map((_, index) => string.slice(0, index + 1));
}



/*
All Substrings
*/

function substrings(str) {
  let strings = [];

  for (let index = 0; index <= str.length; index++) {
    strings.push(...leadingSubstrings(str.slice(index)));
  }

  return strings;
}

// console.log(substrings('abcde'));

// returns
// [ "a", "ab", "abc", "abcd", "abcde",
//   "b", "bc", "bcd", "bcde",
//   "c", "cd", "cde",
//   "d", "de",
//   "e" ]

// FURTHER EXPLORATION: Build using list processing functions (eg. map, filter, reduce)

function substrings(str) {
  return [...str].map((_, index) => leadingSubstrings(str.slice(index))).flat();
}




/* 
PALINDROMIC SUBSTRINGS

- input
-> string
- output
-> array (containing all palindromic strings)

- rules
-> string must read same forwards and backwards
-> array strings must be in same order as in the input string
-> include duplicates
-> use "substrings" function from previous question
-> single characters are not palindromes
-> case-sensitive

----
Algorithm
1. Build all substrings
2. Remove non-palindromes

Main function:
palindromes(string)
1. Create array "substringsArr"
2. Use "substrings" function to populate "palindromes" with all strings
3. Iterate over "substringsArr" and remove non-palindromes
4. Return "substrings"

Helper function
isPalindrome(string)
1. Split the string into an array
2. Reverse it
3. Join array
4. If result is equal to input, return true otherwise return false
*/

function palindromes(str) {
  return substrings(str).filter(isPalindrome);
}

function isPalindrome(str) {
  return str.split("").reverse().join('') === str && str.length > 1;
}

// palindromes('abcd');       // []
// palindromes('madam');      // [ "madam", "ada" ]

// palindromes('hello-madam-did-madam-goodbye');
// // returns
// // [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
// //   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
// //   "-madam-", "madam", "ada", "oo" ]

// palindromes('knitting cassettes');
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]




/*
SUM OF SUMS

- input
-> array (numbers)
- output
-> number (sum of sums)

- rules
-> array arg always contains at least one number
-> each leading subsequence must be summed

----
Algorithm
- Sum each leading subsequence
- Return result

Main function 
sumOfSums(array)
1. create variable "total" and set to 0
2. create for-loop, starting at 0, ending at array length - 1
  - slice array section
  - add numbers up
  - add to "total"
3. Return "total"
*/

function sumOfSums(arr) {
  let total = 0;

  for (let index = 0; index < arr.length; index++) {
    total += arr.slice(0, index + 1).reduce((sum, current) => sum + current);
  }

  return total;
}

// sumOfSums([3, 5, 2]);        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
// sumOfSums([1, 5, 7, 3]);     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
// sumOfSums([4]);              // 4
// sumOfSums([1, 2, 3, 4, 5]);  // 35




/*
GROCERY LIST

- input
-> array of subarrays
- output
-> array of strings

- rules
-> subarray contains fruit name and number of that fruit
-> output should list fruit string correct number of times

----
Algorithm
- Repeat string a certain number of times
- Return total strings

Main function
1. Create "list" array
2. Loop over arg array
  - set counter to 0
  - add string from subarray until counter equals second element
3. Return "list" array
*/

function buyFruit(array) {
  let list = [];

  array.forEach(subArr => {
    for (let num = 0; num < subArr[1]; num++) {
      list.push(subArr[0]);
    }
  })

  return list;
}

// console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]




/* 
INVENTORY TRANSACTIONS

- input
-> number (id) and array of objects
- output
-> array of objects

- rules
-> array contains objects that are transactions
-> return value is only the transactions for the specified inventory item ID

---- 
Algorithm
- Filter for the objects matching the given ID

Main function 
transactionsFor(id, transactionsArray)
1. Filter for id
*/

function transactionsFor(id, transactionsArray) {
  return transactionsArray.filter(object => object.id === id);
}

// let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
//   { id: 105, movement: 'in',  quantity: 10 },
//   { id: 102, movement: 'out', quantity: 17 },
//   { id: 101, movement: 'in',  quantity: 12 },
//   { id: 103, movement: 'out', quantity: 20 },
//   { id: 102, movement: 'out', quantity: 15 },
//   { id: 105, movement: 'in',  quantity: 25 },
//   { id: 101, movement: 'out', quantity: 18 },
//   { id: 102, movement: 'in',  quantity: 22 },
//   { id: 103, movement: 'out', quantity: 15 }, ];

// console.log(transactionsFor(101, transactions));
// returns
// [ { id: 101, movement: "in",  quantity:  5 },
//   { id: 101, movement: "in",  quantity: 12 },
//   { id: 101, movement: "out", quantity: 18 }, ]