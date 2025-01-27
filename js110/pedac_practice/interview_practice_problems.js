////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////// ROUND 1 /////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
const p = console.log;
const eq = (arr1, arr2) => JSON.stringify(arr1) === JSON.stringify(arr2);


















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

// function countLetters(string) {
//   const letterCounts = {};

//   [...string].forEach(char => {
//     if (letterCounts[char]) letterCounts[char] += 1;
//     else if (char >= 'a' && char <= 'z') letterCounts[char]  = 1;
//   })

//   return letterCounts;
// }

// const objeq = function(obj1, obj2) {
//   let keys1 = Object.keys(obj1);
//   let keys2 = Object.keys(obj2);

//   if (keys1.length !== keys2.length) {
//     return false;
//   }

//   for (let key of keys1) {
//     if (! keys2.includes(key)) {
//       return false;
//     } else if (obj1[key] !== obj2[key]) {
//       return false;
//     }
//   }

//   return true;
// }

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




/*
Problem 10
Create a function that takes a string of digits as an argument and returns the number of even-numbered substrings that can be formed. For example, in the case of '1432', the even-numbered substrings are '14', '1432', '4', '432', '32', and '2', for a total of 6 substrings.

If a substring occurs more than once, you should count each occurrence as a separate substring.

In: string (contains digits)
Out: number
Rules:
  - Even-numbered substring has an even number 
  - Return 0 if there are none

----
Algorithm
- Find all substrings
- Count the substrings that contain an even number

1. Create 'subs' and set to empty array
2. Iterate over the substring
  - Create all even numbered substrings
  - Add results to 'subs'
3. Return the length of 'subs' array 

Helper function
allEvenSubStrings(currIndex, string)
1. create 'allEvenSubs' and set it to empty array
2. Iterate over the string
  - Create substrings from currIndex to current position in the substring
  - If substring is even
    -- Add substring to 'allEvenSubs'
3. Return 'allEvenSubs'
*/

function evenNumSubStrings(index, string) {
  const allEvenSubs = [];

  for (let i = index; i < string.length; i++) {
    let sub = string.slice(index, i + 1);
    if (sub % 2 === 0 && sub) allEvenSubs.push(sub);
  }
  return allEvenSubs;
}

function evenSubstrings(string) {
  let subs = [];
  for (let i = 0; i < string.length; i++) {
    subs = subs.concat(evenNumSubStrings(i, string));
  }

  return subs.length;
}

// p(evenSubstrings('1432') === 6); 
// p(evenSubstrings('3145926') === 16);
// p(evenSubstrings('2718281') === 16);
// p(evenSubstrings('13579') === 0);
// p(evenSubstrings('143232') === 12);




/*
Problem 11
Create a function that takes a nonempty string as an argument and returns an array consisting of a string and an integer. If we call the string argument s, the string component of the returned array t, and the integer component of the returned array k, then s, t, and k must be related to each other such that s === t * k. The values of t and k should be the shortest possible substring and the largest possible repeat count that satisfies this equation.

You may assume that the string argument consists entirely of lowercase alphabetic letters.

In: string ('s')
Out: array (string: 't', number: 'k')
Rules
  -  s === t * k
  - 't' should be the shortest possible substring
  - 'k' should be the largest possible repeat count

----
Algorithm
- Find the values of 't' and 'k' where they equal 's' when multiplied

1. Iterate over string
  - create substring and set to 't' (bigger substrings each time)
  - create repeat and set to 'k' (smaller repeats each time)
  - If 'k' is an integer and 't' * 'k' is equal to 's'
    - Return ['t', 'k']
2. Return ['s', 1]
*/

function repeatedSubstring(string) {
  for (let i = 1; i <= string.length; i++) {
    let t = string.slice(0, i);
    let k = string.length / i;

    if (Number.isInteger(k) && t.repeat(k) === string) return [t, k];
  }
  return [string, 1];
}


// p(eq(repeatedSubstring('xyzxyzxyz'), ['xyz', 3]));
// p(eq(repeatedSubstring('xyxy'), ['xy', 2]));
// p(eq(repeatedSubstring('xyz'), ['xyz', 1]));
// p(eq(repeatedSubstring('aaaaaaaa'), ['a', 8]));
// p(eq(repeatedSubstring('superduper'), ['superduper', 1]));


/*
Problem 12
Create a function that takes a string as an argument and returns true if the string is a pangram, false if it is not.

Pangrams are sentences that contain every letter of the alphabet at least once. For example, the sentence "Five quacking zephyrs jolt my wax bed." is a pangram since it uses every letter at least once. Note that case is irrelevant.

In: string
Out: boolean
Rules:
  - pangram contains a-z at least once
  - case-insensitive ('a' === 'A')

----
Algorithm
- Create an alphabet list
- Check if all letters in alphabet list are found
- Return true if they are

1. Create 'alphabetList' (helper)
2. Iterate over string
  - If 'alphabetList' is not empty AND 'alphabetList' contains current lowercase letter
    -- Remove that letter from 'alphabetList'
  - Otherwise if list is empty
    - Return true
3. Return false

Helper function
createAlphabet()
- create 'letters' and set to []
- Iterate from a-z
  -- Add letter to list
- Return 'letters'
*/

function isPangram(string) {
  const alphabetList = createAlphabet();
  
  for (char of string) {
    char = char.toLowerCase();

    if (alphabetList.length !== 0 && alphabetList.includes(char)) {
     let charIndex = alphabetList.indexOf(char);
     alphabetList.splice(charIndex, 1);
    } else if (alphabetList.length === 0) return true;

  }

  return false;
}

function createAlphabet() {
  const letters = [];

  for (let code = 'a'.charCodeAt(); code <= 'z'.charCodeAt(); code++) {
    letters.push(String.fromCharCode(code));
  }

  return letters;
}


// p(isPangram('The quick, brown fox jumps over the lazy dog!') === true);
// p(isPangram('The slow, brown fox jumps over the lazy dog!') === false);
// p(isPangram("A wizard’s job is to vex chumps quickly in fog.") === true);
// p(isPangram("A wizard’s task is to vex chumps quickly in fog.") === false);
// p(isPangram("A wizard’s job is to vex chumps quickly in golf.") === true);

// let myStr = 'Sixty zippers were quickly picked from the woven jute bag.';
// p(isPangram(myStr) === true);




/*
Problem 13
Create a function that takes two strings as arguments and returns true if some portion of the characters in the first string can be rearranged to match the characters in the second. Otherwise, the function should return false.

You may assume that both string arguments only contain lowercase alphabetic characters. Neither string will be empty.

In: string, string
Out: boolean
Rules:
  - second string is the target
  - first string can be manipulated

-----
Algorithm
- Use characters in first string to build second string
- Return true if it's possible

1. create 'lib' and set to first string characters
2. create 'builtString' and set to empty string
3. Iterate over second string
  - If  'lib' contains current char
    -- add current char to 'builtString'
    -- remove current char from 'lib'
  - Otherwise return false
4. Return true if 'builtString' equals second string
*/

function unscramble(str1, str2) {
  const lib = str1.split("");
  let builtString = "";

  for (char of str2) {
    if (lib.includes(char)) {
      builtString += char;
      lib.splice(lib.indexOf(char), 1);
    } else return false
  } 

  return builtString === str2;
}

// p(unscramble('ansucchlohlo', 'launchschool') === true);
// p(unscramble('phyarunstole', 'pythonrules') === true);
// p(unscramble('phyarunstola', 'pythonrules') === false);
// p(unscramble('boldface', 'coal') === true);



/*
Problem 14
Create a function that takes a single integer argument and returns the sum of all the multiples of 7 or 11 that are less than the argument. If a number is a multiple of both 7 and 11, count it just once.

For example, the multiples of 7 and 11 that are below 25 are 7, 11, 14, 21, and 22. The sum of these multiples is 75.

If the argument is negative, return 0.

In: number
Out: number
Rules:  
  - sum multiples of 7 and 11 (< argument number)
  - multiples of 7 and 11 counted once
  - Return 0 if argument is negative 

----
Algorithm
- Find multiples of 7 and 11
- Sum the multiples
- Return the sum (Return 0 if arg is negative)

1. Create 'sum' and set set to 0
2. If the argument is negative
  - Return 'sum'
2. Iterate over number argument
  - If current number is a multiple of 7 OR a mutliple of 11
    - Increment 'sum' by current number
3. Return 'sum'
*/

function sevenEleven(num) {
  let sum = 0;
  if (num < 0) return sum;

  for (let currNum = 7; currNum < num; currNum++) {
    if (currNum % 7 === 0 || currNum % 11 === 0) sum += currNum;
  }

  return sum;
}

// 7 -> 7
// 7 , 11 -> 18
// 7, 11, 14, 21, 22 -> 75
// p(sevenEleven(10) === 7);
// p(sevenEleven(11) === 7);
// p(sevenEleven(12) === 18);
// p(sevenEleven(25) === 75);
// p(sevenEleven(100) === 1153);
// p(sevenEleven(0) === 0);
// p(sevenEleven(-100) === 0);




/*
Problem 15
Create a function that takes a string argument that consists entirely of numeric digits and computes the greatest product of four consecutive digits in the string. The argument will always have more than 4 digits.

In: string (of numbers)
Out: number (product of)
Rules:
  - four consecutive digits used for product
  - Alwyas more than 4 digits

----
Algorithm
- Find 4 consecitive digits that give biggest product
- Return product

1. create 'largestProduct' and set to 0
2. Iterate over the string
  - Get the first 4 characters
    -- multiply them
    -- If product is greater than 0
      --- set 'largestProduct' to current product
3. Return 'largestProduct'
*/

function greatestProduct(numString) {
  let largestProduct = 0;

  for (let i = 0; i <= numString.length - 4; i++) {
    let currProduct = numString.slice(i, i + 4).split("").reduce((acc, curr) => {
      return acc * Number(curr);
    }, 1);

    if (currProduct > largestProduct) largestProduct = currProduct;
  }

  return largestProduct;
}

// p(greatestProduct('23456') === 360);      // 3 * 4 * 5 * 6
// p(greatestProduct('3145926') === 540);    // 5 * 9 * 2 * 6
// p(greatestProduct('1828172') === 128);    // 1 * 8 * 2 * 8
// p(greatestProduct('123987654') === 3024); // 9 * 8 * 7 * 6



