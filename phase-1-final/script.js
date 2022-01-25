let stock = 'TSLA'
//let apiKey = '77bee9041a7ec2307b9a6644fb2d307c'
let  apiKey = '5d15681bbb513c48cd0a23a590947092'

let url = `https://financialmodelingprep.com/api/v3/quote/${stock}?apikey=${apiKey}`



fetch(url)
.then(resp => resp.json())
.then(data => {
  console.log(data[0].price)
  const searchInput = document.querySelector(".form-group")
  const priceContainer = document.getElementById('price')
  const stockPrice = data[0].price
  priceContainer.textContent = stockPrice;

  searchInput.addEventListener('click', (e) => {
    
    console.log(e.target.elements[0].value);
  })
  
})

const btn = document.querySelector("[data-btn]")
btn.addEventListener("click", () => {
  btn.classList.add("animating")
})
