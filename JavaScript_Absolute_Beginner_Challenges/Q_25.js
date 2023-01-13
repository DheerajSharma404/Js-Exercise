//* Q25. Write a JavaScript program to get the difference betwee a given number and 13, if the number is greater than 13 return double the absolute difference

//*********Solution********

const getDifference = (num) => {
  let diff = num - 13;
  // console.log(diff); for debug
  return diff > 13 ? Math.abs(diff) * 2 : diff;
};
console.log(getDifference(27));
