//* Q10. Filter out all the apples?

//* Given an array of fruits. if it is an apple remove it from the array.

//*********Solution********

const removeApples = (arr) => {
   //* Using for loop.
   let newArray = [];
   for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== "Apple") {
         newArray.push(arr[i]);
      }
   }
   return newArray;

   //* Using Array.filter() method.
   // return arr.filter((elem) => elem !== "Apple");
};
console.log(removeApples(["Banana", "Apple", "Orange", "Apple"]));
