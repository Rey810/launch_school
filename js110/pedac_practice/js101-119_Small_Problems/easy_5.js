//////////////////
// Cute Angles //
////////////////

/* P

- input
-- number
- output
-- string (num°num'num")

- rules/requirements
-- a floating point number is given as argument
-- it's a angle between 0 and 360°
-- the return value is in degrees, minutes, seconds
-- there are 60 minutes in a degree, 60 seconds in a minute
-- input will always be a number but not necesarrily

-- the whole number represents the degrees
-- the decimal represents the minutes and seconds

-- given a number like 76.73
    -- 76 is the degrees
    -- to get the minutes, take ((degrees * 100) % 100) * 0.6 = 43.8
    -- to get the seconds, take ((minutes * 100) % 100) * 0.6 = 48
*/

/* E
dms(30);           // 30°00'00"
dms(76.73);        // 76°43'48"
dms(254.6);        // 254°35'59"
dms(93.034773);    // 93°02'05"
dms(0);            // 0°00'00"
dms(360);          // 360°00'00" or 0°00'00"
*/

/* D */

/* A
1. set "degrees" variable to round down version of argument
2. set "minutes" variable to result of minutes equation
  -- ((degrees * 100) % 100)
3. set "seconds" to result of seconds equation
  -- ((minutes * 100) % 100)
4. Round down all numbers and return as single string in format:
  -- degrees°minutes'seconds"
*/

/* C */

// function dms(num) {
//   let degrees = num;
//   let minutes = ((degrees * 100) % 100) * 0.6;
//   let seconds = ((minutes * 100) % 100) * 0.6;

//   return `${Math.floor(degrees)}°${padZeroes(Math.floor(minutes))}'${padZeroes(Math.floor(seconds))}"`;
// }

// function padZeroes(num) {
//   return String(num).length < 2 ? `0${num}` : num;
// }

// console.log(dms(30));           // 30°00'00"
// console.log(dms(76.73));        // 76°43'48"
// console.log(dms(254.6));        // 254°35'59"
// console.log(dms(93.034773));    // 93°02'05"
// console.log(dms(0));            // 0°00'00"
// console.log(dms(360));          // 360°00'00" or 0°00'00"



///////////////////////
// Combining Arrays //
/////////////////////


/*
Problem:

- input
-- 2 arrays 
- output
-- 1 array -> combination/union of the values from input

- rules/assumptions
-- no duplicated values allowed (even if original contains dups)
-- both args will always be arrays
-- 2 arrays will always be provided

- own words
-- given two arrays, join them into one array where each value is unique

Algorithm:
- Take two arrays
- Add the values into one array (if the  value is unique)
- Return the one array

-----

Main function:
union(array1, array2)
- unionArray = []
- argArrays = [array1, array2]
- Iterate over argArrays
  - On each iteration, iterate over the nested array
    - if the value does not exist in unionArray,  add value to unionArray
    - else continue to next iteration
- Return unionArray

*/

// function union(array1, array2){
//   let unionArray = [];
//   let argArrays = [array1, array2];

//   argArrays.forEach(subarr => {
//     subarr.forEach(value => {
//       if (!unionArray.includes(value)) {
//         unionArray.push(value);
//       }
//     })
//   })

//   return unionArray;
// }

// console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]



///////////////////////
// Halvsies //
/////////////////////

/*
Problem:

- input
-> array
- output
-> a nested array with two subarrays

- rules
-> first half of array elements into first subarray
-> second half of elements go into second subarray
-> if odd number of elements, put middle element in first subarray
-> an empty array as argument, return should still be a nested array with 2 subarrays

- assumptions
-> input will always be an array

- own words
-> given an array with elements, return a nested array that contains 2 subarrays
-> each subarray contains elements from the first array in a 50/50 split
-> when there is an odd number of elements, add middle one to first subarray

----
Algorithm:
- Take one array
- Find out how many elements it has
- If it has an odd number of elements
  - add half it's elements plus one to a new array "firstHalfArray"
  - add leftover half elements to a new array "secondHalfArray"
- If it has an even number of elements
  - add half it's elements to a new array "firstHalfArray"
  - add second half elements to a new array "secondHalfArray"
- If it has zero elements
  - create two subarrays "fisrtHalfArray" and "secondHalfArray"
- Return [firstHalfArray, secondHalfArray]

Main function
halvsies(array)
- Takes an array as an argument
- create two empty arrays: 'firstHalfArray', 'secondHalfArray'
- Count number of elements (from length)
- If count is odd,
  - add first half elements + 1 to "firstHalfArray"
  - add second half elements to "SecondHalfArray"
- If the count is even,
  - add first half elements + 1 to "firstHalfArray"
  - add second half elements to "SecondHalfArray"
- Return [firstHalfArray, secondHalfArray]

*/

