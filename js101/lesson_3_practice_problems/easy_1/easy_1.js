// How can you determine whether a given string ends with an exclamation mark (!)?
// let str1 = "Come over here!"; // true
// let str2 = "What's up, Doc?"; // false

// function endsWithExMark(string) {
//   return string.split('')[string.length - 1] === '!'
// }

// SIMPLER SOLUTION
// str1.endsWith("!");
// str2.endsWith("!");

// console.log(endsWithExMark(str1));
// console.log(endsWithExMark(str2));



// Determine whether the following object of people and their age contains an entry for 'Spot':
// let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };

// console.log(ages.hasOwnProperty('Spot'));
// console.log(ages.hasOwnProperty('Lily'));



// Using the following string, create a new string that contains all lowercase letters except for the first character, which should be capitalized. (See the example output.)
// let munstersDescription = "the Munsters are CREEPY and Spooky.";

// let result = `${munstersDescription[0].toUpperCase()}${munstersDescription.toLowerCase().slice(1)}`;
// console.log(result);



// We have most of the Munster family in our ages object:
// let ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };
// // Add entries for Marilyn and Spot to the object:
// let additionalAges = { Marilyn: 22, Spot: 237 };

// Object.assign(ages, additionalAges);

// console.log(ages);



// Determine whether the name Dino appears in the strings below -- check each string separately):

let str1 = "Few things in life are as important as house training your pet dinosaur.";
let str2 = "Fred and Wilma have a pet dinosaur named Dino.";

console.log(str1.includes('Dino'));
console.log(str2.includes('Dino'));



// How can we add the family pet, "Dino", to the following array?

// let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];

// flintstones[flintstones.length] = 'Dino';
// // OR
// flintstones.push('Dino');
// // OR
// flintstones.concat('Dino');



// Return a new version of this sentence that ends just before the word house. Don't worry about spaces or punctuation: remove everything starting from the beginning of house to the end of the sentence.

// let advice = "Few things in life are as important as house training your pet dinosaur.";

// // Expected return value:
// // => 'Few things in life are as important as '

// let result = advice.slice(0, advice.indexOf('house'));

// console.log(result);
