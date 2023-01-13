//* Q14. Write a JavaScript program to change the capitalization of all letters in a given string.

//*********Solution********

const changeCase = (word) => {
  return word
    .split("")
    .map((char) =>
      char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
    )
    .join("");
};

console.log(changeCase("w3resource"));
console.log(changeCase("Germany"));