// function halvsies(array){
//   let firstHalfArray = [];
//   let secondHalfArray = [];

//   if (array.length % 2 === 1) {
//     firstHalfArray = array.slice(0, (array.length + 1) / 2);
//     secondHalfArray = array.slice((array.length + 1) / 2);
//   } else if (array.length % 2 === 0) {
//     firstHalfArray = array.slice(0, array.length / 2);
//     secondHalfArray = array.slice(array.length / 2);
//   }

//   return [firstHalfArray, secondHalfArray];
// }

// console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
// console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
// console.log(halvsies([5]));                // [[5], []]
// console.log(halvsies([]));                 // [[], []]


/////////////////////////
// Find the Duplicate //
///////////////////////

/*

Problem:

- input 
-> array of numbers (1 duplicate amongs them)
- output
-> number (the duplicate number)

- rules
-> array is unordered
-> array only contains numbers
-> each number is unique except for 1 duplicate (occurs twice exactly)

- own words
-> given an array of numbers, find the one number that occurs twice and return that number

---- 
Algorithm:
1. count the number of times a number occurs in the array
2. find the number that occurs twice
3. return that number

Main Function:
findDup(array)
1. create a new array 'numsArray'
2. create a variable 'duplicate' and set to null
3. Iterate over each number in "array" arg
  - check if number exists in 'numsArray'
    - if it does, reassign 'duplicate' to number
    - if it does not, add number to 'numsArray'
3. Return 'duplicate' 
*/

// function findDup(array) {
//   let numsArray = [];

//   for (let index = 0; index <= array.length; index += 1) {
//     if (numsArray.includes(array[index])) {
//       return array[index];
//     } else {
//       numsArray.push(array[index]);
//     }
//   }

//   return undefined;
// }

// console.log(findDup([1, 5, 3, 1]));                                // 1
// findDup([18,  9, 36, 96, 31, 19, 54, 75, 42, 15,
//          38, 25, 97, 92, 46, 69, 91, 59, 53, 27,
//          14, 61, 90, 81,  8, 63, 95, 99, 30, 65,
//          78, 76, 48, 16, 93, 77, 52, 49, 37, 29,
//          89, 10, 84,  1, 47, 68, 12, 33, 86, 60,
//          41, 44, 83, 35, 94, 73, 98,  3, 64, 82,
//          55, 79, 80, 21, 39, 72, 13, 50,  6, 70,
//          85, 87, 51, 17, 66, 20, 28, 26,  2, 22,
//          40, 23, 71, 62, 73, 32, 43, 24,  4, 56,
//           7, 34, 57, 74, 45, 11, 88, 67,  5, 58]);    // 73



/////////////////////////
// Combine Two Lists //
///////////////////////

/* 
Problem:

- input
-> two arrays (different types of elements)
- output
-> array (contains combined elements)

- rules
-> returned array must hold the arg array elements in alteration
-> first element from first array arg comes first
-> array args have equal number of elements

- own words
-> given 2 arrays, build a new array that contains the elements from the 2 given arrays
-> the elements must be placed in the new array in alternating fashion

----
Algorithm:
1. Add one element from the first array to a new array
2. Add one element from the second array to the new array
3. Repeat until all elements have been added to new array
4. Return new array

Main Function:
interleave(arr1, arr2)
1. create a new array called "interleaved"
2. Iterate over arr1 (both have same length)
  - add element to "interleaved"
  - add element from arr 2 to "interleaved"
3. Return "interleaved"
*/

// const interleave = (array1, array2) => {
//   let interleaved = [];

//   for (let index = 0; index < array1.length; index += 1) {
//     interleaved.push(array1[index], array2[index]);
//   }

//   return interleaved;
// }

// console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]



/////////////////////////
// Combine Two Lists //
///////////////////////

