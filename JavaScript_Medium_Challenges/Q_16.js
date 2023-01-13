//* Q16. Write a JavaScript function that generate all combination of a string.

//*********Solution********

const generateCombination = (str) => {
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    let tempstr = "";
    for (let j = i; j < str.length; j++) {
      tempstr += str[j];
      arr.push(tempstr);
    }
  }
  return arr;
};
console.log(generateCombination("dog"));
console.log(generateCombination("JavScript"));
console.log(generateCombination("Coding"));
