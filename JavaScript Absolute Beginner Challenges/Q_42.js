//* Q42. Write a JavaScript program to check whether a string "Script" present at 5th (index 4) position in a given string, if "Scritp" presents int the string return the string without "Script" otherwise return the original one.

//*********Solution********

const checkScript = (str) => {
  return str.substring(10, 4) === "Script"
    ? str.substring(0, 4) + str.substring(10, str.length)
    : str;
};
console.log(checkScript("JavaScript"));
console.log(checkScript("CoffeeScript"));
