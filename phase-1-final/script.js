//let stock = 'IPOF'
//let apiKey = '77bee9041a7ec2307b9a6644fb2d307c'
//let  apiKey = '5d15681bbb513c48cd0a23a590947092'
//let apiKey = '7f245f5bc1f73dd003ca66b034f06f81'
let apiKey = '2a33673e3601176f857cb30e5207f88d'

//let url = `https://financialmodelingprep.com/api/v3/quote/${stock}?apikey=${apiKey}`




// queryStock();

function queryStock(ticker) {
fetch(`https://financialmodelingprep.com/api/v3/quote/${ticker}?apikey=${apiKey}`)
.then(resp => resp.json())
.then(stock => {
  renderPrice(stock)
  //buyFunction(stock[0].price)
})
} 


let stockPrice = 0
function renderPrice(stock) {
  const priceContainer = document.getElementById('priceContainer')
  stockPrice = stock[0].price
  
  stockPrice = stockPrice.toFixed(2)
  console.log(stockPrice)
  console.log(parseInt(priceContainer.textContent))
  priceContainer.textContent = '$ ' + stockPrice;

  const buyForm = document.querySelector('#buyStock')
  buyForm.addEventListener("submit", (e) => {
    e.preventDefault()
    console.log(stockPrice)
    const quantity = e.target.children[0].value
    const stockSymbol = stock[0].symbol
    const value = quantity * stockPrice
    console.log(quantity, stockSymbol, value)
  })

}

userInput();
function userInput(stock) {
  const inputField = document.getElementById('stock-query')
  const searchForm = document.getElementById('search-stock')

  searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    queryStock(inputField.value.toUpperCase())
    combineTicker(inputField.value.toUpperCase())
  })
}

combineTicker('SP')

//chart in progress
function combineTicker(ticker) {
  // const tickerSymbol = tickerObj.options.symbol 
  // const tickerSplit = tickerSymbol.split(':')
  // const nasdaq = tickerSplit[0]
  // const completeSymbol = nasdaq + ":"+ticker

  const completeSymbol = ticker
  
  const tickerObj = new TradingView.widget(
    {
    "width": 980,
    "height": 610,
    "symbol": completeSymbol,
    "interval": "30",
    "timezone": "Pacific/Auckland",
    "theme": "dark",
    "style": "1",
    "locale": "en",
    "toolbar_bg": "#f1f3f6",
    "enable_publishing": false,
    "hide_side_toolbar": false,
    "allow_symbol_change": true,
    "container_id": "tradingview_b7a08"
  }
    );

    tickerObj.options.symbol.textContent = completeSymbol
    console.log(completeSymbol)
    document.querySelector(".tradingview-widget-container").append(tickerObj)
    
}

// const buyInput = document.querySelector("buy")

// function buyFunction(stockPrice) {
//   buyInput.value = stockPrice
//}

// const buyInput = document.getElementById('buy')
// const buyStock = document.getElementById('buyStock')
// buyStock.addEventListener('submit', (e) => {
//   e.preventDefault();
//   console.log(e.target.elements[0].value)
// })






// const btn = document.querySelector("[data-btn]")
// btn.addEventListener("click", () => {
//   btn.classList.add("animating")
// })
