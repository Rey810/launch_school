/* eslint-disable max-statements */
/* eslint-disable max-lines-per-function */
/* eslint-disable consistent-return */
/* eslint-disable max-len */
const p = console.log;
///////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////
/* Given a sentence, write a function that finds the starting index of the rightmost occurrence of any consecutive vowel sequence in the sentence. The function should be case-insensitive and should only consider vowel sequences within individual words (not spanning multiple words). */
///////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////

// If no consecutive vowels are found, return nil (for Ruby) or null (for JavaScript)

// Test Cases
// console.log(rightmostConsecutiveVowel("The quick brown fox jumps over the laaazy dog")); // Output: 37
// console.log(rightmostConsecutiveVowel("She sells sea shells on the sea shore")); // Output: 29
// console.log(rightmostConsecutiveVowel("I like eating aaapples and oranGEs")); // Output: 15
// console.log(rightmostConsecutiveVowel("This sentence has no consecutive vowels")); // Output: null
// console.log(rightmostConsecutiveVowel("Queueing is fun but cooool")); // Output: 23

/*
Problem:

-input
-> string (multiple words)
- Output
-> number 

- rules
-> find a starting index (rightmost occurrence of any consecutive vowel sequence [2 vowels])
-> no 2 vowels in a row, return null
-> case insensitive ("Aa" === 'aa')
-> vowel sequence must be within one word
-> starting index of vowel pair

- assumptions
-> always have a string input

- own words
-> given a string of words, find the rightmost vowel pair in a word, return the starting index of that pair

----
Algorithm:
1. Given a string
2. Iterate over the string
  - check each word for a vowel sequence (starting with last word)
3. Return starting index of vowel sequence or null (if no pair is found)

Main function:
rightmostConsecutiveVowel(string)
1. Create "indexOfVowelSeq" and set to null
2. Create "vowelsCount" and set to 0
3. loop over string, starting from the back
  - if character is a vowel, 
    - increment "vowelsCount"
    - if "vowelsCount" is 2, set "indexOfVowelSeq" to current index and return it
  - if character is not a vowel
    - reset "vowelsCount" to 0
4. Return "indexOfVowelSeq"
*/


// ALgorithm
// 1. Given a string
// 2. Split up the string into multiple words
//   - check each word for a vowel sequence (starting with the last word)
// 3. Return either starting index of vowel pair or null (if no pair is found)

// Main function:
// rightmostConsecutiveVowel(string)
// 1. create a variable "wholeString" set that to argument string
// 2. create an array variable "wordsArray" and set it to "wholeString" split into an array 
// 3. create a "vowels" array containing the vowels as single character strings
// 4. create a for-loop, starting with the last word in the "wordsArray"
//   - create a variable "vowelCount" and set it to 0
//   - create a variable "startOfSeqIndex" and set it to null
//   - create a for-loop (for looping over each word), start at the last letter of the word
//     - if character is a vowel, increment "vowelCount" 
//       - increment "vowelCount"
//       - if "vowelCount" is 2, reassign "startOfSeqIndex" to return value of findingIndexOfCharacter(string, word)
//     - else set "vowelCount" to 0
// 5. Return value of "startOfSeqIndex"

// Helper function
// findingIndexOfCharacter(string, word, char)
// 1. create a variable "wordIndex" and set it to the index of the word in the string (String.indexOf)
// 2. create a variable "characterIndex" and set that to the index of the character in the word
// 3. sum "wordIndex" with "characterIndex" return the result
// */

// SOLUTION 1 (complicated approach)
function rightmostConsecutiveVowel(string) {
  const VOWELS = ['a', 'e', 'i', 'o', 'u'];

  let wholeString = string;
  let wordsArray = wholeString.split(" ");
  let startOfSeqIndex = null;

  for (let i = wordsArray.length - 1; i >= 0; i -= 1) {
    // within the string
    let word = wordsArray[i];
    let vowelCount = 0;

    for (let k = word.length - 1; k >= 0; k -= 1) {
      // within the word
      let char = wordsArray[i][k];

      if (VOWELS.includes(char)) {
        vowelCount += 1;
        if (vowelCount === 2) {
          startOfSeqIndex = findingIndexOfCharacter(string, word, k);
          return startOfSeqIndex;
        }
      } else {
        vowelCount = 0;
      }
    }
  }

  return startOfSeqIndex;
}

function findingIndexOfCharacter(string, word, charIndex) {
  let wordIndex = string.lastIndexOf(word);

  return wordIndex + charIndex;
}


// SOLUTION 2 (simpler approach)
function rightmostConsecutiveVowel_simple(string) {
  const VOWELS = ['a', 'e', 'i', 'o', 'u'];
  let indexOfVowelSeq = null;
  let vowelsCount = 0;

  for (let index = string.length - 1; index >= 0; index -= 1) {
    if (VOWELS.includes(string[index])) {
      vowelsCount += 1;
      if (vowelsCount === 2) {
        return indexOfVowelSeq = index;
      }
    } else {
      vowelsCount = 0;
    }
  }
  return indexOfVowelSeq;
}


// SOLUTION 3
/* Algorithm:
Function
- Iterate over the characters of a string 
- Find pairs of consecutive vowals 
- Return the starting index of the last pair found 

Main function:
- Create variable 'highestIndex' = null
- Create a variable 'count' and set it to 0
- Create a string variable 'vowals' > 'aeuioAEUIO'
- Iterate over each single character of the string
  - Each time the character is included in "vowals" increase 'count' by 1 
  - When count is 2 set 'highestIndex' to the current index -1 
  - Reset 'count' to 0
*/



///////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////
/* Given a sentence, write a function that finds the starting index of the rightmost occurrence of any consecutive vowel sequence in the sentence and the word it belongs to. The function should be case-insensitive and should only consider vowel sequences within individual words (not spanning multiple words).


// If a consecutive vowel sequence is found, return an array where the first element is the starting index of the sequence and the second element is the word containing that sequence.

// If no consecutive vowels are found, return an empty array.*/
///////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////


// Test Cases
// console.log(rightmostConsecutiveVowel_extraOutput("The quick brown fox jumps over the laaazy dog")); // Output: [37, "laaazy"]
// console.log(rightmostConsecutiveVowel_extraOutput("She sells sea shells on the sea shore")); // Output: [29, "sea"]
// console.log(rightmostConsecutiveVowel_extraOutput("I like eating aaapples and oranGEs")); // Output: [15, "aaapples"]
// console.log(rightmostConsecutiveVowel_extraOutput("This sentence has no consecutive vowels")); // Output: []
// console.log(rightmostConsecutiveVowel_extraOutput("Queueing is fun but cooool")); // Output: [23, "cooool"]


function rightmostConsecutiveVowel_extraOutput(string) {
  const VOWELS = ['a', 'e', 'i', 'o', 'u'];

  let wholeString = string;
  let wordsArray = wholeString.split(" ");
  let outputArray = [];

  for (let i = wordsArray.length - 1; i >= 0; i -= 1) {
    // within the string
    let word = wordsArray[i];
    let vowelCount = 0;

    for (let k = word.length - 1; k >= 0; k -= 1) {
      // within the word
      let char = wordsArray[i][k];

      if (VOWELS.includes(char)) {
        vowelCount += 1;
        if (vowelCount === 2) {
          outputArray = [string.lastIndexOf(word) + k, word];
          return outputArray;
        }
      } else {
        vowelCount = 0;
      }
    }
  }

  return outputArray;
}



// You are given an array of student objects, where each student object contains:
//* An integer id (representing the student’s ID).
//* An array grades of integers (representing the student’s grades).
// You need to write a function/method that finds the nth largest grade across all students and returns the id of the student who received that grade. If there are multiple students with the same grade, return the student with the lowest id.

/*
- input
-> object and integer 
- Output
-> integer or null

- rules
-> nth largest grade: ex. 9th largest grade (9th highest)
--> 2nd argument is nth largest
-> return id with the nth largest grade
-> if multiple ids with same nth largest grade, return lowest id


----
Algorithm
- Find the nth largest grade
- Return lowest id with that grade
- Return null if no nth largest grade

Main function
nthLargestGrade(studentsObj, gradeRank)
- set 'allGradesArray' to findAllGrades (helper function)
- create 'nthLargestGrade' and set to value of 'allGradesArray' at gradeRank - 1
- create 'studentIndex' and set to null
- Iterate over studentsObj
  -- Iterate over grades array
    --- if current grade is equal to "nthLargestGrade" AND current id is lower than 'studentIndex'
      ---- set 'studentIndex' to current id
    --- set 'studentIndex' id to the current id
- Return 'studentIndex'


Helper function
findAllGrades(studentObj)
- create 'gradesFound' array
- Iterate over objects
  -- Iterate over grades array
    --- if 'gradesFound' does not have the current grade, add it to 'gradesFound'
- Sort 'gradesFound' array from largest to smallest
- Return 'gradesFound'
*/

// function findAllGrades(studentObj) {
//   const gradesFound = [];

//   studentObj.forEach(student => {
//     student.grades.forEach(grade => {
//         gradesFound.push(grade)
//     })
//   })

//   return gradesFound.sort((a, b) => b - a);
  
// }

// function nthLargestGrade(studentsObj, gradeRank) {
//   const allGradesArray = findAllGrades(studentsObj);
//   const nthLargestGrade = allGradesArray[gradeRank - 1];

//   let studentIndex = null;

//   studentsObj.forEach(student => {

//     student.grades.forEach(grade => {
//       if (grade === nthLargestGrade && student.id < studentIndex) {
//         studentIndex = student.id
//       } else if (grade === nthLargestGrade && !studentIndex) {
//         studentIndex = student.id;
//       }
//     })

//   })

//   return studentIndex;

// }

// // Test Cases
// const students = [
//   { id: 2, grades: [95, 75, 88] },
//   { id: 1, grades: [95, 85, 78] },
//   { id: 3, grades: [95, 70, 85] }
// ];

// console.log(nthLargestGrade(students, 3)); // Output: 1
// console.log(nthLargestGrade(students, 1)); // Output: 1
// console.log(nthLargestGrade(students, 4)); // Output: 2
// console.log(nthLargestGrade(students, 5)); // Output: 1
// console.log(nthLargestGrade(students, 10)); // Output: null





/*
Alphabet Symmetry
Consider the word "abode".
The letter `a` is in position 1 and `b` is in position 2.
In the alphabet, `a` and `b` are also in positions 1 and 2.

The letters `d` and `e` in "abode" occupy the positions they would occupy in the alphabet, which are positions 4 and 5. 

Given an array of words, return an array of the number of letters that occupy their positions in the alphabet for each word. For example,


Input will consist of alphabetic characters, both uppercase and lowercase. No spaces.

In: array (words)
Out: array (numbers)
Rules: 
  - case insensitive
  - only count letters that appear in same word and alphabet position
  - count in each word

[D]
1. Create alphabet
2. Count letters that appear in same position in word and alphabet
3. Return array with counts for each word

- create 'alphabet' array
- create 'counts' array
- iterate over array
  - count common letter positions (word pos. equals alphabet pos.) [helper]
  - append count to 'counts'
- return 'counts'

[helper]
- create 'count' variable
- iterate over the word
  - compare letter word pos. with letter alphabet pos.
  - increment count if pos. is equal
- return 'count'

CREATE `solve` function that takes `arr` array as arugment
CREATE `alphabet` variable and ASSIGN to [a...z] array
CREATE `counts` variable and ASSIGN to empty array
ITERATE over `arr`
  APPEND [helper] return value to `counts`
RETURN `counts`

[helper]
CREATE `determineCount` function that takes `word` as an argument
CREATE `count` variable and ASSIGN to 0
ITERATE over `word`
  IF current letter word position is equal to letter alphabet pos. 
    INCREMENT `count` by 1
RETURN `count`
*/

function solve(arr) {
  return arr.map(determineCount);
}

function determineCount(word) {
  let alphabet = createAlphabet();

  let count = 0;

  word.toLowerCase().split("").forEach((letter, index) => {
    if (index === alphabet.indexOf(letter)) count += 1;
  });

  return count;
}

function createAlphabet() {
  let alphabet = [];
  
  for (let code = 'a'.charCodeAt(0); true; code++) {
    let letter = String.fromCharCode(code);
    
    if (letter === 'z') {
      alphabet.push('z');
      break;
    }
    
    alphabet.push(letter);
  }
  
  return alphabet;
}

// console.log(solve(["abode","ABc","xyzD"])) // [4, 3, 1]






/*
Create a function that takes a string of digits as an argument and returns the number of even-numbered substrings that can be formed. For example, in the case of '1432', the even-numbered substrings are '14', '1432', '4', '432', '32', and '2', for a total of 6 substrings.

If a substring occurs more than once, you should count each occurrence as a separate substring.

In: string (number)
Out: integer (even-numbered substrings)
Rules:
  - even-numbered substring: 'number' % 2 === 0

[D]
1. Create all substrings
2. Count the ones that are even-numbered
3. Return that count

- create 'count` 
- Iterate over the string
  -- Start iterating at current position of outer iteration
    --- Create a substring from current inner position to end of string
    --- If substring is even
      --- increment `count`
- return `count`

CREATE `evenSubstrings` function that takes `str` as arg
CREATE `count` variable and ASSIGN to 0
ITERATE over `str`
  ITERATE over `str`, starting from outer index
    CREATE `substr` and ASSIGN to string slice from inner index to end of `str`
    IF `substr` is even
      INCREMENT `count`
RETURN `count`
*/

function evenSubstrings(str) {
  let count = 0;
  str = str.split("");

  for (let i = 0; i <= str.length; i++) {
    for (let k = i + 1; k <= str.length; k++) {
      if (Number(str.slice(i, k).join("")) % 2 === 0) count += 1;
    }
  }

  return count;
}


// p(evenSubstrings('1432') === 6); // '14', '1432', '4', '432', '32',  '2'
// p(evenSubstrings('3145926') === 16);
// p(evenSubstrings('2718281') === 16);
// p(evenSubstrings('13579') === 0);
// p(evenSubstrings('143232') === 12);




