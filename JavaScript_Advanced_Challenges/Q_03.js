//* Q3. Sort by highest to lowest price?

//* Givven an array of objects, return the prices sorted by high to low.

//*********Solution********

const sortHighToLow = (arr) => arr.sort((a, b) => b.price - a.price);

const items = [
   { id: 1, price: 50 },
   { id: 2, price: 90 },
   { id: 3, price: 10 },
   { id: 4, price: 60 },
   { id: 5, price: 80 },
   { id: 6, price: 70 },
];
console.log(sortHighToLow(items));