/*
Problem:

- input
-> array (numbers)
- output
-> string 

- rules
-> only numbers in array arg
-> string answer must contain 3 decimal points

- own words
-> given an array of integers, multiply them together then divide the answer by the length of the array
-> return the answer as a string with 3 decimal points

----
Algorithm:
1. Given an array of numbers
2. Multiply elements together
3. Divide by number of entries
4. Format number to have 3 decimal points
5. Coerce to a string
6. Return

Main Function:
multiplicativeAverage(array)
1. create variable "result" and set to 1
2. iterate over array
  - multiply element with 'result'
3. Divide 'result' by array length 
4. Format 'result' to 3 decimal number
5. Return 'result'
*/

// function multiplicativeAverage(array) {
//   let result = 1;

//   array.forEach(el => result *= el);

//   return (result / array.length).toFixed(3);
// }

// multiplicativeAverage([3, 5]);                   // "7.500"
// multiplicativeAverage([2, 5, 7, 11, 13, 17]);    // "28361.667"



/////////////////////////
//// Multiply Lists ////
///////////////////////

/* Problem

- input
-> two arrays (numbers)
- output
-> one array

- rules
-> returned array contains product of each number pair from two array args
-> numbers of the same index must be multiplied together

- assumptions
-> arrays will always be the same length
-> two arrays will always be provided

- own words
-> take two arrays of equal lenght, multiply their numbers with one another at each index, return the result of that in one array

----
Algorithm:
1. Given two arrays
2. Multiply numbers of the same index together
3. Add numbers to new array
4. Return new array

Main Function:
multiplyList(arr1, arr2)
1. Create 'productArray' array2
2. Iterate over arr1,
  - at each iteration, multiply number at current index with number in arr2 at current index
  - add product to 'productArray'
3. Return 'productArray'
*/

// function multiplyList(arr1, arr2) {
//   return arr1.reduce((arr, current, index) => arr.concat(current * arr2[index]), []);
// }

// console.log(multiplyList([3, 5, 7], [9, 10, 11]));    // [27, 50, 77]



/////////////////////////
//// List of Digits ////
///////////////////////

/* Problem:

- input
-> number
- output 
-> array (number split into separate digits)

- rules
-> number will always be a positive integer

- assumptions
-> number will always be provided

---- 
Algorithm:
1. Split the numbers
2. Add each number to an array
3. Return the array

Main function:
digitList(number)
1. Coerce to a string
2. split string into 'digits' array
3. iterate over array and coerce back into number
4. return 'digits' array
*/

// const digitList = (num) => [...String(num)].map(Number);

// console.log(digitList(12345));       // [1, 2, 3, 4, 5]
// console.log(digitList(7));           // [7]
// console.log(digitList(375290));      // [3, 7, 5, 2, 9, 0]
// console.log(digitList(444));         // [4, 4, 4]



/////////////////////////
//// How Many ////
///////////////////////

/*
Problem:

- input
-> an array of strings 
- output
-> strings (line by line showing # of occurrences of unique string)

- rules
-> words are case sensitive (eg. "Cat" !== 'cat')

- assumptions
-> the arg array will only contain strings
-> the array will not be empty
-> an argument will always be provided

- own words
-> given an array of strings, determine how many times a unique string occurs and return that as a string

---- 
Algorithm:
1. Given an array
2. Count number of items
3. Return string containg the item and the # of occurrences

Main Function:
countOccurrences(array)
1. create object "uniqueCounts"
2. loop over argument array
  - if string exists in "uniqueCounts"
    -> increment count for that string in "uniqueCounts"
  - else 
    -> create new key-value pair for string in "uniqueCounts" and set value to 1
3. for each key-value pair in "uniqueCounts"
  - log the string "${key} => value"
  */

//   function countOccurrences(array) {
//     let uniqueCounts = {};

//     for(let i = 0; i < array.length; i += 1) {
//       uniqueCounts[array[i]] = uniqueCounts[array[i]] + 1 || 1;
//     }

//     for (let key in uniqueCounts) console.log(`${key} => ${uniqueCounts[key]}`);
//   }

//   let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
//     'motorcycle', 'suv', 'motorcycle', 'car', 'truck'];

// countOccurrences(vehicles);

// console output -- your output sequence may be different
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2
// suv => 1




