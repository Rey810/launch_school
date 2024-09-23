// for (let i = 10; i > 0; i -= 1) {
//   console.log(i);
// };

// console.log("Launch!");


// let greeting = 'Aloha!';
// let count = 1;

// while (count <= 3) {
//   console.log(greeting);
//   count += 1;
// }


// for (let i = 1; i <= 100; i += 1) {
//   console.log(i * 2);
// }


// let array = [1, 2, 3, 4];
// let index = 0;

// while (index <= (array.length - 1)) {
//   console.log(array[index]);
//   index += 1;
// }


// let cities = ['Istanbul', 'Los Angeles', 'Tokyo', null, 'Vienna', null, 'London', 'Beijing', null];

// for (let i = 0; i < cities.length; i += 1) {
//   if (!cities[i]) {
//     continue
//   };

//   console.log(cities[i]);
// }


// for (let i = 0; i < 1; i += 1) {
//   console.log("and on");
// }


// let number = 1;

// while (number <= 40){
//   if (number % 2 === 1) {
//     console.log(number);
//   }
//   number += 1;
// }



// let fish = ['Dory', 'Marlin', 'Gill', 'Nemo', 'Bruce'];

// for (let i = 0; i < fish.length; i += 1) {
//   console.log(fish[i]);
  
//   if (fish[i] === "Nemo"){
//     break;
//   }
// }


// Falsy Values
// - false
// - undefined
// - null
// - 0
// - ""
// - -0 
// - 0n
// - NaN



// let randomNumber = Math.round(Math.random());

// console.log(randomNumber ? 'yes' : 'no');


// let weather = "rainy";

// if (weather === 'sunny') {
//   console.log("It's a beautiful day")
// } else if (weather === 'rainy' ) {
//   console.log("Grab your umbrella") 
// } else {
//   console.log("Let's stay inside")
// }


// let weather = "rainy";

// switch (weather) {
//   case 'sunny':
//     console.log("It's a beautiful day.");
//     break;
//   case 'rainy':
//     console.log("Grab your umbrella.");
//     break;
//   default:
//     console.log("Let's stay inside.");
// }


// function sum(num1, num2) {
//   return num1 + num2;
// } 

// function brendanEichQuote(){
//   console.log("Always bet on JavaScript");
// }

// function cite(author, quote) {
//   console.log(`${author} said: "${quote}"`);
// }

// function squaredNumber(num){
//   return num ** 2;
// }

// function compareByLength(str1, str2) {
//   if (str1.length < str2.length) {
//     return -1;
//   } else if (str1.length > str2.length) {
//     return 1
//   } else {
//     return 0;
//   } 
// }

// 'Captain Ruby'.replace('Ruby', 'JavaScript');

// function greet(lang){
//   switch (lang) {
//     case 'en': return "Hi!";
//     case 'fr': return "Salut!";
//     case 'pt': return "Ola!";
//     case 'de': return "Hallo!";
//     case 'sv': return "Hej!";
//     case "af": return "Haai!";
//   }
// }

// function extractLanguage(locale) {
//   return locale.split('_')[0];
// }

// function extractRegion(locale) {
//   return locale.split('_')[1].split('.')[0];
// }

// function localGreet(locale) {
//   let lang = extractLanguage(locale);
//   let region = extractRegion(locale);

//   switch (region) {
//     case 'US': return 'Hey!';
//     case 'GB': return 'Hello!';
//     case 'AU': return 'Howdy!';
//     default: return greet(lang);
//   }
// }

// console.log(localGreet('en_US.UTF-8'));
// console.log(localGreet('en_GB.UTF-8'));
// console.log(localGreet('fr_CA.UTF-8'));


// length
// let string = "These aren't the droids you're looking for.";
// console.log(string.length);
// console.log(string.toUpperCase());

// // repeat
// function repeat(n, str) {
//   let string = "";

//   while (n > 0) {
//     string += str;
//     n -= 1;
//   }
  
//   console.log(string);
// }

// repeat(4, 'ha');


// let rhyme = "A pirate I was meant to be!\nTrim the sails and roam the sea!"
// console.log(rhyme);

// let byteSequence = 'TXkgaG92ZXJjcmFmdCBpcyBmdWxsIG9mIGVlbHMu';
// console.log(byteSequence.includes("x"));


// function isBlank(string) {
//   return string ? false : true;
// }

// console.log(isBlank("0"));
// console.log(isBlank(""));
// console.log(isBlank(" hello"));
// console.log(isBlank("How are you?"));


// function isBlank(string) {
//   return string.trim().length === 0 ? true : false;
// }

// console.log(isBlank('mars')); 
// console.log(isBlank('  '));  
// console.log(isBlank(''));  


// let string = 'launch school tech & talk';

// function capitalize(string) {
//   return string.split(' ').map(word => {
//     return word[0].toUpperCase() + word.slice(1);
//   }).join(' ');
// }

// console.log(capitalize(string));


// function first(array) {
//   return array[0];
// }


// function last(array) {
//   return array[array.length - 1];
// }


// let energy = ['fossil', 'solar', 'wind', 'tidal', 'fusion'];

