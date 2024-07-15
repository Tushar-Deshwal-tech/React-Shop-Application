import React, { useEffect }from "react";
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

function Mens() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const mensfirstThreeImages = mens_category_image.slice(0, 3);
  const mensnextFourImages = mens_category_image.slice(3);

  return (
    <div>
      <div className="page">MENS PRODUCTS</div>
      <div className="products">
        {Men_Products_Data.map((product, index) => (
          <div>
            <div className="products-images" key={index}>
              <img className="products-image1" src={product.imageLink1} alt={product.productName} />
              <img className="products-image2" src={product.imageLink2} alt={product.productName} />
              <div className="products-options">
                <Link to={`/Products`}><img src={search_icon} alt="View Details" /></Link>
                <Link><img src={heart_icon} alt="Wishlist" /></Link>
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
    </div>
  );
}

export default Mens;
