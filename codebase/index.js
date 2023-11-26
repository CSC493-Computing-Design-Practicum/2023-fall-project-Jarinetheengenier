
const product= [
{
  id:1,
  title:"Glorydome",
  price: 88.99,
  Image: "images/L9.jpg" 

},

{
  id:1,
  title:"Jiliah",
  price: 75.99,
  Image: "images/L5.jpg" 

},

{
  id:1,
  title:"Blue party gown",
  price: 159.99,
  Image: "images/listing1.jpg" 

},
]



let cart = [];

// Get the button by class name and add click event
document.addEventListener('DOMContentLoaded', function() {
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  
  addToCartButtons.forEach(button => {
    button.addEventListener('click', addToCart);
  });
});

function addToCart() {
  cart.push("product-listing");

  // Call a function to update the cart display
  updateCart();
}

function updateCart() {
  // Your existing cart update code remains the same
  // ...

  cart.forEach(item => {
    const itemElement = document.createElement("p");
    itemElement.textContent = item;
    cartElement.appendChild(itemElement);
  });

  // Remove the existing cart and append the updated one
  const existingCart = document.querySelector('.cart');
  if (existingCart) {
    existingCart.remove();
  }

  document.body.appendChild(cartElement);
}
 
  // setting up functionality for the payment option on my code

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});

