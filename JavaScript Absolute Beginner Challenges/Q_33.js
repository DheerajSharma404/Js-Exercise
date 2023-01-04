//* Q33. Write a JavaScript program to create a new string from a given string changing the position of first and last characters.The string length  must be greater than or equal to 1.

//*********Solution********

const getNewStr = (str) => {
  if (str.length === 1) {
    return str;
  } else {
    //* Can also be solve by Swapping.
    // let newStr = str.split("");
    // let temp = newStr[0];
    // newStr[0] = newStr[newStr.length - 1];
    // newStr[newStr.length - 1] = temp;
    // return newStr.join("");
    let midStr = str.substr(1, str.length - 1);
    return str[str.length - 1] + midStr + str[0];
  }
};

console.log(getNewStr("top"));
console.log(getNewStr("abc"));
console.log(getNewStr("t"));
