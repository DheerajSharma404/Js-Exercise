//* Q12. Truthy to true, falsy to false?

//* Given an array of truthy and falsy vaues, return the same array of elements into its boolean value.

//*********Solution********

const convertToBoolean = (arr) =>
   arr.map((elem) => (!!elem === true ? true : false));

console.log(convertToBoolean([500, 0, "David", "", []]));
