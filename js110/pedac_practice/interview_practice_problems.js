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
// let original = 'Lorem Ipsum is simply dummy text of the printing world';
// let expected = 'Lorem Ipsum iS simply dummy tExT of the pRiNtInG world';
// p(toWeirdCase(original) === expected);

// original = 'It is a long established fact that a reader will be distracted';
// expected = 'It is a long established fAcT that a rEaDeR will be dIsTrAcTeD';
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

// p(minimumSum([1, 2, 3, 4]) === null);
// p(minimumSum([1, 2, 3, 4, 5, -5]) === 9);
// p(minimumSum([1, 2, 3, 4, 5, 6]) === 15);
// p(minimumSum([55, 2, 6, 5, 1, 2, 9, 3, 5, 100]) === 16);
// p(minimumSum([-1, -5, -3, 0, -1, 2, -4]) === -10);




/*
Problem 6
Create a function that takes a string argument and returns a hash in which the keys represent the lowercase letters in the string, and the values represent how often the corresponding letter occurs in the string.

In: string
Output: object
Rules:
  - Only lowercase letters are counted

----
Algorithm
- Count the lowercase letters 
- Return an object of these letters and counts
- Return an empty object if there are no lowercase letters

1. create letterCounts object
2. Iterate over the string
  - If the letter exists in letterCounts
    -- Increment this letters count
  - Otherwise if its a lowercase letter
    -- Add the letter to letterCounts and set to 1
3. Return letterCounts
*/

function countLetters(string) {
  const letterCounts = {};

  [...string].forEach(char => {
    if (letterCounts[char]) letterCounts[char] += 1;
    else if (char >= 'a' && char <= 'z') letterCounts[char]  = 1;
  })

  return letterCounts;
}

const objeq = function(obj1, obj2) {
  let keys1 = Object.keys(obj1);
  let keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key of keys1) {
    if (! keys2.includes(key)) {
      return false;
    } else if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
}

// let expected = {'w': 1, 'o': 2, 'e': 3, 'b': 1, 'g': 1, 'n': 1};
// p(objeq(countLetters('woebegone'), expected));

// expected = {'l': 1, 'o': 1, 'w': 1, 'e': 4, 'r': 2,
//             'c': 2, 'a': 2, 's': 2, 'u': 1, 'p': 2};
// p(objeq(countLetters('lowercase/uppercase'), expected));

// expected = {'u': 1, 'o': 1, 'i': 1, 's': 1};
// p(objeq(countLetters('W. E. B. Du Bois'), expected));

// p(objeq(countLetters('x'), {'x': 1}));
// p(objeq(countLetters(''), {}));
// p(objeq(countLetters('!!!'), {}));




/*
Problem 7
Create a function that takes an array of integers as an argument and returns the number of identical pairs of integers in that array. For instance, the number of identical pairs in [1, 2, 3, 2, 1] is 2: there are two occurrences each of both 2 and 1.

If the array is empty or contains exactly one value, return 0.

If a certain number occurs more than twice, count each complete pair once. For instance, for [1, 1, 1, 1] and [2, 2, 2, 2, 2], the function should return 2. The first array contains two complete pairs while the second has an extra 2 that isn't part of the other two pairs.

In: array (numbers)
Out: number
Rules:
  - identical pairs: 2 of the same number
  - eg [1, 1, 1, 1] -> 2 identical pairs

----
Algorithm
- Count the occurrences of numbers
- Count the identical pairs

1. Get the number counts (see numCounts) and set to "numCountsObj"
2. create "identicalPairsCount" and set to 0
3. Iterate over "numCounts"
  - Count pairs and increment "identicalPairsCount" by count
4. Return "identicalPairsCount"

function numCounts(arr)
1. Create "counts" obj
2. Iterate over numbers
    - If the number exists in obj
      -- Increment it by 1
    - Otherwise create a key-value of num: 1
3. Return counts
*/

function pairs(arr) {
  const numCountsObj = numCounts(arr);
  let identicalPairsCount = 0;
  
  for (let numKey in numCountsObj) {
    identicalPairsCount += Math.floor(numCountsObj[numKey] / 2);
  }

  return identicalPairsCount;
}

