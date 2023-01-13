//* Q15. Write A JavaScript program to swap two halves of a given array of integers of even length?

//*********Solution********
const swapHalfArray = (arr) => {
  if (arr.length % 2 !== 0) {
    return false;
  }
  let secondHalf = arr.splice(arr.length / 2);
  return secondHalf.concat(arr);
  //Can also be solved by swaping the first and the mid element and then go on with others.
};
console.log(swapHalfArray([1, 2, 3, 4, 5, 6]));
console.log(swapHalfArray([1, 2, 3, 4, 5, 6, 7]));
