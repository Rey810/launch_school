//////////////////////////////////
////// Rotation (Part 1) ////////
///////////////////////////////
/*
Write a function that rotates an array by moving the first element to the end of the array. Do not modify the original array.

If the input is not an array, return undefined.
If the input is an empty array, return an empty array.
*/

/*

/*
Problem:

- input
-> array
- output
-> new array with first element moved to the end

- rules
-> if input is not an array, return undefined
-> if the input is an empty array, return an empty array

- own words
-> given an array, move it's first element to the end of the array and return that array (without mutation)

----
Algorithm
1. Check input validity
2. Create copy of array
3. move first element to the end of the array
4. Return modified copied array



Main Function
rotateArray(array)
1. Check if arg is not array
  - if not, return undefined
2. Check if arg is empty array
  - if is, return []
3. create "arrayCopy" and set to copy of arg
4. create "first" and set to first element removed from array
5. add "first" to the end of the array
6. Return "arrayCopy"
*/

// function rotateArray(arr) {
//   // guard clauses
//   if (!Array.isArray(arr)) return undefined;
//   if (arr.length === 0) return [];

//   // let arrayCopy = arr.slice();
//   // let first = arrayCopy.shift();
//   // arrayCopy.push(first);

//   return arr.slice(1).concat(arr[0]);

//   // return arrayCopy;
// }

// console.log(rotateArray([7, 3, 5, 2, 9, 1]));       // [3, 5, 2, 9, 1, 7]
// console.log(rotateArray(['a', 'b', 'c']));          // ["b", "c", "a"]
// console.log(rotateArray(['a']));                    // ["a"]
// console.log(rotateArray([1, 'a', 3, 'c']));         // ["a", 3, "c", 1]
// console.log(rotateArray([{ a: 2 }, [1, 2], 3]));    // [[1, 2], 3, { a: 2 }]
// console.log(rotateArray([]));                       // []

// // return `undefined` if the argument is not an array
// console.log(rotateArray());                         // undefined
// console.log(rotateArray(1));                        // undefined


// // the input array is not mutated
// let array = [1, 2, 3, 4];
// console.log(rotateArray(array));                    // [2, 3, 4, 1]
// console.log(array);                                 // [1, 2, 3, 4]



//////////////////////////////////
////// Rotation (Part 2) ////////
///////////////////////////////

/*
Write a function that rotates the last count digits of a number. To perform the rotation, move the first of the digits that you want to rotate to the end and shift the remaining digits to the left.
*/

/* 
Problem

- input
-> integer ('number' argument)
-> integer ("count" argument)
- output
-> number (with digits correctly rotated)

- rules
-> to rotate, move first of target digits to the right end
-> this will move the digits, initially to the right of this target digit, to the left

- own words
-> given a number and a count, shift 'count' number of right digits

----
Algorithm
1. Given two numbers: 'number' and 'count'
2. Split 'number' into individual numbers
3. Move the target number to the right
4. Join numbers together and return the result as a number

Main function:
1. Split 'number' into an array
2. Remove digit at position: array.length - ('count' - 1) and set to 'removed'
3. Add 'removed' to end of 'number'
4. Join 'number'
5. Return result
*/

function rotateRightmostDigits(number, count) {
  let numArray = [...String(number)];
  let removed = numArray.splice(numArray.length - count, 1);
  return Number(numArray.concat(removed[0]).join(''));
}

// console.log(rotateRightmostDigits(735291, 1));      // 735291
// console.log(rotateRightmostDigits(735291, 2));      // 735219
// console.log(rotateRightmostDigits(735291, 3));      // 735912
// console.log(rotateRightmostDigits(735291, 4));      // 732915
// console.log(rotateRightmostDigits(735291, 5));      // 752913
// console.log(rotateRightmostDigits(735291, 6));      // 352917




/*
ROTATION (PART 3)

- input
-> number
- output
-> maximally rotated number

735291 (0 fixed)
352917 (1 fixed)
329175 (2 fixed)
321759 (3 fixed)
321597 (4 fixed)
321579 (maximum rotation of the number)

----
Algorithm
- Rotate a number maximally
-- continue rotating number until all numbers have been rotated

maxRotation(number)
- create 'length' and set to length of number
- create 'currNum' and set to number arg
- create a for loop, start at length, decrement
  -- rotateRightMostDigit(currentNum, idxOfForLoop)
  --- reassign 'currNum' to return value of function
- return 'currNum'
*/

