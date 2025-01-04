import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./css/Landing_page.css";
import SlidingImages from "../components/SlidingImages";
import ShopButton from "../components/ShopButton";
import {
  mens_sliding,
  mens_category,
  womens_sliding,
  womens_category,
} from "../Data/CategoryData";

function Landing_page() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const MensFirstSixImages = mens_category.slice(0, 6); // First 6 objects
  const MensNextFourImages = mens_category.slice(6); // Next 4 objects

  const WomensFirstSixImages = womens_category.slice(0, 6); // First 6 objects
  const WomensNextFourImages = womens_category.slice(6); // Next 4 objects

  function productId(index, category) {
    const ID = `${category}_${mens_category[index].id}`;
    console.log(`Clicked Product ID: ${ID}`);
  }

  return (
    <div className="landing-main">
      <div>
        <SlidingImages images={mens_sliding} />
      </div>
      <div>
        <ShopButton category={"MEN"} link="/Mens" />
      </div>
      <div className="category-text">CATEGORIES</div>
      <div className="category-section">
        <div className="three-column">
          {MensFirstSixImages.map((item, index) => (
            <div className="image" key={index}>
              <img
                onClick={() => productId(index, "MEN")}
                src={item.image} // Accessing the `image` property of the object
                alt={item.category} // Using `category` for the alt text
              />
            </div>
          ))}
        </div>
        <div className="four-column">
          {MensNextFourImages.map((item, index) => (
            <div className="image" key={index}>
              <Link to="/Mens">
                <img
                  onClick={() => productId(index + 6, "MEN")}
                  src={item.image} // Accessing the `image` property of the object
                  alt={item.category} // Using `category` for the alt text
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="women-section">
        <SlidingImages images={womens_sliding} />
      </div>
      <div>
        <ShopButton category={"WOMEN"} />
      </div>
      <div className="category-text">CATEGORIES</div>
      <div className="category-section">
        <div className="three-column">
          {WomensFirstSixImages.map((item, index) => (
            <div className="image" key={index}>
              <img
                onClick={() => productId(index, "WOMEN")}
                src={item.image} // Accessing the `image` property of the object
                alt={item.category} // Using `category` for the alt text
              />
            </div>
          ))}
        </div>
        <div className="four-column">
          {WomensNextFourImages.map((item, index) => (
            <div className="image" key={index}>
              <Link to="/Womens">
                <img
                  onClick={() => productId(index + 6, "WOMEN")}
                  src={item.image} // Accessing the `image` property of the object
                  alt={item.category} // Using `category` for the alt text
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Landing_page;
