//1. Check whether the Input is an array or not
// const checkFunction = (input) => {
//   if (Object.prototype.toString.call(input) === "[object Array]") {
//     return true;
//   } else {
//     return false;
//   }
// };

// console.log(checkFunction("Ohayogojaimasu!!"));
// console.log(checkFunction([1, 2, 3, 5, 6]));

// 2. Cloning the array
// let array = (arr) => {
//   return arr.slice();
// };
// console.log(array([1, 2, 3, 4, 5]));
// console.log(array([1, 2, [4, 0]]));

// 3. JavaScript function to get the first element of an array.
// Passing the parameter 'n' will return the first 'n' elements of the array.
// let container = (arr, n) => {
//   if (n === undefined) {
//     return arr[0];
//   } else {
//     return arr.slice(0, n);
//   }
// };

// console.log(container([1, 2, 3, 4, 5]));
// console.log(container([6, 7, 8, 9], 3));

// 4. JavaScript function to get the last element of an array.
// Passing the parameter 'n' will return the last 'n' elements of the array.
// let container = (arr, n) => {
//   if (n === undefined) {
//     return arr.length - 1;
//   } else {
//     return arr.slice(arr.length - n);
//   }
// };

// console.log(container([1, 2, 3, 4, 5, 6, 7]));
// console.log(container([11, 22, 33, 44, 55], 3));

// 5. JavaScript program to join all elements of the following array into a string.
// let array = ["Harry", "John", "Drake", "Justin", "Ariana", "Tailor"];
// console.log(array.join());

// 6. JavaScript program that accepts a number as input and inserts dashes (-) between each even number
// let dashAdd = (number) => {
//   const splitnum = number.toString().split("").join("-");
//   return splitnum;
// };
// console.log(dashAdd(123456));

//7. JavaScript program to sort the items of an array.
// const array = [1, 2, 6, 8, 13, 11, -2, -3, -4];
// array.sort((a, b) => a - b);
// console.log(array);

// 8. JavaScript program to find the most frequent item in an array
// const mostFrequent = (arr) => {
//   let maxCount = 0;
//   let frequent = [];
//   let mostFrequent = null;
//   arr.forEach((item) => {
//     frequent[item] = (frequent[item] || 0) + 1;
//     if (frequent[item] > maxCount) {
//       maxCount = frequent[item];
//       mostFrequent = item;
//     }
//   });
//   return mostFrequent;
// };
// console.log(mostFrequent([1, 2, 3, 1, 5, 1]));
