//* Q43. Write a JavaScript program to find the larger nuber from the two give positive integers the two number are int thrange 40..60 inclusive.?

//*********Solution********

const getMax = (n1, n2) => {
  if (n1 >= 40 && n1 <= 60 && n2 >= 40 && n2 <= 60) {
    return n1 === n2 ? "Number Are Same!" : n1 > n2 ? n1 : n2;
  } else {
    return "Numbers Don't fit in the range!";
  }
};
console.log(getMax(45, 60));
console.log(getMax(25, 60));
console.log(getMax(45, 80));
