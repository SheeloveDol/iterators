let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

//Turing story into an array
let storyWords = story.split(' ');

//Logging the number of words in storyWords array
console.log(storyWords.length);

//Filtering unnecessaryWords from story
const betterWords = storyWords.filter(word => !unnecessaryWords.includes(word));

//Showing the number of overused words
let really = 0;
let very = 0;
let basically = 0;

 storyWords.forEach(word => {
  if (word === overusedWords[0]) {
    really += 1;
  } else if (word === overusedWords[1]) {
    very += 1;
  } else if (word === overusedWords[2]) {
    basically += 1;
  }
})

console.log(`You've used the word 'really' ${really} times. The word 'very' ${very} times. The word 'basically' ${basically} times`);
console.log('')
// console.log(storyWords)

//Counting the number of sentences in the story
let numOfSentences = 0;

storyWords.forEach(word => {
  if (word[word.length-1] === '.' || word[word.length-1] === '!') {
    numOfSentences += 1;
  }
})

//Logging number of senteces
console.log(`This story has ${numOfSentences} sentences`)
console.log('')

//Logging betterWords to the console as a string

console.log(betterWords.join(' '))