import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './css/Landing_page.css';
import SlidingImages from '../components/SlidingImages';
import { mens_sliding, mens_category, womens_sliding, womens_category } from '../Data/CategoryData';

function Landing_page() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const MensFirstSixImages = mens_category.slice(0, 6);
	const MensNextFourImages = mens_category.slice(6);

	const WomensFirstSixImages = womens_category.slice(0, 6);
	const WomensNextFourImages = womens_category.slice(6);

	function productCategory(category) {
		console.log(category);
	}

	return (
		<div className="landing-main">
			<div>
				<SlidingImages images={mens_sliding} />
			</div>
			<div className="shopButton">
				<Link to="/Mens">
					<button>Shop For Mens</button>
				</Link>
			</div>
			<div className="category-text">CATEGORIES</div>
			<div className="category-section">
				<div className="three-column">
					{MensFirstSixImages.map((item, index) => (
						<div className="image" key={index}>
							<img onClick={() => productCategory(item.category)} src={item.image} alt={item.category} />
						</div>
					))}
				</div>
				<div className="four-column">
					{MensNextFourImages.map((item, index) => (
						<div className="image" key={index}>
							<img onClick={() => productCategory(item.category)} src={item.image} alt={item.category} />
						</div>
					))}
				</div>
			</div>
			<div className="women-section">
				<SlidingImages images={womens_sliding} />
			</div>
			<div className="shopButton">
				<Link to="/Womens">
					<button>Shop For Womens</button>
				</Link>
			</div>
			<div className="category-text">CATEGORIES</div>
			<div className="category-section">
				<div className="three-column">
					{WomensFirstSixImages.map((item, index) => (
						<div className="image" key={index}>
							<img onClick={() => productCategory(item.category)} src={item.image} alt={item.category} />
						</div>
					))}
				</div>
				<div className="four-column">
					{WomensNextFourImages.map((item, index) => (
						<div className="image" key={index}>
							<Link to="/Womens">
								<img onClick={() => productCategory(item.category)} src={item.image} alt={item.category} />
							</Link>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default Landing_page;
