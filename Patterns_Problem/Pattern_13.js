//* Pattern_13:- Given a value n (positive integer), print th following pattern on the screen.

//*********Solution********

const pattern = (n) => {
  let flip = 1; //for every odd number row we start with 1.
  for (let i = 1; i < n; i++) {
    let str = "";
    flip = i % 2 !== 0 ? 1 : 0;
    for (let j = 1; j <= i; j++) {
      str += flip;
      flip = 1 - flip;
    }
    console.log(str);
  }
};
pattern(5);
