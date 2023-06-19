let admin = JSON.parse(localStorage.getItem('products')) || [

  {
    id: 1,
    image: "https://i.postimg.cc/C51PLXPt/feature-1.jpg",
    size: 3,
    desc: "Silk Loose Fitted Dress.",
    price: "R1600",
    button: "Buy now"
  },
  {
    id: 2,
    image: "https://i.postimg.cc/Njv3sDLd/model-card-2.jpg",
    size: 3,
    desc: "Crop-T/Denim Rip jeans outfit.",
    price: "R1800",
    button: "Buy now"
  },
  {
    id: 3,
    image: "https://i.postimg.cc/9FgvT2xN/model-card4.jpg",
    size: 3,
    desc: "Crew Neck/Denim jeans outfit.",
    price: "R4500",
    button: "Buy now"
  },
  {
    id: 4,
    image: "https://i.postimg.cc/Zqqgq5zq/soft-boy-3.jpg",
    size: 3,
    desc: "Crew Neck Base Ball outfit..",
    price: "R2500",
    button: "Buy now"
  },
  {
    id: 5,
    image: "https://i.postimg.cc/x87j64Gv/soft-boy.jpg",
    size: 3,
    desc: "White Burberry's-T/Denim jeans outfit.",
    price: "R2000",
    button: "Buy now"
  },
  {
    id: 6,
    image: "https://i.postimg.cc/j5c4nz60/soft-boy-2.jpg",
    size: 3,
    desc: "Cardigan Jersey/Denim jeans outfit.",
    price: "R2500",
    button: "Buy now"
  },
  {
    id: 7,
    image: "https://i.postimg.cc/90mfn9qp/model-male2.jpg",
    size: 3,
    desc: "LV Crew Neck/Corduroy Pants outfit.",
    price: "R7500",
    button: "Buy now"
  },
  {
    id: 8,
    image: "https://i.postimg.cc/90mfn9qp/model-male2.jpg",
    size: 3,
    desc: "LV Crew Neck/Corduroy Pants outfit.",
    price: "R7500",
    button: "Buy now"
  },
  {
    id: 9,
    image: "https://i.postimg.cc/c1bmBJSY/shoe5.jpg",
    size: 4,
    desc: "Nike Pastel Sneaker.",
    price: "R6500",
    button: "Buy now"
  },
  {
    id: 10,
    image: "https://i.postimg.cc/c1bmBJSY/shoe5.jpg",
    size: 4,
    desc: "Nike Pastel Sneaker.",
    price: "R6500",
    button: "Buy now"
  },
  {
    id: 11,
    image: "https://i.postimg.cc/c1bmBJSY/shoe5.jpg",
    size: 4,
    desc: "Nike Pastel Sneaker.",
    price: "R6500",
    button: "Buy now"
  },
]

// let adminItem = document.querySelector("#displayAdmin");
// adminItem.innerHTML = "";
// admin.forEach((product) => {
//   adminItem.innerHTML += `
//   <tbody>
//     <tr>
//         <th scope="row">${product.id}</th>
//         <td>
//         <img src="${product.image}class="card-img-top" style="padding: 1rem;" height="220">
//         </td>
//         <td>${product.desc}</td>
//         <td>${product.size}</td>
//         <td>${product.price}</td>
//         <td>
//         <div class="btn bt buttons">
//           <button class="Admin-buttons" data-bs-toggle="modal" data-bs-target="#editModal" onclick="editProduct(${product.id})">Edit</button>
//           <button class="Admin-buttons">Delete</button>
//         </div></td>
//       </tr>
//       </tbody>
//     `
// });


// function editProduct(id) {
//   let product = admin.find((item) => item.id = id)
  
//   document.querySelector('#id-edit').value = product.id;
//   document.querySelector('#image-edit').value = product.image;
//   document.querySelector('#description-edit').value = product.desc;
//   document.querySelector('#price-edit').value = product.price;


// }

// function saveProduct(){
//   let product = {}
//   product.id = document.querySelector('#id-edit').value
//   product.image = document.querySelector('#image-edit').value
//   product.desc = document.querySelector('#description-edit').value
//   product.price = document.querySelector('#price-edit').value
//   product.button = "Buy now"
//   product.size = 3

//   let adminProduct = admin.find((item) => item.id == product.id)
//   admin.splice(admin.indexOf(adminProduct), 1, product)
// console.log(saveProduct);
// }

// saveProduct();

// function Submit(){
// let dataEntered = retrieveData();
// }

// function retrieveData(){
//   let
// }


