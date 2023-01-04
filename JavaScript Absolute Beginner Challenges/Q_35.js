//* Q35. Write a JavaScript program to creat an new string from a given string taking the last 3 character and added at both the from and back. The string lenth must be 3 or more.

//*********Solution********

const frontBack3 = (str) => {
  if (str.length < 3) {
    return "Strign must be of length 3 or more.";
  } else {
    let modStr = str.substr(-3);
    let newStr = modStr + str + modStr;
    return newStr;
  }
};
console.log(frontBack3("t"));
console.log(frontBack3("abc"));
console.log(frontBack3("abcdef"));
