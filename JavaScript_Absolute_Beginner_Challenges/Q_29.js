//* Q29. Write a JavaScript prgram to check whether a given integer is within 20 of 100 or 400?

//*********Solution********

const computeWithin = (num) => {
  return Math.abs(100 - num) <= 20 || Math.abs(400 - num) <= 20;
};
console.log(computeWithin(10));
console.log(computeWithin(90));
console.log(computeWithin(99));
console.log(computeWithin(199));
console.log(computeWithin(200));
