import React from 'react';
import "./css/Landing_page.css";
import Sliding_images from '../components/Sliding_images';
import Shop_button from '../components/Shop_button';
import { images, category_images } from "../components/import_images";
import Category from "../components/Category";

function Landing_page() {
  const firstThreeImages = category_images.slice(0, 3);
  const nextFourImages = category_images.slice(3);

  return (
    <div className="landing-main">
      <div><Sliding_images images={images} /></div>
      <div><Shop_button category={"MEN"} /></div>
      <div className='category-text'>CATEGORIES</div>
      <div className='category-section'>
        <div className='three-colum'>
          {firstThreeImages.map((image, index) => (
            <Category key={index} image={image} />
          ))}
        </div>
        <div className='four-colum'>
          {nextFourImages.map((image, index) => (
            <Category key={index} image={image} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Landing_page;
