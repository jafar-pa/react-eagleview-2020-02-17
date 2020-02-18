// es5 - function statement syntax
// function sum(a, b) {
//   return a + b;
// }

// es5 - function expression syntax
// first class citizens
// const sum = function (a, b) {
//   return a + b;
// };

// es6 - arrow function syntax 1
// const sum = (a, b) => {
//   return a + b;
// };

// es6 - arrow function syntax 2
const sum = (a, b) => a + b;

// es6 - arrow function syntax 3
const square = n => n * n;

// es6 - arrow function syntax 4
const sayHi = () => console.log('Hi.');

const result = sum(10, 20);
console.log('result:', result);

console.log('square:', square(5));
sayHi();