/* P33
You probably know the "like" system from Facebook and other pages. People can "like" blog posts,
pictures or other items. We want to create the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of people that like an item.
It must return the display text as shown in the examples:

[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

In: array (strings)
Out: string
Rules:
  - array length of 0 -> "no one likes this"
  - array length of 1 -> '[first el] likes this'
  - array length of 2 -> '[first el] and [second el] like this'
  - array length of 3 -> '[first el],  [second el] and [third el] like this'
  - array length of > 3 -> '[first el], [second el] and [array length - 2] like this'

[D]
1. Determine array length
2. Return appropriate string
*/

function printLikes(arr) {
  switch (arr.length) {
    case 0:
      console.log("no one likes this");
      break;
    case 1:
      console.log(`${arr[0]} likes this`);
      break;
    case 2:
      console.log(`${arr[0]} and ${arr[1]} like this`);
      break;
    case 3:
      console.log(`${arr[0]}, ${arr[1]}, and ${arr[2]}  like this`);
      break;
    default:
      console.log(`${arr[0]}, ${arr[1]}, and ${arr.length - 2} others like this`);
      break;
  }
}

// printLikes([])
// printLikes(["Peter"])
// printLikes(["Jacob", "Alex"])
// printLikes(["Max", "John", "Mark"])
// printLikes(["Alex", "Jacob", "Mark", "Max"])




/*
P34
Usually when you buy something, you're asked whether your credit card number, phone number or
answer to your most secret question is still correct. However, since someone could look over your
shoulder, you don't want that shown on your screen. Instead, we mask it.

Your task is to write a function maskify, which changes all but the last four characters into '#'.

In: string (characters)
Out: string (characters)
Rules:
  - only hide chars if length of arg is greater than 4
  - default return: string as is

[D]
1. Determine length of string
2. Return a masked string dependant on the length

- if the arg length is less than 4, return arg as is
- otherwise, iterate over arg and replace all chars except last 4 with a hash

CREATE `maskify` function that takes `str` as arg
IF `str`.length is less than 4
  RETURN `str`
ELSE 
  ITERATE over `str`
    IF the current index is less than `str`.length - 4
      REPLACE current char with `#`
RETURN `str`
*/

function maskify(str) {
  if (str.length <= 4) return str;

  // return [...str].map((el, idx) => {
  //   if (idx < str.length - 4) return "#";
  //   else return el;
  // }).join('');

  return [...str].fill('#', 0, str.length - 4).join('');
}

// console.log(maskify("4556364607935616"));                         // "############5616"
// console.log(maskify("64607935616"));                              // "#######5616"
// console.log(maskify("1"));                                        // "1"
// console.log(maskify(""));                                         // ""
// console.log(maskify("Skippy"));                                   // "##ippy"
// console.log(maskify("Nananananananananananananananana Batman!")); // "####################################man!"
// console.log(maskify("cnw"));                                      // "cnw"





/*
P35
You are given an array of strings and an integer k.
Your task is to return the first longest string consisting of k consecutive strings taken in the array.

Example: 
longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2)
result => "abigailtheta"

n being the length of the string array, if n = 0 or k > n or k <= 0 return "".

In: array (strings), integer ('k')
Out: string (longest 'k' consec strings)
Rules: 
  - consecutive string: current string and the next one and the next one etc...
  - Default return: "" (arr has a length of 0; 'k' > arr length; 'k' <= 0)

[D]
1. Determine lengths of 'k' consec strings
2. Return the longest sequence as one string

- create `longestString`
- iterate over arr up until the index is less than or equal to the array length - k
  -- create `substring` from current index to current index + k
  -- if the length of `substring` is greater than `longestSubstring`
    --- reassign `longestSubstring` to `substring`
- return `longestSubstring`

CREATE `longestConsec` function that takes `arr` and 'k' as args
CREATE `longestString` variable and ASSIGN to ""
ITERATE over `arr`, continue until iterator is <= arr length - k
  CREATE `substring` variable and ASSIGN to slice of `arr` from current iterator to current iterator + k
  IF `substring` length > `longestSubstring`
    REASSIGN `longestSubstring` to `substring`
RETURN `longestSubstring`
*/

function longestConsec(arr, k) {
  let longestSubstring = '';

  if (k > arr.length || k <= 0 || arr.length === 0) return longestSubstring;

  for (let i = 0; i <= arr.length - k; i++) {
    let substring = arr.slice(i, i + k).join('');
    if (substring.length > longestSubstring.length) longestSubstring = substring;
  }

  return longestSubstring;
}


// Test Cases
// console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2) === "abigailtheta"); // true
// console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) === "abigailtheta"); // true
// console.log(longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1) === "oocccffuucccjjjkkkjyyyeehh"); // true
// console.log(longestConsec([], 3) === ""); // true
// console.log(longestConsec(["itvayloxrp","wkppqsztdkmvcuwvereiupccauycnjutlv","vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2) === "wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck"); // true
// console.log(longestConsec(["wlwsasphmxx","owiaxujylentrklctozmymu","wpgozvxxiu"], 2) === "wlwsasphmxxowiaxujylentrklctozmymu"); // true
// console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2) === ""); // true
// console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3) === "ixoyx3452zzzzzzzzzzzz"); // true
// console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 15) === ""); // true
// console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 0) === ""); // true





/*
P36
Implement the function/method, minimum shorten.
The function shortens a sentence such that it will fit within the character limit set.
It shortens by removing vowels in the sequence of a, e, i, o, and u.
Start removing from the end of the sentence.
If it can not be shortened to fit within character limit, return an empty string. Spaces don’t count for the limit.
*/





// DO THIS AGAIN!!!!!!!!!!!!!!!!!



// console.log(minimumShorten("This is a test sentence", 18)); // This is  test sentence
// console.log(minimumShorten("Hello World", 8)); // Hllo Wrld
// console.log(minimumShorten("Short", 10)); // Short
// console.log(minimumShorten("A very long sentence with many vowels", 10)); // ""




/*
P37
Given a string `s`, return the length of the longest substring between two equal characters, excluding the two characters. If there is no such substring return -1.

In: string (chars)
Out: integer (char count between two equal chars)
Rules:
  - dont include equal chars in count
  - Default return: -1 (when no equal pairs)

[D]
1. check if there is a pair
2. count the chars between the pair
3. Return the count

- if there is not a pair,
  -- return -1

- iterate over chars, end before last char
  -- iterate over chars, start at outer index + 1, end at last char
    --- if the outer index char equals the inner index char
      ---- return the count of the chars between them

CREATE `maxLengthBetweenEqualCharacters` function that takes `str` as arg
IF there is not a pair
  RETURN -1

ITERATE over `str`, end before `str` length - 1
  ITERATE over `str`, start at outer index + 1, end at last char
    IF the outer index char equals the inner index char
      RETURN inner index minus outer index minus 1
*/

function maxLengthBetweenEqualCharacters(str) {
  if ([...str].filter(el => str.indexOf(el) !== str.lastIndexOf(el)).length === 0) return -1;

  let count = 0;

  for (let i = 0; i < str.length - 1; i++) {
    for (let k = i + 1; k <= str.length - 1; k++) {
      if (str[i] === str[k] && ((k - i - 1) > count)) {
        count = k - i - 1;
      }
    }
  }
  return count;
}

// console.log(maxLengthBetweenEqualCharacters("acbsewb") === 3);
// console.log(maxLengthBetweenEqualCharacters("acbsewbadzzzzzzzzzzzzd") === 12);
// console.log(maxLengthBetweenEqualCharacters("aa") === 0);
// console.log(maxLengthBetweenEqualCharacters("cbzxy") === -1);





/*
P38
We're receiving a set of messages in code. The messages are sets of text strings, like:
"alakwnwenvocxzZjsf"
Write a method to decode these strings into numbers. The decoded number should be the number of lowercase
characters between the first two uppercase characters. If there aren't two uppercase characters,
the number should be 0.

In: array (strings)
Out: array (numbers)
Rules:
  - counts: lowercase letters between first 2 UPPERCASE letters
    -- 0: empty strings; 1 or 0 UPPERCASE letters
  - Default return: 0 (as a part of the return array)

[D]
1. Check for uppercase letters
2. Count lowercase letters between them
3. Return that count
4. Repeat #1-3 for all elements

- create `counts` array
- iterate over the arr
  -- if the word is empty or has 1 or 0 uppercase letters (helper)
    --- add 0 to `counts`
  -- add the count of the lowercase letters in between the two uppercase letters (helper) to `counts` array
- return `counts`

(helper)
hasUppercaseChars
- create 'count` 
- iterate over the chars
  -- if the char is uppercased
    --- increment `count`
- return count

(helper)
countLowercaseChars
- iterate over the chars
  -- create `firstUpper`
  -- create `secondUpper`
  -- if a char equals to the uppercase version of that char
    --- if `firstUpper` is falsey, assign to current char
    --- else assign `secondUpper` to current char
      ---- return the index of `secondUpper` minus index of `firstUpper` minus 1
*/

function hasUppercaseChars(word) {
  return [...word].reduce((count, letter) => letter === letter.toUpperCase() ? count += 1 : count, 0);
 }

 function countLowercaseChars(word) {
   let firstUpper;
   let secondUpper;
 
   for (let letter of word) {
     if (letter === letter.toUpperCase()) {
       if (!firstUpper) firstUpper = letter;
       else {
         secondUpper = letter;
         return word.lastIndexOf(secondUpper) - word.indexOf(firstUpper) - 1;
       }
     }
   }
 }
 
 function decode(arr) {
   let counts = [];
 
   for (let word of arr) {
     if (word.length === 0 || (hasUppercaseChars(word) <= 1)) counts.push(0);
     else counts.push(countLowercaseChars(word));
   }
 
   return counts;
 }
 
 
//  console.log(decode(['ZoL', 'heLlo', 'XX'])) // [1, 0, 0]);
//  console.log(decode(['foUrsCoreAnd', 'seven', ''])) // [2, 0, 0]);
//  console.log(decode(['lucYintheskyWith', 'dIaMonDs'])) // [8, 1]);
//  console.log(decode([]) ) // [];





/*
P39
Given a sentence, write a function that finds the starting index of
the rightmost occurrence of any consecutive vowel sequence in the sentence
and the word it belongs to.
The function should be case-insensitive and should only consider vowel
sequences within individual words (not spanning multiple words).

If a consecutive vowel sequence is found, return an array where the first element is
the starting index of the sequence and the second element is the word containing that sequence.

If no consecutive vowels are found, return an empty array.

In: string (words)
Out: array (index integer, string word)
Rules:
  - consecutive vowels:
    -- two in a row
    -- in one word
  - case insensitive
  - default return: []

[D]
1. Look for 2 vowels in a row from the right of each word
2. Return the first index (i.e. the start of the 2 vowel consec seq) and the word it's in

- iterate over the str from the end 
 -- iterate over current word from the end
  --- if the current letter and the next letter are vowels
    ---- return an array with the index of the next letter and the current word
- return []

CREATE `rightmostConsecutiveVowel` function that takes `str` as arg
ITERATE over `str` starting from the end, stopping at the first word
 ITERATE over current word starting from the end, stopping at the second last letter
  IF current letter AND next letter are vowels
    RETURN [index of next letter, current word]
RETURN []
*/

function rightmostConsecutiveVowel(str) {
  let strArr = str.split(" ");

  for (let i = strArr.length - 1; i >= 0; i--) {
    let currentWord = strArr[i]

    for (let k = currentWord.length - 1; k >= 1; k--) {
      if ('aeiou'.includes(currentWord[k]) && 'aeiou'.includes(currentWord[k - 1])) {
        return [str.lastIndexOf(currentWord) + (k - 1), currentWord];
      }
    }
  }
  
  return [];
}



// console.log(rightmostConsecutiveVowel("The quick brown fox jumps over the laaazy dog")); // Output: [37, "laaazy"]
// console.log(rightmostConsecutiveVowel("She sells sea shells on the sea shore")); // Output: [29, "sea"]
// console.log(rightmostConsecutiveVowel("I like eating aaapples and oranGEs")); // Output: [15, "aaapples"]
// console.log(rightmostConsecutiveVowel("This sentence has no consecutive vowels")); // Output: []
// console.log(rightmostConsecutiveVowel("Queueing is fun but cooool")); // Output: [23, "cooool"]





/*
P41
Your job is to write a function which increments a string to create a new string.

If the string already ends with a number, the number should be incremented by 1.
If the string does not end with a number, the number 1 should be appended to the new string.
Examples:
foo -> foo1
foobar23 -> foobar24
foo42 -> foo43
foo9 -> foo10
foo99 -> foo100

1. Check if string has number
2. Increment number or add number to string
3. Return string containing new/incremented number

- create array from string arg
- filter out letters so that only numbers remain
- if no numbers
  -- add one to string and return that string
- else 
  -- increment number
  -- add to string and return that string

CREATE `incrementString` function that takes `str` as arg
CONVERT `str` to array
FILTER array for numbers
IF array has length of 0
  ADD 1 to `str` 
  RETURN `str`
ELSE 
  JOIN array elements into number
  INCREMENT number
  ADD number to `str`
  RETURN `str`
*/

function incrementString(str) {
  let numericIndex = str.length - str.split('').reverse().findIndex(el => el < "0" || el > "9");
  let numericPart = str.slice(numericIndex)
  let nonNumericPart = str.slice(0, numericIndex);

  if (nonNumericPart.length === 0) return numericPart.join('') + 1;
  else return nonNumericPart.join('') + (Number(numericPart.join('')) + 1);
}

// console.log(incrementString("foobar0")); // "foobar1"
// console.log(incrementString("foobar999")); // "foobar1000"
// console.log(incrementString("foo")); // "foo1"
// console.log(incrementString("foobar1")); // "foobar2"
// console.log(incrementString("1")); // "2"
// console.log(incrementString("9")); // "10"
// console.log(incrementString("fo99obar99")); // "fo99obar100"



/*
isPrime
function is_prime (number) {
  if (number <= 1) return false; 
  if (number <= 3) return true; 
  if (number % 2 === 0 || number % 3 === 0) return false; 

  for (let idx = 5; idx <= Math.sqrt(number); idx += 6) {
    if (number % idx === 0 || number % idx + 2 === 0) return false; 
  }
  return true; 
}
*/



