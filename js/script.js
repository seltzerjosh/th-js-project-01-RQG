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
    if (!quote || !source) {
        console.log(`${quote} ${source} 'Needs a quote and source.'`);
    } else if (!citation && !year) {
        quotes.push({quote, source});
    } else if (!citation) {
        quotes.push({quote, source, year});
    } else if (!year) {
        quotes.push({quote, source, citation});
    } else {
        quotes.push({quote, source, citation, year});
    }
}

addQuote('You miss 100% of the shots you don’t take', 'Wayne Gretzky', 'forbes.com', '2013');
addQuote('You know you\'re in love when you can\'t fall asleep because reality is finally better than your dreams', 'Dr. Seuss', 'goodreads.com');
addQuote('Learn JavaScript and you\'ll be fine', 'r4',);
addQuote('What do you have to lose? ', 'Anonymous', '', '2020');

/***
 * `getRandomQuote` function
 ***/

function getRandomQuote(quotes) {
    let selectedQuote = quotes[Math.floor(Math.random() * (quotes.length))]
    return selectedQuote
}

/***
 * `printQuote` function
 ***/
function printQuote(selectedQuote) {
    let randomQuote = getRandomQuote(quotes);
    let quoteSource = `<p class="quotes">${randomQuote.quote}</p><p class="source">${randomQuote.source}`;
    if (randomQuote.citation) {
        quoteSource += `<span class="citation">${randomQuote.citation}</span>`;
    }
    if (randomQuote.year) {
        quoteSource += `<span class="year">${randomQuote.year}</span>`;
    }
    quoteSource += '</p>';
    document.getElementById('quote-box').innerHTML = quoteSource;
}

printQuote();

document.getElementById('load-quote').addEventListener("click", printQuote, false);