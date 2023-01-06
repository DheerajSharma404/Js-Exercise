//* Q39. Write a JavaSvcript programto find the largest of three given intergers?

//*********Solution********

const maxOfThree = (n1, n2, n3) => {
  return n1 > n2 && n1 > n3 ? n1 : n2 > n1 && n2 > n3 ? n2 : n3;
};
console.log(maxOfThree(1, 0, 1));
console.log(maxOfThree(0, -10, -20));
console.log(maxOfThree(1000, 510, 440));
