//* Q12. If a number is even, return 1 otherwise return -1?

//* Create a function that takes a number argument and returns 1 if the number is even. If then number is odd return -1.

//*********Solution********

const booleanInteger = (num) => (num % 2 === 0 ? 1 : -1);
console.log(booleanInteger(1));
console.log(booleanInteger(2));
console.log(booleanInteger(5));
