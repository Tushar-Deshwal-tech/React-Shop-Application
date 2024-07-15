import React, {useEffect}from 'react';
import "./css/Products.css";
import Men_Products_Data from "../Men_Products_Data.js";

function Products() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [firstProduct] = Men_Products_Data;

  return (
    <div>
      <div className='product-page-upper-line'></div>
      <div className='product-page-maincontent'>
          <div className='product-page-image'>
            <img src={firstProduct.imageLink1} alt="" />
            <img src={firstProduct.imageLink2} alt="" />
          </div>
          <div className='product-page-details'></div>
      </div>
    </div>
  )
}

export default Products