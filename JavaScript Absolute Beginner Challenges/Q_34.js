//* Q34. Write a JavaScript program check whether a given postive number is a multiple of 3 or a multiple of 7?

//*********Solution********

const checkMultipleof3or7 = (num) => {
  return num % 3 === 0 || num % 7 === 0 ? true : false;
};
console.log(checkMultipleof3or7(21));
console.log(checkMultipleof3or7(49));
console.log(checkMultipleof3or7(9));
console.log(checkMultipleof3or7(5));