/*
Study session TA 22 Jan 2025
// understanding
// algorithm
// code

// Write a function robustSsearch that takes two arguments: an array of words and a query term. The function should return an array of words from the given array that match the query term. The function should be case insensitive, it should consider partial matches, and to account for keyboard typo should consider that the last two letters of the query term may have been reversed. -- Rey

In: array (strings), target string
Out: array (source strings)
Rules:
  - source strings in output:
    -- contain target string at least (iow, partial match is ok)
    -- last two characters of source string can be swapped and still match
    -- case insensitive
  - Default return: empty array

[D]
1. Iterate over source strings
2. Find strings or substrings that match target string
3. Return matched source strings in array

- create 'matchedStringsArray' array variable
- iterate over source strings array (can also use filter)
  -- checkMatch (helper)
  -- if (checkMatch)
    --- append current word to matchedStringsArray 
- Return 'matchedStringsArray'

(helper)
checkMatch
- iterate over each character of current word
  -- create substring from current character to last character
  -- create altSubstring from current character to last character (with last 2 characters swopped)
  -- if subtring OR altSubstring matches target string
    --- return true
- Return false
*/

// didnt check case sensitivity 
// didnt check keyboard typos

function robustSearch(source, target) {
  let matchedStringsArray = [];

  source.forEach(word => {
    if (checkMatch(word, target)) matchedStringsArray.push(word)
  })

  return matchedStringsArray;
}

function checkMatch(word, target) {
  let normalTarget = target.toLowerCase();
  let typoCorrectedTarget = target.slice(0, -2) + target[target.length - 1] + target[target.length - 2];

  for (let idx = 0; idx < word.length; idx++) {
    let substring = word.slice(idx).toLowerCase();

    if (substring === normalTarget || substring === typoCorrectedTarget) return true;
  }

  return false;
}

// Test Cases
// console.log(robustSearch(["develop", "develpo", "deep", "dive", "devel"], "devel")); // ["develop", "develpo", "devel"]
// console.log(robustSearch(["apple", "banAna", "cherry"], "naan")); // ["banana"]
// console.log(robustSearch(["testing", "switch", "characters"], "testnig")); // []


/* VERSION 2.0
In: array (source words), query (may have swopped letters)
Out: array (matched words)
Rules:
  - source words match when:
    -- partial match
    -- whole match
    -- full/partial match to query with last two letters swapped
  - Default: empty array

[D]
1. Iterate over source words
2. Find those that match query or swopped query
3. Return list of source words that match

- create `matchedSourceWords` array
- iterate over source words
  -- if word matches query (helper)
    --- add word to `matchedSourceWords`
- Return `matchedSourceWords`

(helper)
isMatch(currentWord, query)
- if currentWord contains query or query-swopped
  -- return true
- Return false

-------------------------------------------------------

function isMatch(currentWord, query) {
  query = query.toLowerCase();
  currentWord = currentWord.toLowerCase();

  let swoppedQuery = query.slice(0, -2) + query[query.length -1] + query[query.length -2]

  return currentWord.includes(query) || currentWord.includes(swoppedQuery);
}

function robustSearch(source, query) {
  return source.filter(word => isMatch(word, query));
}

-------------------------------------------------------


// Test Cases
console.log(robustSearch(["develop", "develpo", "deep", "dive", "devel"], "devel")); // ["develop", "develpo", "devel"]
console.log(robustSearch(["apple", "banAna", "cherry"], "naan")); // ["banAna"]
console.log(robustSearch(["testing", "switch", "characters"], "testnig")); // []
*/





/* Write a function that returns the maximum possible consecutive alternating odd and even (or even and odd) numbers. Minimum possible length is 2. If there’s none return [].

In: array (integers)
Out: array (longest conescutive alternating odd-even/even-odd numbers)
Rules:
  - sequence can be odd-even OR even-odd but must alternate (eg. odd-even-odd-even-odd OR even-odd-even-odd-even)
  - Default return: empty array (length of sequence < 2)


[D]
1. Iterate over array
2. Find longest sequence of elements that match rules
3. Return that sequence in an array

- create `longestSeq` array and set to first element in array
- create `currentSeq` array and set to first element in array
- iterate over array
  -- if current number and the next number alternate
    --- add the next number to `currentSeq`
    --- if `currentSeq` > `longestSeq`
      --- Reassign `longestSeq` to copy of `currentSeq`
  -- else 
    --- Reset `currentSeq` and assign to array value at next index
- Return `longestSeq`
*/

function longestAlternatingSubarray(arr) {
  let longestSeq = [arr[0]];
  let currentSeq = [...longestSeq];

  for (let i = 0; i < arr.length - 1; i++) {
    if ((arr[i] % 2 === 0 && arr[i + 1] % 2 === 1) || arr[i] % 2 === 1 && arr[i + 1] % 2 === 0) {
      currentSeq.push(arr[i + 1]);

      if (currentSeq.length > longestSeq.length) longestSeq = [...currentSeq];
    } else {
      currentSeq = [arr[i + 1]];
    }
  }

  return longestSeq.length < 2 ? [] : longestSeq;
}

// Test cases
// console.log(longestAlternatingSubarray([1, 2, 3, 4, 5, 6])); // Expected: [1, 2, 3, 4, 5, 6]
// console.log(longestAlternatingSubarray([2, 4, 6, 8])); // Expected: []
// console.log(longestAlternatingSubarray([1, 3, 5, 7])); // Expected: []  
// console.log(longestAlternatingSubarray([1, 1, 3, 7, 8, 5])); // Expected: [7, 8, 5]
// console.log(longestAlternatingSubarray([4, 6, 7, 12, 11, 9, 17])); // Expected: 6, 7, 12, 11][





// // Write a function that returns the maximum possible consecutive alternating odd and even (or even and odd) numbers. Minimum possible length is 2. If there’s none return []. -- Nick

// // Test cases
// console.log(longestAlternatingSubarray([1, 2, 3, 4, 5, 6])); // Expected: [1, 2, 3, 4, 5, 6]
// console.log(longestAlternatingSubarray([2, 4, 6, 8])); // Expected: []
// console.log(longestAlternatingSubarray([1, 3, 5, 7])); // Expected: []
// console.log(longestAlternatingSubarray([1, 1, 3, 7, 8, 5])); // Expected: [7, 8, 5]
// console.log(longestAlternatingSubarray([4, 6, 7, 12, 11, 9, 17])); // Expected: [6, 7, 12, 11]

// // Write a function robustSsearch that takes two arguments: an array of words and a query term. The function should return an array of words from the given array that match the query term. The function should be case insensitive, it should consider partial matches, and to account for keyboard typo should consider the that last two letters of the query term may have been reversed. -- Rey

// // Test Cases
// console.log(robustSearch(["develop", "develpo", "deep", "dive", "devel"], "devel")); // ["develop", "develpo", "devel"]
// console.log(robustSearch(["apple", "banana", "cherry"], "naan")); // ["banana"]
// console.log(robustSearch(["testing", "switch", "characters"], "testnig")); // []


/*

Problem
  - Write a function that returns the maximum possible consecutive alternating
    odd and even (or even and odd) numbers. Minimum possible length is 2.
    If there’s none return []. -- Nick


  - Input: array with random numbers
  - Output: Array representing maximum possible consecutive alternating odd and even

  - Rules
    - Explicit:
      - Return empty array if no alternating odd and even
      - return MAXIMUM POSSIBLE

    - Implicit:
      

  - Questions
    

Examples and Test Cases
console.log(longestAlternatingSubarray([1, 2, 3, 4, 5, 6])); // Expected: [1, 2, 3, 4, 5, 6]
console.log(longestAlternatingSubarray([2, 4, 6, 8])); // Expected: []
console.log(longestAlternatingSubarray([1, 3, 5, 7])); // Expected: []
console.log(longestAlternatingSubarray([1, 1, 3, 7, 8, 5])); // Expected: [7, 8, 5]
console.log(longestAlternatingSubarray([4, 6, 7, 12, 11, 9, 17])); // Expected: [6, 7, 12, 11]

Data Structures
arrays


Algorithm
  - create function longestAlternatingSubarray which takes an input array as argument
  - define current consecutive subArray equal to empty array
  - iterate over elements of input array starting at index 1
    - if element at index and the index before it are not both even or odd
      if length of currentAlternating is 0, push both elements
      - add element to current consecutive subarray
  - return current consecutive subarray

Code
*/

// function longestAlternatingSubarray(inputArray) {
//   let currentAlternatingSubarray = [];
//   for (let i = 1; i < inputArray.length; i++) {
//     if (inputArray[i] % 2 !== inputArray[i - 1] % 2) {
//       if (currentAlternatingSubarray.length === 0) {
//         currentAlternatingSubarray.push(inputArray[i - 1]);
//       }
//       currentAlternatingSubarray.push(inputArray[i]);
//     };
//   }
//   return currentAlternatingSubarray;
// }

// function longestAlternatingSubarray(arr) {
//   let longestSubarray = [];
//   let currentSubarray = [arr[0]];

//   for (let i = 1; i < arr.length; i++) {
//       if ((arr[i] % 2 !== arr[i - 1] % 2)) {
//           currentSubarray.push(arr[i]);
//           if (currentSubarray.length > longestSubarray.length) {
//               longestSubarray = [...currentSubarray];
//           }
//       } else {
//           currentSubarray = [arr[i]];
//       }
//   }

//   return longestSubarray.length >= 2 ? longestSubarray : [];
// }

// console.log(longestAlternatingSubarray([1, 2, 3, 4, 5, 6])); // Expected: [1, 2, 3, 4, 5, 6]
// console.log(longestAlternatingSubarray([2, 4, 6, 8])); // Expected: []
// console.log(longestAlternatingSubarray([1, 3, 5, 7])); // Expected: []
// console.log(longestAlternatingSubarray([1, 1, 3, 7, 8, 5])); // Expected: [7, 8, 5]
// console.log(longestAlternatingSubarray([4, 6, 7, 12, 11, 9, 17])); // Expected: [6, 7, 12, 11]
// console.log(longestAlternatingSubarray([2, 2, 3, 4, 5, 1, 1])); // Expected: [2, 3, 4, 5]
// console.log(longestAlternatingSubarray([1, 2, 3, 3, 3, 3, 4, 5, 6, 7, 8])); // Expected : [3, 4, 5, 6, 7, 8]





/*
26min

Write a function that returns the maximum possible consecutive alternating odd and even (or even and odd) numbers. Minimum possible length is 2. If there’s none return [].

In: array (integers)
Out: array (integers)
Rules:
  - output: 
    -- alternating odd-even-odd OR even-odd-even
    -- max possible length
  - Default: empty array 
  - min length: 2

[D]
1. Go through source array
2. Check if the previous number and the current alternate even-odd OR odd-even
3. If they are, store these values else reset the storage
4. Return the stored values

- create `maxArr` array
- create `currArr` array and store first source value here 
- iterate over source
  -- if previous number and current number are odd-even OR even-odd
    --- push current number to the `currArr`
    --- if `currArr` > `maxArr` 
      ---- reassign `maxArr` to values in `currArr`
  -- reset `currArr` to an array with the current value
- return `maxArr`
*/

function longestAlternatingSubarray(arr) {
  let maxArr = [];
  let currArr = [arr[0]];

  for (let i = 1; i < arr.length; i++) {
    let prev = arr[i - 1];
    let curr = arr[i];

    if ((prev % 2 !== curr % 2)) {
      currArr.push(curr);

      if (currArr.length > maxArr.length) maxArr = [...currArr];
    } else currArr = [curr];
  }

  return maxArr;
}

// Test cases
// console.log(longestAlternatingSubarray([1, 2, 3, 4, 5, 6])); // Expected: [1, 2, 3, 4, 5, 6]
// console.log(longestAlternatingSubarray([2, 4, 6, 8])); // Expected: []
// console.log(longestAlternatingSubarray([1, 3, 5, 7])); // Expected: []
// console.log(longestAlternatingSubarray([1, 1, 3, 7, 8, 5])); // Expected: [7, 8, 5]
// console.log(longestAlternatingSubarray([4, 6, 7, 12, 11, 9, 17])); // Expected: [6, 7, 12, 11]




/* 
11min

Write a function robustSsearch that takes two arguments: an array of words and a query term. The function should return an array of words from the given array that match the query term. The function should be case insensitive, it should consider partial matches, and to account for keyboard typo should consider that the last two letters of the query term may have been reversed.

In: array (words)
Out: string (query)
Rules:
  - query: may have last two letters swapped
  - case insensitive
  - Default return: empty array

[D]
1. Search through array and find matches
2. Store and return matches

- create `swappedQuery` variable
- reassign query to lowercased form
- iterate over the source (method: filter)
  -- if the current string lowercased contains the query OR the swapped query
    --- return true
  -- else return false
- return the filtered array
*/

function robustSearch(source, query) {
  query = query.toLowerCase();
  let swappedQuery = query.slice(0, -2) + query[query.length - 1] + query[query.length - 2];

  return source.filter(el => el.toLowerCase().includes(query) || el.toLowerCase().includes(swappedQuery));
}

// // Test Cases
// console.log(robustSearch(["develop", "develpo", "deep", "dive", "devel"], "devel")); // ["develop", "develpo", "devel"]
// console.log(robustSearch(["apple", "banAna", "cherry"], "naan")); // ["banAna"]
// console.log(robustSearch(["testing", "switch", "characters"], "testnig")); // []


/*
22min

P42

You are given an array of student objects, where each student object contains:
* An integer id (representing the student’s ID).
* An array grades of integers (representing the student’s grades).
You need to write a function/method that finds the nth largest grade across
all students and returns the id of the student who received that grade.
If there are multiple students with the same grade, return the student with the lowest id.

In: object (id; grades); "nth" highest grade
Out: integer (id)
Rules:
  - multiple students with same nth grade: return lowest id
  - Default return is null

[D]
1. Sort grades from highest to lowest
2. Find the nth highest grade
3. Check which student(s) have that grade
4. Return the id of the student with that grade

- create `sortedGrades` array 
- create `nthGrade` variable and set to "nth" - 1
- create `lowestID` and set to 0
- iterate over students
  -- if current student grades includes `nthGrade` 
    --- if `lowestGrade` not set OR current student ID is smaller than `lowestID`
      ---- set `lowestID` to current student ID
- Return `lowestID` if it's been set OR return null
*/