/*
Problem 16
Create a function that returns the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. You may assume that the input string contains only alphanumeric characters.

In: string
Out: number
Rules: 
  - count distinct numbers and letters that occur MORE THAN ONCE
  - case insensitive

----
Algorithm
- Count occurrences of characters
- Count those that occur more than once
- Return that count

0. create 'count' and set to 0
1. create 'countsObj' and set to empty object
2. Iterate over string
  - If char is in 'countsObj'
    -- Increment char in 'countsObj' by 1
  - Otherwise
    -- add char to 'countsObj' and set value to 1
3. Iterate over 'countsObj'
  - If a key has a value more than one
    -- Increment 'count' by 1
4. Return 'count'
*/

function distinctMultiples(string) {
  let count = 0;
  const countsObj = {};

  for (char of string) {
    char = char.toLowerCase();
    countsObj[char] = countsObj[char] + 1 || 1;
  }

  for (key in countsObj) {
    if (countsObj[key] > 1) count += 1;
  }

  return count;
}

// p(distinctMultiples('xyz') === 0);              // (none)
// p(distinctMultiples('xxyypzzr') === 3);         // x, y, z
// p(distinctMultiples('xXyYpzZr') === 3);         // x, y, z
// p(distinctMultiples('unununium') === 2);        // u, n
// p(distinctMultiples('multiplicity') === 3);     // l, t, i
// p(distinctMultiples('7657') === 1);             // 7
// p(distinctMultiples('3141592653589793') === 4); // 3, 1, 5, 9
// p(distinctMultiples('2718281828459045') === 5); // 2, 1, 8, 4, 5




/*
Problem 17

Create a function that takes an array of integers as an argument. The function should determine the minimum integer value that can be appended to the array so the sum of all the elements equal the closest prime number that is greater than the current sum of the numbers. For example, the numbers in [1, 2, 3] sum to 6. The nearest prime number greater than 6 is 7. Thus, we can add 1 to the array to sum to 7.

Notes:

The array will always contain at least 2 integers.
All values in the array must be positive (> 0).
There may be multiple occurrences of the various numbers in the array.

In: array (numbers)
Out: number
Rules:
  - always at least 2 integers
  - values in array must be positive
  - multiple of same numbers in array are allowed
  - prime number: can only be divided by one and itself 

----
Algorithm
- Find the sum of the array
- Determine prime number closest to sum
- Find the difference between prime and sum
- Return that difference

1. Iterate over the array to find sum of all values and set to 'sum' 
2. create 'smallestPrime' and set to 0
3. Iterate upwards from 'sum'
  - If number is prime (see isPrime helper)
    -- set 'smallestPrime' to current number
    -- stop iterating
4. Subtract 'sum' from 'smallestPrime' and return that value

Helper function 
isPrime(num)
1. Iterate up to num., starting at 2 and ending at num - 1
  - If num is divisible by current number 
    --- Return false
  - Otherwise return true
*/

function nearestPrimeSum(arr) {
  const sum = arr.reduce((sum, curr) => sum + curr);
  let smallestPrime = 0;

  for (let currNum = sum + 1; true; currNum++) {
    if (isPrime(currNum)) {
      smallestPrime = currNum;
      break;
    }
  }

  return smallestPrime - sum;
}

function isPrime(num) {
  for (let i = 2; i <= num - 1; i++) {
    if (num % i === 0) return false
  }

  return true;
}

// p(nearestPrimeSum([1, 2, 3]) === 1);        // Nearest prime to 6 is 7
// p(nearestPrimeSum([5, 2]) === 4);           // Nearest prime to 7 is 11
// p(nearestPrimeSum([1, 1, 1]) === 2);        // Nearest prime to 3 is 5
// p(nearestPrimeSum([2, 12, 8, 4, 6]) === 5); // Nearest prime to 32 is 37

// // Nearest prime to 163 is 167
// p(nearestPrimeSum([50, 39, 49, 6, 17, 2]) === 4);




/*
Problem 19
Create a function that takes an array of integers as an argument and returns the integer that appears an odd number of times. There will always be exactly one such integer in the input array.

In: array (integers)
Out: integer 
Rules:
  - only one integer that is odd in input array

----
Algorithm
- Count occurrences of a number in an array
- Find the number that occurs an odd number of times
- Return that number

1. create 'countsObj' and set to return of getNumCounts (helper)
2. Iterate over 'countsObj'
  - If key has a value divisible by an odd number
    -- Return that key
3. Return null

Helper function
getNumCounts(arr)
0. Create 'countsobj' and set to empty object
1. Iterate over the array, starting at 0 and ending at last element
  -- If num exists in obj
    --- Increment num by 1
  -- Otherwise
    --- Add num to obj and set to 1
2. Return countsObj
*/

function oddFellow(arr) {
  const countsObj = getNumCounts(arr);

  for (key in countsObj) {
    if (countsObj[key] % 2 === 1) return Number(key);
  }
}

function getNumCounts(arr) {
  return arr.reduce((acc, curr) => {
    acc[curr] = acc[curr] + 1 || 1;
    return acc;
  }, {})
}

// p(oddFellow([4]) === 4);
// p(oddFellow([7, 99, 7, 51, 99]) === 51);
// p(oddFellow([7, 99, 7, 51, 99, 7, 51]) === 7);
// p(oddFellow([25, 10, -6, 10, 25, 10, -6, 10, -6]) === -6);
// p(oddFellow([0, 0, 0]) === 0);




/*
Problem 20
Create a function that takes an array of numbers, all of which are the same except one. Find and return the number in the array that differs from all the rest.

The array will always contain at least 3 numbers, and there will always be exactly one number that is different.

In: array (numbers)
Out: number
Rules:
  - only 1 number is different
  - arr contains >= 3 numbers

----
Algorithm
- Find the number with only one index
- Return that number

1. Iterate over the array
  - Find element that has the same first and last index
2. Return first element in the array
*/

function whatIsDifferent(arr) {
  return arr.find(el => arr.indexOf(el) === arr.lastIndexOf(el));
}

// p(whatIsDifferent([0, 1, 0]) === 1);
// p(whatIsDifferent([7, 7, 7, 7.7, 7]) === 7.7);
// p(whatIsDifferent([1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 1, 1]) === 11);
// p(whatIsDifferent([3, 4, 4, 4]) === 3);
// p(whatIsDifferent([4, 4, 4, 3]) === 3);






















////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////// SAME QUESTIONS, ROUND 2 ////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////



















/*
Difference of Two
The objective is to return all pairs of numbers from a given array of numbers that have a difference of 2.
The result array should be sorted in ascending order of values.
Assume there are no duplicate numbers in the array.
The order of the numbers in the input array should not matter.

In: array (numbers)
Out: array (subarrays: numbers)
Rules:
  - subarrays: numbers that have a diff of 2
  - array: sorted in ascending order
  - no duplicates in input
  - Default return: []

[D]
0. Sort the input in ascending order
1. Compare each number with every other number
2. If there is a diff of 2, save that pair
3. Return all saved pairs

- Sort the input array
- Create `pairs` array
- Iterate over sorted array
  -- Iterate over sorted array 
    --- If outer number compared with inner number has a diff of two
      ---- Add those two numbers to `pairs`
- Return `pairs`

[A]
SORT `arr` input
CREATE `pairs` variable and ASSIGN to empty array

ITERATE over `arr`, starting at 0, ending at second last element
  ITERATE over `arr`, starting at outer index, ending at last element
    IF inner current number minus outer current number equals 2
      APPEND [outer current number, inner current number] to `pairs`

RETURN pairs
*/

function differenceOfTwo(arr) {
  arr.sort((a, b) => a - b);
  let pairs = [];

  for (let outerNum = 0; outerNum < arr.length - 1; outerNum++) {
    for (let innerNum = outerNum; innerNum < arr.length; innerNum++) {
      if (arr[innerNum] - arr[outerNum] === 2) pairs.push([arr[outerNum], arr[innerNum]]);
    }
  }

  return pairs;
}


// console.log(differenceOfTwo([5, 2, 7, 9, 10, 3, 11])); // [[3, 5], [5, 7], [9, 11]]
// console.log(differenceOfTwo([21, 5, 13, 19, 23, 15])); // [[13, 15], [19, 21], [21, 23]]
// console.log(differenceOfTwo([5, 2, 6, 12])); // []




/*
Write a function that takes a string as an argument and returns an array that contains every
word from the string, with each word followed by a space and the word's length.
If the argument is an empty string or if no argument is passed, the function should return an empty array.
You may assume that every pair of words in the string will be separated by a single space.

In: string (multiple words)
Out: array (word: letter count)
Rules:
  - string: word and the words length
  - words separated by whitespace character
  - Defualt return: empty array []

[D]
1. Count the word lengths
2. Add each word and its length to an array as one string
3. Return that array

- Create `wordCounts` array
- Separate string of words into array of words
- Iterate over each word
  -- Add the word and it's count to `wordCounts` 
- Return `wordCounts`

[A]
IF `string` has length of 0 or is undefined
  RETURN an empty array
CREATE `wordCounts` and ASSIGN to an empty array
SPLIT `string` arg into array

ITERATE over array
  ADD current word and current word length to `wordCounts

RETURN `wordCounts`
*/

function wordLengths(string) {
  let wordCounts = []; 

  if (string === undefined || string.length === 0) return [];

  for (let word of string.split(" ")) {
    wordCounts.push(`${word} ${word.length}`);
  }

  return wordCounts;
  // return string.split(" ").map(word => `${word} ${word.length}`);
}


// console.log(wordLengths('cow sheep chicken'));
// // ["cow 3", "sheep 5", "chicken 7"]

// console.log(wordLengths('baseball hot dogs and apple pie'));
// // ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

// console.log(wordLengths("It ain't easy, is it?"));
// // ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

// console.log(wordLengths('Supercalifragilisticexpialidocious'));
// // ["Supercalifragilisticexpialidocious 34"]

// console.log(wordLengths(''));      // []
// console.log(wordLengths());        // []



