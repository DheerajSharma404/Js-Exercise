//* Q37. Write a JavaScript program to check whether two given integer values are in the range 50...99(inclusive).Return true if either of them are in the said range.

//*********Solution********

const checkRange = (n1, n2, n3) => {
  return (
    (n1 >= 50 && n1 <= 99) || (n2 >= 50 && n2 <= 99) || (n3 >= 50 && n3 <= 99)
  );
};
console.log(checkRange(50, 90, 99));
console.log(checkRange(5, 9, 199));
console.log(checkRange(65, 89, 199));
console.log(checkRange(65, 9, 199));
