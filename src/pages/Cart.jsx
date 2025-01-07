import React, { useState } from "react";
import "./css/Cart.css";
import Men_Products_Data from "../Data/MenProductsData";
// import Products from "./Products";

function Cart() {
  const [firstProduct] = Men_Products_Data;
  const [activeMethod, setActiveMethod] = useState("COD");
  const [Quanty, setQuanty] = useState(1);
  const decreaseQuantity = () => {
    if (Quanty > 1) {
      setQuanty(Quanty - 1);
    }
  };

  const increaseQuantity = () => {
    setQuanty(Quanty + 1);
  };

  const [selectedSize, setSelectedSize] = useState("S");

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };
  return (
    <div>
      <div className="cart-upper-line" />
      <div className="cart-main">
        <div className="cart-products-section">
          <div className="Cart-products">
            <div className="cart-products-img">
              <img src={firstProduct.imageLink1} alt="" />
            </div>
            <div className="cart-products-details">
              <h3>Name</h3>
              <div className="cart-products-size">
                <label htmlFor="size-select">Size: </label>
                <select
                  id="size-select"
                  value={selectedSize}
                  onChange={handleSizeChange}
                >
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>
                </select>
              </div>
              <div className="cart-products-price">Price: 258</div>
              <div className="cart-quanty-section">
                Quanty:
                <button onClick={decreaseQuantity}>-</button>
                <div>{Quanty}</div>
                <button onClick={increaseQuantity}>+</button>
              </div>
              <div className="vercital-line" />
              <div className="cart-remove-button">Remove</div>
            </div>
          </div>
        </div>
        <div className="cart-payment-section">
          <h1>Payment Method</h1>
          <div className="payment-method">
            <div
              className={`payment-method-option ${
                activeMethod === "COD" ? "active" : ""
              }`}
              onClick={() => setActiveMethod("COD")}
            >
              COD
            </div>
            <div
              className={`payment-method-option ${
                activeMethod === "CARD" ? "active" : ""
              }`}
              onClick={() => setActiveMethod("CARD")}
            >
              Or pay with card
            </div>
            <div
              className={`payment-method-option ${
                activeMethod === "ONLINE" ? "active" : ""
              }`}
              onClick={() => setActiveMethod("ONLINE")}
            >
              Or pay online
            </div>
          </div>
          <div className="price">Total Price: 2000</div>
          <div className="checkout">Checkout</div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
