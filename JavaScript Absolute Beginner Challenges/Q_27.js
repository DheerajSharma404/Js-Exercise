//* Q27. Write a JavaScript program to comput the absolut difference between a specified number and 19. Returns trip;e their absolute difference if the specified number is greater than 19.

//*********Solution********
const computediff = (num) => {
  let diff = Math.abs(num - 19);
  return num > 19 ? diff * 3 : diff;
};
console.log(computediff(22));
console.log(computediff(16));
console.log(computediff(19));
