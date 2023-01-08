//* Q45.Write a JavaScript program to check whether the last digit of the three given postive integer is same?

//*********Solution********

const last_digit = (n1, n2, n3) => {
  if (n1 > 0 && n2 > 0 && n3 > 0) {
    let rem1 = n1 % 10;
    let rem2 = n2 % 10;
    let rem3 = n3 % 10;
    return rem1 === rem2 && rem2 === rem3;
  } else {
    return false;
  }
};
console.log(last_digit(20, 30, 400));
console.log(last_digit(-20, 30, 400));
console.log(last_digit(20, -30, 400));
console.log(last_digit(20, 30, -400));
