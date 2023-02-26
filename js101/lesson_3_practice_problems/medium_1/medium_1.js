// keep count of iteration
// for each iteration
  // left padding + print the string "The Flinstones Rock!"

// for (let i = 0; i < 10; i++) {
//   console.log(" ".repeat(i) + "The Flintstones Rock!");
// }



// Starting with the string:
// let munstersDescription = "The Munsters are creepy and spooky.";
// Return a new string that swaps the case of all of the letters:

// split into array
// loop through array
//  if lowercase, change to upper case
//  if uppercase, change to lower case
// join array into string

// let swappedCaseString = munstersDescription.split("").map(letter => {
//   if (letter === letter.toLowerCase()) {
//     return letter.toUpperCase();
//   } else {
//     return letter.toLowerCase();
//   }
// }).join("");


// OR
// let swappedCaseString = munstersDescription.split("").map(letter => letter === letter.toLowerCase() ? letter.toUpperCase() : letter.toLowerCase()).join("");


// console.log(swappedCaseString);
function factors(number) {
  let divisor = number;
  let factors = [];

  while (divisor > 0) {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
    divisor -= 1;
  }

  return factors;
}

console.log(factors(20));
console.log(factors(75));
console.log(factors(0));
console.log(factors(-10));