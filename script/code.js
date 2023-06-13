
let products = [
   
    {
     image: "https://i.postimg.cc/nrzH1kq4/model-card-1.jpg" ,
      size:   3,
      desc: "Crop-T/Denim Rip jeans outfit.",
      price: "R1600",
      button:"Buy now"
    },
    {
      image: "https://i.postimg.cc/Njv3sDLd/model-card-2.jpg" ,
      size:   3,
      desc: "Crop-T/Denim Rip jeans outfit.",
      price: "R1800",
      button:"Buy now"
    },
    {
      image: "https://i.postimg.cc/9FgvT2xN/model-card4.jpg" ,
      size:  3,
      desc: "Crew Neck/Denim jeans outfit.Bag included.",
      price: "R4500",
      button:"Buy now"
    },
    { 
      image: "https://i.postimg.cc/Zqqgq5zq/soft-boy-3.jpg" ,
      size: 3,
      desc: "Crew Neck Base Ball outfit..",
      price: "R2500",
      button:"Buy now"
    },
    { 
      image: "https://i.postimg.cc/x87j64Gv/soft-boy.jpg" ,
      size: 3,
      desc: "White Burberry's-T/Denim jeans outfit.",
      price: "R2000",
      button:"Buy now"
    },
    { 
      image: "https://i.postimg.cc/j5c4nz60/soft-boy-2.jpg" ,
      size: 3,
      desc: "Cardigan Jersey/Denim jeans outfit.",
      price: "R2500",
      button:"Buy now"
    },
    {
      image: "https://i.postimg.cc/90mfn9qp/model-male2.jpg" ,
      size: 3,
      desc: "LV Crew Neck/Corduroy Pants outfit.",
      price: "R7500",
      button:"Buy now"
    },
    {
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
          <a href="#" class="btn btn-primary">Buy Now</a>
          </div>
      </div>
  </div>`
});











{/* <main id="main-Section">

<div id="contact" class="row">
  <div class="col  first">
    <div class="card left">
      <div class="hide hijab">
        <img src="https://i.postimg.cc/Tw9Y2z2J/hiijab-model-2.jpg" loading="lazy" class="pfp" />
      </div>

      <div class="text-center pb-3 add-pad bot">
        <h4><strong>R&G Clothing</strong></h4>
        <em>Contact Details:</em> <br />
        <br />
        Number: 021 967 000 <br />
        Email: R&G@gmail.com<br />
        <br />
        <p>We at R&G clothing store care about our customer's <br> feedback as we strive to serve nothing but the
          best.</p>

      </div>
    </div>
  </div>

  <div class="col-md-8 p-2">
    <!-- Logo image -->
    <div class="logo">
      <img class="logo-contact" src="https://i.postimg.cc/qq9GfZZX/Screenshot-2023-06-13-112128.png">
    </div>

    <div class="card border-2 mt-5 second" id="contact-box">

      <form action="https://formspree.io/f/xknayqyj" method="POST">

        <h2 class="card p-3 heading-text pink-bg border-2 text-center" style="border: none;">Contact Me!</h2>
        <div class="input-ting">
          <label class="form-label heading-text">Name:</label>
          <input type="text" name="Name" class="form-control light-bg border-2" placeholder="Please enter your name"
            required />
        </div>

        <div class="input-ting">
          <label class="form-label heading-text">Email:</label>
          <input type="email" name="Email" class="form-control light-bg border-2"
            placeholder="Please Enter your email" required />
        </div>

        <div class="input-ting">
          <label class="form-label heading-text">Enter message:</label>
          <textarea name="Message" class="form-control light-bg border-2" rows="5"
            placeholder="We would like to hear from you"></textarea>
        </div>
        <div class="bttn">
        <button type="submit" class="btn submit-btn submitting">Submit</button>
      </div>
      </form>
    </div>
  </div>
</div>
<!-- contact form done -->
</main>

<!-- Footer -->
<!-- new footer -->
<!-- Footer -->
<footer class="text-center text-lg-start bg-light text-muted">
<!-- Section: Social media -->
<section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
  <!-- Left -->
  <div class="me-5 d-none d-lg-block">
    <span>Get connected with us on social networks:</span>
  </div>
  <!-- Left -->

  <!-- Right -->
  <div>
    <a href="https://www.facebook.com/facebook/" target="_blank" class="me-4 text-reset">
      <i class="fab fa-facebook-f"></i>
    </a>
    <a href="https://twitter.com/explore?lang=en" target="_blank" class="me-4 text-reset">
      <i class="fab fa-twitter"></i>
    </a>
    <a href="https://www.instagram.com/clothingshoponline/?hl=en" target="_blank" class="me-4 text-reset">
      <i class="fab fa-instagram"></i>
    </a>
    <a href="https://github.com/RidhaaGabier?tab=repositories" target="_blank" class="me-4 text-reset">
      <i class="fab fa-github"></i>
    </a>
  </div>
  <!-- Right -->
</section>
<!-- Section: Social media -->

<!-- Section: Links  -->
<section class="">
  <div class="container text-center text-md-start mt-5">
    <!-- Grid row -->
    <div class="row mt-3">
      <!-- Grid column -->
      <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
        <!-- Content -->
        <h6 class="text-uppercase fw-bold mb-4">
          <i class="fas fa-gem me-3"></i>R&G Clothing
        </h6>
        <p>
          We at R&G Pty Ltd clothing store care about our customer's feedback as we strive to serve nothing but the
          best
        </p>
      </div>
      <!-- Grid column -->

      <!-- Grid column -->
      <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
        <!-- Links -->
        <h6 class="text-uppercase fw-bold mb-4">
          Products
        </h6>
        <p>
          <a href="#!" class="text-reset">Tops</a>
        </p>
        <p>
          <a href="#!" class="text-reset">Dresses</a>
        </p>
        <p>
          <a href="#!" class="text-reset">Jeans</a>
        </p>
        <p>
          <a href="#!" class="text-reset">Shoes</a>
        </p>
      </div>
      <!-- Grid column -->

      <!-- Grid column -->
      <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
        <!-- Links -->
        <h6 class="text-uppercase fw-bold mb-4">
          Useful links
        </h6>
        <p>
          <a href="#!" class="text-reset">Pricing</a>
        </p>
        <p>
          <a href="#!" class="text-reset">Cart</a>
        </p>
        <p>
          <a href="#!" class="text-reset">Product</a>
        </p>
        <p>
          <a href="#!" class="text-reset">In-stock</a>
        </p>
      </div>
      <!-- Grid column -->

      <!-- Grid column -->
      <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
        <!-- Links -->
        <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
        <p><i class="fas fa-home me-3"></i> Cape Town, WC 10012, ZA</p>
        <p>
          <i class="fas fa-envelope me-3"></i>
          R&Gclothing@gmail.com
        </p>
        <p><i class="fas fa-phone me-3"></i> + 27 021 567 88</p>
        <p><i class="fas fa-print me-3"></i> + 27 021 667 89</p>
      </div>
      <!-- Grid column -->
    </div>
    <!-- Grid row -->
  </div>
</section>
<!-- Section: Links  -->

<!-- Copyright -->
<div class="text-center p-4" style="background-color: rgba(0, 0, 0, 0.05);">
  © 2023 Copyright
  <!-- Copyright -->
</footer>
<!-- Footer -->

</body>

</html> */}