import React from 'react';

function Category({ image, className }) {
  return (
    <div className={className}>
      <img src={image} alt="Category" />
    </div>
  );
}

export default Category;
