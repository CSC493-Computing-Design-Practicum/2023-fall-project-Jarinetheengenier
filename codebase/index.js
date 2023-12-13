
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


// const addToCartButtons = document.querySelectorAll(".add-to-cart");
document.addEventListener("DOMContentLoaded", function() {
  const payment = document.querySelector(".payment");
  const close = document.querySelector(".close");
  const buttons = document.querySelectorAll(".normal");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      payment.style.display = "flex";
    });
  });
});

    
   

//     let iitem = {
//       name: "Glorydome",
//       price: 88.99,
//       quantity: 1,
      
//     };

//     let iiitem = {
//       name: "Jiliah",
//       price: 75.99,
//       quantity: 1,
      
//     };



    
    
//      localStorage.setItem('cartItem', JSON.stringify(item));
   
//   });
// });
     
close.addEventListener("click", () => {
  payment.style.display = "none";
});

// let cartItem = JSON.parse(localStorage.getItem('cartItem')); // Retrieve the item from localStorage

// if (cartItem) {
 
//   console.log(cartItem.name);
//   console.log(cartItem.price);
//   console.log(cartItem.quantity);
// }


