import React from "react";
import './Product.css'
import img1 from './img/bgfirst.jpg';
import img2 from './img/p2.jpg';
import img3 from './img/p3.jpg';


function Product() {
    return ( 
        <section className="product-sec">
            
<h2 id="demo14">Our products </h2>
<div class="column">
  <div>
    <figure><img src={img1} alt="Product" /></figure>
    <span id="img1"> Parking spot for societies </span>
  </div>
  <div>
    <figure><img src={img2} alt="Product" /></figure>
    <span id='img2'>Parking spot for corporates </span>
  </div>
  <div>
    <figure><img src={img3} alt="Product" /></figure>
    <span id='img3'>Parking spot for malls </span>
  </div>
</div>
        </section>
    )
}

export default Product; 