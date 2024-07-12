import React from 'react'
import './css/Shop_button.css'

function Shop_button({category}) {
  return (
    <div className='shop-button'>
        <button>SHOP FOR {category}</button>
    </div>
  )
}

export default Shop_button