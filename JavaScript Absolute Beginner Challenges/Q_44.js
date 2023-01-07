//* Q44.Write a program to check whether a specified character exists within the 2nd to 4th position in a given string.

//*********Solution********

const check_char = (str, ch) => {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ch && i >= 1 && i <= 3) {
      return true;
    }
  }
  return false;
};
console.log(check_char("Python", "y"));
console.log(check_char("JavaScript", "a"));
console.log(check_char("Console", "o"));
console.log(check_char("Console", "C"));
console.log(check_char("Console", "e"));
console.log(check_char("JavaScript", "S"));