/*
Problem 3
Create a function that takes a string argument and returns a copy of the string with every second character in every third word converted to uppercase. Other characters should remain the same.

In: string (sentence with words)
Out: string (sentence with words)
Rules:
  - every 3rd word, uppercase every 2nd character
  - other characters remain the same

[D]
1. Given a string
2. Change every 2nd char, in every 3rd word
3. Return the changed string

- iterate over the sentence
  -- if a word is a 3rd word
    --- iterate over 3rd word
      ---- if char is a 2nd char, change it to uppercase
- join words into a new sentence
- return new sentence

CREATE `toWeirdCase` function that takes `str` argument
CREATE `weirdCaseSentence` and ASSIGN to `str` split into words array
ITERATE over `weirdCaseSentence` (map)
  IF current word index + 1 modulus 3 is zero (then it's a 3rd word)
    SPLIT current word into characters array
    ITERATE over characters array (map)
      IF current character + 1 modulus 2 is zero (then it's a 2nd character)
        UPPERCASE current character
        RETURN current character
      ELSE 
        RETURN current character
    JOIN characters array 
    RETURN characters array
  ELSE 
    RETURN current word
JOIN `weirdCaseSentence` array
RETURN `weirdCaseSentence`
*/

function toWeirdCase(str) {
  let weirdCaseSentence = str.split(" ");
  return weirdCaseSentence.map((word, index) => {
    if ((index + 1) % 3 === 0){
      return word.split("").map((char, index) => {
        if ((index + 1) % 2 === 0) {
          return char.toUpperCase();
        } else return char;
      }).join("");
    } else return word;
  }).join(" ");
}

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
Problem 4
Create a function that takes an array of integers as an argument and returns an array of two numbers that are closest together in value. If there are multiple pairs that are equally close, return the pair that occurs first in the array. 

In: array (integers)
Out: array (2 integers)
Rules: 
  - return closest 2 numbers that appear first
  - integers do not repeat

[D]
1. Sum each number with every other number
2. Find the 2 numbers that are the closest
3. Return the 2 numbers that occur first

- create 'smallestDiff' variable
- create 'pair' variable
- iterate over array
  -- compare current number with every other number (helper)
    --- if diff of two numbers is smaller than 'smallestDiff', 
      ---- reassign 'smallestDiff' and assign 'pair' to array of 2 numbers
- return 'pair'

CREATE `closestNumbers` function that takes `integersArr` as argument
CREATE `smallestDiff` variable and ASSIGN to zero
CREATE `pair` variable
ITERATE over `integersArr`
  ITERATE over `integersArr` starting at current number, ending at `integersArr`.length - 2
    IF `smallestDiff` is 0 OR `diffOfTwo` (helper) is less than `smallestDiff`
      ASSIGN `smallestDiff` to return value of `diffOfTwo`
      ASSIGN `pair` to [outer number, inner number]
RETURN `pair`

(helper)
CREATE `diffOfTwo` that takes arguments `outerNum` and `innerNum`
CREATE `diff`
IF `outerNum` is greater than `innerNum`
  ASSIGN `diff` to `outerNum` minus `innerNum`
ELSE
  ASSIGN `diff` to `innerNum` - `outerNum`
RETURN `diff`
*/

function closestNumbers(integersArr) {
  let smallestDiff = 0;
  let pair;

  for (let outer = 0; outer <= integersArr.length - 2; outer++) {
    for (let inner = outer + 1; inner <= integersArr.length - 1; inner++) {
      let outerNum = integersArr[outer]
      let innerNum = integersArr[inner];
      let diff = diffOfTwo(outerNum, innerNum);

      if (smallestDiff === 0 || diff < smallestDiff) {
        smallestDiff = diff;
        pair = [outerNum, innerNum];
      }
    }
  }

  return pair;
}

function diffOfTwo(outerNum, innerNum) {
  return outerNum > innerNum ? outerNum - innerNum : innerNum - outerNum;
}

// p(eq(closestNumbers([5, 25, 15, 11, 20]), [15, 11]));     // true
// p(eq(closestNumbers([19, 25, 32, 4, 27, 16]), [25, 27])); // true
// p(eq(closestNumbers([12, 22, 7, 17]), [12, 7]));          // true




/*
Problem 5
Create a function that takes a string argument and returns the character that occurs most often in the string. If there are multiple characters with the same greatest frequency, return the one that appears first in the string. When counting characters, consider uppercase and lowercase versions to be the same.

In: string (word(s))
Out: string (letter)
Rules:
  - case insensitive (eg. 'l' === 'L')
  - return letter that appears the most and first

[D]
1. Find unique characters
2. Count them
3. Return first character with the highest count

- create 'lettersObj' variable
- iterate over string
  -- add unique characters to `lettersObj` or increment if it exists
- create 'highestCountChar' and set to first character in `lettersObj`
- iterate over `lettersObj`
  -- if the current letter has a count bigger than `highestCountChar`
    --- Reassign `highestCountChar` to current letter
- Return `highestCountChar`

CREATE `mostCommonChar` function that takes `str` as an argument
CREATE `lettersObj` variable and ASSIGN to return of `createLetterCounts`
CREATE `highestCountChar` and ASSIGN to first character in `lettersObj`
ITERATE over `lettersObj` 
  IF current letter has a count bigger than `highestCountChar` 
    REASSIGN `highestCountChar` to current letter
RETURN `highestCountChar`

[helper]
CREATE `createLetterCounts` function that takes `str` argument
CREATE `lettersObj` variable and ASSIGN to {}
ITERATE over `str`
  IF current letter exists in `lettersObj`
    INCREMENT letter count 
  ELSE add letter with a count of 1 to `lettersObj`
RETURN `lettersObj`
*/

function createLetterCounts(str) {
  let lettersObj = {};

  str.toLowerCase().split("").forEach(letter => {
    if (lettersObj[letter]) lettersObj[letter] += 1;
    else lettersObj[letter] = 1;
  })

  return lettersObj;
}

