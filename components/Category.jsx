import React from 'react';
import './css/Category.css';


function Category({images}) {
  return (
    <div className='category_main'>
      <div className='image'>
        <img src={images} alt="Image" />
      </div>
    </div>
  );
}

export default Category;
