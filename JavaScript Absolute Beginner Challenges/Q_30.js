//* Q30. Write a JavaScript program to check from two given integers, whether one is positive and another one is negative.

//*********Solution********

const checkPositiveOrNegative = (n1, n2) => {
  return (
    (n1 === Math.abs(n1) && n2 !== Math.abs(n2)) ||
    (n2 === Math.abs(n2) && n1 !== Math.abs(n1))
  );
};
console.log(checkPositiveOrNegative(-1, 2));
console.log(checkPositiveOrNegative(1, 2));
console.log(checkPositiveOrNegative(-1, -2));
