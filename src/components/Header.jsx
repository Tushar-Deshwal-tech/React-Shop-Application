import React from 'react';
import { Link } from "react-router-dom";
import './css/Header.css'
// import logo from '../logo-150x122.png'; 
import heart from '../icons/heart.svg';
import cart from '../icons/cart.svg';
import search from '../icons/search.svg';
import signIn from '../icons/human.svg';
import options from '../icons/options.svg';

function Header() {
  return (
    <header className="header">
      <div className="upper-line"></div>
      <div className='main'>
        {/* <div className="logo-container">
          <Link to="/"><img src={logo} alt="Logo" className="logo" /></Link>
        </div> */}
        <nav className="nav-menu">
          <div className="nav-item"><Link to="/">Home</Link></div>
          <div className="nav-item"><Link to="/Mens">MEN</Link></div>
          <div className="nav-item"><Link to="/Womens">WOMEN</Link></div>
          <div className="nav-item">CONTACT US</div>
        </nav>
        <div className="icons-container">
          <div className="icon-item">
            <div className='cart-box'>
              <img src={cart} alt="Cart" className="icon" />
            </div>
          </div>
          <div className="icon-item">
            <img src={heart} alt="Wishlist" className="icon" />
          </div>
          <div className="icon-item">
            <img src={search} alt="Search" className="icon" />
          </div>
          <div className="icon-item">
            <button className="sign-in-button">
              <img src={signIn} alt="Sign In" className="icon" /> Sign In
            </button>
          </div>
        </div>
        <div className='Header-options'><img src={options} alt="Options" /></div>
      </div>
    </header>
  );
}

export default Header;