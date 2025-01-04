import React, { useEffect, useState } from "react";
import "./css/Products.css";
import Men_Products_Data from "../Data/MenProductsData";
// import Women_Products_Data from "../Data/Women_Products_Data";
import { useProducts } from "../usecontext/Product_Context";

function Products() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selectsize, setselectsize] = useState(1);

  const handleSizeClick = (size) => {
    setselectsize(size);
  };

  const [firstProduct] = Men_Products_Data;
  const { products } = useProducts();
  const filteredProduct = Men_Products_Data.find((product) => product.id === products.id && product.name === products.productName);

  console.log(filteredProduct)
  return (
    <div>
      <div className="product-page-upper-line"></div>
      <div className="product-page-maincontent">
        <div className="product-page-image">
          <img src={firstProduct.imageLink1} alt="" />
          <img src={firstProduct.imageLink2} alt="" />
        </div>
        <div className="product-page-details">
          <div className="product-page-header"></div>
          <div className="product-page-productname">Products Name</div>
          <div className="product-page-price_rating">
            <div>
              Price: <span>258</span>
            </div>
            <div>
              Rating: <span>3.5</span>
            </div>
          </div>
          <div className="product-page-sizes">
            sizes:
            <div className={`Size ${selectsize === 1 ? "selected" : ""}`} onClick={() => handleSizeClick(1)}>S</div>
            <div className={`Size ${selectsize === 2 ? "selected" : ""}`} onClick={() => handleSizeClick(2)}>M</div>
            <div className={`Size ${selectsize === 3 ? "selected" : ""}`} onClick={() => handleSizeClick(3)}>L</div>
            <div className={`Size ${selectsize === 4 ? "selected" : ""}`} onClick={() => handleSizeClick(4)}>XL</div>
          </div>
          <div className="product-page-description">
            <div className="product-page-description-heading">description:</div>
            <div className="product-page-description-text">
              description text
            </div>
          </div>
          <div className="product-page-buttons">
            <div>
              <button>Add to cart</button>
            </div>
            <div>
              <button>Add to wishlist</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
