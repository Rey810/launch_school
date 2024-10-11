
/*
SUM OF DIGITS

Write a function that takes one argument, a positive integer, and returns the sum of its digits. Do this without using for, while, or do...while loops - instead, use a series of method calls to perform the sum.

*/

// function sum(number){
//   return String(number).split('').reduce((sum, curr) => Number(sum) + Number(curr));
// }

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

// function alphabeticNumberSort(array) {
//   const NUMBERS_ARRAY = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];

//   return array.sort((a, b) => NUMBERS_ARRAY[a] > NUMBERS_ARRAY[b] ? 1 : -1);
// }

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

multiplyAllPairs([2, 4], [4, 3, 1, 2]);    // [2, 4, 4, 6, 8, 8, 12, 16]