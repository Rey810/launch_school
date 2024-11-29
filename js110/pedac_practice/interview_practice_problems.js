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
////////////////////////////// SAME QUESTIONS, SECOND ROUND ////////////////////////////////////
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
  console.log(pairsCount);
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

p(eq(repeatedSubstring('xyzxyzxyz'), ['xyz', 3]));
p(eq(repeatedSubstring('xyxy'), ['xy', 2]));
p(eq(repeatedSubstring('xyz'), ['xyz', 1]));
p(eq(repeatedSubstring('aaaaaaaa'), ['a', 8]));
p(eq(repeatedSubstring('superduper'), ['superduper', 1]));