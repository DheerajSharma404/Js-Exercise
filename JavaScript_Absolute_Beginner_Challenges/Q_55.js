//* Q55. Write JavaScript funtion that reverse a number.

//*********Solution********

const reverseDigit = (num) => {
  return Number(String(num).split("").reverse("").join(""));
};
console.log(reverseDigit(12345));
