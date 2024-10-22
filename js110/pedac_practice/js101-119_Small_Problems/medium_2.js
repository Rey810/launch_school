/*
Lettercase Percentage Ratio
Write a function that takes a string and returns an object containing the following three properties:

the percentage of characters in the string that are lowercase letters
the percentage of characters that are uppercase letters
the percentage of characters that are neither
You may assume that the string will always contain at least one character.

letterPercentages('abCdef 123'); 
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

letterPercentages('AbCd +Ef');
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

letterPercentages('123');
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }

- input
-> string
- output
-> object 

- rules
-> object will contain 
--> % lowercase charaters 
--> % UPPERCASE charaters 
--> % non-alphabetic charaters 
-> always 1 character
-> default return: { lowercase: "0.00", uppercase: "0.00", neither: "0.00"}

----
Algorithm
- Find %'s of lowercase, uppercase, non-alpha characters

Main function:
letterPercentages(string)
- create "letterCount" obj and set to { lowercase: 0, uppercase: 0, neither: 0 }
- split into array
-- determine character
-- increment object key 
- create "totalChars" and set to string length
- create "letterPercent" obj
-- set "lowercase" key to a percentage 
-- repeat for uppercase and neither
-- return letterPercent

Helper function:
determineCharacter(char)
- if alphabetic 
-- if equal to uppercase version, return "uppercase"
-- if equal to lowercase version, return "lowercase"
- else non-alphabetic (use "a-z" conditional)
-- return "neither"

calculatePercent(typeCount, strLength)
- Calculate percentage
- Fix to two decimal points
- Stringify
- Return result
*/

function letterPercentages(str) {
  const letterCount = { lowercase: 0, uppercase: 0, neither: 0 };
  let totalChar = str.length;

  str.split("").forEach(char => {
    let type = determineCharacter(char)
    letterCount[type] += 1;
  })
  
  const letterPercent = {
    lowercase: calculatePercent(letterCount['lowercase'], totalChar),
    uppercase: calculatePercent(letterCount['uppercase'], totalChar),
    neither: calculatePercent(letterCount['neither'], totalChar),
  }

  return letterPercent;
}

function determineCharacter(char) {
  if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) {
    return char === char.toUpperCase() ? "uppercase" : "lowercase";
  } else {
    return "neither";
  }
}

function calculatePercent(typeCount, strLength) {
  return String(((typeCount / strLength) * 100).toFixed(2));
}

/*
TRIANGLE SIDES

- input
-> 3 numbers (triangle side lengths)
- output
-> string (triangle type)

- rules
-> valid triangle:
--> sum of 2 short sides > longest side
--> every side length > 0

-> isosceles triangle
--> Two sides are of equal length, while the third is different.
-> equilateral triangle
--> All three sides are of equal length
-> equilateral triangle
--> All three sides are of different lengths

- return "equilateral" "isosceles" "scalene" or "invalid"

- own words
-> given the lengths of a triangle, determine if and then what kind of triangle is 

---- 
Algorithm
- Deterimine if inputs make a triangle 
- Deterimine the type of triangle it is

Main function:
triangle(A, B, C)
- return "invalid" if not valid (helper)
- if isEquilateral
-- return "Equilateral"
- else if isIsosceles
-- return "Isosceles"
-- else return "Scalene"


Helper function
isValid(A, B, C)
- create 'sides' array and add A, B, C to it
- if A, B, or C is <= 0, return "invalid"
- calculate largest number and set to 'largestSide'
- remove largest number from 'sides'
- sum elements in 'sides' and set to 'shortSummed'
- if 'shortSummed' is less than 'largestSide' return "invalid"

Helper function:
isEquilateral(A, B, C)
- if A is equal to B AND B is equal to C
-- return true
- else
-- return false
*/

function triangle(A, B, C) {
  if (!isValid(A, B, C)) return "invalid";

  if (isEquilateral(A, B, C)) return "Equilateral";
  else if (isIsosceles(A, B, C)) return "Isosceles";
  else return "Scalene";
}


function isValid(A, B, C) {
  const sides = [A, B, C];
  if (sides.some(side => side <= 0)) return false;

  const largestSize = sides.splice(sides.indexOf(Math.max(...sides)), 1)[0];
  const shortSummed = sides.reduce((sum, curr) => sum + curr);
  if (shortSummed < largestSize) return false;

  return true;
}

function isEquilateral(A, B, C) {
  return A === B && B === C;
}

