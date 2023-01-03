//* Q28. Write a JavaScript program to check two given numbers and return true if one of the number is 50 or if their sum is 50?

//*********Solution********

const computeSum = (n1, n2) => {
  return n1 === 50 || n2 === 50 || n1 + n2 === 50;
};
console.log(computeSum(6, 6));
console.log(computeSum(50, 50));
console.log(computeSum(25, 25));
console.log(computeSum(50, 60));
