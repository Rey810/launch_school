/*
Simple Pig Latin

Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

In: string (words)
Out: string (pig-latin words)
Rules:
  - each word:
    -- move the first letter to the end
    -- add 'ay' to the end
  - leave punctuation marks untouched

[E]
- punctuation marks appear as separate words

[D]
1. Determine whether a word is alphabetic
2. Change the word so that the first letter comes last and then 'ay' is added
3. Return a string with all the words changed and the untouched punctuation marks

- Create a function
- Create pig latin array variable
- Iterate over the words
  - Check if it's a punctuation mark
  - Alter the word if it's not
- Return pig latin variable

----
Algorithm
CREATE `pigIt` function that takes a `str` string argument
CREATE `pigLatin` array and ASSIGN to an empty array
CONVERT `str` to `words` array

ITERATE over `words`
  IF first character of the word is not alphabetic
    APPEND current word to `pigLatin`
  ELSE
    CREATE `pigWord` and ASSIGN to substring (1-index to end) + first character + 'ay'
    APPEND `pigword` to `pigLatin`

RETURN `pigLatin` that has been joined into a string
*/

function pigIt(str) {
  let pigLatin = [];
  const words = str.split(" ");

  for (let word of words) {
    if (!(word.toLowerCase() >= 'a' && word.toLowerCase() <= 'z')) pigLatin.push(word);
    else {
      let pigWord = word.slice(1) + word[0] + 'ay';
      pigLatin.push(pigWord);
    }
  }

  return pigLatin.join(" ");
}

// console.log(pigIt('Pig latin is cool')); // igPay atinlay siay oolcay
// console.log(pigIt('Hello world !'));     // elloHay orldway !



/*
Moving Zeros To The End
Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

In: array (zeroes mixed in)
Out: array (zeroes at the end)
Rules:
  - Zeroes must be at the end of the array
  - Other elements must retain their original order

1. Find the zeroes
2. Move the zeroes to the end
3. Return the array with zeroes at the end

- Create `zeroes` array
- Iterate over array
  -- Add the zeroes to `zeroes` array
- Remove all zeroes from the array
- Add zeroes in `zeroes` back to array at the end
- Return array

----
Algorithm
CREATE `moveZeros` function that takes one 'arr' array argument
CREATE `zeroes` array and set to empty array

ITERATE over `arr`
  IF current value is 0
    APPEND current value to `zeroes`

FILTER `arr` and ASSIGN result to `filteredArr`
  IF current element is not a zero keep it

APPEND the elements in  `zeroes` to `filteredArr`
RETURN `filteredArr`
*/

function moveZeros(arr) {
  const zeroes = [];

  arr.forEach(el => {
    if (el === 0) zeroes.push(el)
  });

  const filteredArr = arr.filter(el => el !== 0);

  return filteredArr.concat(zeroes);
}

// console.log(moveZeros([false,1,0,1,2,0,1,3,"a"])) // returns[false,1,1,2,1,3,"a",0,0]




/*
Maximum subarray sum

The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.

In: array (integers)
Out: integer (max sum)
Rules:
  - max sum: sequential elements added together
  - Default return: 0

1. Determine the sum of every substring for every element
2. Return that sum

- Create a function
- Create `sum` variable and set to 0
- Create guard clause

- Iterate over the array
  -- Iterating over the array from the current number onwards
    --- Sum elements from the outer loop index up to inner index
    --- If the sum is greater than `sum`, reassign `sum`
- Return `sum`

-----
Algorithm
CREATE `maxSequence` function that takes `arr` array as an argument
CREATE `sum` variable and ASSIGN to 0
IF `arr` has a length of 0
  RETURN 0

ITERATE over `arr`, starting at 1st-element, ending at last
  ITERATE `arr` from outer current index up to the current index
    CREATE `currentArr` and ASSIGN to elements from outer current index up to current index
    CREATE `currentSum` and ASSIGN to 0
    SUM all the elements in `currentArr` (reduce) and ASSIGN to `currentSum`
    IF `currentSum` > `sum`
      - REASSIGN `sum` to `currentSum`

      RETURN `sum`
*/

function maxSequence(arr) {
  let sum = 0;
  if (arr.length === 0) return 0;

  for (let outerIdx = 0; outerIdx < arr.length; outerIdx++) {
    for (let innerIdx = outerIdx; innerIdx < arr.length; innerIdx++) {
      const currentSum = arr.slice(outerIdx, innerIdx + 1).reduce((acc, curr) => acc + curr);

      if (currentSum > sum) sum = currentSum;
    }
  }

  return sum;

}

// console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
// should be 6: [4, -1, 2, 1]



/*
A featured number (something unique to this exercise) is an odd number that is a multiple of 7, with all of its digits occurring exactly once each. For example, 49 is a featured number, but 98 is not (it is not odd), 97 is not (it is not a multiple of 7), and 133 is not (the digit 3 appears twice).

Write a function that takes an integer as an argument and returns the next featured number greater than the integer. Issue an error message if there is no next featured number.

NOTE: The largest possible featured number is 9876543201.

In: integer
Out: integer ('featured')
Rules:
  - featured: odd number & multiple of 7 & digits occur once
  - Default return: "There is no possible number that fulfills those requirements." 
    -> when no featured number is found

[D]
1. Start counting from given number
2. Continue until the featured number is found or none is found
3. Return featured number

- Iterate from given number
  -- check if number is a multiple of 7
    --- check if number is odd and digits are unique
      --- return number
    --- else increment current number by 7
- Return default value (string)

(helper)
- given an integer
- check uniqueness of each digit (obj: counting each digit)
- return true or false

CREATE `featured` function with `int` as arg
ITERATE from `int` + 1
  IF number is multiple of 7
    IF number is odd AND number has unique digits (helper: hasUniqueDigits)
      RETURN number
    ELSE increment iterator by 6
RETURN "There is no possible number that fulfills those requirements." 

(helper)
CREATE `hasUniqueDigits` that takes `digit`
CREATE `obj` and ASSIGN to empty object
ITERATE over `digit`
  IF current digit exists in `obj`
    INCREMENT it's value
  ELSE add it to `obj` and ASSIGN value of 1

get the values, and check if it includes a number > 1
  If it does return false
  Else return true
*/

function featured(int) {
  for (let currentNum = int + 1; currentNum <= 9876543201; currentNum++) {
    if (currentNum % 7 === 0 && currentNum % 2 === 1) {
      if (hasUniqueDigits) {
        return currentNum;
      } else currentNum += 13;
    }
  }

  return  "There is no possible number that fulfills those requirements.";
}

function hasUniqueDigits(digit) {
  let obj = {};

  String(digit).split('').forEach(num => {
    obj[num] = obj[num] + 1 || 1;
  });

  return Object.values(obj).filter(num => num > 1).length === 0;
}


console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9876543186));   // 9876543201
console.log(featured(9876543200));   // 9876543201
console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."