//* Q31. Write a JavaScript program to create a new string adding "Py" in front of a given string. If the given stirng begins with "Py" then return the orignal sting.

//*********Solution********

const addString = (str) => {
  return str[0] === "P" && str[1] === "y" ? str : "Py" + str;
};
console.log(addString("solution"));
console.log(addString("PYthon"));
console.log(addString("python"));
console.log(addString("Python"));
