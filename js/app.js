'use strict';

const randomButton = document.querySelector('.newQuote');
const quoteCont = document.querySelector('.quoteContainer');

const quoteArray = [
  {
    quote: 'Quote (1)',
    source: 'Person (1)',
  },
  {
    quote: 'Quote (2)',
    source: 'Person (2)',
  },
  {
    quote: 'Quote (3)',
    source: 'Person (3)',
  },
  {
    quote: 'Quote (4)',
    source: 'Person (4)',
  },
  {
    quote: 'Quote (5)',
    source: 'Person (5)',
  },
  {
    quote: 'Quote (6)',
    source: 'Person (6)',
  },
  {
    quote: 'Quote (7)',
    source: 'Person (7)',
  },
  {
    quote: 'Quote (8)',
    source: 'Person (8)',
  },
];

function printRandomQuote() {
  let randomNumber = Math.floor(Math.random() * quoteArray.length);
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
