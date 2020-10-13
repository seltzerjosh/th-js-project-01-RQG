/******************************************
 Treehouse FSJS Techdegree:
 project 1 - A Random Quote Generator
 ******************************************/

/***
 * `quotes` array
 ***/
const quotes = [
    {
        quote: 'You miss 100% of the shots you don’t take',
        source: 'Wayne Gretzky',
        citation: 'forbes.com',
        year: '2013',
        picture: 'https://upload.wikimedia.org/wikipedia/commons/0/03/Wayne_Gretzky_2006-02-18_Turin_001.jpg'
    },
    {
        quote: "You know you're in love when you can't fall asleep because reality is finally better than your dreams",
        source: 'Dr. Seuss',
        citation: 'goodreads.com',
        picture: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Ted_Geisel_NYWTS_2_sepia.jpg'
    },
    {quote: "Learn JavaScript and you'll be fine", source: 'r4'},
    {
        quote: 'What do you have to lose? ',
        source: 'Anonymous',
        year: '2020'
    },
    {
        quote: 'Just keep at it every day.',
        source: 'Anonymous',
        year: '2020'
    },
    {
        quote: 'that\'s a lot of pressure.',
        source: 'Alex H.',
        year: '2020'
    }
];

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

//function to randomize the color, called in printQuote
function randomizeColor() {
    let color = () => (Math.floor(Math.random() * 256));
    let randomRGB = `rgb( ${color()}, ${color()}, ${color()} )`;
    document.getElementById('body').style.backgroundColor = randomRGB;
}

//printQuote function defines a newRandomQuote as a call to getRandomQuote, and redoes this until it is not the same as random Quote
//Once this do while is successful, newRandomQuote replaces randomQuote, and is no longer used until the next call.
// It then populates the proper HTML to quoteSource and returns the "new" randomQuote.

function printQuote() {
    let newRandomQuote = getRandomQuote(quotes);
    do {
        newRandomQuote = getRandomQuote(quotes);
    } while (randomQuote === newRandomQuote);
    randomQuote = newRandomQuote;
    let quoteSource = `<p class="quote">${randomQuote.quote}</p><p class="source">${randomQuote.source}`;
    if (randomQuote.citation) {
        quoteSource += `<span class="citation">${randomQuote.citation}</span>`;
    }
    if (randomQuote.year) {
        quoteSource += `<span class="year">${randomQuote.year}</span>`;
    }
    quoteSource += '</p>';
    if (randomQuote.picture) {
        quoteSource += `<img src=${randomQuote.picture} alt="author" width="128" height="160"></img>`;
    }
    document.getElementById('quote-box').innerHTML = quoteSource;
    randomizeColor();
    return randomQuote
}

//starts off the refresh
function startRefresh() {
    timer = setInterval(printQuote, 10000);
}

//resets the refresh
function resetInterval() {
    printQuote();
    clearInterval(timer);
    timer = setInterval(printQuote, 10000);
}

//Initializes print quote (first quote of the site)
printQuote();
//Initializes a timer for start and reset functions
let timer = ''
//Starts off the cycle for the website auto-refresh
startRefresh();
//load-quote click event modified from original requirement to allow for refresh interval to rest to 0
document.getElementById('load-quote').addEventListener("click", resetInterval, false);