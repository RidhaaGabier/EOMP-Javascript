
let products = [
   
  {
    id:   "item-one",
   image: "https://i.postimg.cc/nrzH1kq4/model-card-1.jpg" ,
    size:   3,
    desc: "Crop-T/Denim Rip jeans outfit.",
    price: "R1600",
    button:"Buy now"
  },
  {
    id:   "item-two",
    image: "https://i.postimg.cc/Njv3sDLd/model-card-2.jpg" ,
    size:   3,
    desc: "Crop-T/Denim Rip jeans outfit.",
    price: "R1800",
    button:"Buy now"
  },
  {
    id:   "item-three",
    image: "https://i.postimg.cc/9FgvT2xN/model-card4.jpg" ,
    size:  3,
    desc: "Crew Neck/Denim jeans outfit.",
    price: "R4500",
    button:"Buy now"
  },
  { 
    id:   "item-four",
    image: "https://i.postimg.cc/Zqqgq5zq/soft-boy-3.jpg" ,
    size: 3,
    desc: "Crew Neck Base Ball outfit..",
    price: "R2500",
    button:"Buy now"
  },
  { 
    id:   "item-five",
    image: "https://i.postimg.cc/x87j64Gv/soft-boy.jpg" ,
    size: 3,
    desc: "White Burberry's-T/Denim jeans outfit.",
    price: "R2000",
    button:"Buy now"
  },
  { 
    id:   "item-six",
    image: "https://i.postimg.cc/j5c4nz60/soft-boy-2.jpg" ,
    size: 3,
    desc: "Cardigan Jersey/Denim jeans outfit.",
    price: "R2500",
    button:"Buy now"
  },
  {
    id:   "item-seven",
    image: "https://i.postimg.cc/90mfn9qp/model-male2.jpg" ,
    size: 3,
    desc: "LV Crew Neck/Corduroy Pants outfit.",
    price: "R7500",
    button:"Buy now"
  },
  {
    id:   "item-eight",
      image: "https://i.postimg.cc/90mfn9qp/model-male2.jpg" ,
      size: 3,
      desc: "LV Crew Neck/Corduroy Pants outfit.",
      price: "R7500",
      button:"Buy now"
    },
    {
      id:   "item-nine",
      image: "https://i.postimg.cc/c1bmBJSY/shoe5.jpg" ,
      size:  4,
      desc: "Nike Pastel Sneaker.",
      price: "R6500",
      button:"Buy now"
    },
    {
      id:   "item-ten",
      image: "https://i.postimg.cc/c1bmBJSY/shoe5.jpg" ,
      size:  4,
      desc: "Nike Pastel Sneaker.",
      price: "R6500",
      button:"Buy now"
    },
    {
      id:   "item-eleven",
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
        <a href="#" class="btn btn-product">Buy Now</a>
        </div>
    </div>
</div>`
});

// cart

