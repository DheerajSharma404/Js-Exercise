//* Q40. Write a JavaScript to find a value which is nearest to 100 from two different given interger value?

//*********Solution********

const near_100 = (n1, n2) => {
  if (n1 !== n2) {
    let diff1 = 100 - n1;
    let diff2 = 100 - n2;
    return diff1 > diff2 ? n2 : n1;
  } else {
    return false;
  }
};
console.log(near_100(90, 89));
console.log(near_100(-90, -89));
console.log(near_100(90, 90));