function maxRotation(number) {
  let length = String(number).split('').length;

  for (let rotationPos = length; rotationPos > 1; rotationPos--) {
    number = rotateRightmostDigits(number, rotationPos);
  }

  return number;
}

// maxRotation(735291);          // 321579
// maxRotation(3);               // 3
// maxRotation(35);              // 53
// maxRotation(105);             // 15 -- the leading zero gets dropped
// maxRotation(8703529146);      // 7321609845





/*
STACK MACHINE INTERPRETATION

- input
-> string of instructions
- output
-> integer

- rules
-> commands
--> n : Place a value, n, in the register. Do not modify the stack.
--> PUSH : Push the register value onto the stack. Leave the value in the register.
--> ADD : Pop a value from the stack and add it to the register value, storing the result in the register.
--> SUB : Pop a value from the stack and subtract it from the register value, storing the result in the register.
--> MULT : Pop a value from the stack and multiply it by the register value, storing the result in the register.
--> DIV : Pop a value from the stack and divide the register value by the popped stack value, storing the integer result back in the register.
--> REMAINDER : Pop a value from the stack and divide the register value by the popped stack value, storing the --> integer remainder of the division back in the register.
--> POP : Remove the topmost item from the stack and place it in the register.
--> PRINT : Print the register value.
-> register aka current value
-> operation that requires 2 values, pops the topmost, operates on that and the current value (register) and stores value in register

---- 
ALGORITHM
- Iterate over a string
- Perform actions based on the string values
- Print the result

Main function:
minilang(str)
- create "stack" and set to []
- create "register" and set to 0
- split str into 'strArr'
- loop over 'strArr'
-- remove element from 'strArr'
--- if element is a number, reassign "register" to number
--- else if element is "PRINT", print 'register' 
--- else run other actions
---- switch statement (element)
----- case: PUSH
------ push 'register' onto 'stack'
----- case: ADD
------ pop value from 'stack', add it to 'register' and reassign 'register' to result
----- case: SUB
------ pop value from 'stack', subtract from 'register' and reassign 'register' to result
----- case: MULT
------ pop value from 'stack', multiply by 'register' and reassign 'register' to result
----- case DIV
----- pop value from 'stack', divide 'register' by popped value, reassign 'register' to result
----- case REMAINDER
----- pop value from 'stack', divide 'register' by popped value, reassign 'register' to remainder
----- case POP
------ remove the topmost item from stack and ressign 'register' to it
*/

function minilang(str) {
  const stack = [];
  let register = 0;
  const strArr = str.split(' ');

  strArr.map(el => {
    switch (el) {
      case 'PUSH':
        Number(stack.push(register));
        break;
      case 'ADD':
        register += stack.pop()
        break;
      case 'SUB':
        register -= stack.pop()
        break;
      case 'MULT':
        register *= stack.pop()
        break;
      case 'DIV':
        register = parseInt(register / stack.pop())
        break;
      case 'REMAINDER':
        register = register % stack.pop()
        break;
      case 'POP':
        register = stack.pop()
        break;
      case 'PRINT':
        console.log(register);
        break;
      default:
        register = Number(el);
    }
  });
}


// minilang('PRINT');
// // 0

// minilang('5 PUSH 3 MULT PRINT');
// // 15

// minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// // // 5
// // // 3
// // // 8

// minilang('5 PUSH POP PRINT');
// // 5

// minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// // 5
// // 10
// // 4
// // 7

// minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// // 6

// minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT');
// // 12

// minilang('-3 PUSH 5 SUB PRINT');
// // 8

// minilang('6 PUSH');
// (nothing is printed because the `program` argument has no `PRINT` commands)






// console.log(letterPercentages('abCdef 123')); 
// //{ lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

// console.log(letterPercentages('AbCd +Ef'));
// // { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

// console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }




/*
WORD DIGIT

- input
-> string
- output
-> string -> number-word strings changed to integers

- rules 
-> numbers will be between 0 and 9

----
Algorithm
- Convert a string with worded numbers into one with integer numbers

Main function
wordToDigit(str)
- create 'numbers' array containing number-words from "zero" to "nine"
- iterate over 'numbers'
-- replace currEl in string with current index
- return string

*/

function wordToDigit(str) {
  const numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

  numbers.forEach((el, idx) => {
    str = str.replaceAll(el, idx);
  });

  return str;

}


console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."
