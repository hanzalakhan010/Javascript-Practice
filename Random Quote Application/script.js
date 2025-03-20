let localQuote = JSON.parse(localStorage.getItem('quotes'))
async function loadQuote() {
    if (!localQuote) {
        let response = await fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
        let data = await response.json()
        console.log(data.quotes)
        localStorage.setItem('quotes', JSON.stringify(data.quotes))
        localQuote = data.quotes
        // loadQuote()
    }
    else {
        let randomInt = Math.floor(Math.random()*localQuote.length)
        document.getElementById('text').innerText = localQuote.at(randomInt)['quote']
        document.getElementById('author').innerText = localQuote.at(randomInt)['author']
    }
}


async function copyQuote(){
    quote = document.getElementById('text').innerText
    author = document.getElementById('author').innerText
    await navigator.clipboard.writeText(`Quote:${quote},Autor:${author}`)
    alert('Copoied to clipboard')
}
loadQuote()
