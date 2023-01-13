//* Q17. Write a JavaScript program to comput the sum of cubes of all integer from 1 to a give integer?

//*********Solution********

const sumOfCubes = (num) => {
  let sumOfCubes = 0;
  for (let i = 1; i <= num; i++) {
    sumOfCubes += i * i * i; // or we can use Math.pow(i,3).
  }
  return sumOfCubes;
};
console.log(sumOfCubes(2));
console.log(sumOfCubes(8));
console.log(sumOfCubes(10));
