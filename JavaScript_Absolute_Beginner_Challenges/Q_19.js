//* Q19. Write a JavaScript program to find which 1st january is being a Sunday between 2014 and 2050.

//*********Solution********

const getYears = () => {
  for (let y = 2014; y <= 2050; y++) {
    let d = new Date(y, 0, 1);
    if (d.getDay() === 0) {
      console.log("1st January is being a Sunday " + y);
    }
  }
};
getYears();
