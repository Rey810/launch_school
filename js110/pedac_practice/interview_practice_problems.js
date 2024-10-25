/*
Problem 1

- input
-> array (numbers)
- output
-> array (numbers, count)

- rules
-> count numbers smaller than each number
-> exclude duplicates (i.e. only count once)

---- 
ALGORITHM
- Given an array of numbers, count the occurences of smaller numbers for each number
- Return an array of counts

Main function
smallerNumbersThanCurrent(array)
- create 'numCounts' array
- iterate over "array"
  -- create "numCounts" array to hold numbers that have been checked
  -- intialize a for-loop, set 'idx' to "array[0]", ending at end of "array"
    --- if "numCounts" array does not contain 'idx' num and 'idx' is smaller than current number, add it to "counts"
  -- Push "numCounts" length to "numCounts"
- Return 'numCounts'
*/

function smallerNumbersThanCurrent(array) {
  const numCounts = [];

  array.forEach(num => {
    let smallerNums = [];

    for (let idx = 0; idx < array.length; idx++) {
      if (!smallerNums.includes(array[idx]) && array[idx] < num) {
        smallerNums.push(array[idx]);
      }
    }

    numCounts.push(smallerNums.length);

  });

  return numCounts;
}

const p = console.log;
const eq = (arr1, arr2) => JSON.stringify(arr1) === JSON.stringify(arr2);

// p(eq(smallerNumbersThanCurrent([8, 1, 2, 2, 3]), [3, 0, 1, 1, 2]));
// p(eq(smallerNumbersThanCurrent([7, 7, 7, 7]), [0, 0, 0, 0]));
// p(eq(smallerNumbersThanCurrent([6, 5, 4, 8]), [2, 1, 0, 3]));
// p(eq(smallerNumbersThanCurrent([1]), [0]));

// let myArray = [1, 4, 6, 8, 13, 2, 4, 5, 4];
// let result = [0, 2, 4, 5, 6, 1, 2, 3, 2];
// p(eq(smallerNumbersThanCurrent(myArray), result));


/*
Problem 2

- input
-> array (numbers)
- output
-> number (sum) OR null

- rules
-> minimum sum of 5 consecutive numbers
-> null if argument has less than 5 elements

----
Algorithm
- Sum 5 number groups until all possible groups have been summed
- Return the smallest sum

Main function:
minimumSum(array)
- return null if the array has less than 5 elements
- create 'sums' array
- iterate over the array
  -- sum first 5 numbers from current index (use sumFirstFive)
  -- add result to 'sums'
- return smallest number in 'sums'

Helper function
sumFirstFive(startIndex, array)
- create 'sum' and set to 0
- init for-loop, start at startIndex, end at startIndex + 5
  -- add number to 'sum'
- return 'sum'
*/

function sumFirstFive(startIndex, array) {
  let sum = 0;

  for (let idx = startIndex; idx < startIndex + 5; idx++) {
    sum += array[idx];
  }

  return sum;
}

function minimumSum(array) {
  if (array.length < 5) return null;

  const sums = [];

  for (let idx = 0; idx < array.length - 4; idx++) {
    sums.push(sumFirstFive(idx, array));
  }

  console.log(sums);
  return sums.sort((a, b) => a - b)[0];
}

// p(minimumSum([1, 2, 3, 4]) === null);
// p(minimumSum([1, 2, 3, 4, 5, -5]) === 9);
// p(minimumSum([1, 2, 3, 4, 5, 6]) === 15);
// p(minimumSum([55, 2, 6, 5, 1, 2, 9, 3, 5, 100]) === 16);
// p(minimumSum([-1, -5, -3, 0, -1, 2, -4]) === -10);



/*
Problem 3
Create a function that takes a string argument and returns a copy of the string with every second character in every third word converted to uppercase. Other characters should remain the same.
*/
let original = 'Lorem Ipsum is simply dummy text of the printing world';
let expected = 'Lorem Ipsum iS simply dummy tExT of the pRiNtInG world';
// p(toWeirdCase(original) === expected);

original = 'It is a long established fact that a reader will be distracted';
expected = 'It is a long established fAcT that a rEaDeR will be dIsTrAcTeD';
// p(toWeirdCase(original) === expected);

// p(toWeirdCase('aaA bB c') === 'aaA bB c');

// original = "Mary Poppins' favorite word is " +
//            "supercalifragilisticexpialidocious";
// expected = "Mary Poppins' fAvOrItE word is " +
//            "sUpErCaLiFrAgIlIsTiCeXpIaLiDoCiOuS"
// p(toWeirdCase(original) === expected);

/*
input
-> string 
output
-> string (changed)

- rules
-> 2nd character in 3rd word must be UPPERCASED
-> everything else remains the same

----
Algorithm
- Find the third word
- Find the second character
- Change that to uppercase
- Return the changed string

Main function
toWeirdCase(string)
- split the string on space characters into an array 
- iterate over the array
  -- if isThirdWord
    --- uppercase2ndCharacters
    --- return word with the uppercased characters
  -- else 
    --- return the unchanged word
- return the changed string

Helper function
isThirdWord(index)
- if the index + 1 is divisible by 3 
-- return true
- return false

uppercase2ndCharacters(word) 
- split word on each character into array
- iterate over array
  -- if character index + 1 is divisible by 2
    --- uppercase character
    --- return uppercased character
  -- else 
    --- return the character
- join array into string 
- return string
*/

function isThirdWord(index) {
  return (index + 1) % 3 === 0;
}

function uppercase2ndCharacters(word) {
  return word.split("").map((letter, index) => {
    if ((index + 1) % 2 === 0) return letter.toUpperCase();
    else return letter;
  }).join("");
}


