//* Q36. Write a JavaScript program to check whether a string starts With 'Java'  and false otherwise?

//*********Solution********

const startWith = (str) => {
  return str.startsWith("Java");
};
console.log(startWith("JavaScritp"));
console.log(startWith("Scritp"));
console.log(startWith("javaScritp"));
