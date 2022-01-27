//let apiKey = '77bee9041a7ec2307b9a6644fb2d307c'
let  apiKey = '5d15681bbb513c48cd0a23a590947092'
//let apiKey = '7f245f5bc1f73dd003ca66b034f06f81'
//let apiKey = '2a33673e3601176f857cb30e5207f88d'
function queryStock(ticker) {
fetch(`https://financialmodelingprep.com/api/v3/quote/${ticker}?apikey=${apiKey}`)
.then(resp => resp.json())
.then(stock => {
  renderPrice(stock)
})
} 

//let totalPrice = 0
function renderPrice(stock) {
  const priceContainer = document.getElementById('priceContainer')
  totalPrice = stock[0].price
  totalPrice = totalPrice.toFixed(2) 

  priceContainer.textContent = '$ ' + totalPrice;

}

const buyForm = document.querySelector('#buy-btn')
buyForm.addEventListener("click", (e) => {
  e.stopPropagation()
  e.preventDefault()
  const priceContainer = document.getElementById('priceContainer')
  const quantity = document.getElementById('buy').value
  const stockSymbol = document.getElementById('stock-query').value.toUpperCase();
  const value = document.getElementById('priceContainer').innerHTML
  const numberValue = value.slice(2) 

  totalPrice = numberValue * quantity
  totalPrice = totalPrice.toFixed(2) 
  priceContainer.textContent = value;
  
  onAddWebsite(quantity, stockSymbol, totalPrice)
})




const formEl = document.querySelector("#buyStock");
const tbodyEl = document.querySelector("tbody");
const tableEl = document.querySelector("table");
      
function onAddWebsite(quantity, stockSymbol, totalPrice) {
  
  let shareValue = totalPrice/quantity
  shareValue = shareValue.toFixed(2);
  tbodyEl.innerHTML += `
      <tr>
          <td>${stockSymbol}</td>
          <td>$ ${shareValue}</td>
          <td>${quantity}</td>
          <td>$ ${totalPrice}</td>
          <td><input type="number" id="sellBox"><button class="deleteBtn">Sell</button></td>
      </tr>
  `;
}


function onDeleteRow(e) {
  if (!e.target.classList.contains("deleteBtn")) {
    return;
  }

  const btn = e.target;
  btn.closest("tr").remove();
}

formEl.addEventListener("submit", onAddWebsite);
tableEl.addEventListener("click", onDeleteRow);


userInput();
function userInput(stock) {
  const inputField = document.getElementById('stock-query')
  const searchForm = document.getElementById('search-stock')

  searchForm.addEventListener('submit', (e) => {
    e.stopPropagation()
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