function isIsosceles(A, B, C) {
  return ( A === B && A !== C) ||  (A !== B && A === C) || (B === C && A !== C)
}


// console.log(triangle(3, 3, 3));        // "equilateral"
// console.log(triangle(3, 3, 1.5));      // "isosceles"
// console.log(triangle(3, 4, 5));        // "scalene"
// console.log(triangle(0, 3, 3));        // "invalid"
// console.log(triangle(3, 1, 1));        // "invalid"




/*
Tri-Angles

- input
-> 3 numbers (angles of a triangle)
- output
-> string (triangle type)

- rules
-> triangle types:
--> Right: One angle is a right angle (exactly 90 degrees).
--> Acute: All three angles are less than 90 degrees.
--> Obtuse: One angle is greater than 90 degrees.

-> triangle validity
--> sum of angles must be 180
--> every angle > 0

----
Algorithm
- Determine if input makes a valid triangle
- Determine the triangle type

Main function:
- checkValidity(A, B, C)
-- if input is not valid, return "invalid"
- return checkTriangleType(A, B, C)

Helper Function
checkValidity(A, B, C)
- if sum of A, B, C is not equal to 180, return false
- else if any angle is 0, return false
- else return true

Helper Function
checkTriangleType(A, B, C)
- if A, B, or C is equal to 90
-- return "right"
- else if A, B, or C is less than 90
-- return "obtuse"
- else return "acute"
*/

function checkInvalidity(A, B, C) {
  return (A + B + C !== 180) || (A * B * C === 0);
}

function checkTriangleType(A, B, C) {
  if (A === 90 || B === 90 || C === 90) return "right";
  else if (A > 90 || B > 90 || C > 90) return "obtuse";
  else return "acute";
}

function triangle(A, B, C) {
  if (checkInvalidity(A, B, C)) return "invalid";
  return checkTriangleType(A, B, C);
}

// console.log(triangle(60, 70, 50));       // "acute"
// console.log(triangle(30, 90, 60));       // "right"
// console.log(triangle(120, 50, 10));      // "obtuse"
// console.log(triangle(0, 90, 90));        // "invalid"
// console.log(triangle(50, 50, 50));       // "invalid"





/* 
UNLUCKY DAYS
*/

function fridayThe13ths(year) {
  let thirteenths = [];

  for (let month = 0; month <= 11; month++) {
    thirteenths.push(new Date(year, month, 13))
  }

  return thirteenths.filter(date => date.getDay() === 5).length
}

// console.log(fridayThe13ths(1986));      // 1
// console.log(fridayThe13ths(2015));      // 3
// console.log(fridayThe13ths(2017));      // 2

// console.log(new Date(2021, 11, 4).getFullYear())




/* 
Next Featured Number Higher than a Given Value

- input
-> number 
- output
-> number (featured number)

- rules
-> featured number:
--> odd number
--> multiple of 7
--> all digits occur once
-> return string if there is no next featured number (when number > 9876543201)

----
ALGORITHM
- Given a number, determine the next "featured number"
- Return "featured number"

Main function 
featured(num)
- initialize for-loop with initializer "currNum" set to getOddMultipleOf7(num)
-- if onlySingleDigits 
--- return "currNum"
- return "There is no possible number that fulfills those requirements."

Helper function 
getOddMultipleOf7(num) 
- while 'num' is even or 'num' is not a multiple of 7
-- increment 'num'
- return 'num'

Helper function
onlySingleDigits(num)
- coerce num to string
- split string into array
- iterate over array
-- if every element's index is equal to the last index of that element
--- return true
-- else return false

*/

function onlySingleDigits(num) {
  return [...String(num)].every(((el, idx, arr) => idx === arr.lastIndexOf(el)));
}

function getOddMultipleOf7(num) {
  do {
    num += 1
  } while (num % 2 === 0 || num % 7 !== 0);

  return num;
}

function featured(num) {
  const LARGEST_FEATURED_NUM = 9876543201;

  let oddMultipleOf7 = getOddMultipleOf7(num)

  for (let currNum = oddMultipleOf7; currNum <= LARGEST_FEATURED_NUM; currNum += 14) {
    if (onlySingleDigits(currNum)) return currNum;
  }

  return "There is no possible number that fulfills those requirements."
}

// console.log(featured(12));           // 21
// console.log(featured(20));           // 21
// console.log(featured(21));           // 35
// console.log(featured(997));          // 1029
// console.log(featured(1029));         // 1043
// console.log(featured(999999));       // 1023547
// console.log(featured(999999987));    // 1023456987
// console.log(featured(9876543186));   // 9876543201
// console.log(featured(9876543200));   // 9876543201
// console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."