// function nthLargestGrade(students, nth) {
  
//   let sortedGrades = students.reduce((grades, currStudent) => {
//     grades.push(...currStudent.grades);
//     return grades
//   }, []).sort((a, b) => b - a);

//   let filteredGrades = [];

//   sortedGrades.forEach(grade => {
//     if (!filteredGrades.includes(grade)) filteredGrades.push(grade)
//   });

//   let nthGrade = filteredGrades[nth - 1];
//   let lowestID = 0;

//   for (let student of students) {
//     if (student.grades.includes(nthGrade)) {
//       if (!lowestID || student.id < lowestID) lowestID = student.id
//     }
//   }

//   return lowestID || null;
// }

// Test Cases
// const students = [
//   { id: 2, grades: [95, 75, 88] },
//   { id: 1, grades: [95, 85, 78] },
//   { id: 3, grades: [95, 70, 85] }
// ];

// console.log(nthLargestGrade(students, 3)); // Output: 1
// console.log(nthLargestGrade(students, 1)); // Output: 1
// console.log(nthLargestGrade(students, 4)); // Output: 1 (edit: I changed what the output should be cos it looked wrong. Edit edit: turns out I misinterpreted question. I though nth largest meant that 95 and 95 both are ranked the same. Turns out they're not. I call BS. Also this makes the question easier so I'm leaving my answer as is)
// console.log(nthLargestGrade(students, 5)); // Output: 2
// console.log(nthLargestGrade(students, 10)); // Output: null





/*
18min

Problem 9

Implement a function, capitalize, that capitalizes all words in a sentence.
However, only capitalize if the word is followed by a word starting with a vowel.

In: string (words)
Out: string (capitalized words)
Rules:
  - capitalization:
    -- if next word starts with a vowel, capitalize current word
  - Default return: original string

[D]
1. Check each next word, capitalize current word accordingly
2. Return the words as a string (changed/unchanged)

- create `words` array and assign to arg
- iterate over `words` (map)
  -- if next word starts with a vowesl
    --- capitalize and return current word
  -- else return current word
- join `words` into a string and return
*/

function capitalize(str) {
  let words = str.split(" ");x

  for (let i = 0; i < words.length - 1; i++) {
    let nextWord = words[i + 1]
    if ('aeiou'.includes(nextWord[0])) words[i] = (words[i][0].toUpperCase() + words[i].slice(1));
  }

  return words.join(" ")
}

// Test cases
// console.log(capitalize("hello apple world")); // "Hello apple world"
// console.log(capitalize("this is an umbrella")); // "This Is An umbrella"
// console.log(capitalize("every vowel starts an echo")); // "every vowel Starts An echo"
// console.log(capitalize("under the oak tree")); // "under The oak tree"
// console.log(capitalize("a quick brown fox")); // "a quick brown fox"




/*
38min

Write a function, negate, that converts all “yes” words to "no" and "no" words to "yes" in a sentence. The comparison for "yes" and "no" should be case insensitive."yes" and "no" should be negated even if ending with ., ?, ,, or !.

In: string (words)
Out: string (words)
Rules:
  - change "yes" to "no"
  - change "no" to "yes"
  - case insensitive
  - original punctuation must be kept

[D]
1. Find a "yes" or  "no" character by character
2. Replace each character with the negated words character
3. Return the negated words along with the string

- create `negatedString` and set to empty string
- iterate over string
  --- if current character is equal to the first character of "yes" and the current iterator + 3 is non-alphanumeric
    ---- increment iterator by current iterator + 2
    ---- if `capitalized` (helper) append "No" to `negatedString`
    ---- else append "no" to `negatedString`
    --- else if current character is equal to the first character of "no" and the current iterator + 2 is non-alphanumeric
    --- increment iterator by current iterator + 1
    ---- if `capitalized` (helper) append "Yes" to `negatedString`
    ---- else append "yes" to `negatedString`
  --- else append current character to `negatedString` 
- Return `negatedString`

(helper)
isCapitalized(word)
- if (word[0].toUpperCase() + word.slice(1)) === word
  --- return true
- else return false
*/

function negate(string) {
  let negatedString = "";

  for (let i = 0; i < string.length; i++) {
    let currChar = string[i]

    if ((currChar === 'y' || currChar === 'Y') && isYesOrNo(i, string)) {
      i += 2;
      if (isCapitalized(currChar)) negatedString += 'No'
      else negatedString += "no"
    } else if ((currChar === 'n' || currChar === 'N') && isYesOrNo(i, string)) {
      i += 1;
      if (isCapitalized(currChar)) negatedString += 'Yes'
      else negatedString += "yes"
    } else negatedString += currChar;
  }

  return negatedString;
}

function isCapitalized(word) {
  return word[0].toUpperCase() + word.slice(1) === word;
}

function isYesOrNo(index, sentence) {
  if (sentence.slice(index, index + 3).toLowerCase().includes('yes') || sentence.slice(index, index + 2).toLowerCase().includes('no') ) {
    return true
  } else return false;
}



// console.log(negate('Yes today is a beautiful day!')); // 'No today is a beautiful day!'
// console.log(negate('No today is a beautiful day!'));; // 'Yes today is a beautiful day!'
// console.log(negate('She said, "yes"')); //'She said, 'no'
// console.log(negate('I said, "no!"')); // 'I said, "yes!"'
// console.log(negate('yes, here you are')); // 'no, here you are'




/*
9min

Problem 8
Difference of Two
The objective is to return all pairs of numbers from a given array of numbers that have a difference of 2.
The result array should be sorted in ascending order of values.
Assume there are no duplicate numbers in the array.
The order of the numbers in the input array should not matter.

In: array (integers)
Out: array (subarrays: pair of integers)
Rules: 
  - pair: 2 numbers with diff of 2
  - output: sorted in ascending order
  - default return: empty array 

[D]
1. Sort the numbers in ascending order
2. Compare two numbers at a time 
3. Save the pairs that have a diff of 2
4. Retrun all those pairs

- create `pairs` array
- create `sortedArr` and assign that to sorted source arr
- iterate over `sortedArr`
  -- if the current number minus the next number is 2
    --- save the current number and the next number in `pairs` array
- Return `pairs`
*/

function differenceOfTwo(source) {
  let pairs = [];
  let sortedArr = source.sort((a, b) => a - b);

  for (let i = 0; i < sortedArr.length - 1; i++) {
    if (sortedArr[i + 1] - sortedArr[i] === 2) pairs.push([sortedArr[i], sortedArr[i + 1]])
  }

  return pairs;
}
// console.log(differenceOfTwo([5, 2, 7, 9, 10, 3, 11])); // [[3, 5], [5, 7], [7, 9], [9, 11]]
// console.log(differenceOfTwo([21, 5, 13, 19, 23, 15])); // [[13, 15], [19, 21], [21, 23]]
// console.log(differenceOfTwo([5, 2, 6, 12])); // []



/*
13min

Problem 6
You are given an array of strings and want to
find the sum of their numeric values.
On each string, the numeric value can be found by combining the first digit
and the last digit to form a single two-digit number.

In: array (strings)
Out: integer
Rules:
  - output:
    -- sum of 2-digit numbers
    -- 2-digit number: formed from first and last digit in each string

[D]
1. Go through each string
2. Find the numbers
3. Select the first and the last numbers to create one 2-digit number
4. Sum all those 2-digit numbers
5. Return the sum

- create `sum`
- iterate over source
  -- create `numberStrings` array
  - iterate over word
    -- if current character is a number
      --- add to `numbers`
  -- create `number` and assign to combo of first and last in `numbers`
  -- add `number` to `sum`
- Return `sum`
*/

function sumStringValues(source) {
  let sum = 0;

  source.forEach(word => {

    let numberStrings = [];

    for (let char of word) {
      if (char >= 0 && char <= 9) {
        numberStrings.push(char);
      }  
    }

    sum += Number(numberStrings[0] + numberStrings[numberStrings.length - 1]);
  })

  return sum;
}

// console.log(sumStringValues(['1abc2', 'pqr3stu8vwx', 'a1b2c3d4e5f', 'treb7uchet7'])); // 142




/*
Like an hour

Problem 5
Group Anagrams

Write a function groupAnagrams(words) that takes an array of words 
as input and groups the anagrams together. Anagrams are words that 
have the same characters but in a different order.

Your function should return an array of arrays, where each inner 
array represents a group of anagrams. 

The order of the groups and the order of words within each group 
does not matter.
*/

function groupAnagrams(source) {
  let groups = {};

  for (let word of source) {
    let key = word.toLowerCase().split('').sort().join('');
    
    if (!groups.hasOwnProperty(key)) groups[key] = [word];
    else groups[key].push(word);
  }

  return Object.values(groups);
}



// console.log(groupAnagrams(["Act", "ogd", "cat"])); // [["act", "cat"], ["ogd"]]
// console.log(groupAnagrams(["School", "mama", "amam", "maam"])) // [["School"], ["mama", "amam", "maam"]]
// console.log(groupAnagrams([''])); // [['']]

// console.log(groupAnagrams(['Cat', 'dog', 'tac', 'god', 'act']));
// Output: [['Cat', 'tac', 'act'], ['dog', 'god']]







/*
Problem 4

We have a list having unique values from 1 to n, but unordered with an unknown amount of missing values.
We have to output the missing numbers sorted by value.
The number 1 should be in the input array, if it's not present in the input array,
it should be included in the results. See the example below.

[8, 10, 11, 7, 3, 15, 6, 14, 5, 12]  ---> [1, 2, 4, 9, 13]

In: array (integers)
Out: array (integers)
Rules:
  - output:
    -- missing integers
    -- sorted smallest to biggest (ascending)

[D]
1. Sort the source
2. Go through it, find missing values, save them
3. Return them

- create `sortedArr` arr (ascending)
- create `maxValue` variable and assign to last value in `sortedArr`
- create `integersObj` object
- iterate from 1 to `maxValue`
  -- add the current iterator as a key to the `integersObj` and set value of 0

  - iterate over the `sortedArr` 
  -- if the current number as a key in `integersObj` has a property that is equal to 0
    --- increment it's value
- create `missingValues` array

- iterate over `integersObj`
  -- if the current key has a property of 0
    --- append the current key to `missingValues`
- Return `missingValues`

[1, 2, 3, 4, 5, 6, 7, 9, 10]
{1: 1, 2: 1, 3: 1, 4: 1, 5: 1, 6: 1, 7: 1, 8: 0}
*/

// R's solution
function missNumsFinder(source) {
  let sortedArr = [...source].sort((a, b) => a - b);
  let maxValue = sortedArr[sortedArr.length - 1];
  let integersObj = {};

  for (let i = 1; i < maxValue; i++) {
    integersObj[i] = 0;
  }

  sortedArr.forEach(int => {
    if (integersObj[int] === 0) integersObj[int] += 1;
  })

  let missingValues = [];

  for (let num in integersObj) {
    if (integersObj[num] === 0) missingValues.push(Number(num));
  }

  return missingValues;
}

// // K's solution
// function missNumsFinder(uniqueNums) {
//   let missingNums = [];
//   let allNumbers = Array.from({length: Math.max(...uniqueNums)}, (_, idx) => idx + 1);

//   allNumbers.forEach(num => {
//     if (!(uniqueNums.includes(num))) {
//       missingNums.push(num);
//     }
//   });

//   return missingNums;
// }



// console.log(missNumsFinder([8, 10, 11, 7, 3, 15, 6, 14, 5, 12])); // [1, 2, 4, 9, 13]
// console.log(missNumsFinder([2, 3, 1, 9, 4, 5, 6, 10, 7])); // [8]
// console.log(missNumsFinder([5, 4, 2, 9, 3, 8, 10, 6, 7])); //[1]
// console.log(missNumsFinder([7, 1, 12, 9, 11, 14, 13, 6, 10, 5])); // [2, 3, 4, 8]
// console.log(missNumsFinder([8, 10, 11, 7, 3, 15, 6, 1, 14, 5, 12])); // [2, 4, 9, 13]
// console.log(missNumsFinder([9, 10, 7, 2, 11, 8, 1, 17, 6, 16, 18, 19, 15, 3, 13])); //[4, 5, 12, 14]





/*
33min 

Problem 32

Write a function, snakecase, that transforms each word in a sentence to alternate
between lower (even index value) and upper (odd index value) cases when the word
before or after it begins with "s".

In: string (words)
Out: string (words)
Rules:
  - snakecase:
    -- if prev/next word starts with 's', change the characters to snake case
    -- even-index: lowercase
    -- odd-index: uppercase

[D]
1. Go over the words and see if the prev/next word starts with `s`
2. Change current words characters if so
3. Do this for all the words
4. Return a string with all the words and snakecased words

- create `snakeCase` array
- iterate over `snakeCase` array
  -- if the index is 0 and the next word starts with `s`
    --- change and return current word
  -- else if the index is source length minus 1 and prev word starts with `s`
    --- change and return current word
  -- else if prev or next word starts with `s`
    --- change and return current word
  -- else return current word
- Return `snakeCase` array

(helper)
toSnakeCase(word)
- iterate over the word
  -- if current character has an odd index
    --- return current character uppercased
  -- else return current character lowercased
- return transformed word
*/

function snakecase(source) {
  let snakeCaseArr = source.split(" ");

  return snakeCaseArr.map((word, idx, arr) => {
    if (idx === 0) {
      if (arr[idx + 1][0] === 's') return toSnakeCase(word);
      else return word;
    } 
    else if (idx === arr.length - 1) {
      if (arr[idx - 1][0] === 's') return toSnakeCase(word);
      else return word;
    } 
    else if (arr[idx + 1][0] === 's' || arr[idx - 1][0] === 's') return toSnakeCase(word);
      else return word;
  }).join(" ");
}

function toSnakeCase(word) {
  let snakeCasedWord = '';
  
  for (let i = 0; i < word.length ; i++) {
    if (i % 2 === 1) snakeCasedWord += word[i].toUpperCase();
    else snakeCasedWord += word[i].toLowerCase();
  }

  return snakeCasedWord;
}

