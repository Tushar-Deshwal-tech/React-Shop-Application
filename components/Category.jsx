import React from 'react';
import './css/Category.css';


function Category({image}) {
  return (
    <div className='category_main'>
      <div className='image'>
        <img src={image} alt="Image" />fsfd
      </div>
    </div>
  );
}

export default Category;
