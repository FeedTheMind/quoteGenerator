'use strict';

const randomButton = document.querySelector('.newQuote');
const quoteCont = document.querySelector('.quoteContainer');
let lastRandom; /* Holds value of generated number */

const quoteArray = [
  {
    quote: "I know you've heard it a thousand times before. " +
      "But it's true: hard work pays off. If you want to be good, you have to practice, " +
      "practice, practice. If you don't love something, then don't do it.",
    source: 'Ray Bradbury',
  },
  {
    quote: 'Love what you do and do what you love.',
    source: 'Ray Bradbury',
  },
  {
    quote: 'We can complain because rose bushes have thorns, or' + 
      ' rejoice because thorn bushes have roses.',
    source: 'Abraham Lincoln',
  },
  {
    quote: 'Character is like a tree and reputation like a shadow.' +
      ' The shadow is what we think of it; the tree is the real thing.',
    source: 'Abraham Lincoln',
  },
  {
    quote: 'In any moment of decision, the best thing you can do is the right thing,' +
      ' the next best thing is the wrong thing, and the worst thing you can do is nothing.',
    source: 'Theodore Roosevelt',
  },
  {
    quote: 'Do what you can, with what you have, where you are.',
    source: 'Theodore Roosevelt',
  },
  {
    quote: 'No problem can be solved from the same level of consciousness that created it.',
    source: 'Albert Einstein',
  },
  {
    quote: 'The important thing is not to stop questioning. Curiosity has its own reason for existing.',
    source: 'Albert Einstein',
  },
];

function printRandomQuote() {
  let randomNumber = Math.floor(Math.random() * quoteArray.length);

  // Enter loop when values equal (true)
  while (randomNumber === lastRandom) {
    // Exit when values are unequal (false)
    randomNumber = Math.floor(Math.random() * quoteArray.length);
  }

  lastRandom = randomNumber;

  let randomQuote = quoteArray[randomNumber];
  let quoteString = '<p class="quote">';

  quoteString += randomQuote.quote;
  quoteString += '<span class="source">';
  quoteString += randomQuote.source;
  quoteString += '</span>';
  quoteString += '</p>';

  quoteCont.innerHTML = quoteString;

  randomButton.innerHTML = 'Reveal another.';
}

randomButton.addEventListener('click', printRandomQuote);
