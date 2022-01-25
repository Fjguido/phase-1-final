let stock = 'IPOF'
//let apiKey = '77bee9041a7ec2307b9a6644fb2d307c'
//let  apiKey = '5d15681bbb513c48cd0a23a590947092'
let apiKey = '7f245f5bc1f73dd003ca66b034f06f81'
//let apiKey = '2a33673e3601176f857cb30e5207f88d'

let url = `https://financialmodelingprep.com/api/v3/quote/${stock}?apikey=${apiKey}`

const priceContainer = document.getElementById('priceContainer')


queryStock();

function queryStock() {
fetch(url)
.then(resp => resp.json())
.then(stock => renderPrice(stock))
} 



function renderPrice(stock) {
  let stockPrice = stock[0].price
  stockPrice = Math.round(100*stockPrice)/100;
  priceContainer.textContent = '$ ' + stockPrice;

}

userInput();
function userInput(stock) {
  const inputField = document.getElementById('stock-query')
  const searchForm = document.getElementById('search-stock')

  searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(inputField.value.toUpperCase())
  })
}










// const btn = document.querySelector("[data-btn]")
// btn.addEventListener("click", () => {
//   btn.classList.add("animating")
// })
