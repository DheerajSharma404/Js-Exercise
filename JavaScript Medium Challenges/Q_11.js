//* Q11. Filter out all the falsy values?

//* Given an array of values, filter out the falsy values and only return the truthy values.

//*********Solution********

const filterOutFalsy = (arr) => {
   //* Using for loop
   let newArray = [];
   for (let i = 0; i < arr.length; i++) {
      //(!arr[i] === false)
      if (!!arr[i] === true) {
         newArray.push(arr[i]);
      }
   }
   return newArray;
   //* Using Array.filter() method.
   // return arr.filter((elem) => !!elem === true); //we can also do (!elem === false).
};
console.log(filterOutFalsy(["", [], 0, null, undefined, "0"]));
console.log(filterOutFalsy(["Tomato", "Orange", "Banana", false]));
console.log(filterOutFalsy(["Tomato", "Orange", "Apple"]));
