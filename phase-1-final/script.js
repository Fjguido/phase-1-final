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
//Render the searched stock price onto the page
function renderPrice(stock) {
  const priceContainer = document.getElementById('priceContainer')
  totalPrice = stock[0].price
  totalPrice = totalPrice.toFixed(2) 

  priceContainer.textContent = '$ ' + totalPrice;

}

//Event listener for the buy form to append the stock name, quantity, value onto the Table DOM
const buyForm = document.querySelector('#buy-btn')
buyForm.addEventListener("click", (e) => {
  e.stopPropagation()
  e.preventDefault()
  const priceContainer = document.getElementById('priceContainer')
  const quantity = document.getElementById('buy').value
  const stockSymbol = document.getElementById('stock-query').value.toUpperCase();
  const value = document.getElementById('priceContainer').innerHTML
  const numberValue = value.slice(2) 

  //Grab buying power to update
  let buyingPowerLocation = document.querySelector('.portfolioValue')
  console.log(buyingPowerLocation.textContent)
  let buyingPower = buyingPowerLocation.textContent
  // console.log(buyingPower)
  buyingPower = buyingPower.replace('$', '')
  buyingPower = buyingPower.replace(',', '')
  buyingPower = parseInt(buyingPower);
  buyingPower = buyingPower - totalPrice*quantity;
  let dollarUSLocale = Intl.NumberFormat('en-US');


  buyingPower =  ("$" + dollarUSLocale.format(buyingPower));
  buyingPowerLocation.textContent = buyingPower;
  console.log(buyingPower)

  totalPrice = numberValue * quantity
  totalPrice = totalPrice.toFixed(2) 
  priceContainer.textContent = value;
  
  onAddWebsite(quantity, stockSymbol, totalPrice)
})


//function to add the user input onto the chart

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
          <td><button class="deleteBtn">Sell All</button></td>
      </tr>
  `;
}


function onDeleteRow(e) {
  if (!e.target.classList.contains("deleteBtn")) {
    return;
  }
  //Grab buying power to update
  let buyingPowerLocation = document.querySelector('.portfolioValue')
  console.log(buyingPowerLocation.textContent)
  let buyingPower = buyingPowerLocation.textContent
  // console.log(buyingPower)
  buyingPower = buyingPower.replace('$', '')
  buyingPower = buyingPower.replace(',', '')
  buyingPower = parseInt(buyingPower);
 //buyingPower = buyingPower + totalPrice;
  buyingPower = 100000
  let dollarUSLocale = Intl.NumberFormat('en-US');


  buyingPower =  ("$" + dollarUSLocale.format(buyingPower));
  buyingPowerLocation.textContent = buyingPower;
  console.log(buyingPower)

  const btn = e.target;
  console.log(totalPrice)
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




