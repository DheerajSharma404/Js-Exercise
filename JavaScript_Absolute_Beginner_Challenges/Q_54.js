//* Q54. Writea JavaScript function that checks wether a passed string is palindrome or not?

//*********Solution********

const isPalindrome = (str) => {
  let reverseStr = str.split("").reverse().join("");
  return str === reverseStr;
};
console.log(isPalindrome("noon"));
