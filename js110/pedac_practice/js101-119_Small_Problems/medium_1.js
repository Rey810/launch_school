//////////////////////////////////
////// Rotation (Part 1) ////////
///////////////////////////////
/*
Write a function that rotates an array by moving the first element to the end of the array. Do not modify the original array.

If the input is not an array, return undefined.
If the input is an empty array, return an empty array.
*/

/*

/*
Problem:

- input
-> array
- output
-> new array with first element moved to the end

- rules
-> if input is not an array, return undefined
-> if the input is an empty array, return an empty array

- own words
-> given an array, move it's first element to the end of the array and return that array (without mutation)

----
Algorithm
1. Check input validity
2. Create copy of array
3. move first element to the end of the array
4. Return modified copied array



Main Function
rotateArray(array)
1. Check if arg is not array
  - if not, return undefined
2. Check if arg is empty array
  - if is, return []
3. create "arrayCopy" and set to copy of arg
4. create "first" and set to first element removed from array
5. add "first" to the end of the array
6. Return "arrayCopy"
*/

// function rotateArray(arr) {
//   // guard clauses
//   if (!Array.isArray(arr)) return undefined;
//   if (arr.length === 0) return [];

//   // let arrayCopy = arr.slice();
//   // let first = arrayCopy.shift();
//   // arrayCopy.push(first);

//   return arr.slice(1).concat(arr[0]);

//   // return arrayCopy;
// }

// console.log(rotateArray([7, 3, 5, 2, 9, 1]));       // [3, 5, 2, 9, 1, 7]
// console.log(rotateArray(['a', 'b', 'c']));          // ["b", "c", "a"]
// console.log(rotateArray(['a']));                    // ["a"]
// console.log(rotateArray([1, 'a', 3, 'c']));         // ["a", 3, "c", 1]
// console.log(rotateArray([{ a: 2 }, [1, 2], 3]));    // [[1, 2], 3, { a: 2 }]
// console.log(rotateArray([]));                       // []

// // return `undefined` if the argument is not an array
// console.log(rotateArray());                         // undefined
// console.log(rotateArray(1));                        // undefined


// // the input array is not mutated
// let array = [1, 2, 3, 4];
// console.log(rotateArray(array));                    // [2, 3, 4, 1]
// console.log(array);                                 // [1, 2, 3, 4]



//////////////////////////////////
////// Rotation (Part 2) ////////
///////////////////////////////

/*
Write a function that rotates the last count digits of a number. To perform the rotation, move the first of the digits that you want to rotate to the end and shift the remaining digits to the left.
*/

/* 
Problem

- input
-> integer ('number' argument)
-> integer ("count" argument)
- output
-> number (with digits correctly rotated)

- rules
-> to rotate, move first of target digits to the right end
-> this will move the digits, initially to the right of this target digit, to the left

- own words
-> given a number and a count, shift 'count' number of right digits

----
Algorithm
1. Given two numbers: 'number' and 'count'
2. Split 'number' into individual numbers
3. Move the target number to the right
4. Join numbers together and return the result as a number

Main function:
1. Split 'number' into an array
2. Remove digit at position: array.length - ('count' - 1) and set to 'removed'
3. Add 'removed' to end of 'number'
4. Join 'number'
5. Return result
*/

// function rotateRightmostDigits(number, count) {
//   let numArray = [...String(number)];
//   let removed = numArray.splice(numArray.length - count, 1);
//   return Number(numArray.concat(removed[0]).join(''));
// }

// console.log(rotateRightmostDigits(735291, 1));      // 735291
// console.log(rotateRightmostDigits(735291, 2));      // 735219
// console.log(rotateRightmostDigits(735291, 3));      // 735912
// console.log(rotateRightmostDigits(735291, 4));      // 732915
// console.log(rotateRightmostDigits(735291, 5));      // 752913
// console.log(rotateRightmostDigits(735291, 6));      // 352917