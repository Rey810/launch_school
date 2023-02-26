// Given a string, return a new string that replaces every occurrence of the word "important" with "urgent":
// let advice = "Few things in life are as important as house training your pet dinosaur.";
// let result = advice.replace('important', 'urgent');

// console.log(result);



// Show two different ways to put the expected "Four score and " in front of it.
// let famousWords = "seven years ago...";

// "Four score " + famousWords
// "Four score ".concat(famousWords);



// Given an array of numbers [1, 2, 3, 4, 5], 
// mutate the array by removing the number at index 2, 
// so that the array becomes [1, 2, 4, 5].

// [1, 2, 3, 4, 5].splice(2, 1)



// Create a new array that contains all of the values, but in an un-nested format:
// let flintstones = ["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];

// flintstones = [].concat(...flintstones);



// Create an array from this object that contains only two elements: Barney's name and Barney's number:
let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };

Object.entries(flintstones).filter(arr => arr[0] === 'Barney').shift();



// Write a one-line expression to count the number of lower-case t characters in each of the following strings:

let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";

statement1.split("").filter(letter => letter === 't').length