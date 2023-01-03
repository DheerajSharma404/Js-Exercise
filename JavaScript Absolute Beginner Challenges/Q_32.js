//* Q32. Write a JavaScript  program to remove a character at the speified position of a given string and return the new stirng.

//*********Solution********

const removeCharacter = (str, pos) => {
  let newStr = str.split("");
  newStr.splice(pos, 1);
  return newStr.join("");
};
console.log(removeCharacter("console", 2));
