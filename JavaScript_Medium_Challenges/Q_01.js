//* Q1. Fasly or Truthy?

//* Given tw values, return the first one if it id falsy, otherwise return the second one.

//*********Solution********

const filterOutFalsy = (num1, num2) => (!num1 ? num1 : num2);
console.log(filterOutFalsy(0, 500));
console.log(filterOutFalsy(false, 100));
console.log(filterOutFalsy(true, "Dog"));
