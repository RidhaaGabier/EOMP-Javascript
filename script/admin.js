let products = [
  {
    id: 1,
    name: 'LV Black Over Coat Outfit.',
    image: 'https://i.postimg.cc/rFnBhVf4/4437281800-1-1-1.jpg',
    price: "R7500",
  },
  {
    id: 2,
    name: 'LV Cro Top Jumper Outfit.',
    image: 'https://i.postimg.cc/Bv4gzVKd/ohter.jpg',
    price:  'R7500',
  },
  {
    id: 3,
    name: 'Bomber Puffer Jacket Outfit.',
    image: 'https://i.postimg.cc/sgkFZyb5/bomber.jpg',
    price: "R2500",
  },
  {
    id: 4,
    name: 'Black Leather Skirt Outfit.',
    image: 'https://i.postimg.cc/2S8yXd50/feature.jpg',
    price:  'R2000',
  },
  {
    id: 5,
    name: 'Designer Leather Dress Outfit.',
    image: 'https://i.postimg.cc/MGM8Hs1L/feature-image.jpg',
    price: "R2500",
  },
  {
    id: 6,
    name: 'Black Leather Skirt Outfit.',
    image: 'https://i.postimg.cc/2S8yXd50/feature.jpg',
    price:  'R2000',
  },
];

//Display the product list

  function displayProductList() {
    const productList = document.getElementById('productList');
    productList.innerHTML = '';
    products.forEach(product => {
      const listItem = document.createElement('li');
      listItem.innerHTML = `
        <img class="admin-images" src="${product.image}" alt="${product.name}" width="300">
        <div>${product.name}</div>
        <div>${product.price}</div>
        <button class=" submitting editButton" data-id="${product.id}">Edit</button>
        <button class=" submitting deleteButton" data-id="${product.id}">Delete</button>
      `;
      productList.appendChild(listItem);
    });
  }
  // add products
  function addProduct(event) {
    event.preventDefault();
    const productNameInput = document.getElementById('productName');
    const productImageInput = document.getElementById('productImage');
    const productPriceInput = document.getElementById('productPrice');


    const productName = productNameInput.value;
    const productImage = productImageInput.value;
    const productPrice = productPriceInput.value;
    if (productName && productImage && productPrice) {
      const newProductId = products.length + 1;
      // new product 
      const newProduct = {
        id: newProductId,
        name: productName,
        image: productImage,
        price: parseInt(productPrice),
      };
      // new product added to list
      products.push(newProduct);
      // Displaying updated list
      displayProductList();
      // Resetting values
      productNameInput.value = '';
      productImageInput.value = '';
      productPriceInput.value = '';
    }
  }
  // Delete function
  function deleteProduct(event) {
    const productId = parseInt(event.target.dataset.id);
    products = products.filter(product => product.id !== productId);
    displayProductList();
  }
  // Edit function
  function editProduct(event) {
    const productId = parseInt(event.target.dataset.id);
    const product = products.find(product => product.id === productId);
    if (product) {
      // edit
      console.log(`productId: ${product.id}`);
    }
  }
  // EventListeners when function is triggered
  const addProductForm = document.getElementById('addProductForm');
  addProductForm.addEventListener('submit', addProduct);
  const productList = document.getElementById('productList');
  productList.addEventListener('click', event => {
    if (event.target.classList.contains('deleteButton')) {
      deleteProduct(event);
    } else if (event.target.classList.contains('editButton')) {
      editProduct(event);
    }
  });
  // Displaying product to list
  displayProductList();

