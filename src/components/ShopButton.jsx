import React from 'react'
import './css/ShopButton.css'
import { Link } from "react-router-dom";

function ShopButton({category, link}) {
  return (
    <div className='shop-button'>
        <Link to={link}><button>SHOP FOR {category}</button></Link>
    </div>
  )
}

export default ShopButton