//* Q20. Write a JavaScript  program wher the program takes a random integer between 1 to 10, the use is then prompted to input a guess number. if the use imput matches with hues numbre, the program will display a message "Good Work" otherwise display a message "Not Matched".

//*********Solution********

const guessNumber = () => {
  let randomNumber = Math.floor(Math.random() * 10 + 1);
  console.log(randomNumber);
  let userGuessed = +prompt("Guessed the Number between 1 - 10:");
  if (randomNumber === userGuessed) {
    alert("GOOD WORK!");
  } else {
    alert("NOT MATCHED..🥲");
  }
};
guessNumber();
