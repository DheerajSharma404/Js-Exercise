//* Q16. Write a JavaScript program to compute the sum of all digits that occur in a given string?

//*********Solution********

const sum = (str) => {
  let sumDigit = 0;
  for (let i = 0; i < str.length; i++) {
    if (!isNaN(Number(str[i]))) {
      sumDigit += Number(str[i]);
    }
  }

  //* This whole thing can be done with the help of regex also.
  /*for (let i = 0; i < str.length; i++){
    if (/[0-9]/.test(str[i])) {
      sumDigit+=parseInt(str[i])
    }
  }*/
  return sumDigit;
};
console.log(sum("w3resou12rc5e"));
