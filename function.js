// function hello() {
//   console.log("Hello World");
// }

// hello();

// let message = hello();
// console.log("result:", message); // undefined

// function sayHello() {
//   return "Hello World";
// }

// console.log(sayHello());
// let message = sayHello();

// console.log("from message variable:", message);

// function sum(a, b) {
//   return a + b;
// }

// let result = sum(2, 3);
// console.log("The sum is: ", result);

// function farenheit(cel) {
//   return (9 * cel) / 5 + 32;
// }

// let celsius = 40.2;
// console.log(farenheit(celsius));

//es6
//arrow function

const farenheit = (cel) => {
  return (9 * cel) / 5 + 32;
};
//const farenheit = (cel) => (9 * cel) / 5 + 32;

let celsius = 40.2;
console.log(farenheit(celsius));