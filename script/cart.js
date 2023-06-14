let item = JSON.parse(localStorage.getItem("clothes")) || [];
let displayItem = document.getElementById("display-item");


function cartDisplay() {
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
        <button onclick="cashRemove(${index})" id="remove" class="rem-btn">x</button>
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

}

// To remove item from list (double click)

// displayInfo.addEventListener("click", function (e) {
//     results = e.target
//     displayInfo.removeChild(results);
//     info.splice(info.indexOf(results.textContent), 1)
//     localStorage.setItem('data', JSON.stringify(info))
//   //   toDoContainer.removeChild(displayInfo);
//   });
//  else {
//   displayInfo.textContent = "Please enter your daily task's.";
// }