// console.log(snakecase("Snakes slither silently")); // "sNaKeS sLiThEr sIlEnTlY"
// console.log(snakecase("simple sentence structure")); // "sImPlE sEnTeNcE sTrUcTuRe"
// console.log(snakecase("apples are sweet")); // "apples aRe sweet"
// console.log(snakecase("swiftly swimming swans")); // "sWiFtLy sWiMmInG sWaNs"
// console.log(snakecase("the sun sets slowly")); // "tHe sUn sEtS sLoWlY"
// console.log(snakecase("A quick brown fox")); // "A quick brown fox"




/*
2min

Problem 31

Given two strings needle and haystack, return the index of the first occurrence of needle in haystack,
or -1 if needle is not part of haystack.
*/

function occurrenceIdx(haystack, needle) {
  return haystack.indexOf(needle);
}

// console.log(occurrenceIdx("sadbutsad", "sad")); // 0
// console.log(occurrenceIdx("I didn't study last night", "last")); // 15
// console.log(occurrenceIdx("sadbutsad", "happy")); // -1



/*
12min

Problem 30

Create a function that takes an array of numbers as an argument.
For each number, determine how many numbers in the array are smaller than it,
and place the answer in an array. Return the resulting array.

When counting numbers, only count unique values.
That is, if a number occurs multiple times in the array, it should only be counted once.

In: array (integers)
Out: array (integers)
Rules: 
  - counting: only unique values

[D]
1. Compare each number to every other number
2. Count the unique numbers smaller than each number
3. Return an array of those counts in the original order

- create `counts` arr
- iterate over source
  -- create `unqiueNums` arr
  -- iterate over source 
    --- if inner index number is smaller than outer index number and if it's not there
      ---- add inner index number to `uniqueNums` 
  -- add the length of `uniqueNums` arr to `counts` arr
- Return `counts` arr 
*/

function smallerNumbersThanCurrent(source) {
  let counts = [];

  source.forEach(outerNum => {
    let uniqueNums = [];

    for (let innerIdx = 0; innerIdx < source.length; innerIdx++) {
      if (!uniqueNums.includes(source[innerIdx]) && source[innerIdx] < outerNum) {
        uniqueNums.push(source[innerIdx]);
      }  
    }

    counts.push(uniqueNums.length)
  })

  return counts;
}



// const eq = (arr1, arr2) => JSON.stringify(arr1) === JSON.stringify(arr2);

// p(eq(smallerNumbersThanCurrent([8, 1, 2, 2, 3]), [3, 0, 1, 1, 2]));
// p(eq(smallerNumbersThanCurrent([7, 7, 7, 7]), [0, 0, 0, 0]));
// p(eq(smallerNumbersThanCurrent([6, 5, 4, 8]), [2, 1, 0, 3]));
// p(eq(smallerNumbersThanCurrent([1]), [0]));

// let myArray = [1, 4, 6, 8, 13, 2, 4, 5, 4];
// let result = [0, 2, 4, 5, 6, 1, 2, 3, 2];
// p(eq(smallerNumbersThanCurrent(myArray), result));





/*
10min

Problem 3

You'll be given a string of random characters (numbers, letters, and symbols).
To decode this string into the key we're searching for:
(1) count the number of occurences of each ascii lowercase letter, and
(2) return an ordered string, 26 places long, corresponding to the number of 
    occurences for each corresponding letter in the alphabet.

The string returned should always be 26 characters long, and only count lowercase letters.
You can assume that each lowercase letter will appear a maximum of 9 times in the input str.
In: string (characters)
Out: string (numbers)
Rules:
  - output
    -- count lowercase alphabetic characters
    -- always 26 numbers long (i.e. representing 'a' to 'z')
  - default output: '00000000000000000000000000'

[D]
1. create alphabet
2. count alphabetic characters 
3. Return 26-character string of numbers corresponding to alphabetic character order

- create `alphabet` object
- iterate over source
  -- if it's a lowercase alphabetic character, increment it's value in `alphabet`
- Return `alphabet` values as a string
*/

function decrypt(source) {
  let alphabet = createAlphabet();
  let cleanSource = [...source].filter(char => char >= 'a' && char <= 'z');

  for (let char of cleanSource) {
    alphabet[char] += 1;
  }

  return Object.values(alphabet).join('');
}

function createAlphabet() {
  let alphabet = {};

  for (let charCode = 'a'.charCodeAt(); charCode <= 'z'.charCodeAt(); charCode++) {
    alphabet[String.fromCharCode(charCode)] = 0;
  }

  return alphabet;
}

// console.log(decrypt('$aaaa#bbb*ccfff!z') === '43200300000000000000000001');
// console.log(decrypt('z$aaa#ccc%eee1234567890') === '30303000000000000000000001');
// console.log(decrypt('the quick brown fox jumps over the lazy dog') === '11113112111111411212211111');
// console.log(decrypt('a1b2c3D4dda') === '21120000000000000000000000');
// console.log(decrypt('a1aba2aca3aDaa4dda') === '91120000000000000000000000');
// console.log(decrypt('1203904942@$2') === '00000000000000000000000000');
// console.log(decrypt('ABCJDK3ROKGMIS3949') === '00000000000000000000000000');
// console.log(decrypt('') === '00000000000000000000000000');




/*
45min

Problem 29

Given an array of strings made only from lowercase letters,
return an array of all characters that show up in all strings within the given array (including duplication).
For example, if a character occurs 3 times in all strings but not 4 times,
you need to include that character three time in the final answer.

In: array (word strings)
Out: array (character strings)
Rules:
  - character must occur in each string 
  - default return: empty string

[D]
1. Search for characters that appear in each word
2. Store those characters
3. Return them

- create `commonChars` array
- iterate over the array
  -- iterate over the words
    --- if a character is found in every word
      ---- append to `commonChars`
      ---- replace current character with an empty string
- Return `commonChars`
*/

function commonChars(source) {
  let commonChars = [];
  let firstWord = source[0];
  let arr = [...source];
  
  for (let char of firstWord) {
    if (arr.every(word => word.includes(char))) {
      commonChars.push(char);
      arr = arr.map(word => word.replace(char, ''));
    }
  }


  return commonChars;
}



// p(commonChars(['a', 'b'])) // []
// p(commonChars(['belllla', 'abelll', 'rolller'])) // ['e', 'l', 'l', 'l']
// p(commonChars(['cool', 'lock', 'cook'])) // ['c', 'o']
// p(commonChars(['hello', 'goodbye', 'booye', 'random'])) // ['o']




/*
13min

Problem 28

Given a non-empty string check if it can be constructed by taking a substring of it
and appending multiple copies of the substring together.
You may assume the given string consists of lowercase english letters only.

In: string (characters)
Out: boolean
Rules:
  - true: substring copies can be used to make source string

[D]
1. Create substrings smallest to biggest
2. Repeat them a number of times
3. Return true if the substring can be multiplied a certain repeat times to equal the source string

- iterate over the source
  -- create `substring` and set to source sliced from 0 to current iteration
  -- create `repeat` and set to source divided by `substring` length 
  -- if `repeat` is greater than 1 AND `substring` multipled `repeat` times equals `source
    --- return true
- return false
*/

function repeatedSubstringPattern(str) {
  for (let i = 1; i <= str.length; i++) {
    let substring = str.slice(0, i);
    let repeat = Math.floor(str.length / substring.length);

    if (repeat > 1 && substring.repeat(repeat) === str) return true;
  }

  return false;
}


// p(repeatedSubstringPattern("abab") === true);
// p(repeatedSubstringPattern("aba") === false);
// p(repeatedSubstringPattern("abaababaab") === true);






/*
27min

Problem 27

Write a program that prints the longest sentence in a string based on the number of words.
Sentences may end with periods (.), exclamation points (!), or question marks (?).
You should treat any sequence of characters that are not spaces or sentence-ending characters as a word.
Thus, -- should count as a word. Log the longest sentence and its word count to the console.
Pay attention to the expected output, and be sure you preserve the punctuation from the end of the sentence.
Note that this problem is about manipulating and processing strings.
As such, every detail about the string matters (e.g., case, punctuation, tabs, spaces, etc.).

In: string (sentences)
Out: string (longest sentence); string (word count of longest sentence)
Rules:
  - sentences separated by: . ! ?
  - words: everything except . ! ? and spaces (eg. '--' is a word)

[D]
1. Go through source and split up the sentences when ".!?" is found
2. Go through those sentences and count the words
3. Return the sentence with the most words and the word count


- create `sentences` and assign to `sentenceCreator` call
- create `largestWordCount` and set to 0 
- create `largestSentence` and set to ''
- iterate over sentences
  -- if the sentence has a word count more than `largestWordCount`
    --- reassign `largestWordCount` to current sentence word count
    --- reassign `largestSentence` to current sentence
- Return `largestSentence` and "The longest sentence has `largestWordCount` words

(helper)
sentenceCreator(source)
- create `sentences` variable
- create `sentenceStartIndex` and set to 0
- iterate over the source character by character
  -- if the current character is a sentence ender (i.e. ".!?")
    --- create `sentence` and set to all characters from `sentenceStartIndex` to the current index (inclusive)
    --- append `sentence` to `sentences`
    --- reassign `sentenceStartIndex` to current index + 1`
- Return `sentences`
*/

function longestSentence(source) {
  let sentences = sentenceCreator(source);
  let largestWordCount = 0;
  let largestSentence = '';

  for (let sentence of sentences) {
    let currentWordCount = sentence.split(" ").length;

    if (!largestWordCount || currentWordCount > largestWordCount) {
      largestWordCount = currentWordCount
      largestSentence = sentence;
    }
  }

  return largestSentence + `\nThe largest sentence has ${largestWordCount} words.`;
}

function sentenceCreator(source) {
  let sentences = [];
  let sentenceStartIndex = 0;

  for (let i = 0; i < source.length; i++) {
    if (`.!?`.includes(source[i])) {
      sentences.push(source.slice(sentenceStartIndex, i + 1));
      sentenceStartIndex = i + 2;
    }
  }

  return sentences;
}


let longText =
  'Four score and seven years ago our fathers brought forth on this ' +
  'continent a new nation, conceived in liberty, and dedicated to the ' +
  'proposition that all men are created equal. Now we are engaged in a ' +
  'great civil war, testing whether that nation, or any nation so ' +
  'conceived and so dedicated, can long endure. We are met on a great ' +
  'battlefield of that war. We have come to dedicate a portion of that ' +
  'field, as a final resting place for those who here gave their lives ' +
  'that that nation might live. It is altogether fitting and proper that ' +
  'we should do this.';

let longerText = longText +
  'But, in a larger sense, we can not dedicate, we can not consecrate, ' +
  'we can not hallow this ground. The brave men, living and dead, who ' +
  'struggled here, have consecrated it, far above our poor power to add ' +
  'or detract. The world will little note, nor long remember what we say ' +
  'here but it can never forget what they did here. It is for us the ' +
  'living, rather, to be dedicated here to the unfinished work which ' +
  'they who fought here have thus far so nobly advanced. It is rather ' +
  'for us to be here dedicated to the great task remaining before us -- ' +
  'that from these honored dead we take increased devotion to that ' +
  'cause for which they gave the last full measure of devotion -- that ' +
  'we here highly resolve that these dead shall not have died in vain ' +
  '-- that this nation, under God, shall have a new birth of freedom -- ' +
  'and that government of the people, by the people, for the people, ' +
  'shall not perish from the earth.';

// longestSentence(longText);
// // Four score and seven years ago our fathers brought forth on this continent a new nation,
// // conceived in liberty, and dedicated to the proposition that all men are created equal.
// // //
// // The longest sentence has 30 words.

// longestSentence(longerText);
// // It is rather for us to be here dedicated to the great task remaining before us -- 
// // that from these honored dead we take increased devotion to that cause for which they gave
// // the last full measure of devotion --
// // that we here highly resolve that these dead shall not have died in vain --
// // that this nation, under God, shall have a new birth of freedom --
// // and that government of the people, by the people, for the people, shall not perish from the earth.

// // The longest sentence has 86 words.

// longestSentence("Where do you think you're going? What's up, Doc?");
// // Where do you think you're going?

// // The longest sentence has 6 words.

// longestSentence("To be or not to be! Is that the question?");
// // To be or not to be!
//
// The longest sentence has 6 words.





/*
15min
Problem 26

Write a function that computes the difference between the square of the sum of the first 
count positive integers and the sum of the squares of the first count positive integers.

In: integer
Out: integer
Rules:
  - diff between: square of the sum - sum of the squares

[D]
1. Calculate the sum then square it
2. Calculate the sum of squaring each number
3. Return #1 minus #2

--------------------
sumSquareDifference
- Return `squareOfSum` minus `sumOfSquares`

(helper)
squareOfSum
- create `sum` and set to 0
- iterate over the number
  -- increment `sum` by current number
- Return `sum` squared

(helper)
sumOfSquares
- create `sum` and set to 0
- iterate over the number
  -- increment `sum` by the square of current number 
- Return `sum`
*/

function sumSquareDifference(int) {
  return squareOfSum(int) - sumOfSquares(int);
}

function squareOfSum(int) {
  let sum = 0;

  for (let num = 1; num <= int; num++) {
    sum += num;
  }

  return sum * sum;
}

function sumOfSquares(int) {
  let sum = 0;

  for (let num = 1; num <= int; num++) {
    sum += num * num;
  }

  return sum;
}

// console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
// console.log(sumSquareDifference(10));     // 2640
// console.log(sumSquareDifference(1));      // 0
// console.log(sumSquareDifference(100));    // 25164150





/*
27min

Problem 25

You have to create a function that takes a positive integer number
and returns the next bigger number formed by the same digits:

In: integer
Out: integer
Rules:
  - output
    -- next biggest number
    -- same digits

[D]
1. Start incrementing from the given number
2. Continue until the incremented number contains all the numbers of the given number
3. Return that incremented number

- if given number has no digits after the first digit bigger than the first digit
  -- return -1
- iterate from given number
  -- if each digit in the current number is included in the given number
    --- return the current number

12
13
14
15
16
...
21 -> "21" -> [2, 1] 

531 -> [5, 3, 1] -> [5, 3] if all these are bigger than the removed value -> bigger integer not possible
*/