// console.log(energy.shift());
// console.log(energy.push('geothermal'));


// let alphabet = 'abcdefghijklmnopqrstuvwxyz';

// console.log(alphabet.split(''));


// let scores = [96, 47, 113, 89, 100, 102];

// console.log(scores.filter(score => score >= 100).length);

// let vocabulary = [
//   ['happy', 'cheerful', 'merry', 'glad'],
//   ['tired', 'sleepy', 'fatigued', 'drained'],
//   ['excited', 'eager', 'enthused', 'animated']
// ];

// vocabulary.forEach(subarray => {
//   subarray.forEach(element => console.log(element));
// })


// function filter(input) {
//   return Array.isArray(input);
// }


// let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome',
//   'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro',
//   'Marrakesh', 'New York City'];

// function contains(string, array) {
//   for (let i = 0; i < array.length; i += 1) {
//     if (array[i] === string) {
//       return true;
//     }
//   }

//   return false;
// }

// console.log(contains('Barcelona', destinations));


// let passcode = ['11', 'jZ5', 'hQ3f*', '8!7g3', 'p3Fs'];

// console.log(passcode.join('-'));


// let groceryList = ['paprika', 'tofu', 'garlic', 'quinoa', 'carrots', 'broccoli', 'hummus'];

// while (groceryList.length > 0) {
//   let checkedItem = groceryList.shift();
//   console.log(checkedItem);
// }

// console.log(groceryList);

// function greet(greeting = 'Hello') {
//   console.log(`${greeting}, world`);
// }

// greet(undefined);

// function greeting(greet = 'Good morning') {
//   return greet;
// }

// function recipient(recipient = 'launch school') {
//   return recipient;
// }

// function greet() {
//   console.log(`${greeting()}, ${recipient()}!`);
// }


// greet();


// function BMI(height, weight) {
//   return (weight / ((height / 100) ** 2)).toFixed(2);
// }

// console.log(BMI(191, 84));


// function catAge(humanYears) {
//   switch(humanYears) {
//     case 0:
//       return 0;
//     case 1: 
//       return 15;
//     case 2:
//       return 24;
//     default:
//       return (24 + ((humanYears - 2) * 4));
//   }
// }

// console.log(catAge(4));


// function removeLastChar(string) {
//   return string.split('').slice(0, string.length - 1).join('');
//   // OR
//   // return string.substring(0, string.length - 1);
// }

// console.log(removeLastChar('ciao!'));


// const template = 'I VERB NOUN.';

// const sentence = (verb, noun) => {
//   return template.replace('VERB', verb).replace('NOUN', noun);
// }

// console.log(sentence('like', 'birds'));


// let initGame = () => ({ level: 1, score: 0 });

// let game = initGame();

// console.log('Level: ' + game.level);
// console.log('Score: ' + game.score);


// let student = {
//   name: 'Carmen',
//   age: 14,
//   grade: 10,
//   courses: ['biology', 'algebra', 'composition', 'ceramics'],
//   gpa: 3.75,
// };

// console.log(student.locker);


// let jane = {
//   firstName: 'Jane',
//   lastName: 'Harrelson',
//   age: 32,
//   location: {
//     country: 'Denmark',
//     city: 'Aarhus'
//   },
//   occupation: 'engineer',
// };

// console.log(jane.location.country);


// let fido = {
//   name: 'Fido',
//   species: 'Labrador Retriever',
//   color: 'brown',
//   weight: 16,
// };

// fido.age = 3;
// fido['favorite food'] = 'veggie lasagna';

// console.table(fido);


// let jane = {
//   firstName: 'Jane',
//   lastName: 'Harrelson',
//   age: 32,
//   location: {
//     country: 'Denmark',
//     city: 'Aarhus'
//   },
//   occupation: 'engineer',
//   greet: (name) => console.log(`Hej, ${name}!`)
// };

// jane.greet('Bobby');


// let vehicle = {
//   manufacturer: 'Tesla',
//   model: 'Model X',
//   year: 2015,
//   range: 295,
//   seats: 7
// };

// let keys = Object.keys(vehicle);

// console.log(keys);


// let person = {
//   title: 'Duke',
//   name: 'Nukem',
//   age: 33
// };

// let nestedPerson = [];

// for (let prop in person) {
//   nestedPerson.push([prop, person[prop]]);
// }

// console.log(nestedPerson);


// let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];

// let obj = {};

// for (let i = 0; i < nestedArray.length; i += 1) {
//   obj[nestedArray[i][0]] = nestedArray[i][1];
// }

// console.log(obj);


function clone(obj) {
  let copyObj = {};

  for (let prop in obj) {
    copyObj[prop] = obj[prop]; 
  }

  return copyObj
}

let person = {
  title: 'Duke',
  name: {
    value: 'Nukem',
    isStageName: true
  },
  age: 33
};

let clonedPerson = clone(person);
person.age = 34;

console.log(person.age);       
console.log(clonedPerson.age); 

person.name.isStageName = false;
console.log(person.name.isStageName);       
console.log(clonedPerson.name.isStageName); 
