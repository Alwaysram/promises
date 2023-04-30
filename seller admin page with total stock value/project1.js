const productList = document.getElementById('product-list');
const addProductButton = document.getElementById('add-product');
const totalValueElement = document.getElementById('total-value');

// Load products from local storage
const products = JSON.parse(localStorage.getItem('products')) || [];

// Display products on the screen
let totalValue = 0;
for (const product of products) {
  addProductToList(product.name, product.price);
  totalValue += parseFloat(product.price);
}
totalValueElement.textContent = totalValue.toFixed(2);

// Add a new product to the list when the user clicks the "Add Product" button
addProductButton.addEventListener('click', () => {
  const productName = document.getElementById('product-name').value;
  const productPrice = document.getElementById('product-price').value;
  const product = { name: productName, price: productPrice };
  products.push(product);
  addProductToList(productName, productPrice);
  totalValue += parseFloat(productPrice);
  totalValueElement.textContent = totalValue.toFixed(2);
  saveProductsToLocalStorage();
});

// Delete a product from the list when the user clicks the "Delete" button
productList.addEventListener('click', (event) => {
  if (event.target.classList.contains('delete-button')) {
    const productName = event.target.parentNode.querySelector('.product-name').textContent;
    const productIndex = products.findIndex(product => product.name === productName);
    const productPrice = parseFloat(products[productIndex].price);
    products.splice(productIndex, 1);
    event.target.parentNode.remove();
    totalValue -= productPrice;
    totalValueElement.textContent = totalValue.toFixed(2);
    saveProductsToLocalStorage();
  }
});

// Helper function to add a product to the list
function addProductToList(name, price) {
  const product = document.createElement('li');
  product.classList.add('product');
  product.innerHTML = `<span class="product-name">${name}</span> - <span class="product-price">${price}</span> <button class="delete-button">Delete</button>`;
  productList.appendChild(product);
}

// Help function to save the products to local storage
function saveProductsToLocalStorage() {
  localStorage.setItem('products', JSON.stringify(products));
}