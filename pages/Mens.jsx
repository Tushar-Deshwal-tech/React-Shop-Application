import React, { Component } from "react";
import "./css/Mens.css";
import Sliding_images from "../components/Sliding_images";
import {
  mens_sliding_image,
  mens_category_image,
} from "../components/import_images";
import Men_Products from "../Mens_Products.js"

function Mens() {
  const mensfirstThreeImages = mens_category_image.slice(0, 3);
  const mensnextFourImages = mens_category_image.slice(3);
  
  return (
    <div>
      <div className="mens-page">MENS PRODUCTS</div>
      <div>
        <Sliding_images images={mens_sliding_image} />
      </div>
      <div className="mens-text">CATEGORIES</div>
      <div className="mens-products">
        <div className="three-column">
          {mensfirstThreeImages.map((image, index) => (
            <div className="image">
              <img key={index} src={image} alt="Category" />
            </div>
          ))}
        </div>
        <div className="four-column">
          {mensnextFourImages.map((image, index) => (
            <div className="image">
              <img key={index} src={image} alt="Category" />
            </div>
          ))}
        </div>
      </div>
      <div className="mens-text">FEATURED PRODUCTS</div>
      <div className="products">
        <div className="products-three-column">
          {mensfirstThreeImages.map((image, index) => (
            <div className="products-image">
              <img key={index} src={image} alt="Category" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Mens;
