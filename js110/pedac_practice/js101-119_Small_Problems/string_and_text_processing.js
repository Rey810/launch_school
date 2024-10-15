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