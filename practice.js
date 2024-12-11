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
const mostFrequent = (arr5) => {
  let maxCount = 0;
  let frequent = [];
  let mostFrequent = null;
  arr5.forEach((item) => {
    frequent[item] = (frequent[item] || 0) + 1;
    if (frequent[item] > maxCount) {
      maxCount = frequent[item];
      mostFrequent = item;
    }
  });
  return mostFrequent;
};
console.log(mostFrequent([1, 2, 3, 1, 5, 1]));

// 9. JavaScript program that accepts a string as input and swaps the case of each character
const message = "THIS IS A WEIRD WORLD WE LIVE IN";
const arr3 = message.split(" ");
const changed = arr3.map(
  (item) => item.charAt(0).toLowerCase() + item.slice(1)
);
const result1 = changed.join(" ");
console.log(result1);

// 10. JavaScript program that prints the elements of the following array
var a = [
  [1, 2, 1, 24],
  [8, 11, 9, 4],
  [7, 0, 7, 27],
  [7, 4, 28, 14],
  [3, 10, 26, 7],
];
a.forEach((row, rowindex) => {
  console.log(`row ${rowindex}`);
  row.forEach((ele) => console.log(`${ele}`));
});

// 11. JavaScript program to find the sum of squares of a numerical vector
function sumofAllSquares(arr2) {
  let sum = 0;
  arr2.forEach((num) => {
    sum += num * num;
  });
  return sum;
}
const vector = [2, 3, 5];
console.log(sumofAllSquares(vector));

// 12. JavaScript program to compute the sum and product of an array of integers
function sumAndProduct(arr1) {
  let sum = 0;
  let product = 1;
  arr1.forEach((item) => {
    sum += item;
    product *= item;
  });
  return { sum, product };
}
const arr1 = [1, 2, 3, 4, 5];
const result = sumAndProduct(arr1);
console.log(`Sum is ${result.sum}`);
console.log(`Product is ${result.product}`);

// 13. JavaScript program to add items to a blank array and display them
const userInput = document.getElementById("userInput");
const addButton = document.getElementById("addBtn");
const displayButton = document.getElementById("displayBtn");
const displayWp = document.getElementById("displayContainer");
let arr = [];

addButton.addEventListener("click", () => {
  const upload = userInput.value;
  if (upload.trim() !== "") {
    arr.push(upload);
    userInput.value = "";
  }
});
displayButton.addEventListener("click", () => {
  displayWp.innerHTML = "";
  arr.forEach((item, index) => {
    const element = document.createElement("p");
    element.textContent = `Element ${index} = ${item}`;
    displayWp.appendChild(element);
  });
});

// 14. JavaScript function to remove duplicates from an array
const removeDuplicate = (array) => {
  const filtered = [...new Set(array)];
  return filtered;
};

const list = [
  "Ryner",
  "Shin",
  "Shigeo",
  "Ryner",
  "Lanoste",
  "Schnee",
  "Ryner",
  "Shin",
  "Ryner",
  "Schnee",
];
console.log(removeDuplicate(list));
