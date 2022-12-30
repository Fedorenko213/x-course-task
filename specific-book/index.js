function addToCart() {
  const totalElement = document.querySelector('#total')
  const itemPrice = Number(document.querySelector('.price').innerText)
  const totalPrice = Number(totalElement.innerText)
  totalElement.innerText = totalPrice + itemPrice
}