import React from 'react'
import './css/Cart.css'
import Men_Products_Data from "../Data/Men_Products_Data";

function Cart() {
    const [firstProduct] = Men_Products_Data;
  return (
    <div>
      <div className="cart-upper-line"></div>
      <div className="cart-main">
        <div className="cart-products-section">
          <div className="cart-products-img">
            <img src={firstProduct.imageLink1} alt="" />
          </div>
          <div className="cart-products-details">
            <h3>Name</h3>
            <div className="cart-products-size">Size</div>
            <div className="cart-products-price">258</div>
            <div className="cart-quanty-section">
              <button>-</button>
              <div>number</div>
              <button>+</button>
            </div>
          </div>
        </div>
        <div className="cart-payment-section">
          <h2>Payment</h2>
          <div className="cart-payment-section-price">Total Price: <span>3131</span></div>
          <div className="cart-payment-section-payment-options">
            <div>
                <input type="radio" id="COD" name="fav_language" value="COD" />
                <label for="COD">COD</label>
            </div>
            <div>
                <input type="radio" id="CARD" name="fav_language" value="CARD" />
                <label for="CARD">CARD</label>
            </div>
          </div>
          <div className="cart-payment-section-checkout">
            <button>Checkout</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
