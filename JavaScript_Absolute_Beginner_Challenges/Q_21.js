//* Q21. Write a JavaScript program to calculate days left until next Christmas.

//*********Solution********

const getDaysLeft = () => {
  let now = new Date();
  let Christmas = new Date(now.getFullYear(), 11, 25);
  if (now.getMonth() === 11 && now.getDate() > 25) {
    Christmas.setFullYear(Christmas.getFullYear() + 1);
  }
  let day = 1000 * 60 * 60 * 24;
  let daysLeft = Math.ceil((Christmas.getTime() - now.getTime()) / day);
  return daysLeft + " days left until Christmas!";
};

console.log(getDaysLeft());
