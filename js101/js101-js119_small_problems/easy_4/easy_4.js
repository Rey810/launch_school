const readline = require("readline-sync");

// Searching101

// Write a program that solicits six numbers from the user 
// and logs a message that describes whether the sixth number appears among the first five numbers

// ask user for input 5 times
// store input in an array each time
// on 6th input, compare 6th input to itemsd in array and return either a positive or a negative string containing numbers, 6th number, and "does" or "does not"

function searching101(){
  let inputNumberArray = [];
  let lastNumber = 0;

  for (let i = 0; i < 6; i++) {
    let count = ['1st', '2nd', '3rd', '4th', '5th', 'last']
    let input = readline.question(`Enter the ${count[i]} number:`);

    // no input sanitation
    if (i === 5) {
      lastNumber = input
    } else {
      inputNumberArray.push(input);
    }
  }

  // check if array contains the last number
  let arrayContainsLastNumber = inputNumberArray.includes(lastNumber); 

  return `The number ${lastNumber} ${arrayContainsLastNumber ? "appears" : "does not appear"} in: ${inputNumberArray.join(',')}`;
}

console.log(searching101());
