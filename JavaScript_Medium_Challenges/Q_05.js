//* Q5. Add up the numbers from a single number?

//* Given a number, add up all the number from one to the number that is given. E.g. An input of 4 will give you 1+2+3+4 which is equals 10.

//*********Solution********

const progresiveSum = (num) => {
   let sum = 0;
   for (let i = 1; i <= num; i++) {
      sum += i;
   }
   return sum;
};
console.log(progresiveSum(600));
