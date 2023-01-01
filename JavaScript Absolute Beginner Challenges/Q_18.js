//* Q18. Write a JavaScript porgram to determine whether a given year is leap year in Gregorian calender

//*********Solution********

const isLeapYear = (y) => {
  return y % 4 === 0 ? "Its a Leap year!" : "Sorry its not a Leap year";
};

console.log(isLeapYear(1998));
