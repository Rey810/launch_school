/*
The Franchise
The method franchise.allMovies is supposed to return the following array:

[
  'How to Train Your Dragon 1',
  'How to Train Your Dragon 2',
  'How to Train Your Dragon 3'
]
*/

// let franchise = {
//   name: 'How to Train Your Dragon',
//   allMovies: function() {
//     let self = this;
//     return [1, 2, 3].map(function(number) {
//       return self.name + ' ' + number;
//     });
//   },
// };

// console.log(franchise.allMovies());


/*
The Franchise - Solution 2
In the previous exercise, we had a situation where an anonymous method passed to map had an undesirable execution context. We solved the problem by taking advantage of lexical scoping and introducing a new variable self. Solve the same problem again by passing a hard-bound anonymous function to map.
*/

// let franchise = {
//   name: 'How to Train Your Dragon',
//   allMovies: function() {
//     return [1, 2, 3].map(function(number) {
//       return this.name + ' ' + number;
//     }.bind(this));
//   },
// };

// console.log(franchise.allMovies());


/*
myFilter()
Modify the implementation such that the expected result is returned. Don't use the thisArg argument of Array.prototype.forEach.
*/

// function myFilter(array, func, thisArg) {
//   let result = [];

//   array.forEach(function(value) {
//     if (func.call(thisArg, value)) {
//       result.push(value);
//     }
//   });

//   return result;
// }

// let filter = {
//   allowedValues: [5, 6, 9],
// };

// console.log(myFilter([2, 1, 3, 4, 5, 6, 9, 12], function(val) {
//   return this.allowedValues.indexOf(val) >= 0;
// }, filter)); // returns [5, 6, 9]