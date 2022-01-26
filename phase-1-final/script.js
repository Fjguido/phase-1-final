let apiKey = '77bee9041a7ec2307b9a6644fb2d307c'
//let  apiKey = '5d15681bbb513c48cd0a23a590947092'
//let apiKey = '7f245f5bc1f73dd003ca66b034f06f81'
//let apiKey = '2a33673e3601176f857cb30e5207f88d'

function queryStock(ticker) {
fetch(`https://financialmodelingprep.com/api/v3/quote/${ticker}?apikey=${apiKey}`)
.then(resp => resp.json())
.then(stock => {
  renderPrice(stock)
})
} 

let stockPrice = 0
function renderPrice(stock) {
  const priceContainer = document.getElementById('priceContainer')
  stockPrice = stock[0].price
  
  stockPrice = stockPrice.toFixed(2)
  console.log(stockPrice)
  priceContainer.textContent =  stockPrice;

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


const formEl = document.querySelector("#search-stock");
const tbodyEl = document.querySelector("tbody");
const tableEl = document.querySelector("table");
      
      function onAddWebsite(e) {
        e.preventDefault();
        const stockName = document.getElementById("stock-query").value;
        const quantityOfStock = document.getElementById("buy").value;
        let priceOfStock = document.getElementById('priceContainer').value;
        console.log(priceOfStock)
        priceOfStock = parseInt(priceOfStock)
        console.log(priceOfStock)
        tbodyEl.innerHTML += `
            <tr>
                <td>${stockName}</td>
                <td>${priceOfStock}</td>
                <td>${quantityOfStock}</td>
                <td>${priceOfStock * quantityOfStock}</td>
            </tr>
        `;
      }

      formEl.addEventListener("submit", onAddWebsite);


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

combineTicker('SPY')

//chart in progress
function combineTicker(ticker) {
 
  const completeSymbol = ticker
  
  const tickerObj = new TradingView.widget(
    {
    "width": 1100,
    "height": 710,
    "symbol": completeSymbol,
    "interval": "D",
    "timezone": "America/New_York",
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
    
    
}







// const btn = document.querySelector("[data-btn]")
// btn.addEventListener("click", () => {
//   btn.classList.add("animating")
// })
