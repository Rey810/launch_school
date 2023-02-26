/////////////////// 
// P
/////////////////// 

// Write a function that takes one integer argument, 
// which may be positive, negative, or zero. 
// This method returns true if the number's absolute value is odd. 
// You may assume that the argument is a valid integer value.

// only 1 argument
  // can be -100, -1, 0, +1, +100 

// solution needs to return true or false depending on whether 
// the number is odd or even

// we can assume that the argument provided is a valid integer

/////////////////// 
// E
/////////////////// 

//Test 1
// input: 1
// output: true

//Test 2:
// input: 2
// output: false

//Test 3:
// input: 0
// output: false

/////////////////// 
// D
/////////////////// 

// Check the remainder when the input is divided by 2
// return true if the answer is 1
// return false if the answer is not 0

/////////////////// 
// A
/////////////////// 

// Test 1
// create a variable that points to the value of the input
// number = input
// create a variable that holds the result of a remainder calculation
// remainder = number % 2 
// if remainder equals 1, return true
// if remainder equals 0, return false

/////////////////// 
// C
/////////////////// 

function isOdd(input) {
  let odd;
  let number = Math.abs(input);
  let remainder = number % 2;

  if (remainder === 1) {
    odd = true;
  }

  if (remainder === 0) {
    odd = false;
  }

  return odd;
}

function isOddRefined(input) {
  return Boolean(Math.abs(input) % 2);
}

console.log(isOdd(1));
console.log(isOdd(-1));
console.log(isOdd(2));
console.log(isOdd(0));

console.log(isOddRefined(1));
console.log(isOddRefined(-1));
console.log(isOddRefined(2));
console.log(isOddRefined(0));