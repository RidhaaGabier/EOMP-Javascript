
let products = [
   
    {
      id : 1,
     image: "https://i.postimg.cc/nrzH1kq4/model-card-1.jpg" ,
      id : "item-one",
     image: "https://i.postimg.cc/C51PLXPt/feature-1.jpg" ,
      size:   3,
      desc: "Leather Biker Jacket Outfit.",
      price: "R1600",
      button:"Buy now"
    },
    {
      id : 2,
      image: "https://i.postimg.cc/Njv3sDLd/model-card-2.jpg" ,
      id : "item-two",
      image: "https://i.postimg.cc/PxcZY7f0/wall-back.jpg" ,
      size:   3,
      desc: "Silk Button Dress Outfit.",
      price: "R1800",
      button:"Buy now"
    },
    {
      id : 3,
      image: "https://i.postimg.cc/9FgvT2xN/model-card4.jpg" ,
      id : "item-three",
      image: "https://i.postimg.cc/6pLVCfmz/product-8.jpg" ,
      size:  3,
      desc: "Pattern Art Dress Outfit.",
      price: "R4500",
      button:"Buy now"
    },
    { 
      id : 4,
      image: "https://i.postimg.cc/Zqqgq5zq/soft-boy-3.jpg" ,
      id : "item-four",
      image: "https://i.postimg.cc/8PGjLggQ/product-10.jpg" ,
      size: 3,
      desc: "Designer Leather Dress Outfit.",
      price: "R2500",
      button:"Buy now"
    },
    { 
      id : 5,
      image: "https://i.postimg.cc/x87j64Gv/soft-boy.jpg" ,
      id : "item-five",
      image: "https://i.postimg.cc/2S8yXd50/feature.jpg" ,
      size: 3,
      desc: "Black Leather Skirt Outfit.",
      price: "R2000",
      button:"Buy now"
    },
    { 
      id : 6,
      image: "https://i.postimg.cc/j5c4nz60/soft-boy-2.jpg" ,
      id : "item-six",
      image: "https://i.postimg.cc/sgkFZyb5/bomber.jpg" ,
      size: 3,
      desc: "Bomber Puffer Jacket Outfit.",
      price: "R2500",
      button:"Buy now"
    },
    {
      id : 7,
      image: "https://i.postimg.cc/90mfn9qp/model-male2.jpg" ,
      id : "item-seven",
      image: "https://i.postimg.cc/Bv4gzVKd/ohter.jpg" ,
      size: 3,
      desc: "LV Cro Top Jumper Outfit.",
      price: "R7500",
      button:"Buy now"
    },
    {
      id : 8,
      image: "https://i.postimg.cc/90mfn9qp/model-male2.jpg" ,
      size: 3,
      desc: "LV Crew Neck/Corduroy Pants outfit.",
      price: "R7500",
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




//added button style and function
//add delete function on both
//admin page fix