function nextBiggerNum(int) {
  let intArr = [...String(int)];
  let digitsArr = [...String(int)];
  let lastDigit = digitsArr.pop();

  if (digitsArr.every(digit => digit >= lastDigit)) return -1;

  for (let currNum = int + 1; true; currNum++) {
    // let hasValidNextNum = ([...String(currNum)].every(num => intArr.includes(num))) && (intArr.every(num => [...String(currNum)].includes(num)));

    let hasValidNextNum = JSON.stringify(intArr.sort()) === JSON.stringify([...String(currNum)].sort())

    console.log(intArr);
    if (hasValidNextNum) return currNum;
  }
}

// p(nextBiggerNum(1432))// === 2134);
// p(nextBiggerNum(12) === 21);
// p(nextBiggerNum(513) === 531);
// p(nextBiggerNum(2017)=== 2071);
// p(nextBiggerNum(111) === -1);
// p(nextBiggerNum(531) === -1);
// p(nextBiggerNum(123456789) === 123456798);



/*
11min

Problem 21

Create a function that takes a string argument that consists entirely of numeric digits and computes the greatest product of four consecutive digits in the string. The argument will always have more than 4 digits.

In: string (integers)
Out: integer
Rules:
  - output:
    -- biggest product of 4 consecutive integers

[D]
1. Creat 4 digit numbers from the given string number
2. Keep track of the largest product
3. Return the largest product

- create `largestProduct` and set to 0
- iterate over the number
  -- create `currentProduct` and set to product of numbers from current index to current index + 4
  -- if `currentProduct` is bigger than `largestProduct` 
    --- reassign `largestProduct` to `currentProduct`
- Return `largestProduct`

23456
length -> 5
i -> length - 4
*/

function greatestProduct(str) {
  let largestProduct = 0;
  let numArr = [...str];

  for (let i = 0; i <= numArr.length - 4; i++) {
    let currProduct = numArr.slice(i, i + 4).reduce((product, curr) => product * curr, 1)
    if (currProduct > largestProduct) largestProduct = currProduct;
  }

  return largestProduct;
}

// p(greatestProduct('23456') === 360);      // 3 * 4 * 5 * 6
// p(greatestProduct('3145926') === 540);    // 5 * 9 * 2 * 6
// p(greatestProduct('1828172') === 128);    // 1 * 8 * 2 * 8
// p(greatestProduct('123987654') === 3024); // 9 * 8 * 7 * 6





/*
17min

Problem 2
Given a list of integers and a single sum value, return the first two values
in order of appearance that add up to form the sum.

If there are two or more pairs with the required sum,
the pair whose second element has the smallest index is the solution.

Example:

console.log(sumPairs([4, 3, 2, 3, 4],         8)); [4, 4]
                      ^-----^         4 + 2 = 6, indices: 0, 2
                         ^-----^      3 + 3 = 6, indices: 1, 3
                            ^-----^   2 + 4 = 6, indices: 2, 4
== [4, 2]

Negative numbers and duplicate numbers can and will appear.

In: array (integers); integer (sum)
Out: array (integers)
Rules:
  - output:
    -- 2 integers from source that add up to `sum` (2nd arg)
    -- 2nd integer with smallest index
    -- default return: undefined

[D]
1. Sum two integers together in order of the source
2. If two integers sum to the 2nd arg return them in an array
3. Otherwise return undefined

- create `integersArr` variable
- create `currSmallestIndex` 
- iterate over array
  -- iterate through array from outer number to inner index
    --- if current number + number at inner index equals `sum` arg and inner index is less than `currSmallestIndex`
      ---- reassign `integersArr` to [current number, number at inner index]
      ---- reassign `currSmallestIndex` to inner index
- Return undefined
*/

function sumPairs(arr, sum) {
  let integersArr = undefined;
  let currSmallestIndex = 0;

  for (let outer = 0; outer <= arr.length - 2; outer++) {
    for (let inner = outer + 1; inner <= arr.length - 1; inner++) {
      if ((!currSmallestIndex || inner < currSmallestIndex) && (arr[outer] + arr[inner] === sum)) {
        integersArr = [arr[outer], arr[inner]];
        currSmallestIndex = inner;
      }
    }
  }

  return integersArr;
}

 
//  // // Test cases
//  console.log(sumPairs([11, 3, 7, 5], 10)); // [3, 7]
//  console.log(sumPairs([0, 0, -2, 3], 2)); // undefined
//  console.log(sumPairs([1, 2, 3, 4, 1, 0], 2)); // [1, 1]
//  console.log(sumPairs([10, 5, 2, 3, 7, 5], 10)); // [3, 7]
//  console.log(sumPairs([0, 2, 0], 0)); // [0, 0]
//  console.log(sumPairs([5, 9, 13, -3], 10)); // [13, -3]






/*
6min

Problem 19

Create a function that takes two strings as arguments and returns true if some portion of the characters in the first string can be rearranged to match the characters in the second. Otherwise, the function should return false.

You may assume that both string arguments only contain lowercase alphabetic characters. Neither string will be empty.

In: string (source); string (target)
Out: boolean
Rules:
  - can (some) chars in source be arranged to make target
  - non-empty args
  - lowecase alphabetic args only

[D]
1. Check if every character in target is found in source

- iterate over target
  -- if current char is not in source
    --- return false
  -- else
    -- remove curr char from source
- Return true
*/

function unscramble(source, target) {
  let sourceArr = [...source];

  for (let i = 0; i < target.length; i++) {
    if (!sourceArr.includes(target[i])) return false;
    else sourceArr.splice(sourceArr.indexOf(target[i]), 1);
  }

  return true;
}



// p(unscramble('ansucchlohlo', 'launchschool') === true);
// p(unscramble('phyarunstole', 'pythonrules') === true);
// p(unscramble('phyarunstola', 'pythonrules') === false);
// p(unscramble('boldface', 'coal') === true);







/*
9min

Problem 17

Create a function that takes a string of digits as an argument and returns the number of even-numbered substrings that can be formed. For example, in the case of '1432', the even-numbered substrings are '14', '1432', '4', '432', '32', and '2', for a total of 6 substrings.

If a substring occurs more than once, you should count each occurrence as a separate substring.


In: string (integers)
Out: integer
Rules:
  - even-numbered substrings: divisible by 2

[D]
1. Create number combos
2. Count the combos that are divisible by 2
3. Return that count

- create `count` and set to 0
- iterate over string starting from 0
  -- iterate over string starting from outer current index + 1
    -- create `substring` and set to string from outer index to inner index
    -- convert `substring` to number
    -- if `substring` is divisible by 2
      --- increment `count`
- return `count`

14
1432
4
432
32
2
*/

