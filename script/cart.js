let item = JSON.parse(localStorage.getItem("clothes")) || [];
let displayItem = document.getElementById("display-item");
let cart = JSON.parse(localStorage.getItem("clothes")) || [];


function cartDisplay() {
  item = JSON.parse(localStorage.getItem("clothes")) || [];
  displayItem.innerHTML = ''
  item.forEach((item, index) => {
      let showItem = document.createElement("div");
        
      //  change style

      // showItem.innerHTML = '';
      showItem.innerHTML = `
      <div class="m-2 border border-black blue-bg">
      <div class="p-2 d-flex align-items-center justify-content-between">
      <img src="${item.image}" alt="${item.desc}" id="book-cover" style="width:100px;">
      <div class="me-auto p-3">
      <h5>${item.desc}</h5>
      <p>${item.price}</p>
      </div>
      <button onclick="getFromCart(${index})" id="remove" class="rem-btn">x</button>
      </div>
      </div>`

      displayItem.appendChild(showItem);
  });

    totalPrice();
}

cartDisplay();

// function that displays the total price of everything in the cart
function totalPrice() {
    let displayAmount = document.getElementById("total-amount");
    let total = 0;
  
    item.forEach((item) => {
      total += parseFloat(item.price.substring(1));
    });
  
    displayAmount.textContent = `Total Price: R${(total).toFixed(2)}`;
  }

function removeAllItems() {
    localStorage.removeItem("clothes");
     item = [];
     displayItem.innerHTML = ""
     totalPrice();
     localStorage.clear()
}

function getFromCart(index) {
  cart.splice(index, 1)[0];
  loadCart();
  cartDisplay()
}

function addToCart(productID) {
  const product = products.find((product) => product.id === productID);
  if (product && product.size > 0) {
    product.size--;
    cart.push(product);
    loadCart();
    cartDisplay();
  }
}


// the actual cart function - shows in a modal on the html side, use the add and remove functions in here
function loadCart() {
  localStorage.setItem("clothes", JSON.stringify(cart));
}