/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
const quotes = [];

function addQuote(quote, source, citation, year) {
    if ((citation === undefined && year === undefined)) {
        quotes.push({quote, source});
    } else if (citation === undefined) {
        quotes.push({quote, source, year});
    } else if (year === undefined) {
        quotes.push({quote, source, citation});
    } else {
        quotes.push({quote, source, citation, year});
    }
}

addQuote('let\'s play league', 'r4', 'discord', '2020');
addQuote('bread wars', 'sp00ki', 'discord');
addQuote('yeet boiiii', 'anon',);
addQuote('rickyyy', 'scoot', undefined, '2020');

/***
 * `getRandomQuote` function
***/



/***
 * `printQuote` function
***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);