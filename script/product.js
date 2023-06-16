
let products = JSON.parse(localStorage.getItem('products')) || [
   
  {
    id: 1,
    image: "https://i.postimg.cc/SNj47Pvx/7901323800-1-1-1.jpg" ,
    size:   3,
    desc: "Silk Fitted Dress.",
    price: "R1600",
    button:"Buy now"
  },
  {
    id: 2,
    image: "https://i.postimg.cc/y6PQcm6Y/product3.jpg" ,
    size:   3,
    desc: "LV Black Lounge Coat.",
    price: "R1800",
    button:"Buy now"
  },
  {
    id: 3,
    image: "https://i.postimg.cc/vZHVzGd6/5427533800-1-1-1.jpg" ,
    size:  3,
    desc: "Burberry Leather Fitted Pants.",
    price: "R4500",
    button:"Buy now"
  },
  { 
    id: 4,
    image: "https://i.postimg.cc/wv0KD55N/product-8.jpg" ,
    size: 3,
    desc: "LV Designer Lounge Coat",
    price: "R2500",
    button:"Buy now"
  },
  { 
    id: 5,
    image: "https://i.postimg.cc/x10zw4WL/product.jpg" ,
    size: 3,
    desc: "LV Brown Leather Jacket.",
    price: "R2000",
    button:"Buy now"
  },
  { 
    id: 6,
    image: "https://i.postimg.cc/Kvr2Kq4q/product4.jpg" ,
    size: 3,
    desc: "Off-White Silk Dress.",
    price: "R2500",
    button:"Buy now"
  },
  {
    id: 7,
    image: "https://i.postimg.cc/90M6b41n/4688209250-1-1-1.jpg" ,
    size: 3,
    desc: "LV Silk Cardigan .",
    price: "R7500",
    button:"Buy now"
  },
  {
    id: 8,
      image: "https://i.postimg.cc/CKpxyBZX/product6.jpg" ,
      size: 3,
      desc: "LV Royal Blue Silk Dress.",
      price: "R7500",
      button:"Buy now"
    },
    {
      id: 9,
      image: "https://i.postimg.cc/DwkShYHx/shiny.jpg" ,
      size:  4,
      desc: "Midnight Silk High Heels.",
      price: "R6500",
      button:"Buy now"
    },
    {
      id: 10,
      image: "https://i.postimg.cc/NFnpLwm9/puddy.jpg" ,
      size:  4,
      desc: "Puffy Suede High Heels.",
      price: "R6500",
      button:"Buy now"
    },
    {
      id: 11,
      image: "https://i.postimg.cc/qMhGjR9W/open-shoe.jpg" ,
      size:  4,
      desc: "Open Foot High Heels.",
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





// Data for cart 


// cart functions

// local storage stuff - first initializing the cart as either an empty array or an array of books as retrieved from local storage
loadCart();

// allows the book to be added to cart if the quantity is more than 0, the quantity will be decreased by one if it's added to the cart

