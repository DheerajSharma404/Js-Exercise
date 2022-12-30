//* Q15 Write a JavaScript program to display the current day and time in the following format.

// Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

//*********Solution********

const getDayAndTime = () => {
  const now = new Date();
  let day = now.getDay();
  const daysArray = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let h = now.getHours();
  let m = now.getMinutes();
  let s = now.getSeconds();
  const suffix = h >= 12 ? "PM" : "AM";
  h = h >= 13 && h <= 23 ? h - 12 : h + 12;
  h = h <= 9 ? `0${h}` : `${h}`;
  m = m <= 9 ? `0${m}` : `${m}`;
  s = s <= 9 ? `0${s}` : `${s}`;
  let desireOutput = `Today is : ${daysArray[day]}\nCurrent time is : ${h} : ${m} : ${s} ${suffix}`;
  return desireOutput;
};

console.log(getDayAndTime());
