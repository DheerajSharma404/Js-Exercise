//* Q37. Write a JavaScript program to check whether two given integer values are in the range 50...99(inclusive).Return true if either of them are in the said range.

//*********Solution********

const checkRange = (n1, n2) => {
  return (n1 >= 50 && n1 <= 99) || (n2 >= 50 && n2 <= 99);
};
console.log(checkRange(50, 60));
console.log(checkRange(51, 75));
console.log(checkRange(99, 50));
console.log(checkRange(52, 50));
console.log(checkRange(12, 101));
console.log(checkRange(52, 80));
console.log(checkRange(15, 99));
