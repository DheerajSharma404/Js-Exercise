//* Q48. Write a JavaScript program to compute the sum of the two given integers, If the sum is in the range 50..80 return 65 otherwise return 80.

//*********Solution********

const computSumInRange = (n1, n2) => {
  let sum = n1 + n2;
  return sum >= 50 && sum <= 80 ? 65 : 80;
};
console.log(computSumInRange(30, 20));
console.log(computSumInRange(90, 80));
