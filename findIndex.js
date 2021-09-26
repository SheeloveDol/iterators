const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

//Finding the location of 'elephant' 
const foundAnimal = animals.findIndex(animal => animal === 'elephant')

//Finding the location of first element that starts with 's'
const startsWithS = animals.findIndex(animal => animal[0] === 's')