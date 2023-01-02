//* Q22. Write a program to calculate multiplication and division of tw snumbers (input from user).

// 1.Create two input field for user to enter the number.
// 2. Add two button to named "Multiply" and "Divide".
// 3. And display the result.

//*********Solution********

const Multiply = () => {
  let num1 = document.querySelector(".firstOperand input").value;
  let num2 = document.querySelector(".secondOperand  input").value;

  const result = document.getElementById("result");
  result.textContent = `${num1} Multiply ${num2} is equals to :${num1 * num2}`;
};

const Divide = () => {
  let num1 = document.querySelector(".firstOperand input").value;
  let num2 = document.querySelector(".secondOperand  input").value;
  const result = document.getElementById("result");
  result.textContent = `${num1} Divide ${num2} is equals to : ${num1 / num2}`;
};