function toWeirdCase(string) {
  return string.split(" ").map((word, index) => {
    if (isThirdWord(index)) {
      return uppercase2ndCharacters(word);
    } else {
      return word
    }
  }).join(" ")
}




/*
Problem 4
Create a function that takes an array of integers as an argument and returns an array of two numbers that are closest together in value. If there are multiple pairs that are equally close, return the pair that occurs first in the array.

In: array (numbers)
Out: array (numbers)
Rules:
  - Numbers returned must be the two that are closest in value
  - If multiple pairs are equally close, return the pair that occurs first in the array

Array: Store lowest number pairs

-----
Algorithm
- Find the closest two numbers
- Return the closest pair that occurs first in the array

1. Create an empty array to hold closest pairs 'closestPair'
2. Iterate over numbersArr
  -- Iterate from the current position in the array
    --- If 'closestPair' has elements AND pair is closer than 'closestPair'
      ---- Replace values of 'closestPair' with current pair
    --- Otherwise if 'closestPaiir' has no elements set 'closestPair' to the current pair
3. Return closest pair

function determineCloseness(firstNum, secondNum)
- If the firstNum is smaller than the secondNum
  -- Subtract the firstNum from the secondNum and return the value
- Otherwise
  -- Subtract the secondNum from the firstNum and return the value
*/

function getDiff(firstNum, secondNum) {
  return firstNum < secondNum ? secondNum - firstNum : firstNum - secondNum
}

function closestNumbers(array) {
  const closestPair = [];

  for (let i = 0; i < array.length - 1; i++) {
    for (let k = i + 1; k < array.length; k++) {
      let isNewPairCloser = getDiff(array[i], array[k]) < getDiff(closestPair[0], closestPair[1]);
        if (!closestPair.length || isNewPairCloser) {
        closestPair[0] = array[i]
        closestPair[1] = array[k]
      }
    }
  }
return closestPair;
}


// p(eq(closestNumbers([5, 25, 15, 11, 20]), [15, 11]));     // true
// p(eq(closestNumbers([19, 25, 32, 4, 27, 16]), [25, 27])); // true
// p(eq(closestNumbers([12, 22, 7, 17]), [12, 7]));          // true




/*
Problem 5
Create a function that takes a string argument and returns the character that occurs most often in the string. If there are multiple characters with the same greatest frequency, return the one that appears first in the string. When counting characters, consider uppercase and lowercase versions to be the same.

In: string (one or more words)
Out: string (letter that occurs the most)
Rules:
  - If multiple characters with same frequenect, return the one that appears first
  - Case-insensitive

----
Algorithm
- Determine the number of occurences of each letter
- Determine the first letter with most occurrences
- Return that letter

1. Get the letter counts and set to "letterCounts" (see getLetterCounts)
2. Create "letter" and set to the first letter in "letterCounts"
3. Iterate over letterCounts
  - If the current letter has a higher count than "letter"
    -- Set "letter" to the current letter
4. Return "letter"


function getLetterCounts(string) 
1. Create an object to hold the letters and their occurrences
2. Iterate over the string
  - If the letter exists in the object, increment the value of the letter
  - Otherwise, create a key-value pair for the letter and set its value to 1
3. Return the object
*/

function mostCommonChar(string) {
  const letterCounts = getLetterCounts(string);

  let letter = Object.keys(letterCounts)[0];

  for (let key in letterCounts) {
    if (letterCounts[key] > letterCounts[letter]) {
      letter = key;
    }
  }

  return letter;

}

function getLetterCounts(string) {
  const counts = {};

  string.split(" ").forEach(word => word.split("").forEach(letter => {
    letter = letter.toLowerCase();
    if (counts[letter]) counts[letter] += 1;
    else counts[letter] = 1;
  }))

  return counts;
}


// p(mostCommonChar('Hello World') === 'l');
// p(mostCommonChar('Mississippi') === 'i');
// p(mostCommonChar('Happy birthday!') === 'h');
// p(mostCommonChar('aaaaaAAAA') === 'a');

// let myStr = 'Peter Piper picked a peck of pickled peppers.';
// p(mostCommonChar(myStr) === 'p');

// myStr = 'Peter Piper repicked a peck of repickled peppers. He did!';
// p(mostCommonChar(myStr) === 'e');




/*
Problem 2
Create a function that takes an array of integers as an argument. The function should return the minimum sum of 5 consecutive numbers in the array. If the array contains fewer than 5 elements, the function should return null.

In: array (numbers)
Out: number
Rules:
  - Minimum sum of 5 consecutive numbers (numbers in a row)
  - Null is returned if there are fewer than 5 elements

----
Algorithm
- Find all possible sums of 5 consecutive numbers
- Return the smallest sum

1. Create "minSum" and set it to null
2. Iterate over the numbers array
  - Sum 5 consecutive numbers
  - If 'minSum' has a truthy value and the sum is smaller than 'minSum'
    -- Set 'minSum' to current sum
  - Otherwise, set 'minSum' to the current sum
3. Return "minSum"
*/

function minimumSum(array) {
  let minSum = null;
  
  for (let i = 0; i < array.length - 4; i++) {
    let sum = array[i] + array[i + 1] + array[i + 2] + array[i +3] + array[i + 4];
    if (!minSum || sum < minSum) minSum = sum;
  } 

  return minSum;
}

p(minimumSum([1, 2, 3, 4]) === null);
p(minimumSum([1, 2, 3, 4, 5, -5]) === 9);
p(minimumSum([1, 2, 3, 4, 5, 6]) === 15);
p(minimumSum([55, 2, 6, 5, 1, 2, 9, 3, 5, 100]) === 16);
p(minimumSum([-1, -5, -3, 0, -1, 2, -4]) === -10);