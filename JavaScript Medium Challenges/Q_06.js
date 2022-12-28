//* Q6. Calculate the time?

//* Given a number in seconds, return this number in mm:ss format.

//*********Solution********

const clacTime = (sec /*Time in sec*/) => {
   let min = parseInt(sec / 60);
   min = min < 10 ? "0" + min : min;
   let second = parseInt(sec % 60);
   second = second < 10 ? "0" + second : second;
   return `${min}:${second}`;
};
console.log(clacTime(3650));
