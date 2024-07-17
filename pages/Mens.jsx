import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./css/Mens.css";
import Sliding_images from "../components/Sliding_images";
import Men_Products_Data from "../Men_Products_Data.js";
import heart_icon from "../icons/heart.svg";
import search_icon from "../icons/search.svg";
import {
  mens_sliding_image,
  mens_category_image,
} from "../components/import_images";
import { useProducts } from "../usecontext/Product_Context";

function Mens() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { setProducts } = useProducts();

  const storeProductsDetails = (id, name) => {
    const newProduct = {
      id: id,
      name: name,
    };
    setProducts(newProduct);
    // Log the values immediately
    console.log("Storing Product - ID:", id, "Name:", name);
  };
  
  const mensFirstThreeImages = mens_category_image.slice(0, 3);
  const mensNextFourImages = mens_category_image.slice(3);

  return (
    <div>
      <div className="page">MENS PRODUCTS</div>
      <div className="products">
        {Men_Products_Data.map((product, index) => (
          <div key={index} className="product-card">
            <div className="products-images">
              <img
                className="products-image1"
                src={product.imageLink1}
                alt={product.productName}
              />
              <img
                className="products-image2"
                src={product.imageLink2}
                alt={product.productName}
              />
              <div className="products-options">
                <Link to={`/Products`} >
                  <img
                    onClick={() => storeProductsDetails(product.id, product.productName)}
                    src={search_icon}
                    alt="View Details"
                  />
                </Link>
                <Link>
                  <img src={heart_icon} alt="Wishlist" />
                </Link>
              </div>
              <div className="add-to-cart">Add to Cart</div>
            </div>
            <div className="product-info">
              <h3 className="product-name">{product.productName}</h3>
              <p className="product-price">Price: ${product.price}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="sliding_image">
        <Sliding_images images={mens_sliding_image} />
      </div>
      <div className="text">FEATURED PRODUCTS</div>
      <div className="products">
        <div className="three-column">
          {mensFirstThreeImages.map((image, index) => (
            <div className="image" key={index}>
              <img src={image} alt="Category" />
            </div>
          ))}
        </div>
        <div className="four-column">
          {mensNextFourImages.map((image, index) => (
            <div className="image" key={index}>
              <img src={image} alt="Category" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Mens;
