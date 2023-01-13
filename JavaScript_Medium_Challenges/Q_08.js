//* Q8. Reverse a string?

//* Given a string, return the reversed strin.

//*********Solution********

//* const reverseString = (str) => {

//* };

const reverseString = (str) => {
   // Using the combintation of split(), reverse() and join() method.
   return str.split("").reverse().join("");

   //* Using the incrementing operator.
   //let modStr = "";
   // for (let i = 0; i < str.length; i++) {
   //     modStr += str[str.length - 1 - i];
   //     modStr = str[i] + modStr;
   // }

   //* Using the decrementing operator
   // for (let i = str.length - 1; i >= 0; i--) {
   //    modStr += str[i];
   //}
   // return modStr;
};

console.log(reverseString("helloworld"));
