// problem -1 BMI

// const weight = process.argv[2];
// const height = process.argv[3];

// //const bmi = (weight / (height * height)).toFixed(2);
// // console.log(
// //   `Your weight is ${weight}kg and height is ${height}m and your BMI is ${bmi}`,
// // );
// const bmi = weight / (height * height);

// console.log(
//   `Your weight is ${weight}kg and height is ${height}m and your BMI is ${bmi.toFixed(2)}`,
// );

//const weight = process.argv[2];
//const height = process.argv[3];

// function calculateBmi(weight, height) {
//   const bmi = weight / (height * height);
//   return bmi;
// }

//const calculateBmi = (weight, height) => weight / (height * height);

//console.log("Your BMI is ", calculateBmi(52, 1.53).toFixed(2));

//problem-2 sum of array
// const numbers = [10, 2, 30, 4, 50];
// let sum = 0;

// for (let i = 0; i < numbers.length; i++) {
//   sum = sum + numbers[i];
// }

// console.log(sum);

// problem -3 Largest number of array
const numbers = [10, 2, 30, 4, 50, 23, 67, 89, 9];
let max = numbers[0]; //10

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i];
  }
}

console.log("max number is ", max);
