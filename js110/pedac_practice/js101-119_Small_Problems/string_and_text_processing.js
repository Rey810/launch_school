/* eslint-disable max-lines-per-function */
/* 
UPPERCASE CHECK
*/

// console.log(isUppercase('t'));               // false
// console.log(isUppercase('T'));               // true
// console.log(isUppercase('Four Score'));      // false
// console.log(isUppercase('FOUR SCORE'));      // true
// console.log(isUppercase('4SCORE!'));         // true
// console.log(isUppercase(''));                // true

// function isUppercase(string) {
//   return string.split('').every(char => char === char.toUpperCase());
// }

function isUppercase(string) {
  return string.toUpperCase() === string;
}





/*
DELETE VOWELS

- input
-> array containing strings
- output
-> array containing strings with vowels removed

- rules
-> return strings must have vowels removed
-> if string only consisted of vowels then it must be an empty string when removed

----
ALgorithm
- For each string, remove vowels

Main function
removeVowels(array)
1. create "vowels" variable
2. Iterate over array, for each word:
  - split into array
  - remove vowels ()
  - join into string
3. Return array
*/

function removeVowels(array) {
  const VOWELS = ['a', 'e', 'i', 'o', 'u'];
  return array.map(str => str.split('').filter(char => !VOWELS.includes(char.toLowerCase())).join(''));
}

// console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
// console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
// console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]




/*
LETTERCASE COUNTER

- input
-> string
- output
-> object (3 key value pairs)

- rules
-> key value pairs in object
  --> # of lowercase characters
  --> # of uppercase characters
  --> # of neither
-> every character must fit one of these
-> empty strings has a neither count of 0

-----
Algorithm
- Count lowercase characters
- Count uppercase characters
- Count characters that are neither

Main function:
letterCaseCount(string) 
1. create "counts" object with 3 key-value pairs
2. split string into characters
3. iterate over characters
  - is character equal to it's uppercase form?
    - increment uppercase count by 1
  - is character equal to it's lowercase form?
    - increment lowercase count by 1
  - else increment neither count by 1
4. Return "counts"
*/

function letterCaseCount(string) {
  const counts = { lowercase: 0, uppercase: 0, neither: 0 };

  string.split('').forEach(char => {
    if (char >= 'A' && char <= 'Z') {
      counts.uppercase += 1;
    } else if (char >= 'a' && char <= 'z') {
      counts.lowercase += 1;
    } else {
      counts.neither += 1;
    }
  });

  return counts;
}

// console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
// console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
// console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
// console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }




/*
CAPITALIZE WORDS

- input
-> string
- output
-> string (first letter of each word is capitalized)

- rules
-> each word should have it's fisrt word capitalized
-> any non-whitespace characters is considered a word

----
Algorithm:
- Capitalize every word in a string

Main Function
wordCap(string)
1. Split words into array
2. Iterate over array
  - capitalize word
3. Join array
4. Return as string

  Helper function
  capitalize(word)
  1. Slice first letter and uppercase it
  2. Join uppercased letter with slice of the rest of the word (excl. first letter)
  3. Return result
*/

function wordCap(string) {
  return string.split(' ').map(capitalizeWord).join(' ');
}

function capitalizeWord(str) {
  return str.slice(0, 1).toUpperCase() + str.slice(1).toLowerCase();
}

// console.log(wordCap('four score and seven'));       // "Four Score And Seven"
// console.log(wordCap('the javaScript language'));    // "The Javascript Language"
// console.log(wordCap('this is a "quoted" word'));    // 'This Is A "quoted" Word'




/*
SWAP CASE
*/

function swapCase(string) {
  return string.split('').map(char => char.toUpperCase() === char ? char.toLowerCase() : char.toUpperCase()).join('');
}

// console.log(swapCase('CamelCase'));              // "cAMELcASE"
// console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"





/* STAGGERED CAPS (PART ONE)

- input
-> string
- output
-> string (every second character capitalised, if it's alphabetic)

- rules
-> capitalise first character in string
-> every second character after that is capitalised (if it's alphabetic)
-> every other character must be lowercased
-> don't change non-alphabetic characters 
-> capitalise/lowercase depending on position of character in string

----
Algorithm
- Determine index of character
  -- if even, change to lowercase
  -- if odd, change to uppercase

Main function
staggeredCase(string)
1. Split "string" into array
2. Loop over array (transformation method)
  - if character is not alphabetic, continue to next iteration
  - if character is odd, change to lowercase
  - if character is even, change to uppercase
3. Join array elements
4. Return as string
*/

// function staggeredCase(string) {
//   return string.split("").map((el, index) => {
//     if (index % 2 === 0) {
//       return el.toUpperCase();
//     } else {
//       return el.toLowerCase();
//     }
//   }).join('')
// }

// console.log(staggeredCase('I Love Launch School!'));        // "I LoVe lAuNcH ScHoOl!"
// console.log(staggeredCase('ALL_CAPS'));                     // "AlL_CaPs"
// console.log(staggeredCase('ignore 77 the 4444 numbers'));   // "IgNoRe 77 ThE 4444 nUmBeRs"





/*
STAGGERED CAPS (PART 2)
*/

function staggeredCase(string) {
  let needUpper = true;

  return string.split("").map(el => {
    el = el.toLowerCase();

    if (el >= 'a' && el <= 'z') {
      if (needUpper) {
        needUpper = false;
        return el.toUpperCase();
      } else {
        needUpper = true;
        return el.toLowerCase();
      }
    } else {
      return el;
    }
  }).join('');
}

// console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
// console.log(staggeredCase("ALL CAPS") === "AlL cApS");
// console.log(
//   staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
// );




/*
HOW LONG ARE YOU?
*/

function wordLengths(str) {
  return str ? str.split(" ").map(word => `${word} ${word.length}`) : [];
}

// wordLengths('cow sheep chicken');
// // ["cow 3", "sheep 5", "chicken 7"]

// wordLengths('baseball hot dogs and apple pie');
// // ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

// wordLengths("It ain't easy, is it?");
// // ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

// wordLengths('Supercalifragilisticexpialidocious');
// // ["Supercalifragilisticexpialidocious 34"]

// wordLengths('');      // []
// wordLengths();        // []




/*
SEARCH WORD (PART 1)

- input
-> 2 strings (word, text of many words)
- output
-> number (# of times word appears in text of many words)

- rules
-> search should be case-insensitive

----
Algorithm
- Change both strings to lowercase
- Find occurrences of first string in second string

Main function
searchWord(targetWord, stringOfWords)
1. create 'count' variable and set to 0
2. split stringOfWords on " " into array
3. Iterate over each word in array
  - loop over each letter of targetWord arg
    - find index of first letter of targetWord in current word
      - if found, compare targetWord with current word at each index position
4. Return count
*/

function searchWord(word, stringOfWords) {
  let count = 0;
  let targetWord = word.toLowerCase();
  let string = stringOfWords.toLowerCase();

  string.split(" ").forEach(currentWord => {
    let firstIndex = currentWord.indexOf(targetWord[0]);
    let targetWordFound = false;
    let targetWordIndex = 0;

    if (firstIndex >= 0) {
      // iterates over every letter
      for (let idx = firstIndex; idx < (firstIndex + targetWord.length); idx++) {
        if (targetWord[targetWordIndex] !== currentWord[idx]) {
          targetWordIndex += 1;
          targetWordFound = false;
          continue;
        }

        targetWordIndex += 1;
        targetWordFound = true;
      }
    }

    if (targetWordFound) count += 1;
  });

  return count;
}

// const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';

// console.log(searchWord('sed', text));      // 3