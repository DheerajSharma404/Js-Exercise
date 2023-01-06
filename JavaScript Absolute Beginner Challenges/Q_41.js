//* Q41. Write a JavaScript program to check whether two number are in range 40..60 or int therange 70.. 100 inclusive?

//*********Solution********

const numbers_ranges = (n1, n2) => {
  return (n1 >= 40 && n1 <= 60 && n2 >= 40 && n2 <= 60) ||
    (n1 >= 70 && n1 <= 100 && n2 >= 70 && n2 <= 100)
    ? true
    : false;
};
console.log(numbers_ranges(44, 56));
console.log(numbers_ranges(70, 95));
console.log(numbers_ranges(50, 89));
