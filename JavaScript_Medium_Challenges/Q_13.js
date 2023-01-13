//* Q13. Write a JavaScript program to wasp pairs of adgacent digits of a given integer of even length.

//*********Solution********

const swapAdjacentDigits = (n) => {
  let result = 0;
  let x = 1;
  if (n.toString().length % 2 !== 0) {
    return false;
  }
  while (n !== 0) {
    let digi1 = n % 10; //first iteration:-  digi1 = 1234%10 = 4
    let digi2 = ((n - digi1) / 10) % 10; //first iteration:- digi2 = 1234-4=1230/10=123%10 =  3
    result += x * (10 * digi1 + digi2); //first iteration:- result = 1*(10*4+3) = 43
    n = Math.floor(n / 100); //first iteration:- floor(1234/100) = 12
    x *= 100; //first iteration:- x= 1*100 = 100
  }
  return result;
};
console.log(swapAdjacentDigits(15));
console.log(swapAdjacentDigits(123456));
console.log(swapAdjacentDigits(12345));
console.log(swapAdjacentDigits(1230));
//second iteration:- digi1 = 12%10 = 2;
//second iteration:- digi2 = ((12-2=10)/10=1)%10 = 1
//second iteration:- result = 100*(10*2+1)+43=100*21+43 = 2143
//second iteration:- n = floor(12/100) = 0
// second iteration:- x = 100*100 = 10000
