/*
Multiples of 3 or 5

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

Additionally, if the number is negative, return 0.

Note: If the number is a multiple of both 3 and 5, only count it once.

[P]
In: integer 
Out: integer 
Rules:
  - returned value: sum of ALL multiples of 3 and 5 (< arg integer)
  - count muliple of 3 AND 5, once
  - Default return: 0 (when arg is <= 0)

[E]
- stop finding multiples LESS THAN arg integer

[D]
1. Find all the multiples of 3 OR 5
2. Sum the multiples
3. Return the sum

- Create a function 
- Create a sum variable
- Create a guard clause

- Iterate
  -- If a multiple is found 
    --- Add to sum

- Return sum

----
Algorithm
CREATE function `solution` that takes one `integer` argument

CREATE `sum` variable and assign to `0`
CREATE  guard clause: 
  IF `integer` is less than or equal to 0
    RETURN `sum`

ITERATE from 0 to less than `integer`
  IF current number is a multiple of 3 or 5 (helper function: isMultipleOf3Or5)
    INCREMENT `sum` by the current number

RETURN `sum`

--
HELPER FUNCTION (isMultipleOf3Or5)
CREATE function that takes an `integer` argument
IF `integer` is dividible by 3 OR divisible by 5
  Return true
ELSE 
  Return false
*/

function solution(integer) {
  let sum = 0;
  if (integer <= 0) return sum;

  for (let currNum = 0; currNum < integer; currNum++) {
    if (isMultipleOf3Or5(currNum)) sum += currNum;
  }

  return sum;
}

function isMultipleOf3Or5(integer) {
  return integer % 3 === 0 || integer % 5 === 0;
}


// console.log(solution(10) === 23); // true
// 3, 5, 6, 9 -> 23



/*
Your order, please
Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive number

In: string (words containg letters and one number)
Out: string (words rearranged according to their one number)
Rules:
  - Rearrange words based on the number it contains: ascending order
  - number: position word must have in the result (1-9)
  - Default return: ""
  - Numbers will be consecutive only (1, 3, 2, 5, 4 NOT 1, 5, 8, 3, 9)


[E]
- numbers can appear anywhere in the word
- a word contains only one number

[D]
1. Determine the number of each string
2. Rearrange words based on that number
3. Return the rearranged string

- Create array
- Convert string arg to an array and iterate over the array
  - Determine the number by iterating over the word to find a number
  - Add to the array based on the number
- Return the array joined back into a string

----
Algorithm
CREATE `order` function that takes `words` string argument
CREATE `ordered` array and set to an empty array
CONVERT `words` to an array and ASSIGN to `wordsArr` (split method)

ITERATE over `wordsArr`
  ITERATE over the current word
    IF current character is 1<= or <=9
      ADD current word to the `ordered` array at index position of the current character minus - 1

CONVERT `ordered` array to a string and RETURN the result
*/

function order(words) {
  const ordered = [];
  const wordsArr = words.split(" ");
  
  for (let i = 0; i < wordsArr.length; i++) {
    for (let letter of wordsArr[i]) {
      if (letter >= 1 && letter <= 9) {
        ordered[Number(letter) - 1] = wordsArr[i];
      }
    }
  }

  return ordered.join(" ");
}

// console.log(order("is2 Thi1s T4est 3a"));

// TEST CASES:
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""





/*
Create Phone Number
Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

*/

function createPhoneNumber(arr) {
  return `(${arr.slice(0, 3).join('')}) ${arr.slice(3, 6).join('')}-${arr.slice(6).join('')}`;
}

// console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])) // => returns "(123) 456-7890"
