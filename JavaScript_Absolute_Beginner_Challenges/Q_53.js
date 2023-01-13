//* Q53. Wrtie a JavaScript program to find the maxmimum integer n such that 1+2+...n<=a given integer?

//*********Solution********

const sumLessEqualsA = (target) => {
  let sum = 0;
  let i = 0;
  for (i; sum <= target; i++) {
    sum += i;
  }
  return i - 2;
};
console.log(sumLessEqualsA(11));
console.log(sumLessEqualsA(15));
console.log(sumLessEqualsA(10));
console.log(sumLessEqualsA(2));
