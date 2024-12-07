// Check whether the Input is an array or not
const checkFunction = (input) => {
  if (Object.prototype.toString.call(input) === "[object Array]") {
    return true;
  } else {
    return false;
  }
};

console.log(checkFunction("Ohayogojaimasu!!"));
console.log(checkFunction([1, 2, 3, 5, 6]));
