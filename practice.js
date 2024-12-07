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
