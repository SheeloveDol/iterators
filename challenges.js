//Define a callback function before you use it in a iterator.

const times2 = num => num * 2;

const array = [1, 2, 3, 4, 5, 6, 7, 8];

const doubled = array.map(times2);

console.log(doubled)

//Chain two iteration methods on the same array.
console.log(array.map(times2).filter(num => num > 8))

// Use the optional arguments in an iterator to include the index or the entire array.



//Use .reduce() to take a multi-layered array and return a single layer array from scratch.
console.log(doubled.reduce((a, b) => a + b))