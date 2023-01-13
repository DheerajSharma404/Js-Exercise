//* Q9. Turn every elemnt in an array into 0.

//* Given an array of elements, return the same length array filled with 0's.

//*********Solution********
const convertToZeros = (arr) => {
   //* Using for-loop.
   for (let i = 0; i < arr.length; i++) {
      arr[i] = 0;
   }
   return arr;
   //* Using Array.map() mehtod.
   // return arr.map((elem) => 0);
   //* Using Array.fill() method.
   // return arr.fill(0);
};
console.log(convertToZeros([500, 300, 200]));
