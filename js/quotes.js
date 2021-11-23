const quote = document.querySelector("#quote span");
const author = document.querySelector("#author span");

const SAVED_QUOTE_NAME = "quote";
const QUOTE_API_URL = "https://type.fit/api/quotes";

fetch(QUOTE_API_URL).then((response) => {
    if (response.ok) {
        return response.json();
    } else {
        throw new Error("Quote Download Error");
    }
})
.then((quotesArray) => {
    const selectedQuote = quotesArray[Math.floor(Math.random() * quotesArray.length)];
    quote.innerText = selectedQuote.text;
    author.innerText = selectedQuote.author;
    localStorage.setItem(SAVED_QUOTE_NAME, JSON.stringify(selectedQuote));
})
.catch((error) => {
    console.log(error);
    const savedQuote = localStorage.getItem(SAVED_QUOTE_NAME);
    if(savedQuote !== null) {
        const quoteObj = json.parse(savedQuote);
        quote.innerText = quoteObj.text;
        author.innerText = quoteObj.author;
    }
})