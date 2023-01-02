//* Q26. Write JavaScript program to compute the sum of the two given intergers. if the two values are same, the return triple their sum.

//*********Solution********

const getSum = (num1, num2) => {
  let sum = num1 + num2;
  return num1 === num2 ? sum * 3 : sum;
};

console.log(getSum(2, 3));
