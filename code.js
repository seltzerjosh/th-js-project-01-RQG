const quotes = [];

function addQuote (quote, source, citation, year) {
    if ((citation === undefined && year === undefined) ) {
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
addQuote('rickyyy', 'scoot',undefined, '2020');

console.log(quotes);