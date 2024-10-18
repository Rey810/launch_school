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

function checkValidity(A, B, C) {
  if ((A + B + C) !== 180) return false;
  else if (A <= 0 || B <= 0 || C <= 0) return false;
  else return true;
}

function checkTriangleType(A, B, C) {
  if (A === 90 || B === 90 || C === 90) return "right";
  else if (A > 90 || B > 90 || C > 90) return "obtuse";
  else return "acute";
}

function triangle(A, B, C) {
  if (!checkValidity(A, B, C)) return "invalid";
  return checkTriangleType(A, B, C);
}

console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"