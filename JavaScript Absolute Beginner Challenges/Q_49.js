//* Q49. Write a JavaScript program to check two given numbers, whther one of the is 8 or their sum or difference is 8.

//*********Solution********

const check8 = (num1, num2) => {
  let sum = num1 + num2;
  let diff = Math.abs(num1 - num2);
  return num1 === 8 || num2 === 8 || sum === 8 || diff === 8;
};
console.log(check8(7, 8));
console.log(check8(16, 8));
console.log(check8(24, 32));
console.log(check8(17, 18));
