//* Q56. Write a JavaScript function that returns a passed string with letters in alphabetical order.

//*********Solution********

const alphabeticalSort = (str) => {
  return str.split("").sort().join("");
};
console.log(alphabeticalSort("Webmaster"));
console.log(alphabeticalSort("Thomas"));
console.log(alphabeticalSort("bcrdlerwehdskjfhdskdjfhd"));
