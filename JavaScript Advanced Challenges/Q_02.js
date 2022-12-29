//* Q2. Sort by lowest to highest price?

//* Given an array of numbers, return the prices sorted by low to high.

//*********Solution********

const sortLowToHigh = (arr) => arr.sort((a, b) => a - b);
console.log(sortLowToHigh([1, 5, 0, 10, 3]));
