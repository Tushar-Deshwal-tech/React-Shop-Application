import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import "./css/Landing_page.css";
import SlidingImages from "../components/SlidingImages";
import ShopButton from "../components/ShopButton";
import {
  mens_sliding_image,
  mens_category_image,
  womens_sliding_image,
  womens_category_image,
} from "../components/ImportImages";

function Landing_page() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const mensfirstThreeImages = mens_category_image.slice(0, 3);
  const mensnextFourImages = mens_category_image.slice(3);

  const womensfirstThreeImages = womens_category_image.slice(0, 3);
  const womensnextFourImages = womens_category_image.slice(3);

  return (
    <div className="landing-main">
      <div>
        <SlidingImages images={mens_sliding_image} />
      </div>
      <div>
        <ShopButton category={"MEN"} link="/Mens" />
      </div>
      <div className="category-text">CATEGORIES</div>
      <div className="category-section">
        <div className="three-column">
          {mensfirstThreeImages.map((image, index) => (
            <div className="image">
              <Link to="/Mens"><img key={index} src={image} alt="Category" /></Link>
            </div>
          ))}
        </div>
        <div className="four-column">
          {mensnextFourImages.map((image, index) => (
            <div className="image">
              <Link to="/Mens"><img key={index} src={image} alt="Category" /></Link>
            </div>
          ))}
        </div>
      </div>
      <div className="women-section">
        <SlidingImages images={womens_sliding_image} />
      </div>
      <div>
        <ShopButton category={"WOMEN"} />
      </div>
      <div className="category-text">CATEGORIES</div>
      <div className="category-section">
        <div className="three-column">
          {womensfirstThreeImages.map((image, index) => (
            <div className="image">
              <Link to="/Womens"><img key={index} src={image} alt="Category" /></Link>
            </div>
          ))}
        </div>
        <div className="four-column">
          {womensnextFourImages.map((image, index) => (
            <div className="image">
              <Link to="/Womens"><img key={index} src={image} alt="Category" /></Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Landing_page;