function evenSubstrings(str) {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    for (let k = i + 1; k <= str.length; k++) {
      if (Number(str.slice(i, k)) % 2 === 0) count += 1;
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
6min

Problem 16

Create a function that takes a non-empty string as an argument.
The string consists entirely of lowercase alphabetic characters.
The function should return the length of the longest vowel substring.
The vowels of interest are "a", "e", "i", "o", and "u".

In: string (characters)
Out: integer
Rules:
  - vowels: 'aeiou'

[D]
1. Go through characters and start counting when a vowel is found
2. Stop counting when vowels no longer follow the first
3. Save count
4. Repeat and return the biggest count

- create `count` and set to 0
- create `biggestCount` and set to 0
- iterate over characters
  -- if currect char is a vowel
    --- increment `count`
    --- if `count` is bigger than `biggestCount`
      ---- reassign `biggestCount` to `count`
  -- else
    --- reassign `count` to 0
- Return `biggestCount`
*/

function longestVowelSubstring(str) {
  let count = 0;
  let biggestCount = 0;

  for (let char of str) {
    if ('aeiou'.includes(char)) {
      count += 1;
      
      if (count > biggestCount) biggestCount = count; 
    } else count = 0;
  }

  return biggestCount;
}

// p(longestVowelSubstring('cwm') === 0);
// p(longestVowelSubstring('many') === 1);
// p(longestVowelSubstring('launchschoolstudents') === 2);
// p(longestVowelSubstring('eau') === 3);
// p(longestVowelSubstring('miaoued') === 5);
// p(longestVowelSubstring('sequoia') === 4);
// p(longestVowelSubstring('beauteous') === 3);







/*
10min

Problem 15

Create a function that takes a string argument and returns a hash in which the keys represent the lowercase letters in the string, and the values represent how often the corresponding letter occurs in the string.
In: string 
Out: hash (key: lowercase letter; prop: count)
Rules:
  - only count lowercase alphabetic characters

[D]
1. Find and count unique lowercase letters
2. Return the letters and their counts in a hash

- create `hash` obj
- iterate over source
  - if current char is lowercase alphabetic
    -- if the current char is not in `hash`
      --- create a new key with value of current char and set prop to 1
    -- else
      --- increment current char key in `hash` by 1
- return `hash`
*/

function countLetters(str) {
  let hash = {};

  for (let char of str) {
    if (char >= 'a' && char <= 'z') hash[char] = hash[char] + 1 || 1;
  }

  return hash;
}


// TEST CASES
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
Write a function that returns the count of combinations of three numbers
that have 2 odd numbers and 1 even. If there’s none return -1.
All numbers in the array will be integers greater than 0.

In: array (integers)
Out: integer
Rules:
  - output
    --- count of combos
    -- combo: 2 odd AND 1 even
  - default return: -1 (no combos)

[D]
1. Go through all numbers and build combos
2. Keep a tally of all the combos
3. Return the combo count

- create `count` and set to 0
- iterate over source and stop at source length - 3
  --- create `combo` obj
  -- iterate over source from outer index
    --- if current integer is odd AND combo has less than 2 odd
      ---- increment odd key
    --- else if the combo has less than 1 even 
      ---- increment even key
    --- if combo has 2 odd and 1 even
      ---- increment `count`
      ---- reassign `combo` keys to 0
      ---- reset inner index to 0
- If `count` is 0, return -1
- else return `count`


123
125
134
136
156
235
236
345
356
*/

// function countTriples(source) {
//   let count = 0;

//   for (let i = 0; i <= source.length - 3; i++) {
//     let combo = { odd: 0, even: 0 };

//     for (let k = i; k < source.length; k++) {
//       let currInt = source[k];
      
//       if (currInt % 2 === 1 && combo.odd < 2) combo.odd += 1;
//       else if (combo.even < 1) combo.even += 1;

//       if (combo.even === 1 && combo.odd === 2) {
//         count += 1;
//         console.log( { combo })
//         combo.even = 0;
//         combo.odd = 0;
//         console.log( { combo })
//       }
//     }

//   }

//   return count;
// }



/* 
Write a function that returns the count of combinations of three numbers
that have 2 odd numbers and 1 even. If there’s none return -1.
All numbers in the array will be integers greater than 0.

In: array (integers)
Out: integer
Rules:
  - combo: 2 odd and 1 even
  - default return: -1

[D]
1. Count how many even numbers
2. Count odd numbers and divide by 2 to get odd pairs
3. Multiply even with odd pairs to get total combo number

- create `oddNums`  set to source filtered for odd numbers
- create `evenNums` set to source filtered for even numbers
- if either of those are empty, return -1 as no combos can be made
- create `oddPairs` set to `oddNums` divided by 2
- return `oddPairs` multiplied by `evenNums`
*/

function countTriples(source) {
  let oddNums = source.filter(num => num % 2 === 1);
  let evenNums = source.filter(num => num % 2 === 0);

  if (oddNums.length < 1 || evenNums.length < 1) return -1;

  let oddPairs = (oddNums.length * (oddNums.length - 1)) / 2;

  return oddPairs * evenNums.length;
}


// console.log(countTriples([1, 2, 3, 4])); // Expected output: 2
// console.log(countTriples([2, 4, 6, 8])); // Expected output: -1
// console.log(countTriples([1, 3, 5, 7])); // Expected output: -1
// console.log(countTriples([1, 2, 3, 4, 5, 6])); // Expected output: 9





/*
Write a function that takes a sentence string as an argument and returns that string with every occurrence of a "number word" — 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine' — converted to its corresponding digit character.

Example: wordToDigit('Please call me at five five five one two three four. Thanks.');
// "Please call me at 5 5 5 1 2 3 4. Thanks."
*/

function wordToDigit(str) {
  let numsObj = { 'zero': 0, 'one': 1, 'two': 2, 'three': 3, 'four': 4, 'five': 5, 'six': 6, 'seven': 7, 'eight': 8, 'nine': 9}
  
  return str.split(' ').map(word => {
    let cleanWord = word.split("").filter(char => char >= 'a' && char <= 'z').join('');
    
    if (cleanWord in numsObj) return word.replace(cleanWord, numsObj[cleanWord])
    else return word;
  }).join(" ")

}

// console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));





/*
29min

Problem 14

Create a function that takes a string argument and returns the character that occurs most often in the string. If there are multiple characters with the same greatest frequency, return the one that appears first in the string. When counting characters, consider uppercase and lowercase versions to be the same.

In: string 
Out: string (1 character)
Rules:
  - output:
    -- character occuring the most
    -- case insensitive
    -- lowercase version returned
    -- if equal frequencies, return the lowest indexed character
    -- only count alphabetic characters

[D]
1. Go over characters
2. Keep track of the count of each character
3. Return first character with highest count (most common char)

- create `countsObj` 
- iterate over source
  -- if lowercased current char exists as a key in `countsObj`
    --- increment the key's value
  -- else
    --- add the current char as a new key in `countsObj`
- create `highestCount` and set to 0
- create `char`
  - iterate over `countssObj`
  -- if current character has a count higher than `highestCount`
    --- reassign `highestCount` to current characters count
    --- reassign `char` to current character
- Return `char`
*/

function mostCommonChar(str) {
  let countsObj = {};

  for (char of str) {
    char = char.toLowerCase();
    
    if (char >= 'a' && char <= 'z') {
      if (char in countsObj) countsObj[char] = countsObj[char] + 1;
      else countsObj[char] = 1;
    }
  }

  let highestChar = Object.keys(countsObj)[0];

  for (let char in countsObj) {
    if (countsObj[char] > countsObj[highestChar]) {
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
22min

Problem 13

Create a function that takes an array of integers as an argument and returns an array of two numbers that are closest together in value. If there are multiple pairs that are equally close, return the pair that occurs first in the array.

In: array (integers)
Out: array (2 integers; original order)
Rules:
  - output:
    -- 2 integers closest in value
    -- respect original order
    -- be the pair that occurs first

-----------

D:
12, 22, 7, 17

22, 12
10

12, 7
5

12, 17
5

22, 7
15

22, 17
5

17, 7
10

A:
1. Iterate over the numbers for each number
2. Sort 2 at a time by size
3. Keep track of their difference and their original order
4. Return the 2 that have the smallest difference

- create `pair` and set to empty array
- create `smallestDiff` and set to 0
- iterate over the source, stop at source length - 1
  -- create `subarr` with current number and next number
  -- sort it (ascending)
  -- if smallestDiff is 0 OR first value minus the second value is smaller than `smallestDiff`
    --- reassign `smallestDiff` to current diff (first value minus the second value)
    --- reassign elements in `pair` to [current number, next number]
- Return `pair`
*/

function closestNumbers(source) {
  let pair = [];
  let smallestDiff = 0;

  for (let i = 0; i < source.length - 1; i++) {

    for (let k = i + 1; k < source.length; k++) {
      let subArr = [source[i], source[k]].sort((a, b) => b - a);
      let diff = subArr[0] - subArr[1];

      if (!smallestDiff || diff < smallestDiff) {
        smallestDiff = diff;
        pair[0] = source[i];
        pair[1] = source[k];
      }
    }
  }

  console.log(pair);
  return pair;
}

// const eq = (arr1, arr2) => JSON.stringify(arr1) === JSON.stringify(arr2);
// p(eq(closestNumbers([5, 25, 15, 11, 20]), [15, 11]));
// p(eq(closestNumbers([19, 25, 32, 4, 27, 16]), [25, 27]));
// p(eq(closestNumbers([12, 22, 7, 17]), [12, 7]));






/*
15min

Problem 12

Create a function that takes a string argument and returns a copy of the string with
every second character in every third word converted to uppercase.
Other characters should remain the same.

In: string
Out: string
Rules:
  - uppercase conversion: 
    -- every 3rd word
      --- every 2nd character

----------------
A:
1. Find every 3rd word
2. In those words, find and uppercase every 2nd character
3. Return a string showing the changes

- iterate over string
  -- if the word is a 3rd word
    --- uppercase every 2nd character (see uppercaseChars)
  -- else
    --- keep the unchanged word
- return the string showing the changes
  

function uppercaseChars(word)
- iterate over the word
  -- if the current character is a 2nd character 
    --- uppercase it
- return the word showing the changes
*/

function toWeirdCase(str) {
 return str.split(' ').map((word, i) => (i > 0 && (i + 1) % 3 === 0) ? uppercaseChars(word) : word).join(' ');
}

function uppercaseChars(word) {
  return [...word].map((char, i) => (i + 1) % 2 === 0 ? char.toUpperCase() : char).join('');
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
24min

Problem 11

Given a string of lowercase alphabetic characters,
count all possible substrings (not necessarily distinct) that have exactly "k" distinct characters.
Your Task:
You don't need to read input or print anything.
Your task is to complete the function substrCount() which takes
the string "S" and an integer "K" as inputs and returns the number of substrings having exactly "K" distinct characters.

In: string (alphabetic); integer ("K")
Out: integer (count)
Rules:
  - "k": number of distinct characters
  - count: substrings with "k" number of distinct characters

----------
A:
1. Find all substrings
2. Filter for the ones that have "k" unique characters
3. Return the count of this

- create `substrings` and set to `createSubstrings` value
- create `count` variable and set to 0
- iterate over `substrings`
  - create `currObj` object
  -- iterate over current str
    -- if the current character is in `currObj` 
      --- increment it's value
    -- else
      --- add current character as new key and set value to 1
  - if `currObj`` has `k` unique characters (see kCharCheck)
    -- increment `count`


createSubstrings(string)
- create `substrings` array
- iterate over string for each character
  -- iterate over string
    --- create `susbtring` and set to string slice from outer index to inner index + 1
    --- append to `substrings`
- return `substrings`


kCharCheck(obj, k)
- Count the number of keys in obj
- if the number of keys is equal to "k"
  -- return true
- else
  -- return false
*/

// function substrCount(str, k) {
//   let substrings = createSubstrings(str);
//   let count = 0;

//   substrings.forEach(substring => {
//     let uniqueChars = [];

//     for (let char of substring) {
//       if (!uniqueChars.includes(char)) uniqueChars.push(char);
//     }

//     if (uniqueChars.length === k) count += 1;
//   })

//   return count;
// }

// function createSubstrings(str) {
//   let substrings = [];

//   for (let i = 0; i < str.length; i++) {
//     for (let k = i + 1; k <= str.length; k++) {
//       substrings.push(str.slice(i, k));
//     }
//   }

//   return substrings;
// }

// console.log(substrCount("aba", 2)); // 3
// console.log(substrCount("abaaca", 1)); // 7






/*
16min

Problem 10

Given an array, return an array of all the elements which are leaders.
A Leader is an element that is greater than all of the elements on its right side in the array.

In: array (integers)
Out: array (integers i.e. leaders)
Rules:
  - leader: integer greater than ALL integers to it's right
  - always include last element in array
  - default return: empty array

-------------
A:
1. For each number, determine whether all the numbers after it are smaller
2. If so, keep this number in an array
3. When done for all the numebers, return that array

- create `leaders` array
- iterate over source
  -- create `subarr` from current index + 1 to end of source
  -- if every number in `subarr` is smaller than current number
    --- add current number to `leaders` array
- return `leaders` array
*/

function getLeaders(arr) {
  let leaders = [];

  for (let i = 0; i < arr.length;  i++) {
    let subarr = arr.slice(i + 1);
    let isLeader = subarr.every(int => int < arr[i])
  
    if (isLeader) leaders.push(arr[i]);
  }

  return leaders;

}

// console.log(getLeaders([10,22,12,3,0,6])) // [22, 12, 6]
// console.log(getLeaders([4, 7, 1, 0])) // [7, 1, 0]
// console.log(getLeaders([1])) // [1]
// console.log(getLeaders([])) // []





/*
15min

Problem 1

Write a function that takes a string as an argument and returns an array that contains every
word from the string, with each word followed by a space and the word's length.
If the argument is an empty string or if no argument is passed, the function should return an empty array.
You may assume that every pair of words in the string will be separated by a single space.

In: string (words);
Out: array (word; word length)
Rules:
  - one space separates each word (i.e. word can contain non-space characters)
  - empty array or no argument: return empty array
-----------
A:
1. Count the characters in each word
2. Return those words with their character counts

- create `words` array
- iterate over `words`
  -- count characters in word
  -- return word and the character count
- return `words` array
*/

function wordLengths(str) {
  if (str === '' || str === undefined) return [];
  return str.split(' ').map(word => `${word} ${word.length}`);
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
17min

p42

You are given an array of student objects, where each student object contains:
* An integer id (representing the student’s ID).
* An array grades of integers (representing the student’s grades).
You need to write a function/method that finds the nth largest grade across
all students and returns the id of the student who received that grade.
If there are multiple students with the same grade, return the student with the lowest id.

In: object (students); integer ('nth' largest grade)
Out:  integer (student id)
Rules:
  - if multiple students with same grade, return the lowest id

----------
D:
Array for all the grades

A:
1. Get all the grades
2. Find the "nth" grade
3. Find the lowest id student with "nth" grade
4. Return that student's id

- create `grades` array (see helper createGrades)
- create `nth` grade
- create `id` and set to 0
- iterate over students array
  -- if the current student contains `nth` grade AND (`id` is 0 OR current student id is smaller than `id`)
    --- reset `id` to current student id

function createGrades(students)
- create `grades` array
- iterate over the students
  -- add the values from the current grades key to `grades`
- sort `grades`
- return `grades`
*/

function createGrades(studentsArr) {
  let grades = [];

  for (let student of studentsArr) {
    grades.push(...student.grades);
  }

  return grades.sort((a, b) => b - a);
}


function nthLargestGrade(studentsArr, nthGrade) {
  let grades = createGrades(studentsArr);
  let nth = grades[nthGrade - 1];
  
  let id = null;

  for (let student of studentsArr) {
    if (student.grades.includes(nth) && (!id || student.id < id)) id = student.id
  }

  return id;
}




// Test Cases
const students = [
  { id: 2, grades: [95, 75, 88] },
  { id: 1, grades: [95, 85, 78] },
  { id: 3, grades: [95, 70, 85] }
];

// console.log(nthLargestGrade(students, 3)); // Output: 1
// console.log(nthLargestGrade(students, 1)); // Output: 1
// console.log(nthLargestGrade(students, 4)); // Output: 2
// console.log(nthLargestGrade(students, 5)); // Output: 1
// console.log(nthLargestGrade(students, 10)); // Output: null






/*
30min

p41
Your job is to write a function which increments a string to create a new string.

If the string already ends with a number, the number should be incremented by 1.
If the string does not end with a number, the number 1 should be appended to the new string.

foobar999
999raboof

999
raboof

1000
foobar

foobar1000

foo

oof

0
foo

1 
foo

foo1

In: string (alphaneumeric)
Out: string (alphanumeric)
Rules:
  - ending number: increment it
  - no ending nummber: add a 1

-------

1. Separate ending number from string
2. Increment number or add a number
3. Join the string and the number
4. Return that

- create `reversedNum` 
- create `reversedStr` 
- create `reversedSource` and set to reversed string

- iterate over string
  -- if char is a number
    --- add to str
  -- else 
    --- create `substring` and set to string from current index to the end
    --- reset `str` to `substring`

- if `reversedNum` length is 0 (empty)
  --- reset `reversedNum` to 1
- else 
  --- increment `reversedNum` (see incrementStrNum)

- join `reversedNum` and `reversedStr`
- return that reversed to original order

function incrementStrNum(reversedNumStr)
- create `reversedNum` and set to `reversedNumStr`
- reverse `reversedNum` to original order (see incrementStrNum)
- convert to a num and increment it
- change back to a string
- reverse back and return `reversedNum`
*/


// SOLUTION USING REVERSE 
// function incrementStrNum(reversedNumArr) {
//   let reversedNum = [...reversedNumArr];
//   return String(Number(reversedNum.reverse().join('')) + 1).split('').reverse();
// }


// function incrementString(str) {
//   let reversedNum = [];
//   let reversedStr = [];
//   let reversedSource  = [...str].reverse();

//   for (let i = 0; i < reversedSource.length; i++) {
//     if (reversedSource[i] >= '0' && reversedSource[i] <= '9') reversedNum.push(reversedSource[i]);
//     else {
//       let substring = reversedSource.slice(i);
//       reversedStr = substring;
//       break;
//     }
//   }

//   if (reversedNum.length === 0) reversedNum[0] = 1;
//   else reversedNum = incrementStrNum(reversedNum);

//   return reversedNum.concat(reversedStr).reverse().join('');
  
  
// }

// SOLUTION WITHOUT REVERSE
function incrementString(source) {
  let num = '';
  let str = '';

  for (let i = source.length - 1; i >= 0; i--) {
    if (source[i] >= '0' && source[i] <= '9') num = source[i] + num;
    else {
      str = source.slice(0, i + 1);
      break;
    }
  }
  
  if (num.length === 0) num = 1;
  else num = Number(num) + 1;
  
  return str + num;
}


// console.log(incrementString("foobar0")); // "foobar1"
// console.log(incrementString("foobar999")); // "foobar1000"
// console.log(incrementString("foo")); // "foo1"
// console.log(incrementString("foobar1")); // "foobar2"
// console.log(incrementString("1")); // "2"
// console.log(incrementString("9")); // "10"
// console.log(incrementString("fo99obar99")); // "fo99obar100"








/*  
Subarray Sum:
Write a function that takes an array of numbers and a target sum. The function should return an array containing two numbers from the input array that add up to the target sum. If no such pair exists, return an empty array

In: array (source); integer (target)
Out: array (integers)
Rules:
  - target int: two numbers added together
  - default return: empty array (no pair)

------

3, 3, 2, 4
7



0

0 1
3 3
6

0 2
3 2
5

0 3
3 4 
7



-> [3, 4]

A:
1. Compare every number with every other number in the array 
2. Find the two numbers that equates the target


- create `pairs` array and set to empty array
- iterate for each number
  -- iterate over the numbers starting at the outer index
    --- if number at outer index + number at the inner index + 1 is equal to target
      ---- reassign `pairs` to new array [outer num, inner num]
      ---- return `pairs`
- return `pairs`
*/

function findPairWithSum(source, target) {
  for (let i = 0; i < source.length - 1; i++) {
    for (let k = i; k < source.length - 1; k++) {
      if (source[i] + source[k + 1] === target) {
        return [source[i], source[k + 1]];
      }
    }
  }

  return [];
}



// console.log(findPairWithSum([2, 7, 11, 15], 9)) // [2, 7]
// console.log(findPairWithSum([2, 7, 11, 15], 3)) // []
// console.log(findPairWithSum([-1, -2, -3, -4, -5], -7)) // [-2, -5];
// console.log(findPairWithSum([3, 3, 2, 4], 6)) // [3, 3];






/*
Implement a function, capitalize, that capitalizes all words in a sentence.
However, only capitalize if the word is followed by a word starting with a vowel.



hello apple world -> Hello apple world

In: string (lowercased words)
Out: string (mixed case words)
Rules:
  - capitalize: when next word starts with a vowel
  - vowel: aeiou

----------
D:
Array to store words

A:
1. Go through the words, capitalize the necessary words
2. Return string containing all the words

- create `words` array
- iterate over words, stop at 2nd last word 
  -- if next word (current iteration + 1) starts with a vowel
    --- append capitalized current word to `words` (see capitalize)
  -- else
    --- append current word to `words`
- join elements in `words` into a string
- return joined elements string

capitalize(word)
---------
- create `firstLetter` and set to first character in `word`
- create `rest` and set to every other character in `word`
- return `firstLetter` + `rest`
*/

function capitalizeWord(word) {
  let firstLetter = word[0].toUpperCase();
  let rest = word.slice(1);

  return firstLetter + rest;
}

function capitalize(str) {
  let words = str.split(" ");
  // let changedWords = [];

  for (let i = 0; i < words.length - 1; i++) {
    // if (i === words.length - 1) {
    //   changedWords.push(words[i]);
    //   break;
    // }
    
    if ('aeiou'.includes(words[i + 1][0])) {
      words[i] = capitalizeWord(words[i]);
    };
  }

  // words.push(words[words.length - 1]);

  return words.join(" ");
}


// Test cases
// console.log(capitalize("hello apple world")); // "Hello apple world"
// console.log(capitalize("this is an umbrella")); // "This Is An umbrella"
// console.log(capitalize("every vowel starts an echo")); // "every vowel Starts An echo"
// console.log(capitalize("under the oak tree")); // "under The oak tree"
// console.log(capitalize("a quick brown fox")); // "a quick brown fox"









/*
Unique String Characters
Given two strings, return the characters that are not common in the two strings.

Ex:
xyab 
xzca
-> ybzc

abc
abba
-> c

In: strings (2 sources)
Out: string
Rules:
  - output
    -- not common
    -- unique characters
    -- default return: ''

-------

A:
1. Find characters not included in both strings

- create `uniques`
- iterate over each word
  -- if the other word does not include the current character
    --- add the current character to `uniques`
- return `uniques`
*/

function uniqueStringCharacters(str1, str2) {
  let uniques = '';

  for (let char of str1) {
    if (!str2.includes(char)) uniques += char
  }

  for (let char of str2) {
    if (!str1.includes(char)) uniques += char
  }
  

  return uniques;
}

// JavaScript test cases
// console.log(uniqueStringCharacters("xyab","xzca") === "ybzc"); // true
// console.log(uniqueStringCharacters("a","z") === "az"); // true
// console.log(uniqueStringCharacters("abcd","de") === "abce"); // true
// console.log(uniqueStringCharacters("abc","abba") === "c"); // true
// console.log(uniqueStringCharacters("xyz","zxy") === ""); // true





/*
35min

Nested Array Flattening with Depth:
Write a function that takes a nested array and an optional depth parameter. The function should flatten the array up to the specified depth. If no depth is provided, it should fully flatten the array.


[1, [2, [3, [4]], 5]]
-> [1, 2, 3, 4, 5]

[]
[1]

[2, [3, [4]], 5]
[3, [4], 5]
[4]


depth: 2
[1, [2, [3, [4]], 5]]
-> [1, 2, 3, [4], 5]



In: array (arrays/integers); integer (depth; optional)
Out: array (flattened)
Rules:
  - depth: 
    -- how many levels to flatten
    -- optional: flatten completely if not provided

-----------
A: 
1. Flatten the array "depth" amount of times or until it's completely flat

- create `count` variable
- if `depth` is not 0
  -- iterate over array
    --- if current element is an array
      ---- return the result of flattenArray with current element passed as 1st arg and depth - 1 as 2nd arg
    --- else 
      ---- return current element
  -- return a flattened array
- return element (argument)
*/

function flattenArray(arr, depth = Infinity) {
  if (depth > 0) {
    arr = arr.map(el => {
      if (Array.isArray(el)) {
        return flattenArray(el, depth - 1);
      } else return el;
    })

    return arr.flat();
  }
  
  return arr;
}


// console.log(flattenArray([1, [2, [3, [4]], 5]]));
// // [1, 2, 3, 4, 5]

// console.log(flattenArray([1, [2, [3, [4]], 5]], 1));
// // // [1, 2, [3, [4]], 5]

// console.log(flattenArray([1, [2, [3, [4]], 5]], 2));
// // // [1, 2, 3, [4], 5]

// console.log(flattenArray([1, 2, 3, 4, 5]));
// // // [1, 2, 3, 4, 5]









/*
6min

Array Average
Write a function that takes one argument, an array of integers, and returns the average of all the integers in the array, rounded down to the integer component of the average. The array will never be empty, and the numbers will always be positive integers.

In: array (integers)
Out: integer
Rules:
  - average: sum of numbers / number count
  - numbers: positive
  - array: never empty

---------
A:
1. Find the sum of the integers
2. Find the integer count
3. Find the average (sum/count)

- create `sum`
- iterate over the arr
  -- add the current number to the running `sum`
- return `sum` divided by the arr.length rounded down to integer


1, 5, 87, 45, 8, 8
-> 25.6 -> 25

*/

function average(arr) {
  return Math.floor(arr.reduce((sum, curr) => sum + curr) / arr.length);
}

// console.log(average([1, 5, 87, 45, 8, 8]));       // 25
// console.log(average([9, 47, 23, 95, 16, 52]));    // 40











/*
8min

Problem Description:
Write a function that takes two arguments: an inventory item ID and a list of transactions. The function should return an array containing only the transactions for the specified inventory item.
Here's the function signature and test cases:

In: integer (ID); array (nested objects)
Out: array (nested objects)
Rules:
  - matched items: ID-dependent

--------
D:
Array to hold objects

A:
1. Find the objects matching the given ID

- iterate over the array
  -- if the current object's ID matches the ID argument
    --- keep it
  -- else
    --- filter it out
- return the transactions kept

- create `filteredIDs` array
- iterate over the array argument
  --- if the current object's ID matches the ID argument
    ---- append it to `fitleredIDs` array
- return `filteredIDs` array
*/

function transactionsFor(id, arr) {
  let filteredIDs = [];

  for (let obj of arr) {
    if (obj.id === id) filteredIDs.push(obj);
  }

  return filteredIDs;
}

// function transactionsFor(id, arr) {
//   return arr.filter(transaction => transaction.id === id);
// }

// Test cases
let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                     { id: 105, movement: 'in',  quantity: 10 },
                     { id: 102, movement: 'out', quantity: 17 },
                     { id: 101, movement: 'in',  quantity: 12 },
                     { id: 103, movement: 'out', quantity: 20 },
                     { id: 102, movement: 'out', quantity: 15 },
                     { id: 105, movement: 'in',  quantity: 25 },
                     { id: 101, movement: 'out', quantity: 18 },
                     { id: 102, movement: 'in',  quantity: 22 },
                     { id: 103, movement: 'out', quantity: 15 }, ];

// console.log(transactionsFor(101, transactions));
// returns
// [ { id: 101, movement: "in",  quantity:  5 },
//   { id: 101, movement: "in",  quantity: 12 },
//   { id: 101, movement: "out", quantity: 18 }, ]








/*
28min

COUNT NUMBER OF SUBSTRINGS 
Given a string of lowercase alphabets,
count all possible substrings (not necessarily distinct) that have exactly k distinct characters.

Examples:
length: 3
k: 2
index inclusive: 1

"aba"
2
-> 3 

0
1
a
0
2
ab
0
3
aba
b
ba


abaaca
1
-> 7

a
ab
aba
abaa
abaac
abaaca
b
ba
baa
baac
baaca
a
aa
aac
aaca
a
ac
aca
c
ca
a

In: string (source), integer ('k')
Out: integer 
Rules:
  - characters: lowercase
  - output
    -- count of substrings with 'k' unique characters
    -- multiple substrings with identical characters each count
---------
D:
Array to hold all substrings

A:
1. Find all substrings
2. Keep the substrings with `k` number of unique characters

- create `substrings` array and set to createSubstrings (helper)
- iterate over `substrings`
  -- if current string has `k` unqiue characters
    --- keep it
  -- else 
    --- remove the current string
- return the length of `substrings` 

-------------------------------------
function createSubstrings(string, k)
- create `substrings` array 
- iterate over string until string length minus 'k' (inclusive) (see helper: createSubstrings)
  -- iterate over the string for each current character, start at outer index + 1
    --- create `substring` and set to characters sliced from outer index to inner index
    --- append `substrings` to `substrings`
- return `substrings`
*/

function substrCount(str, k) {
  let substrings = createSubstrings(str, k);

  return substrings.filter(substring => {
    let uniqueChars = [];

    for (let char of substring) {
      if (!uniqueChars.includes(char)) uniqueChars.push(char);
    }

    return uniqueChars.length === k;
  }).length
}

function createSubstrings(string, k) {
  let substrings = [];

  for (let i = 0; i <= string.length - k; i++) {
    for (let k = i + 1; k <= string.length; k++) {
      substrings.push(string.slice(i, k));
    }
  }

  return substrings;
}

// console.log(substrCount("aba", 2)); // 3
// console.log(substrCount("abaaca", 1)); // 7







/*
24min

Given a sentence, write a function that finds the starting index of
the rightmost occurrence of any consecutive vowel sequence in the sentence
and the word it belongs to.
The function should be case-insensitive and should only consider vowel
sequences within individual words (not spanning multiple words).

If a consecutive vowel sequence is found, return an array where the first element is
the starting index of the sequence and the second element is the word containing that sequence.

If no consecutive vowels are found, return an empty array.

Examples:
She sells sea shells on the sea shore
sea
e -> ea (vowel sequence)

I like eating aaapples and oranGEs
aaapples
a (2nd) -> aa (vowel sequence)

In: string
Out: array (integer; string)
Rules:
  - vowel sequence: most right; vowels only; at least 2
  - default return: []
  - case insensitive
--------------------
A:
1. Starting from the back, find 2 vowels in a row
2. Store the index of the 2nd vowel found
3. Store the word containg 2 vowels

- create `startIndex`
- create `word` 
- iterate from the back
  -- if current char and the next char are vowels
    --- assign `startIndex` to index of next char
    --- reassign `word` to the result of findWord with next char and current char passed as a string (helper)
    --- return [`startIndex`, `word`]

function findWord(string, chars)
-------------------
- iterate over string from the back
  -- if a word includes chars
    --- return the word
*/

function rightmostConsecutiveVowel(str) {
  let startIndex;
  let word;
  let vowels = 'aeiouAEIOU';

  for (let i = str.length - 1; i >= 0; i--) {
    if (vowels.includes(str[i]) && vowels.includes(str[i - 1])) {
      startIndex = i - 1;
      word = findWord(str, `${str[i - 1]}${str[i]}`);
      return [startIndex, word];
    }
  }

  return [];

}

function findWord(str, chars) {
  let words = str.split(" ").reverse();

  for (let word of words) {
    if (word.includes(chars)) return word;
  }
}

// console.log(rightmostConsecutiveVowel("The quick brown fox jumps over the laaazy dog")); // Output: [37, "laaazy"]
// console.log(rightmostConsecutiveVowel("She sells sea shells on the sea shore")); // Output: [29, "sea"]
// console.log(rightmostConsecutiveVowel("I like eating aaapples and oranGEs")); // Output: [15, "aaapples"]
// console.log(rightmostConsecutiveVowel("This sentence has no consecutive vowels")); // Output: []
// console.log(rightmostConsecutiveVowel("Queueing is fun but cooool")); // Output: [23, "cooool"]





/* 
25min

We're receiving a set of messages in code. The messages are sets of text strings, like:
"alakwnwenvocxzZjsf"
Write a method to decode these strings into numbers. The decoded number should be the number of lowercase
characters between the first two uppercase characters. If there aren't two uppercase characters,
the number should be 0.

Examples:
'ZoL', 'heLlo', 'XX
1, 0, 0

'foUrsCoreAnd', 'seven', ''
2, 0, 0

'lucYintheskyWith', 'dIaMonDs'
8, 1

In: array (strings)
Out: array
Rules:
  - output
    -- count of lowercased letters in between first 2 uppercase characters
---------------
D:
Array for the counts

A:
1. Find the first uppercased leter
2. Start counting the following letters 
3. Stop counting when another uppercase letter is found

- iterate over array
  -- count the lowercase letters (helper)
- return all the counts

function countLowers(word)
-------------------------
- create `count` and set to 0
- create `upperCount`
- iterate over the word
  -- if `upperCount` is less than 2
    --- if the curr char is uppercased
      ---- increment `upperCount`
    --- increment `count`
- return `count`
*/

function decode(arr) {
  return arr.map(word => countLowers(word))
}

function countLowers(word) {
  let count = 0;
  let upperCount = 0;

  for (let char of word) {
    if (upperCount < 2) {
      if (char.toUpperCase() === char) upperCount += 1;
      else if (upperCount === 1) count += 1;
    }
  }

  return upperCount === 2 ? count : 0;
}

// console.log(decode(['ZoL', 'heLlo', 'XX'])) // [1, 0, 0]);
// console.log(decode(['foUrsCoreAnd', 'seven', ''])) // [2, 0, 0]);
// console.log(decode(['lucYintheskyWith', 'dIaMonDs'])) // [8, 1]);
// console.log(decode([]) ) // [];





/*
14min

Given a string `s`, return the length of the longest substring between two equal characters, excluding the two characters. If there is no such substring return -1.

Example:
acbsewba
ac
acb
acbs
...
cb
cbs
cbse

6

In: string
Out: integer
Rules:
  - longest substring: between 2 identical characters
  - default return: -1
---------------------
D:
Strings

A: 
1. Find substrings between identical character
2. Find the longest one and return that

- create `longest` and set to -1
- iterate over string
  -- iterate over string, starting from outer index + 1
    --- if char at outer index position and char at inner index position are the same
      ---- create `substring` from outer index position to inner index position
      ---- create `count` and set to `substring` length - 2
      ---- if `count` > longest
        ----- reassign `longest` to `count`
- return `count`
*/

function maxLengthBetweenEqualCharacters(str) {
  let longest = -1;

  for (let i = 0; i < str.length; i++) {
    for (let k = i + 1; k < str.length; k++) {
      if (str[i] === str[k]) {
      let currLength = str.slice(i, k + 1).length - 2;

      if (currLength > longest) longest = currLength;
      }
    }
  }

  return longest;
}




console.log(maxLengthBetweenEqualCharacters("acbsewb") === 3);
console.log(maxLengthBetweenEqualCharacters("acbsewba") === 6);
console.log(maxLengthBetweenEqualCharacters("aa") === 0);
console.log(maxLengthBetweenEqualCharacters("cbzxy") === -1);