//* Q3. Get the last elment in an array?

//* given an array, return the first element.

//*********Solution********

const lastElem = (arr) => arr[arr.length - 1];
console.log(lastElem([3, 2, 0, 6, 2]));
console.log(lastElem(["dog", "cat", "ball"]));
console.log(lastElem([null, 5, false]));