/////////////////////////
//// Array Average ////
///////////////////////

/*
Problem:

- input 
-> an array of numbers
- output
-> a number (average)

- rules
-> array will always contain positive integers
-> round down the result to closest whole number
-> one array will always be provided as an argument

- own words
-> given an array of numbers, calculate the average number

----
Algorithm:
1. Loop over the numbers
2. Keep track of the sum of numbers
3. Divide by array length
4. Return result

Main function:
average(array)
1. Create variable "sum"
2. Loop over array arg
  - Add number to "sum"
3. Divide "sum" by array length
4. Return result of that division
*/

// function average(array) {
//   return Math.floor(array.reduce((sum, current) => sum + current) / array.length);
// }

// console.log(average([1, 5, 87, 45, 8, 8]));       // 25
// console.log(average([9, 47, 23, 95, 16, 52]));    // 40



//////////////////////////////////
//// After Midnight (Part 1) ////
////////////////////////////////

/* 
Problem:

- input
-> integer (positive or negative)
- output
-> string (hh:mm)

- rules
-> any integer can be given as an argument
-> negative integer is time before midnight
-> positive integer is time after midnight
-> ignore any time complications (eg. Daylight Savings)
-> Don't use Date class methods

- assumptions
-> integer will always be provided

- own words
-> given an integer, return the time as a string in "hh:mm" format

--- 
Algorithm:
1. If integer argument less than 0, subtract integer from midnight
2. If integer argument greater than 0, add integer to midnight
3. If integer argument is zero, do nothing to midnight
4. Return new time

Main Function:
timeOfDay(integer)
1. create MINUTES_IN_DAY variable and set to 60 * 24 (number of minutes)
2. If integer < 0, minues integer from "MINUTES_IN_DAY"
3. If integer > 0, add integer to "MINUTES_IN_DAY"
4. Convert "MINUTES_IN_DAY" to "hh:mm" format
5. Return result
*/
// const MINUTES_PER_HOUR = 60;
// const HOURS_PER_DAY = 24
// const MINUTES_IN_DAY = MINUTES_PER_HOUR * HOURS_PER_DAY;

// function leadingZero(number) {
//   return number < 10 ? `0${number}` : String(number);
// }

// function formatTime(hours, minutes) {
//   return `${leadingZero(hours)}:${leadingZero(minutes)}`;
// }

// function timeOfDay(deltaMinutes) {


//   if (deltaMinutes < 0) {
//     deltaMinutes = (deltaMinutes % MINUTES_IN_DAY) + MINUTES_IN_DAY;
//   } else {
//     deltaMinutes = deltaMinutes % MINUTES_IN_DAY;
//   }

//   let hours = Math.floor(deltaMinutes / MINUTES_PER_HOUR);
//   let minutes = deltaMinutes % MINUTES_PER_HOUR;

//   return formatTime(hours, minutes);

// }

// console.log(timeOfDay(0) === "00:00");
// console.log(timeOfDay(-3) === "23:57");
// console.log(timeOfDay(35) === "00:35");
// console.log(timeOfDay(-1437) === "00:03");
// console.log(timeOfDay(3000) === "02:00");
// console.log(timeOfDay(800) === "13:20");
// console.log(timeOfDay(-4231) === "01:29");



//////////////////////////////////
//// After Midnight (Part 2) ////
////////////////////////////////

/* 
Problem:

- input 
-> string (hh:mm format)
- output
-> number (midnights before/after midnight)

- rules
-> time is given in 24h format
-> both functions should return a value in the range of 0..1439
*/

// function afterMidnight(string) {
//   let numArray = string.split(":").map(el => Number(el));
//   let hours = numArray[0];
//   let minutes = numArray[1];

//   return ((hours * 60) + minutes) % 1440;
// }

// function beforeMidnight(string) {
//   let numArray = string.split(":").map(el => Number(el));
//   let hours = numArray[0];
//   let minutes = numArray[1];

//   return (1440 - ((hours * 60) + minutes)) % 1440;
// }

// console.log(afterMidnight("00:00") === 0);
// console.log(beforeMidnight("00:00") === 0);
// console.log(afterMidnight("12:34") === 754);
// console.log(beforeMidnight("12:34") === 686);
// console.log(afterMidnight("24:00") === 0);
// console.log(beforeMidnight("24:00") === 0);