//* Q50. Write a JavaScript program to check three given numbers, if the three numbers are same return 30 otherwise return 20 and if two numbr same return 40.

//*********Solution********

const chectEquality = (n1, n2, n3) => {
  if (n1 === n2 && n2 === n3) {
    return 30;
  } else if (n1 === n2 || n2 === n3 || n3 === n1) {
    return 40;
  } else {
    return 20;
  }
};
console.log(chectEquality(8, 8, 8));
console.log(chectEquality(8, 8, 18));
console.log(chectEquality(8, 7, 18));