function numCounts(arr) {
  const counts = {};

  arr.forEach(num => {
    if (counts[num]) counts[num] += 1;
    else counts[num] = 1;
  })

  return counts;
}

// p(pairs([3, 1, 4, 5, 9, 2, 6, 5, 3, 5, 8, 9, 7]) === 3);
// p(pairs([2, 7, 1, 8, 2, 8, 1, 8, 2, 8, 4]) === 4);
// p(pairs([]) === 0);
// p(pairs([23]) === 0);
// p(pairs([997, 997]) === 1);
// p(pairs([32, 32, 32]) === 1);
// p(pairs([7, 7, 7, 7, 7, 7, 7]) === 3);




/*
Problem 8

Create a function that takes a non-empty string as an argument. The string consists entirely of lowercase alphabetic characters. The function should return the length of the longest vowel substring. The vowels of interest are "a", "e", "i", "o", and "u".

In: string ('a-z')
Out: number (longest vowel substring)
Rules:
  - Return 0 if no vowel substring is found

---------
Algorithm
- Find the longest vowel substring
- Return the length of that substring

1. Create 'subStrLength' and set it to 0
2. Create a 'currentSubstring'
2. Iterate over the string
  - Check if the letter is a vowel
    -- Append it to 'currentSubstring' 
    -- If 'currentSubstring' is now bigger than 'subStringLength
      --- Set 'subStringLength' to 'currentSubstring' length
  - Otherwise set 'currentSubstring' to 0
3. Return 'subStrLength'

Helper function
isVowel(letter)
1. Create a 'vowels' array
2. Return true if letter is found in 'vowels' array
3. Otherwise return false
*/

function longestVowelSubstring(str) {
  let subStrLength = 0;
  let currentSubstring = '';

  [...str].forEach(letter => {

    if (isVowel(letter)) {
      currentSubstring += letter;
      if (currentSubstring.length > subStrLength) subStrLength = currentSubstring.length;
    } else currentSubstring = '';
  })

  return subStrLength;
}

function isVowel(letter) {
  const vowels = ["a", "e", "i", "o", "u"];

  return vowels.includes(letter);
}

// p(longestVowelSubstring('cwm') === 0);
// p(longestVowelSubstring('many') === 1);
// p(longestVowelSubstring('launchschoolstudents') === 2);
// p(longestVowelSubstring('eau') === 3);
// p(longestVowelSubstring('beauteous') === 3);
// p(longestVowelSubstring('sequoia') === 4);
// p(longestVowelSubstring('miaoued') === 5);




/*
Problem 9
Create a function that takes two string arguments and returns the number of times that the second string occurs in the first string. Note that overlapping strings don't count: 'babab' contains 1 instance of 'bab', not 2.

You may assume that the second argument is never an empty string.

In: 2 strings (source, target)
Out: number (count of target in source
Rules:
  - overlapping strings don't count (i.e. 'babab' has 1 'bab')

-----
Algorithm
- Find all occurrences of target string
- Count the occurrences of target string

*/


function countSubstrings(source, target) {
  let counter = 0;

  for (let i = 0; i <= source.length - target.length; i++) {
    let sourceSubString = source.slice(i, i + target.length);

    if (sourceSubString === target) {
      counter += 1;
      i += sourceSubString.length - 1;
    }
  }

  return counter;
}

// p(countSubstrings('babab', 'bab') === 1);
// p(countSubstrings('babab', 'ba') === 2);
// p(countSubstrings('babab', 'b') === 3);
// p(countSubstrings('babab', 'x') === 0);
// p(countSubstrings('babab', 'x') === 0);
// p(countSubstrings('', 'x') === 0);
// p(countSubstrings('bbbaabbbbaab', 'baab') === 2);
// p(countSubstrings('bbbaabbbbaab', 'bbaab') === 2);
// p(countSubstrings('bbbaabbbbaabb', 'bbbaabb') === 1);