// //Allows the form to display after Confirming the action
// let form = document.getElementById("form");
// let textInput = document.getElementById("textInput")
// let imageInput = document.getElementById('imageInput');
// let numberInput = document.getElementById('numberInput');
// let textarea = document.getElementById('textarea');
// let msg = document.getElementById('msg');
// let tasks = document.getElementById('tasks');



// form.addEventListener('submit', (e)=>{
//  e.preventDefault();
//  formValdation();
// })

// let formValdation = ()=> {
//   if(textInput.value === ""){
//        console.log('Wrong')
//        msg.innerHTML = "Please enter name of item"
//   }
//   else{
//     console.log('Correct')
//     msg.innerHTML = "";
//     acceptData();
  
//   }
// }

// let data = {}

// let acceptData = () => {
//   data["text"] = textInput.value;
//   data["image"] = imageInput.value;
//   data["number"] = numberInput.value;
//   data["description"] = textarea.value;

//   createTasks();
// };

// let createTasks = ()=>{
// tasks.innerHTML += `
//   <div>
//         <span class="fw-bold">${data.text}</span>
//         <span class="fw-bold"> img src = "${data.image}"</span>
//         <span class="fw-bold">R${data.number}</span>
//         <span class="fw-bold">${data.description}</span>
//         <span class="options">
//           <i onClick = "editTask(this)" data-bs-toggle="modal" data-bs-target="#form" class="fa-solid fa-pen-to-square"></i>
//           <i onClick ="deleteTask(this)" class="fa-sharp fa-solid fa-trash"></i>
//         </span>
//   </div>
// `;

// resetForm();
// }

// let editTask = (e)=>{
// let selectedTask = e.parentElement.parentElement; 

// textInput.value =selectedTask.children[0].innerHTML
// imageInput.value=selectedTask.children[1].innerHTML
// numberInput.value=selectedTask.children[2].innerHTML
// textarea.value =selectedTask.children[3].innerHTML
// selectedTask.remove();
// }

//Allow to delete products jump from parent options to main parent div
// let deleteTask = (e) => {
// e.parentElement.parentElement.remove();
// }
// //  clears modal form ater submition
// let resetForm =() => {
//   textInput.value ="";
//   imageInput.value="";
//   numberInput.value="";
//   textarea.value ="";
// }






// new admin


let info = JSON.parse(localStorage.getItem("data")) || [];
let submit = document.getElementById("submit");
let productContainer = document.getElementById("productContainer");
let display = document.getElementById("display");
// action when clicked, "submit button"
submit.addEventListener("click", (e) => {
  e.preventDefault();
  let inputResult = document.getElementById("inputResult").value;
  // Pushes data to localStorage
  info.push(inputResult);
  console.log(info);
  localStorage.setItem("data", JSON.stringify(info));
}) 



submit.addEventListener("click", (e) => {
  e.preventDefault();
  let inputPrice = document.getElementById("inputPrice").value;
  // Pushes data to localStorage
  info.push(inputPrice);
  console.log(info);
  localStorage.setItem("data", JSON.stringify(info));
})


submit.addEventListener("click", (e) => {
  e.preventDefault();
  let inputDescription = document.getElementById("inputDescription").value;
  // Pushes data to localStorage
  info.push(inputDescription);
  console.log(info);
  localStorage.setItem("data", JSON.stringify(info));
})




  // Display on DOM, "display button"
  display.addEventListener("click", (e) => {
    e.preventDefault();
    let displayInfo = document.getElementById("list-container");
    let myData = JSON.parse(localStorage.getItem("data"));
    if (myData) {
      displayInfo.innerHTML = "";
      let results;
      myData.forEach((thing) => {
        results = document.createElement("li");
        results.textContent = `${thing}`;
        displayInfo.appendChild(results);
        // styles the text after submitted
        results.classList.add("paragraph-styling");
        // empty input after value submitted paragraph.innerText = inputResult.value;
        //   productContainer.appendChild(displayInfo);
        inputResult.value = "";
      });
      // marks list item checked
      displayInfo.addEventListener("click", function (e) {
        results = e.target
        results.style.textDecoration = "line-through";
      });
      // To remove item from list (double click)
      displayInfo.addEventListener("dblclick", function (e) {
        results = e.target
        displayInfo.removeChild(results);
        info.splice(info.indexOf(results.textContent), 1)
        localStorage.setItem('data', JSON.stringify(info))
      //   productContainer.removeChild(displayInfo);
      });
    } else {
      displayInfo.textContent = "Please enter product item";
    }
});
