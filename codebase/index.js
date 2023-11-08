let cart = [];

// Get the button by class name and add click event
document.addEventListener('DOMContentLoaded', function() {
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  
  addToCartButtons.forEach(button => {
    button.addEventListener('click', addToCart);
  });
});

function addToCart() {
  // Here you can add the product to the cart
  // For the sake of this example, let's add a simple item.
  cart.push("Product Title");

  // Call a function to update the cart display
  updateCart();
}

function updateCart() {
  // Your existing cart update code remains the same
  // ...
}
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

