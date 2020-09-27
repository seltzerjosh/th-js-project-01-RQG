/******************************************
 Treehouse FSJS Techdegree:
 project 1 - A Random Quote Generator
 ******************************************/

/***
 * `quotes` array
 ***/
const quotes = []; //This line setsup quotes as an empty array

//Function that checks for truthy quote and source, and optional citation and year before pushing new quote to array
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
//Adding quotes
addQuote('You miss 100% of the shots you don’t take', 'Wayne Gretzky', 'forbes.com', '2013');
addQuote('You know you\'re in love when you can\'t fall asleep because reality is finally better than your dreams', 'Dr. Seuss', 'goodreads.com');
addQuote('Learn JavaScript and you\'ll be fine', 'r4',);
addQuote('What do you have to lose? ', 'Anonymous', '', '2020');
addQuote('Just keep at it every day.', 'Anonymous', '', '2020');

/***
 * `getRandomQuote` function
 ***/
//Function that gets a quote from the array of quotes based on a random selection of quotes available
function getRandomQuote(quotes) {
    return quotes[Math.floor(Math.random() * (quotes.length))]
}

/***
 * `printQuote` function
 ***/

//Populates the randomQuote outside of the function to allow for a do while statement within the printQuote function
    //This allows for a redundancy check against show the same quote twice in a row
let randomQuote = getRandomQuote(quotes);

//printQuote function defines a newRandomQuote as a call to getRandomQuote, and redoes this until it is not the same as random Quote
    //Once this do while is successful, newRandomQuote replaces randomQuote, and is no longer used until the next call.
    // It then populates the proper HTML to quoteSource and returns the "new" randomQuote.
function printQuote() {
    let newRandomQuote = getRandomQuote(quotes);
    do {
        newRandomQuote = getRandomQuote(quotes);
    } while (randomQuote === newRandomQuote);
    randomQuote = newRandomQuote;
    let quoteSource = `<p class="quotes">${randomQuote.quote}</p><p class="source">${randomQuote.source}`;
    if (randomQuote.citation) {
        quoteSource += `<span class="citation">${randomQuote.citation}</span>`;
    }
    if (randomQuote.year) {
        quoteSource += `<span class="year">${randomQuote.year}</span>`;
    }
    quoteSource += '</p>';
    document.getElementById('quote-box').innerHTML = quoteSource;
    return randomQuote
}

//This is the first call to printQuote, which starts off the cycle
printQuote();
//Activates the 'Show another quote' button
document.getElementById('load-quote').addEventListener("click", printQuote, false);