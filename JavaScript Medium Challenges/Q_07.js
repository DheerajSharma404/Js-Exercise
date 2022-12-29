//* Q7. Find the largest number?

//* Given an array of numbers return the largest number of that array.

//*********Solution********

const getMax = (arr) => {
   //* We can also use reduce() method to get the max here.
   arr.reduce((acc, curr) => {
      return (acc = acc > curr ? acc : curr);
   });

   //* We can use for loop to get the max.
   // let max = arr[0];
   // for (let i = 1; i < arr.length; i++) {
   //    if (arr[i] >= max) {
   //       max = arr[i];
   //    }
   //}
   // return max;
};
console.log(getMax([5, 100, 0]));