/*
SUM SQUARE - SQUARE NUM

- input
-> number
- output
-> number 

- rules
-> equation
--> (square of the sum of the first "arg" pos. ints) - (sum of squares of first 'arg' pos. ints)

----
ALGORITHM
- Given a number, calculate the square of sums minus the sum of squares

Main function
sumSquareDifference(num)
- getSquareOfTheSum
- getSumOfSquares
- return getSquareOfTheSum minus getSumOfSquares

Helper function
getSquareOfTheNum(num)
- intialize 'sum' to 0
- intialize for-loop, continue until initializer 'currNum' is equal to "num"
-- increment 'sum' by 'currNum'
- return 'sum' squared

Helper function
getSumOfSquares(num)
- initialize 'sumOfSquares'
- initialize for-loop, continue until initializer 'currNum' is equal to 'num'
-- increment 'sumOfSquares' by 'currNum' squared
- return 'sumOfSquares'
*/

function getSquareOfTheNum(num) {
  let sum = 0;

  for (let currNum = 0; currNum <= num; currNum++) {
    sum += currNum;
  }

  return sum ** 2;
}

function getSumOfSquares(num) {
  let sumOfSquares = 0;

  for (let currNum = 0; currNum <= num; currNum++) {
    sumOfSquares += currNum ** 2;
  }

  return sumOfSquares;
}

function sumSquareDifference(num) {
  return getSquareOfTheNum(num) - getSumOfSquares(num);
}

// console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
// console.log(sumSquareDifference(10));     // 2640
// console.log(sumSquareDifference(1));      // 0
// console.log(sumSquareDifference(100));    // 25164150




/*
BUBBLE SORT

- input
-> array (numbers/strings)
- output
-> mutated array (sorted numbers/strings)

- rules
-> use bubble sort algorithm
--> sort numbers smallest to biggest
-> array will contain at least 2 elements

----
Algorithm
- Iterate over elements and sort them in place multiple times until they can't be sorted more

Main function:
bubbleSort(arr)
- initialize 'notSwapped' to false
- while 'swapped' is false
  -- set'notSwapped' to true 
  -- initialize for-loop, continues until initializer 'idx' is <= arr.length
    --- if element at 'idx' is > than the next element
    ---- swap elements
    ---- 'notSwapped' is now false
- return arr
*/

function bubbleSort(arr) {
  while (true) {
    let swapped = false;

    for (let idx = 0; idx < arr.length; idx++) {
      if (arr[idx] > arr[idx + 1]) {
        [arr[idx], arr[idx + 1]] = [arr[idx + 1], arr[idx]];
        swapped = true;
      }
    }
    if (swapped === false) break;
  } 

  return arr
}

// let array1 = [5, 3];
// bubbleSort(array1);
// console.log(array1);    // [3, 5]

// let array2 = [6, 2, 7, 1, 4];
// bubbleSort(array2);
// console.log(array2);    // [1, 2, 4, 6, 7]

// let array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
// bubbleSort(array3);
// console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]




/*
IS IT PRIME?

- input
-> number
- output
-> boolean (true or false)

- rules
-> prime number:
--> not 1
--> divisible by itself and 1

----
Algorithm
- Given a number, return true if it's a prime number, false if its not

Main function:
is_prime(num)
- if num is 1, return false;
- initialize 'isPrime' and set to 'true'
- initialize for-loop, starting at 2 and ending at less than 'num'
-- if number is divisible by current index
--- set 'isPrime' to false and break
- return 'isPrime'
*/

function is_prime(num) {
  if (num === 1) return false;

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false
    }
  }

  return true;
}

// console.log(is_prime(1) === false)            // true
// console.log(is_prime(2) === true)             // true
// console.log(is_prime(3) === true)             // true
// console.log(is_prime(4) === false)            // true
// console.log(is_prime(5) === true)             // true
// console.log(is_prime(6) === false)            // true
// console.log(is_prime(7) === true)             // true
// console.log(is_prime(8) === false)            // true
// console.log(is_prime(9) === false)            // true
// console.log(is_prime(10) === false)           // true
// console.log(is_prime(23) === true)            // true
// console.log(is_prime(24) === false)           // true
// console.log(is_prime(997) === true)           // true
// console.log(is_prime(99435676578) === false)          // true
// console.log(is_prime(3_297_061) === true)     // true
// console.log(is_prime(23_297_061) === false)   // true