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

function findAllGrades(studentObj) {
  const gradesFound = [];

  studentObj.forEach(student => {
    student.grades.forEach(grade => {
        gradesFound.push(grade)
    })
  })

  return gradesFound.sort((a, b) => b - a);
  
}

function nthLargestGrade(studentsObj, gradeRank) {
  const allGradesArray = findAllGrades(studentsObj);
  const nthLargestGrade = allGradesArray[gradeRank - 1];

  let studentIndex = null;

  studentsObj.forEach(student => {

    student.grades.forEach(grade => {
      if (grade === nthLargestGrade && student.id < studentIndex) {
        studentIndex = student.id
      } else if (grade === nthLargestGrade && !studentIndex) {
        studentIndex = student.id;
      }
    })

  })

  return studentIndex;

}

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

function nthLargestGrade(students, nth) {
  
  let sortedGrades = students.reduce((grades, currStudent) => {
    grades.push(...currStudent.grades);
    return grades
  }, []).sort((a, b) => b - a);

  let filteredGrades = [];

  sortedGrades.forEach(grade => {
    if (!filteredGrades.includes(grade)) filteredGrades.push(grade)
  });

  let nthGrade = filteredGrades[nth - 1];
  let lowestID = 0;

  for (let student of students) {
    if (student.grades.includes(nthGrade)) {
      if (!lowestID || student.id < lowestID) lowestID = student.id
    }
  }

  return lowestID || null;
}

// Test Cases
const students = [
  { id: 2, grades: [95, 75, 88] },
  { id: 1, grades: [95, 85, 78] },
  { id: 3, grades: [95, 70, 85] }
];

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








// We have a list having unique values from 1 to n, but unordered with an unknown amount of missing values.
// We have to output the missing numbers sorted by value.
// The number 1 should be in the input array, if it's not present in the input array,
// it should be included in the results. See the example below.

// [8, 10, 11, 7, 3, 15, 6, 14, 5, 12]  ---> [1, 2, 4, 9, 13]


/*
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
// function missNumsFinder(source) {
//   let sortedArr = [...source].sort((a, b) => a - b);
//   let maxValue = sortedArr[sortedArr.length - 1];
//   let integersObj = {};

//   for (let i = 1; i < maxValue; i++) {
//     integersObj[i] = 0;
//   }

//   sortedArr.forEach(int => {
//     if (integersObj[int] === 0) integersObj[int] += 1;
//   })

//   let missingValues = [];

//   for (let num in integersObj) {
//     if (integersObj[num] === 0) missingValues.push(Number(num));
//   }

//   return missingValues;
// }

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


