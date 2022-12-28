//* Q4. Find the sum of an array?

//* Given an array, return the sum of every element.

//*********Solution********

const arrSum = (arr) => arr.reduce((acc, curr) => acc + curr); // we can also use for loop here.
console.log(arrSum([2, 2, 2]));