function mostCommonChar(str) {
  let lettersObj = createLetterCounts(str);

  let highestCountChar = Object.keys(lettersObj)[0];
  for (char in lettersObj) {
    if (lettersObj[char] > lettersObj[highestCountChar]) highestCountChar = char;
  }

  return highestCountChar;
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
Problem 6
Create a function that takes a string argument and returns a hash in which the keys represent the lowercase letters in the string, and the values represent how often the corresponding letter occurs in the string.

In: string
Out: object
Rules:
  - object: 
      key -> lowercase letter
      value -> count
  - ONLY lowercase letters included

[D]
1. Find lowercase letters
2. Count them
3. Return object with letters and their counts

- create `hash` variable
- iterate over the string
  -- if char is a lowercase letter, add/increment to `hash`
- return the `hash`

CREATE `countLetters` function that takes `str` as an argument
CREATE `hash` variable and ASSIGN to {}
ITERATE over `str`
  IF character is a letter AND it's lowercase
    ADD letter to `hash` OR increment it if it exists in `hash`
RETURN `hash`
*/

function countLetters(str) {
  let hash = {};
  
  str.split("").forEach(char => {
    if ((char >= 'a' && char <= 'z') && char.toLowerCase() === char) {
      hash[char] = hash[char] + 1 || 1;
    }
  })

  return hash;
}


// let expected = {'w': 1, 'o': 2, 'e': 3, 'b': 1, 'g': 1, 'n': 1};
// p(eq(countLetters('woebegone'), expected));

// expected = {'l': 1, 'o': 1, 'w': 1, 'e': 4, 'r': 2,
//             'c': 2, 'a': 2, 's': 2, 'u': 1, 'p': 2};
// p(eq(countLetters('lowercase/uppercase'), expected));

// expected = {'u': 1, 'o': 1, 'i': 1, 's': 1};
// p(eq(countLetters('W. E. B. Du Bois'), expected));

// p(eq(countLetters('x'), {'x': 1}));
// p(eq(countLetters(''), {}));
// p(eq(countLetters('!!!'), {}));




/*
Problem 7
Create a function that takes an array of integers as an argument and returns the number of identical pairs of integers in that array. For instance, the number of identical pairs in [1, 2, 3, 2, 1] is 2: there are two occurrences each of both 2 and 1.

If the array is empty or contains exactly one value, return 0.

If a certain number occurs more than twice, count each complete pair once. For instance, for [1, 1, 1, 1] and [2, 2, 2, 2, 2], the function should return 2. The first array contains two complete pairs while the second has an extra 2 that isn't part of the other two pairs.

In: array (integers)
Out: integer
Rules:
  - count pairs once (eg. 3, 3, 3 -> 1 pair)
  - default return: 0 (empty arrays; one value arrays)

[D]
1. Count the occurrences of unique numbers
2. Divide that by 2 and round it down
3. Return rounded down value

- create 'checkedNumbers' variable
- create 'pairsCount' variable
- iterate over integers, starting from 0-indexed element
  -- create 'checkingNumber' variable
  -- create 'numberCount' variable
  -- if current number is in `checkedNumbers`, continue to next iteration
  -- else add current number to `checkedNumbers`
  -- iterate over integers, starting from 0-indexed element
    --- if current number equals 'checkingNumber', increment 'numberCount'
  --- divide 'numberCount' by 2, round down and add value to 'pairsCount'
- return 'pairsCount'

CREATE `pairs` function that takes `arr` argument
CREATE `checkedNumbers` variable and ASSIGN to []
CREATE `pairsCount` variable and ASSIGN to 0
ITERATE over `arr`, starting from 0-indexed element
  CREATE `checkingNumber` variable and ASSIGN to `arr`[currentIndex]
  CREATE `numberCount` variable and ASSIGN to 0
  IF `checkingNumber` is in `checkedNumbers`
    CONTINUE to next iteration
  ELSE 
    APPEND `checkingNumber` to `checkedNumbers`
  ITERATE over `arr`, starting gtom 0-indexed element
    IF current number equals `checkingNumber`
      INCREMENT `numbersCount` by 1
  DIVIDE `numberCount` by 2 and round down
  INCREMENT `pairsCount` by `numberCount` 
RETURN `pairs`
*/

function pairs(arr) {
  let checkedNumbers = [];
  let pairsCount = 0;

  for (let index = 0; index <= arr.length - 1; index++) {
    let checkingNumber = arr[index];
    let numberCount = 0;

    if (checkedNumbers.includes(checkingNumber)) continue;
    else checkedNumbers.push(checkingNumber);

    for (let innerIndex = 0; innerIndex <= arr.length - 1; innerIndex++) {
      if (arr[innerIndex] === checkingNumber) numberCount += 1;
    }

    pairsCount += Math.floor(numberCount / 2);
  }

  return pairsCount;
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

In: string (letters) 
Out: integer (vowel substring length)
Rules:
  - vowels: "a", "e", "i", "o", and "u"
  - default return: 0

[D]
1. Find vowel substrings
2. Return length of longest one

- create 'longestSubstringLength' variable
- iterate over string
  -- create 'currentVowelSubstringLength' 
  -- iterate over string 
    --- if current letter is a vowel, 
      ---- increment 'currentVowelSubstringLength' 
      ---- reassign 'longestSubstringLength' to 'currentVowelSubstringLength' if it's longer
    --- else 
      ---- reset 'currentVowelSubstringLength' to 0 and continue with outer loop iteration
- return 'longestSubstringLength'

CREATE `longestVowelSubstring` function that takes one `str` argument
CREATE `longestSubstringLength` and ASSIGN to 0
CREATE `currentVowelSubstringLength` and ASSIGN to 0
ITERATE over string
  IF current letter is a vowel
    INCREMENT `currentVowelSubstringLength`
    IF `currentVowelSubstringLength` > `longestSubstringLength`
      REASSIGN `longestSubstringLength` to `currentVowelSubstringLength`
  ELSE 
    REASSIGN `currentVowelSubstringLength` to 0
    BREAK out the current loop to continue with the outer loop 
RETURN `longestSubstringLength`
*/

function longestVowelSubstring(str) {
  let longestSubstringLength = 0;
  let arr = str.split("")

  let currentVowelSubstringLength = 0;

  for (let k = 0; k < arr.length; k++) {
    if ('aeiou'.includes(arr[k])) {
      currentVowelSubstringLength += 1;
      if (currentVowelSubstringLength > longestSubstringLength) {
        longestSubstringLength = currentVowelSubstringLength;
      }
    } else {
      currentVowelSubstringLength = 0;
    }
  
  }
  return longestSubstringLength;
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
Out: integer (count of target in source)
Rules:
  - overlapping strings don't count (eg. 'babab' contains 1 'bab')
  - Default return: 0 (empty sources; no targets found)

[D]
1. create substrings from source with the length of target
2. compare substrings to target
3. count those that are equal

- create 'count' variable
- if the length of source is 0, return count
- iterate over source, increment iterator by length of target
  -- create a substring with the length of target
  -- if substring equals target
    --- increment `count`
- return 'count'

CREATE `countSubstrings` function that takes `source` and `target` arguments
CREATE `count` variable and ASSIGN to 0
IF `source` equals 0
  RETURN `count`
ITERATE over `source`, increment iterator by 1
  CREATE `currentSubstring` and ASSIGN to `source` substring with a length of target.length to `substrings`
  IF `currentSubstring` equals target
    INCREMENT `count`
    INCREMENT iterator by target.length
RETURN `count`
*/

function countSubstrings(source, target) {
  let count = 0;
  if (!source.length) return count;

  for (let i = 0; i <= source.length - target.length; i++) {
    if (source.slice(i, i + target.length) === target) {
      count += 1;
      i += target.length - 1;
    }
  }

  return count;
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





/*
Problem 10
Create a function that takes a string of digits as an argument and returns the number of even-numbered substrings that can be formed. For example, in the case of '1432', the even-numbered substrings are '14', '1432', '4', '432', '32', and '2', for a total of 6 substrings.

If a substring occurs more than once, you should count each occurrence as a separate substring.

In: string (number)
Out: integer (even-numbered substring count)
Rules:
  - count each even substring even if it occurs >1
  - return 0 if no even substrings are found

[D]
1. create number substrings
2. filter for the ones that are even
3. count how many are left

- create 'count'
- iterate over string
  -- for each iteration, iterate over the string starting from outer iteration position
    --- create 'substring' from inner iteration position to end of string
    --- if `substring` is even, increment `count`
- return 'count'

CREATE `evenSubstrings` function with `str` as an argument
CREATE `count` variable and ASSIGN to 0
ITERATE over `str`
  ITERATE over `str`, starting from current outer index
    CREATE `susbtring` and ASSIGN to substring from inner index to end of string
    CONVERT `substring` to number 
    IF `substring` modulus 2 equals 0
      INCREMENT `count`
RETURN `count`
*/

function evenSubstrings(str) {
  let count = 0;
  let arr = str.split("");

  for (let i = 0; i < str.length; i++){
    for (let k = i; k < str.length; k++) {
      let substring = Number(arr.slice(i, k + 1).join(''));

      if (substring % 2 === 0) {
        count += 1;
      }

    }
  }
  
  return count;
}


// p(evenSubstrings('1432') === 6); 
// p(evenSubstrings('3145926') === 16);
// p(evenSubstrings('2718281') === 16);
// p(evenSubstrings('13579') === 0);
// p(evenSubstrings('143232') === 12);





/*
Problem 11
Create a function that takes a nonempty string as an argument and returns an array consisting of a string and an integer. If we call the string argument s, the string component of the returned array t, and the integer component of the returned array k, then s, t, and k must be related to each other such that s === t * k. The values of t and k should be the shortest possible substring and the largest possible repeat count that satisfies this equation.

You may assume that the string argument consists entirely of lowercase alphabetic letters.

In: string
Out: array (substring; integer)
Rules:
  - s -> string
  - t -> substring (smallest)
  - k -> integer (largest)

[D]
- iterate from largest value of k
  -- multiple a section of the string by k
  -- if that is equal to 's', return [substring, k]
*/

function repeatedSubstring(s) {
  for (let i = 1; i <= s.length; i++) {
    let t = s.slice(0, i);
    let k = s.length / i;
    
    
    if (t.repeat(k) === s) return [t, k];
  }
}

// p(eq(repeatedSubstring('xyzxyzxyz'), ['xyz', 3]));
// p(eq(repeatedSubstring('xyxy'), ['xy', 2]));
// p(eq(repeatedSubstring('xyz'), ['xyz', 1]));
// p(eq(repeatedSubstring('aaaaaaaa'), ['a', 8]));
// p(eq(repeatedSubstring('superduper'), ['superduper', 1]));







/*
Problem 12
Create a function that takes a string as an argument and returns true if the string is a pangram, false if it is not.

Pangrams are sentences that contain every letter of the alphabet at least once. For example, the sentence "Five quacking zephyrs jolt my wax bed." is a pangram since it uses every letter at least once. Note that case is irrelevant.

In: string (words)
Out: boolean
Rules:
  - pangram: contains every letter (a-z)
  - case insensitive (eg. 'T' === 't')

[D]
1. count occurrences of letters
2. check if a-z has a count >= 1
3. Return true or false based on that check

(helper)
- create 'alphabet' object
(main)
- iterate over string 
  --- if current character is a letter
    ---- increment it in the 'alphabet' object
  --- else continue to next character
(helper)
- if any 'alphabet' values are 0 then there is a letter (a-z) not found in the string 
  -- return false
- else return true (all letters are in the string)

----------------------
(helper)
CREATE `createAlphabet` function
CREATE `alphabet` object and ASSIGN to empty object
ITERATE from 'a'
  ADD current letter to `alphabet` and ASSIGN value to 0
RETURN `alphabet`

(main)
CREATE `isPangram` function that takes `str` as arg
CREATE `alphabet` and ASSIGN to `createAlphabet` function call
ITERATE over `str`
  IF lowercased current character is a letter 
    INCREMENT it's value in `alphabet`
RETURN `pangramCheck` funtion call

(helper)
CREATE `pangramCheck` function that takes `alphaObj` as arg
ITERATE over `alphaObj`
  IF current letter has a value of 0
    RETURN false
RETURN true
*/

function createAlphabet() {
  let alphabet = {};

  for (let charCode = 'a'.charCodeAt(); charCode <= 'z'.charCodeAt(); charCode++) {
    alphabet[String.fromCharCode(charCode)] = 0;
  }

  return alphabet;
}

function isPangram(str) {
  let alphabet = createAlphabet();

  for (let char of str) {
    char = char.toLowerCase();
    if (char >= 'a' && char <= 'z') alphabet[char] += 1;
  };

  return pangramCheck(alphabet);
}

function pangramCheck(alphaObj) {
  for (let letter in alphaObj) {
    if (alphaObj[letter] === 0) return false;
  }

  return true;
}

// p(isPangram('The quick, brown fox jumps over the lazy dog!') === true);
// p(isPangram('The slow, brown fox jumps over the lazy dog!') === false);
// p(isPangram("A wizard’s job is to vex chumps quickly in fog.") === true);
// p(isPangram("A wizard’s task is to vex chumps quickly in fog.") === false);
// p(isPangram("A wizard’s job is to vex chumps quickly in golf.") === true);

// let myStr = 'Sixty zippers were quickly picked from the woven jute bag.';
// p(isPangram(myStr) === true);






/* Problem 13
Create a function that takes two strings as arguments and returns true if some portion of the characters in the first string can be rearranged to match the characters in the second. Otherwise, the function should return false.

You may assume that both string arguments only contain lowercase alphabetic characters. Neither string will be empty.

In: 2 strings (lowercase letters)
Out: boolean
Rules:
  - string 1 and string 2 can be diff lengths
  - no empty strings
  - defualt return: false

[D]
1. Find target characters in source
2. If all the characters are found
3. Return true
4. Return false

- iterate over target
  -- if char is found in source
    --- remove that character from source
  -- else return false
- return true

CREATE `unscramble` function that takes `source` and `target` string args
ITERATE over `target`
  IF `source` includes current char
    REMOVE current char from `source`
  ELSE RETURN false
RETURN true
*/

function unscramble(source, target) {
  let sourceArr = [...source];

  for (let char of target) {
    if (sourceArr.includes(char)) sourceArr.splice(sourceArr.indexOf(char), 1);
    else return false;
  }

  return true;
}

// p(unscramble('ansucchlohlo', 'launchschool') === true);
// p(unscramble('phyarunstole', 'pythonrules') === true);
// p(unscramble('phyarunstola', 'pythonrules') === false);
// p(unscramble('boldface', 'coal') === true);





/*
Problem 14
Create a function that takes a single integer argument and returns the sum of all the multiples of 7 or 11 that are less than the argument. If a number is a multiple of both 7 and 11, count it just once.

For example, the multiples of 7 and 11 that are below 25 are 7, 11, 14, 21, and 22. The sum of these multiples is 75.

If the argument is negative, return 0.

In: integer
Out: integer (sum)
Rules:
  - sum: multiplers of 7 or 11 less than the given integer
  - count multiples of 7 AND 11 once
  - Default return: 0 (for args < 1)

[D]
1. Check that the arg is greater than 7
2. Find numbers that are multiples of 7 or 11
3. Sum those numbers

- if arg is 7 or less, return 0
- create `multiples` variable
- iterate from 7, stop at arg - 1
  -- if current number is multiple of 7 or 11
    --- append number to `multiples`
- sum `multiples`
- return sum

CREATE `sevenEleven` function that takes `int` as arg
IF `int` is less than or equal to 7
  RETURN 0
CREATE `multiples` and ASSIGN to []
ITERATE from 7, stop at `int` - 1
  IF current number is multiple of 7 OR 11
    APPEND current number to `multiples`
RETURN SUM of `multiples`
*/

function sevenEleven(int) {
  if (int <= 7) return 0;

  let multiples = [];

  for (let currNum = 7; currNum < int; currNum++) {
    if (currNum % 7 === 0 || currNum % 11 === 0) multiples.push(currNum);
  }

  return multiples.reduce((sum, curr) => sum + curr);
}


// p(sevenEleven(10) === 7);
// p(sevenEleven(11) === 7);
// p(sevenEleven(12) === 18);
// p(sevenEleven(25) === 75);
// p(sevenEleven(100) === 1153);
// p(sevenEleven(0) === 0);
// p(sevenEleven(-100) === 0);




/*
Problem 15
Create a function that takes a string argument that consists entirely of numeric digits and computes the greatest product of four consecutive digits in the string. The argument will always have more than 4 digits.

In: string (numbers)
Out: integer (product of 4 nums)
Rules:  
  - arg always has >4 digits
  - highest product -> 4 consec digits in original arg

[D]
1. Multiply 4 digits at a time
2. Return largest product of 4 digits 

- create `biggestProduct` and set to 0
- create `numArr` variable
- iterate over `numArr` until `numArr`.length - 4
  -- multiply the nums from current iteration up to current iteration + 3
  -- if product is bigger than `biggestProduct`, reassign `biggestProduct` to current product
- return `biggestProduct`

CREATE `numArr` variable and assign to `str` as an array
CREATE `greatestProduct` function that takes `str` as arg
ITERATE over `numArr`, continue while iterator is less than or equal to `numArr` length - 4
  CREATE  `numSlice` and ASSIGN to array of numbers from current iterator to current iterator + 3
  CREATE `currentProduct` and ASSIGN to MULTIPLY numbers in `numSlice`
  IF `currentProduct` is bigger than `greatestProduct`
    REASSIGN `greatestProduct` to `currentProduct`
RETURN `biggestProduct`
*/

function greatestProduct(str) {
  let numArr = [...str];
  let greatestProduct = 0;

  for (let i = 0; i <= numArr.length - 4; i++) {
    let currentProduct = numArr.slice(i, i + 4).reduce((product, currNum) => product * currNum);
    if (currentProduct > greatestProduct) greatestProduct = currentProduct;
  }

  return greatestProduct;
}


// p(greatestProduct('23456') === 360);      // 3 * 4 * 5 * 6
// p(greatestProduct('3145926') === 540);    // 5 * 9 * 2 * 6
// p(greatestProduct('1828172') === 128);    // 1 * 8 * 2 * 8
// p(greatestProduct('123987654') === 3024); // 9 * 8 * 7 * 6



/*
Problem 16
Create a function that returns the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. You may assume that the input string contains only alphanumeric characters.

In: string (alphanumeric)
Out: integer (count)
Rules:
  - count: letters or numbers that occur >1 in arg
  - case-insensitive
  - default return: 0

[D]
1. Find the unique letters and numbers
2. Count their occurrences
3. Count those that occur more than 1
4. Return that count

- create `alphaNum` variable
- iterate over arg
  -- increment or add to `alphaNum`
- create `count` variable
- iterate over `alphaNum`
  -- if current element has a count of >1
    --- Increment `count`
- Return `count`

CREATE `distinctMultiples` function that takes `str` as arg
CREATE `alphaNum` variable and ASSIGN to empty object
ITERATE over `str`
  IF current char exists in `alphaNum`
    INCREMENT it in `alphaNum`
  ELSE 
    ADD it to `alphaNum` and ASSIGN to 1
CREATE `count` variable and ASSIGN to 0
ITERATE over `alphaNum`
  IF current element has count > 1
    INCREMENT `count`
RETURN `count`
*/

function distinctMultiples(str) {
  let alphaNum = {};

  for (let char of str) {
    char = char.toLowerCase()
    alphaNum[char] = alphaNum[char] + 1 || 1;
  }

  let count = 0;

  for (let prop in alphaNum) {
    if (alphaNum[prop] > 1) count += 1;
  }

  return count;

}

// p(distinctMultiples('xyz') === 0);              // (none)
// p(distinctMultiples('xxyypzzr') === 3);         // x, y, z
// p(distinctMultiples('xXyYpzZr') === 3);         // x, y, z
// p(distinctMultiples('unununium') === 2);        // u, n
// p(distinctMultiples('multiplicity') === 3);     // l, t, i
// p(distinctMultiples('7657') === 1);             // 7
// p(distinctMultiples('3141592653589793') === 4); // 3, 1, 5, 9
// p(distinctMultiples('2718281828459045') === 5); // 2, 1, 8, 4, 5



/*
Problem 17

Create a function that takes an array of integers as an argument. The function should determine the minimum integer value that can be appended to the array so the sum of all the elements equal the closest prime number that is greater than the current sum of the numbers. For example, the numbers in [1, 2, 3] sum to 6. The nearest prime number greater than 6 is 7. Thus, we can add 1 to the array to sum to 7.

Notes:

The array will always contain at least 2 integers.
All values in the array must be positive (> 0).
There may be multiple occurrences of the various numbers in the array.

In: array (integers)
Out: integer 
Rules:
  - returned integer: what must be added to get to closest prime number
  - prime number: can ONLY be divided equally by itself or 1

[D]
1. Sum the array integers
2. Determine closest prime number greater than sum
3. Return difference between prime and sum

- create `sum` variable
- iterate from `sum` + 1
  -- check if current number is prime (helper)
    --- return the difference between current number and `sum`

(helper)
- iterate from 1 and stop before arg value
  -- if arg modulus current number is 0
    --- return false
- return true

--------------------------------
CREATE `nearestPrimeSum` function that takes `arr` as arg
CREATE `sum` variable and ASSIGN to sum of `arr`
ITERATE from `sum` + 1
  IF current number is prime (helper)
    RETURN current number - `sum`

(helper)
CREATE `primeCheck` function that takes `int` as arg
ITERATE from 2, stop before `int` value
  IF `int` % current number equals 0
    RETURN false
RETURN true
*/

function primeCheck(int) {
  for (let i = 2; i < int; i++) {
    if (int % i === 0) return false
  }

  return true;
}

function nearestPrimeSum(arr) {
  let sum = arr.reduce((sum, curr) => sum + curr);

  for (let i = sum + 1; true; i++) {
    if (primeCheck(i)) return i - sum;
  }
}
  
  
// p(nearestPrimeSum([1, 2, 3]) === 1);        // Nearest prime to 6 is 7
// p(nearestPrimeSum([5, 2]) === 4);           // Nearest prime to 7 is 11
// p(nearestPrimeSum([1, 1, 1]) === 2);        // Nearest prime to 3 is 5
// p(nearestPrimeSum([2, 12, 8, 4, 6]) === 5); // Nearest prime to 32 is 37

// // Nearest prime to 163 is 167
// p(nearestPrimeSum([50, 39, 49, 6, 17, 2]) === 4);




/*
Problem 18
Create a function that takes an array of integers as an argument. Determine and return the index N for which all numbers with an index less than N sum to the same value as the numbers with an index greater than N. If there is no index that would make this happen, return -1.

If you are given an array with multiple answers, return the index with the smallest value.

The sum of the numbers to the left of index 0 is 0. Likewise, the sum of the numbers to the right of the last element is 0.

In: array (numbers)
Out: Number (index, N)
Rules:
  - N: index where all numbers before it summed equal all numbers after it summed
  - Return first N occurrence
  - Default N: -1

[D]
1. Go through each index, starting from 1
  -Add numbers before and then add numbers after
    - If the values are equal
    - Return the current index
3. Return -1

- iterate over array
  -- create 'beforeSum' and assign to sum of numbers before current index or 0
  -- create 'afterSum' and assign to sum of numbers after current index or 0
  -- if 'beforeSum' equals 'afterSum'
    --- return current index
- return -1

CREATE `equalSumIndex` function that takes `arr` as arg
ITERATE over `arr`, starting index of 0, ending at last element
  CREATE `beforeSum` and ASSIGN to sum of numbers before current index OR 0
  CREATE `afterSum` and ASSIGN to sum of numbers after current index OR 0
  IF `beforeSum` EQUALS `afterSum` 
    RETURN current index
RETURN -1
*/

function equalSumIndex(arr) {
  for (let currIdx = 0; currIdx < arr.length; currIdx++) {
    let beforeSum;
    let afterSum;

    if (currIdx === 0) beforeSum = 0;
    else {
      beforeSum = arr.slice(0, currIdx).reduce((sum, curr) => sum += curr);
    }

    if (currIdx === arr.length - 1) afterSum = 0;
    else {
      afterSum = arr.slice(currIdx + 1).reduce((sum, curr) => sum += curr)
    }

    if (beforeSum === afterSum) return currIdx;
  }

  return -1;
 }

// p(equalSumIndex([1, 2, 4, 4, 2, 3, 2]) === 3);
// p(equalSumIndex([7, 99, 51, -48, 0, 4]) === 1);
// p(equalSumIndex([17, 20, 5, -60, 10, 25]) === 0);
// p(equalSumIndex([0, 2, 4, 4, 2, 3, 2]) === -1);

// The following test case could return 0 or 3. Since we're
// supposed to return the smallest correct index, the correct
// return value is 0.
// p(equalSumIndex([0, 20, 10, -60, 5, 25]) === 0);







/*
Problem 19
Create a function that takes an array of integers as an argument and returns the integer that appears an odd number of times. There will always be exactly one such integer in the input array.

In: array (integers)
Out: integer
Rules:  
  - ONLY 1 integer has ODD occurrences
  - odd: num % 2 === 1

[D]
1. Count integer occurrences
2. Return integer with odd occurrences

- create `obj` variable
- iterate over array
  -- add new nums to `obj` or increment existing ones
- iterate over `obj`
  -- if a number has an odd value
    --- return that number

CREATE `oddFellow` function that takes `arr` as arg
CREATE `obj` variable and ASSIGN to empty object
ITERATE over `arr`
  ADD/INREMENT current number in `obj`
ITERATE over `obj`
  IF current number has odd value
    RETURN current number
*/

function oddFellow(arr){
  let obj = {};

  arr.forEach(el => obj[el] = obj[el] + 1 || 1);

  for (let prop in obj) {
    if (obj[prop] % 2 === 1) return Number(prop);
  }
  
}

// p(oddFellow([4]) === 4);
// p(oddFellow([7, 99, 7, 51, 99]) === 51);
// p(oddFellow([7, 99, 7, 51, 99, 7, 51]) === 7);
// p(oddFellow([25, 10, -6, 10, 25, 10, -6, 10, -6]) === -6);
// p(oddFellow([0, 0, 0]) === 0);





/*
Problem 20
Create a function that takes an array of numbers, all of which are the same except one. Find and return the number in the array that differs from all the rest.

The array will always contain at least 3 numbers, and there will always be exactly one number that is different.
*/

function whatIsDifferent(arr) {
  return arr.filter((el, idx, arr) => arr.indexOf(el) === arr.lastIndexOf(el))[0];
}

// p(whatIsDifferent([0, 1, 0]) === 1);
// p(whatIsDifferent([7, 7, 7, 7.7, 7]) === 7.7);
// p(whatIsDifferent([1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 1, 1]) === 11);
// p(whatIsDifferent([3, 4, 4, 4]) === 3);
// p(whatIsDifferent([4, 4, 4, 3]) === 3);






















////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////// SAME QUESTIONS, ROUND 3 ////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////


/*
14min 

Problem 1
Create a function that takes an array of numbers as an argument. For each number, determine how many numbers in the array are smaller than it, and place the answer in an array. Return the resulting array.

When counting numbers, only count unique values. That is, if a number occurs multiple times in the array, it should only be counted once.

In: array (integers)
Out: array (integers)
Rules:
  - count unique values smaller than each value
  - Default: empty array

[D]
1. Filter for unique values
2. Check how many values are smaller than currently looked at value
3. Include count in array
4. Return that array

- create 'filteredArr' arr
- create `output` arr
- iterate over source arr (look at using `map`)
  -- count values in `filteredArr` that are smaller than current number
  -- append count to output array  
- Return output array
*/

function smallerNumbersThanCurrent(sourceArr) {
  let filteredArr = sourceArr.reduce((arr, currEl) => {
    if (!arr.includes(currEl)) arr.push(currEl);
    return arr;
  }, [])

  let output = [];

  for (let i = 0; i < sourceArr.length; i++) {
    output.push(filteredArr.filter(el => el < sourceArr[i]).length);
  }

  return output;
}


// p(eq(smallerNumbersThanCurrent([8, 1, 2, 2, 3]), [3, 0, 1, 1, 2]));
// p(eq(smallerNumbersThanCurrent([7, 7, 7, 7]), [0, 0, 0, 0]));
// p(eq(smallerNumbersThanCurrent([6, 5, 4, 8]), [2, 1, 0, 3]));
// p(eq(smallerNumbersThanCurrent([1]), [0]));

// let myArray = [1, 4, 6, 8, 13, 2, 4, 5, 4];
// let result = [0, 2, 4, 5, 6, 1, 2, 3, 2];
// p(eq(smallerNumbersThanCurrent(myArray), result));




/*
15min

Problem 2
Create a function that takes an array of integers as an argument. The function should return the minimum sum of 5 consecutive numbers in the array. If the array contains fewer than 5 elements, the function should return null.

In: array (integers)
Out: integer (smallest sum of 5 integers)
Rules:
  - numbers used for sum must be consecutive
  - Defualt return: null (arr has less than 5 elements)

[D]
1. Iterate over each number
2. Find the sum of this number and the 4 after it. 
3. Return the smallest sum

- create `smallestSum` variable and set to 0
- iterate over source, stop 4 elements before its end
  -- create a slice from the current iteration to another 4 numbers
  -- sum the numbers
  -- if it's smaller than `smallestSum`
    --- reassign `smallestSum` to current sum
- Return `smallestSum`

CREATE minimumSum function that takes `arr` as argument
CREATE `smallestSum` variable and ASSIGN to null
ITERATE over `arr` from 0 to `arr` length - 4
  CREATE `subArr` and ASSIGN to `arr` sliced from current index to current index + 5
  CREATE `currSum` and ASSIGN to SUM `subArr` (use reduce)
  REASSIGN `smallestSum` to value of `currSum` on first iteration
  IF `currSum` < `smallestSum`
    REASSIGN `smallestSum` to `currSum`
RETURN `smallestSum`
*/

function minimumSum(arr) {
  let smallestSum = null;

  
  for (let i = 0; i < arr.length - 4; i++) {
    let subArr = arr.slice(i, i + 5);
    let currSum = subArr.reduce((sum, currEl) => sum + currEl);

    smallestSum = smallestSum || currSum;

    if (currSum < smallestSum) smallestSum = currSum;
  }

  return smallestSum;
}


// p(minimumSum([1, 2, 3, 4]) === null);
// p(minimumSum([1, 2, 3, 4, 5, -5]) === 9);
// p(minimumSum([1, 2, 3, 4, 5, 6]) === 15);
// p(minimumSum([55, 2, 6, 5, 1, 2, 9, 3, 5, 100]) === 16);
// p(minimumSum([-1, -5, -3, 0, -1, 2, -4]) === -10);



/*
20.6min 

Problem 3
Create a function that takes a string argument and returns a copy of the string with every second character in every third word converted to uppercase. Other characters should remain the same.

In: string (words)
Out: string (words)
Rules:
  - every 2nd char of every 3rd word to uppercase
  - every other character remains the same

[D]
1. Find every 3rd word
2. For 3rd word, find every 2nd character
3. Change those characters to uppercase
4. Return string of words showing changes

- create `wordsArr` from arg string
- iterate over words (map)
  -- return result of passing every 3rd word to `uppercaser` (helper)
- join `wordsArr` into a string

(helper)
uppercaser(word)
- create `newWord` string
- iterate over the word
  -- if index + 1 is divisible by 2
    --- uppercase the letter
    --- add uppercased letter to `newWord`
  -- else 
    --- add current letter to `newWord`
- Return `newWord`
*/

function upperCaser(word) {
  let newWord = '';
  word = [...word];


  for (let i = 0; i < word.length; i++) {
    if ((i + 1) % 2 === 0) newWord += word[i].toUpperCase();
    else newWord += word[i]
  }

  return newWord;
}

function toWeirdCase(str) {
  let wordsArr = str.split(" ");

  return wordsArr.map((word, index) => {
    if (index > 0 && ((index + 1) % 3 === 0)) return upperCaser(word);
    else return word;
  }).join(" ");

}



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
Problem 4
36min first attempt (incomplete)
11min second attempt (complete✅)

Create a function that takes an array of integers as an argument and returns an array of two numbers that are closest together in value. If there are multiple pairs that are equally close, return the pair that occurs first in the array.

In: array (integers)
Out: array (integers: 2 closest in value)
Rules:
  - if multiple pairs are equally close, return first pair
  - closest in value means: smallest diff between 2 numbers

[D]
1. Find the numbers that have the smallest diff between them
2. Return these two numbers in their original order in an array

- create 'smallestPair' array
- create 'currSmallestDiff'
- iterate over arr, last iteration at second last element
  -- iterate over arr, with current number as starting index, last iteration at last element
    --- find diff between outer current number and inner current number
    --- if `smallestPair` has length of 0 OR diff < `currSmallestDIff`
      ---- replace 1st and 2nd index position values of `smallestPair` with outer current number and inner current number
      --- reassign `currSmallestDiff` to diff
- Return `smallestPair`
*/

function closestNumbers(arr) {
  let smallestPair = [];
  let currSmallestDiff; 

  for (let outer = 0; outer < arr.length - 1; outer++) {
    for (let inner = outer + 1; inner < arr.length; inner++) {

       let sorted = [arr[outer], arr[inner]].sort((a, b) => a - b);

       if (smallestPair.length === 0 || sorted[1] - sorted[0] < currSmallestDiff) {
        smallestPair[0] = arr[outer];
        smallestPair[1] = arr[inner];
        currSmallestDiff = sorted[1] - sorted[0]
       }
    }
  }
  return smallestPair
}


// p(eq(closestNumbers([5, 25, 15, 11, 20]), [15, 11]));
// p(eq(closestNumbers([19, 25, 32, 4, 27, 16]), [25, 27]));
// p(eq(closestNumbers([12, 22, 7, 17]), [12, 7]));




/*
13min

Problem 5
Create a function that takes a string argument and returns the character that occurs most often in the string. If there are multiple characters with the same greatest frequency, return the one that appears first in the string. When counting characters, consider uppercase and lowercase versions to be the same.

In: string (word/words)
Out: string (character)
Rules:
  - character that occurs the most 
  - case insensitive
  - if many have same occurrence, return first

[D]
1. Find unique characters
2. Count them
3. Return the one that occurs first in the source string

- create `uniqueChars` object
- iterate over source
  -- if lowercase char exists in `uniqueChars`, 
    --- increment it 
  -- else add lowercase char to it

- create `highestCount` variable and set to 0
- iterate over `uniqueChars`
  -- if current char has count bigger than `highestCount`
    --- Reassign `highestCount` to current char's value
- Return `highestCount`
*/

function mostCommonChar(str) {
  let uniqueChars = {};

  for (let char of str) {
    char = char.toLowerCase();
    uniqueChars[char] = uniqueChars[char] + 1 || 1;
  }

  let highestCount = 0;
  let highestChar = null;

  for (let char in uniqueChars) {
    if (uniqueChars[char] > highestCount) {
      highestCount = uniqueChars[char];
      highestChar = char;
    }
  }

  return highestChar;
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
6min

Problem 6
Create a function that takes a string argument and returns a hash in which the keys represent the lowercase letters in the string, and the values represent how often the corresponding letter occurs in the string.
*/

function countLetters(str) {
  return [...str].reduce((obj, currChar) => {
    if (currChar >= 'a' && currChar <= 'z') {
      obj[currChar] = obj[currChar] + 1 || 1;
    }
    return obj;
  }, {})
}


// TEST CASES
// const objeq = function(obj1, obj2) {
//   let keys1 = Object.keys(obj1);
//   let keys2 = Object.keys(obj2);

//   if (keys1.length !== keys2.length) {
//     return false;
//   }

//   for (let key of keys1) {
//     if (! keys2.includes(key)) {
//       return false;
//     } else if (obj1[key] !== obj2[key]) {
//       return false;
//     }
//   }

//   return true;
// }

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
12min

Problem 7
Create a function that takes an array of integers as an argument and returns the number of identical pairs of integers in that array. For instance, the number of identical pairs in [1, 2, 3, 2, 1] is 2: there are two occurrences each of both 2 and 1.

If the array is empty or contains exactly one value, return 0.

If a certain number occurs more than twice, count each complete pair once. For instance, for [1, 1, 1, 1] and [2, 2, 2, 2, 2], the function should return 2. The first array contains two complete pairs while the second has an extra 2 that isn't part of the other two pairs.

In: array (integers)
Out: integer (count of integer pairs)
Rules:
  - count a pair once (eg. [1, 1, 1, 1] has 2 pairs)
  - Default return: 0 (empty array or array has one value)

[D]
1. Find unique integers
2. Count them
3. Sum all the pair counts
4. Return that sum

- create `uniqueNums` object
- iterate over source
  -- increment or add number to `uniqueNums`
- create `pairsCount`
- iterate over `uniqueNums`
  -- Divide current value by 2 and floor it (remove decimals)
  -- Add this value to `pairsCount`
*/


function pairs (arr) {
  let uniqueNums = {};

  for (let int of arr) {
    uniqueNums[int] = uniqueNums[int] + 1 || 1;
  }

  let pairsCount = 0;

  for (let int in uniqueNums) {
    if (uniqueNums[int] > 1) pairsCount += Math.floor(uniqueNums[int] / 2)
  }

  return pairsCount;
}

// p(pairs([3, 1, 4, 5, 9, 2, 6, 5, 3, 5, 8, 9, 7]) === 3);
// p(pairs([2, 7, 1, 8, 2, 8, 1, 8, 2, 8, 4]) === 4);
// p(pairs([]) === 0);
// p(pairs([23]) === 0);
// p(pairs([997, 997]) === 1);
// p(pairs([32, 32, 32]) === 1);
// p(pairs([7, 7, 7, 7, 7, 7, 7]) === 3);


/*
9min

Problem 8
Create a function that takes a non-empty string as an argument. The string consists entirely of lowercase alphabetic characters. The function should return the length of the longest vowel substring. The vowels of interest are "a", "e", "i", "o", and "u".

In: string (letters)
Out: integer (length)
Rules:
  - longest vowel substring
  - vowels: aeiou
  - arg has only lowercase letters

[D]
1. Find a vowel
2. Count consecutive vowels
3. Return longest consecutive vowels

- create 'longestLength' variable
- create `currLength` variable 
- iterate over source
  -- if current letter is a vowel
    --- increment `currLength`
    --- if `currLength` > `longestLength`
      ---- reassign `longestLength` to `currLength`
  -- else
    --- reassign `currLength` to 0
- Return `longestLength`
*/

function longestVowelSubstring(str) {
  let longestLength = 0;
  let currLength = 0;

  for (let char of str) {
    if ('aeiou'.includes(char)) {
      currLength += 1;
      if (currLength > longestLength) longestLength = currLength;
    } else {
      currLength = 0;
    }
  }

  return longestLength;
}



// p(longestVowelSubstring('cwm') === 0);
// p(longestVowelSubstring('many') === 1);
// p(longestVowelSubstring('launchschoolstudents') === 2);
// p(longestVowelSubstring('eau') === 3);
// p(longestVowelSubstring('beauteous') === 3);
// p(longestVowelSubstring('sequoia') === 4);
// p(longestVowelSubstring('miaoued') === 5);


/*
14min

Problem 9
Create a function that takes two string arguments and returns the number of times that the second string occurs in the first string. Note that overlapping strings don't count: 'babab' contains 1 instance of 'bab', not 2.

You may assume that the second argument is never an empty string.

In: string, string (source, target)
Out: integer (count of target in source)
Rules:
  - lowercase
  - overlapping strings don't count
  - target is never empty
  - Default return: 0

[D]
1. Compare portions of the source with the target
2. Count when portion of the source matches the target
3. Return the total matching count

- create `totalCount` variable
- iterate over source, stop target length + 1 before the end
  -- create substring from current position to current position + length of target
  -- if substring matches target
    --- increment `totalCount`
    --- increment iterator by target length
- Return `totalCount`
*/

function countSubstrings(source, target) {
  let totalCount = 0;

  for (let i = 0; i <= source.length - target.length; i++) {
    let subString = source.slice(i, i + target.length)
    if (subString === target) {
      totalCount += 1;
      i += target.length - 1;
    }
  }

  return totalCount;
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


/*
16min

Problem 10
Create a function that takes a string of digits as an argument and returns the number of even-numbered substrings that can be formed. For example, in the case of '1432', the even-numbered substrings are '14', '1432', '4', '432', '32', and '2', for a total of 6 substrings.

If a substring occurs more than once, you should count each occurrence as a separate substring.

In: string (number)
Out: integer (even-numbered substring count)
Rules:
  - Each occurrence counts (even if they're the same eg. 142142)
  - Default return: 0

[D]
1. Create all different substrings
2. Count all even-numbered substrings 
3. Return count

- create `total` variable
- iterate over source
  -- iterate for current character over source
    --- create `currentSubstring` variable
    --- convert to a number
    --- if number is even
      ---- increment `total`
- return `total`
*/

function evenSubstrings(str) {
  let total = 0;

  for (let i = 0; i < str.length; i++) {
    for (let k = i + 1; k <= str.length; k++) {

      let currSubStringNum = Number(str.slice(i, k));
      if (currSubStringNum % 2 == 0) total += 1;
   
    }
  }

  return total;
}

// p(evenSubstrings('1432') === 6);
// p(evenSubstrings('3145926') === 16);
// p(evenSubstrings('2718281') === 16);
// p(evenSubstrings('13579') === 0);
// p(evenSubstrings('143232') === 12);


/*
16min

Problem 11
Create a function that takes a nonempty string as an argument and returns an array consisting of a string and an integer. If we call the string argument s, the string component of the returned array t, and the integer component of the returned array k, then s, t, and k must be related to each other such that s === t * k. The values of t and k should be the shortest possible substring and the largest possible repeat count that satisfies this equation.

You may assume that the string argument consists entirely of lowercase alphabetic letters.

In: string
Out Array (substring, count)
Rules:
  - string ("s") = substring ("t") * repeat count ("k")
  - t: shortest possible substring
  - k: largest possible count

[D]
1. Create substrings, starting really small
2. Multiply those by a count, start really big
3. Increase substring length while decreasing count until they equate the source string

- iterate over source, iterator can be the substring length
  -- create `count` and set to source length divided by substring length
  -- create `substring` with iterator 
  -- if substring * count === source
    --- return [substring, count]
  -- else count minus 1
*/

function repeatedSubstring(s) {
  for (let i = 1; i <= s.length; i++) {
    let k = s.length / i;
    let t = s.slice(0, i);

    if (t.repeat(k) === s) return [t, k];
    
  }
}

// p(eq(repeatedSubstring('xyzxyzxyz'), ['xyz', 3]));
// p(eq(repeatedSubstring('xyxy'), ['xy', 2]));
// p(eq(repeatedSubstring('xyz'), ['xyz', 1]));
// p(eq(repeatedSubstring('aaaaaaaa'), ['a', 8]));
// p(eq(repeatedSubstring('superduper'), ['superduper', 1]));


/*
10min

Problem 12
Create a function that takes a string as an argument and returns true if the string is a pangram, false if it is not.

Pangrams are sentences that contain every letter of the alphabet at least once. For example, the sentence "Five quacking zephyrs jolt my wax bed." is a pangram since it uses every letter at least once. Note that case is irrelevant.

In: string
Out: boolean
Rules:
  - true: str contains every letter a-z
  - case insensitive

[D]
1. create an alphabet object
2. count the occurrenc of each char
3. Return true if every alphabetic character was found

- create `alphabetObj` object
- iterate over string
  -- increment lowercased current letter in `alphabetObj` object
- If every letter has a count above 0
  -- Return true
- Else return false
*/

function isPangram(str) {
  let alphabetObj = {};

  for (let code = 'a'.charCodeAt(); code <= 'z'.charCodeAt(); code++) {
    alphabetObj[String.fromCharCode(code)] = 0;
  }

  for (let letter of str) {
    letter = letter.toLowerCase()
    if (letter >= 'a' && letter <= 'z') alphabetObj[letter] += 1;
  }

  for (let letter in alphabetObj) {
    if (alphabetObj[letter] < 1) return false;
  }

  return true;
}

// p(isPangram('The quick, brown fox jumps over the lazy dog!') === true);
// p(isPangram('The slow, brown fox jumps over the lazy dog!') === false);
// p(isPangram("A wizard’s job is to vex chumps quickly in fog.") === true);
// p(isPangram("A wizard’s task is to vex chumps quickly in fog.") === false);
// p(isPangram("A wizard’s job is to vex chumps quickly in golf.") === true);

// let myStr = 'Sixty zippers were quickly picked from the woven jute bag.';
// p(isPangram(myStr) === true);



/*
17min

Problem 13
Create a function that takes two strings as arguments and returns true if some portion of the characters in the first string can be rearranged to match the characters in the second. Otherwise, the function should return false.

You may assume that both string arguments only contain lowercase alphabetic characters. Neither string will be empty.

In: string (source characters)
Out: string (target word)
Rules:
  - try rearrange some portion of source to get target
  - source and target are lowercase alphabetic

[D]
1. Check if each character of target is in source
2. Return true if so otherwise return false

- iterate over target
  -- if source includes current target character
    --- remove target character that matches source character
    --- remove source character that matches target character
- if my target is empty it means all characters have been found
  -- return true
- else 
  -- return false
*/

function unscramble(source, target) {
  let sourceArr = [...source];
  let targetArr = [...target];

  for (let char of target) {
    if (sourceArr.includes(char)) {
      sourceArr.splice(sourceArr.indexOf(char), 1);
      targetArr.splice(targetArr.indexOf(char), 1);
    }
  }

  return !targetArr.length;
}


// p(unscramble('ansucchlohlo', 'launchschool') === true);
// p(unscramble('phyarunstole', 'pythonrules') === true);
// p(unscramble('phyarunstola', 'pythonrules') === false);
// p(unscramble('boldface', 'coal') === true);




/*
12min

Problem 14
Create a function that takes a single integer argument and returns the sum of all the multiples of 7 or 11 that are less than the argument. If a number is a multiple of both 7 and 11, count it just once.

For example, the multiples of 7 and 11 that are below 25 are 7, 11, 14, 21, and 22. The sum of these multiples is 75.

If the argument is negative, return 0.

In: integer
Out: integer out (sum)
Rules:
  - sum: multiples of 7 or 11 less than source
  - Default return: 0 (eg. values less than 7)

[D]
1. Iterate from 7 to source minus 1 and sum all the numbers that are multiples of 7 and 11, or 11, or 7
2. Return the sum

- create `sum` variable
- iterate from 7, stop at source - 1
  -- if iterator is divisible by 7 AND 11
    --- add it to `sum`
    --- increment iterator by 6
  -- if iterator is divisible by 11
    --- add it to `sum`
  -- if iterator is divisible by 7
    --- add it to `sum`
- Return `sum`
*/

function sevenEleven(source)  {
  let sum = 0;

  for (let i = 7; i < source; i++) {
    if (i % 7 === 0 && i % 11 === 0) {
      sum += i;
      i += 6;
    } 
    else if (i % 11 === 0 || i % 7 === 0) sum += i;
  }

  return sum;
}

// p(sevenEleven(10) === 7);
// p(sevenEleven(11) === 7);
// p(sevenEleven(12) === 18);
// p(sevenEleven(25) === 75);
// p(sevenEleven(100) === 1153);
// p(sevenEleven(0) === 0);
// p(sevenEleven(-100) === 0);




/*
12min

Problem 15
Create a function that takes a string argument that consists entirely of numeric digits and computes the greatest product of four consecutive digits in the string. The argument will always have more than 4 digits.

In: string (numbers)
Out: integer (largest product)
Rules:
  - largest product: 4 consec numbers multiplied
  - source > 4 digits always

[D]
1. Slice 4 digits at a time in order and multiply them
2. Return the greatest product

- create `greatestProduct` variable
- iterate over source, stop 3 iterations before the end
  -- create `currentProduct` and set to 4 digits from current iteration to current iteration + 3 multiplied together
  -- if `currentProduct` > `greatestProduct`
    --- reassign `greatestProduct` to `currentProduct`
- Return `greatestProduct`
*/

function greatestProduct(str) {
  let greatestProduct = 0;
  str = str.split('')

  for (let i = 0; i < str.length - 3; i++) {
    let currentProduct = str.slice(i, i + 4).reduce((sum, curr) => sum * curr, 1);
    
    if (currentProduct > greatestProduct) greatestProduct = currentProduct;
  }

  return greatestProduct;
}


// p(greatestProduct('23456') === 360);      // 3 * 4 * 5 * 6
// p(greatestProduct('3145926') === 540);    // 5 * 9 * 2 * 6
// p(greatestProduct('1828172') === 128);    // 1 * 8 * 2 * 8
// p(greatestProduct('123987654') === 3024); // 9 * 8 * 7 * 6


/*
7min

Problem 16

Create a function that returns the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. You may assume that the input string contains only alphanumeric characters.

In: string (alphanumeric)
Out: integer (count)
Rules:
  - count:  occur more than once
            case-insensitive
            number or letter

[D]
1. Create a list with counts of each unique alphanumeric character
2. Count those that occur more than once
3. Return the count

- creat `count`
- create `uniqueChars` object
- iterate over source
  --- if lowercased current char is in `uniqueChars`
    ---- increment it
  --- else 
    ---- add it to `uniqueChars`
- iterate over `uniqueChars`
  --- if property has value more than 1,
    ---- increment `count`
- Return `count`
*/

function distinctMultiples(source) {
  let count = 0;
  let uniqueChars = {};

  for (let char of source) {
    char = char.toLowerCase();
    uniqueChars[char] = uniqueChars[char] + 1 || 1;
  }

  for (let uniqueChar in uniqueChars) {
    if (uniqueChars[uniqueChar] > 1) count += 1;
  }

  return count;
}

// p(distinctMultiples('xyz') === 0);              // (none)
// p(distinctMultiples('xxyypzzr') === 3);         // x, y, z
// p(distinctMultiples('xXyYpzZr') === 3);         // x, y, z
// p(distinctMultiples('unununium') === 2);        // u, n
// p(distinctMultiples('multiplicity') === 3);     // l, t, i
// p(distinctMultiples('7657') === 1);             // 7
// p(distinctMultiples('3141592653589793') === 4); // 3, 1, 5, 9
// p(distinctMultiples('2718281828459045') === 5); // 2, 1, 8, 4, 5





/*
16min

Problem 17
Create a function that takes an array of integers as an argument. The function should determine the minimum integer value that can be appended to the array so the sum of all the elements equal the closest prime number that is greater than the current sum of the numbers. For example, the numbers in [1, 2, 3] sum to 6. The nearest prime number greater than 6 is 7. Thus, we can add 1 to the array to sum to 7.

Notes:
The array will always contain at least 2 integers.
All values in the array must be positive (> 0).
There may be multiple occurrences of the various numbers in the array.

In: array (integers)
Out: integer
Rules: 
  - min integer value: closest prime - sum of array integers
  - closest prime: must be bigger than sum of array integers
[D]
1. Sum the array integers
2. Look for smallest prime number starting at sum + 1
3. Return "min. integer value" = "prime" - "sum"

- create `sum` variable (reduce method)
- create `prime` and assign to calculatePrime (helper) passing in value of `sum` + 1
- Return `prime` minus `sum`

(helper)
calculatePrime(startingValue)
- iterate from startingValue indefinitely
  -- if isPrime (helper)
    --- return current value

(helper)
isPrime(startingValue)
- iterate from 2 to starting value - 1
  -- if the startingValue is divisible by current number
    --- return false
  -- else 
    --- return true
*/

function nearestPrimeSum(arr) {
  let sum = arr.reduce((sum, currVal) => sum + currVal);
  let prime = calculatePrime(sum + 1);

  return prime - sum;
}

function calculatePrime(value) {
  for (let currVal = value; true; currVal++) {
    if (isPrime(currVal)) return currVal;
  }
}

function isPrime(value) {
  for (let i = 2; i < value; i++) {
    if (value % i === 0) return false
  }

  return true;
}

// p(nearestPrimeSum([1, 2, 3]) === 1);        // Nearest prime to 6 is 7
// p(nearestPrimeSum([5, 2]) === 4);           // Nearest prime to 7 is 11
// p(nearestPrimeSum([1, 1, 1]) === 2);        // Nearest prime to 3 is 5
// p(nearestPrimeSum([2, 12, 8, 4, 6]) === 5); // Nearest prime to 32 is 37

// // Nearest prime to 163 is 167
// p(nearestPrimeSum([50, 39, 49, 6, 17, 2]) === 4);




/*
16min

Problem 18
Create a function that takes an array of integers as an argument. Determine and return the index N for which all numbers with an index less than N sum to the same value as the numbers with an index greater than N. If there is no index that would make this happen, return -1.

If you are given an array with multiple answers, return the index with the smallest value.

The sum of the numbers to the left of index 0 is 0. Likewise, the sum of the numbers to the right of the last element is 0.

In: array (integers)
Out: integer ("N")
Rules: 
  - "N": lower indexed numbers summed === higher indexed numbers summed
  - if multiple "N", return smallest "N"
  - Default return: -1

[D]
1. Find left sums and right sums
2. Each time, compare the sum
3. Save the index to "N" if the sums are equal

- create "N" variable
- iterate over the array 
  -- create `leftSum` and assign it to sum of slice from 0 to current iterator
  -- create `rightSum` and assign it to sum of slice from current iterator + 1 to end
  -- if `leftSum` equals `rightSum` 
    --- if "N" has not been assigned
      ---- assign "N" to current iterator
      ---- Return "N"
- Return "N"
*/

function equalSumIndex(arr) {
  for (let i = 0; i < arr.length; i++) {
    let leftSum = arr.slice(0, i).reduce((sum, curr) => sum + curr, 0);
    let rightSum = arr.slice(i + 1).reduce((sum, curr) => sum + curr, 0);

    console.log('leftSum', leftSum)

    if (leftSum === rightSum) return i;
  }

  return -1
}



// p(equalSumIndex([1, 2, 4, 4, 2, 3, 2]) === 3);
// p(equalSumIndex([7, 99, 51, -48, 0, 4]) === 1);
// // p(equalSumIndex([17, 20, 5, -60, 10, 25]) === 0);
// p(equalSumIndex([0, 2, 4, 4, 2, 3, 2]) === -1);

// // The following test case could return 0 or 3. Since we're
// // supposed to return the smallest correct index, the correct
// // return value is 0.
// p(equalSumIndex([0, 20, 10, -60, 5, 25]) === 0);






/*
12min

Problem 19
Create a function that takes an array of integers as an argument and returns the integer that appears an odd number of times. There will always be exactly one such integer in the input array.

In: array (integers)
Out: integer (count)
Rules:
  - odd integer: only 1 per array

[D]
1. Count the occurrences of unique integers in the array
2. Return the integer that occurs an odd number of times

- create `intCounts` object
- iterate over source
  -- if `intCounts` includes the current value
    --- increment it
  -- else 
    --- add it to `intCounts`
- iterate over `intCounts`
  -- if current property has value not divisible by 2
    --- return current value
*/

function oddFellow(arr) {
  let intCounts = {};

  for (let int of arr) {
    intCounts[int] = intCounts[int] + 1 || 1;
  }

  for (let prop in intCounts) {
    if (intCounts[prop] % 2 === 1) return Number(prop);
  }
}


// p(oddFellow([4]) === 4);
// p(oddFellow([7, 99, 7, 51, 99]) === 51);
// p(oddFellow([7, 99, 7, 51, 99, 7, 51]) === 7);
// p(oddFellow([25, 10, -6, 10, 25, 10, -6, 10, -6]) === -6);
// p(oddFellow([0, 0, 0]) === 0);





/*
4min

Problem 20
Create a function that takes an array of numbers, all of which are the same except one. Find and return the number in the array that differs from all the rest.

The array will always contain at least 3 numbers, and there will always be exactly one number that is different.

In: array (integers)
Out: integer (different number)
Rules:
  - always 1 number that's different

[D]
1. Find number not equal to the other numbers
*/

function whatIsDifferent(arr) {
  return arr.filter(int => arr.indexOf(int) === arr.lastIndexOf(int))[0];
}

// p(whatIsDifferent([0, 1, 0]) === 1);
// p(whatIsDifferent([7, 7, 7, 7.7, 7]) === 7.7);
// p(whatIsDifferent([1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 1, 1]) === 11);
// p(whatIsDifferent([3, 4, 4, 4]) === 3);
// p(whatIsDifferent([4, 4, 4, 3]) === 3);

