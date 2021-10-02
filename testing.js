const mainWords = ['first', 'second', 'second', 'third', 'fourth', 'fourth', 'fifth', 'sixth'];

const forRemoval = ['second', 'fourth'];

const whatsLeft = mainWords.filter(word => !forRemoval.includes(word));

console.log(whatsLeft)
console.log('')

let first = 0;
let second = 0;

const solution = mainWords.forEach(word => {
  if (word === 'second') {
    first += 1;
    
  } else if (word === 'fourth') {
    second += 1;
    
  }
})

console.log(first, second)

// iterate over first array
// then iterate over second array
// compare items from each array to each other
// have a counter that keeps track of the number of times each item is repeated in both arrays