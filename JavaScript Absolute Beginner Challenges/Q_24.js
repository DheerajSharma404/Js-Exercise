//* Q24. Write a JavaScript program to get the extension of the filename?

//*********Solution********

const getFilename = (str) => {
  return str.split(".").pop();
};
console.log(getFilename("index.js"));

console.log(getFilename("index.html"));
console.log(getFilename("index.css"));
