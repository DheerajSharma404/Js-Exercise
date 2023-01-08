//* Q46. Write a JavaScript program to creat a new string with the first 3 characters are in lower cas froom a given string m if the sting length is less than 3 convert all the characters in upper case.

//*********Solution********

const converUpperAndLowerCase = (str) => {
  if (str.length < 3) {
    return str.toUpperCase();
  } else {
    return str.substring(0, 3).toLowerCase() + str.substring(3, str.length);
  }
};
console.log(converUpperAndLowerCase("Python"));
console.log(converUpperAndLowerCase("Py"));
console.log(converUpperAndLowerCase("JAVAScript"));
