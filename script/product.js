
let products = [
   
  {
<<<<<<< HEAD
    id:   "item-one",
=======
    id: 1,
>>>>>>> cb393b7fc729a5f5f447855075187cf092763189
   image: "https://i.postimg.cc/nrzH1kq4/model-card-1.jpg" ,
    size:   3,
    desc: "Crop-T/Denim Rip jeans outfit.",
    price: "R1600",
    button:"Buy now"
  },
  {
<<<<<<< HEAD
    id:   "item-two",
=======
    id: 2,
>>>>>>> cb393b7fc729a5f5f447855075187cf092763189
    image: "https://i.postimg.cc/Njv3sDLd/model-card-2.jpg" ,
    size:   3,
    desc: "Crop-T/Denim Rip jeans outfit.",
    price: "R1800",
    button:"Buy now"
  },
  {
<<<<<<< HEAD
    id:   "item-three",
=======
    id: 3,
>>>>>>> cb393b7fc729a5f5f447855075187cf092763189
    image: "https://i.postimg.cc/9FgvT2xN/model-card4.jpg" ,
    size:  3,
    desc: "Crew Neck/Denim jeans outfit.",
    price: "R4500",
    button:"Buy now"
  },
  { 
<<<<<<< HEAD
    id:   "item-four",
=======
    id: 4,
>>>>>>> cb393b7fc729a5f5f447855075187cf092763189
    image: "https://i.postimg.cc/Zqqgq5zq/soft-boy-3.jpg" ,
    size: 3,
    desc: "Crew Neck Base Ball outfit..",
    price: "R2500",
    button:"Buy now"
  },
  { 
<<<<<<< HEAD
    id:   "item-five",
=======
    id: 5,
>>>>>>> cb393b7fc729a5f5f447855075187cf092763189
    image: "https://i.postimg.cc/x87j64Gv/soft-boy.jpg" ,
    size: 3,
    desc: "White Burberry's-T/Denim jeans outfit.",
    price: "R2000",
    button:"Buy now"
  },
  { 
<<<<<<< HEAD
    id:   "item-six",
=======
    id: 6,
>>>>>>> cb393b7fc729a5f5f447855075187cf092763189
    image: "https://i.postimg.cc/j5c4nz60/soft-boy-2.jpg" ,
    size: 3,
    desc: "Cardigan Jersey/Denim jeans outfit.",
    price: "R2500",
    button:"Buy now"
  },
  {
<<<<<<< HEAD
    id:   "item-seven",
=======
    id: 7,
>>>>>>> cb393b7fc729a5f5f447855075187cf092763189
    image: "https://i.postimg.cc/90mfn9qp/model-male2.jpg" ,
    size: 3,
    desc: "LV Crew Neck/Corduroy Pants outfit.",
    price: "R7500",
    button:"Buy now"
  },
  {
<<<<<<< HEAD
    id:   "item-eight",
=======
    id: 8,
>>>>>>> cb393b7fc729a5f5f447855075187cf092763189
      image: "https://i.postimg.cc/90mfn9qp/model-male2.jpg" ,
      size: 3,
      desc: "LV Crew Neck/Corduroy Pants outfit.",
      price: "R7500",
      button:"Buy now"
    },
    {
<<<<<<< HEAD
      id:   "item-nine",
=======
      id: 9,
>>>>>>> cb393b7fc729a5f5f447855075187cf092763189
      image: "https://i.postimg.cc/c1bmBJSY/shoe5.jpg" ,
      size:  4,
      desc: "Nike Pastel Sneaker.",
      price: "R6500",
      button:"Buy now"
    },
    {
<<<<<<< HEAD
      id:   "item-ten",
=======
      id: 10,
>>>>>>> cb393b7fc729a5f5f447855075187cf092763189
      image: "https://i.postimg.cc/c1bmBJSY/shoe5.jpg" ,
      size:  4,
      desc: "Nike Pastel Sneaker.",
      price: "R6500",
      button:"Buy now"
    },
    {
<<<<<<< HEAD
      id:   "item-eleven",
=======
      id: 11,
>>>>>>> cb393b7fc729a5f5f447855075187cf092763189
      image: "https://i.postimg.cc/c1bmBJSY/shoe5.jpg" ,
      size:  4,
      desc: "Nike Pastel Sneaker.",
      price: "R6500",
      button:"Buy now"
    },

];

let disProducts = document.querySelector(".products .row");
products.forEach((product) => {
disProducts.innerHTML += `
<div class="col-12 col-sm-6 col-md-4 col-lg-${product.size} my-4">
    <div class="card">
        <img src=${product.image} class="card-img-top" style="padding: 0.6rem;" height="450" alt="...">
        <div class="card-body">
        <h5 class="card-title">R&G</h5>
        <p class="card-text">${product.desc}</p>
        <p class="card-text">${product.price}</p>
        <button class="btn btn-product" onclick="addToCart(${product.id})">Buy Now</button>
        </div>
    </div>
</div>`
});

<<<<<<< HEAD
// cart

=======




// Data for cart 


// cart functions

// local storage stuff - first initializing the cart as either an empty array or an array of books as retrieved from local storage
let cart = JSON.parse(localStorage.getItem("clothes")) || [];
loadCart();

// allows the book to be added to cart if the quantity is more than 0, the quantity will be decreased by one if it's added to the cart
function addToCart(productID) {
  const product = products.find((product) => product.id === productID);
  if (product && product.size > 0) {
    product.size--;
    cart.push(product);
    loadCart();
  }
}

// removes an item from cart and increases it's quantity in stock by one
function getFromCart(index) {
  cart.splice(index, 1)[0];
  loadCart();
}

// the actual cart function - shows in a modal on the html side, use the add and remove functions in here
function loadCart() {
  localStorage.setItem("clothes", JSON.stringify(cart));
}
>>>>>>> cb393b7fc729a5f5f447855075187cf092763189
