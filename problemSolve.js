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

const weight = process.argv[2];
const height = process.argv[3];

// function calculateBmi(weight, height) {
//   const bmi = weight / (height * height);
//   return bmi;
// }

const calculateBmi = (weight, height) => weight / (height * height);

console.log("Your BMI is ", calculateBmi(52, 1.53).toFixed(2));
