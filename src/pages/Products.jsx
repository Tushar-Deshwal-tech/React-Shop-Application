import React, { useEffect, useState } from 'react';
import './css/Products.css';
import Men_Products_Data from '../Data/MenProductsData';
import Women_Products_Data from '../Data/WomenProductsData';
import { useProducts } from '../usecontext/Product_Context';

function Products() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const [selectsize, setselectsize] = useState(1);

	const handleSizeClick = (size) => {
		setselectsize(size);
	};

	const { products } = useProducts();
	const allProducts = [...Men_Products_Data, ...Women_Products_Data];
	const filteredProduct = allProducts.find(
		(product) => product.id === products.id && product.productName === products.name
	);

	return (
		<div>
			<div className="product-page-upper-line"></div>
			<div className="product-page-maincontent">
				<div className="product-page-image">
					<img src={filteredProduct.imageLink1} alt="img" />
					<img src={filteredProduct.imageLink2} alt="img" />
				</div>
				<div className="product-page-details">
					<div className="product-page-productname">{filteredProduct.productName}</div>
					<div className="product-page-price_rating">
						<div>
							Price: <span>{filteredProduct.price}</span>
						</div>
						<div>
							Rating: <span>{filteredProduct.rating}</span>
						</div>
					</div>
					<div className="product-page-sizes">
						Sizes:
						<div
							className={`Size ${selectsize === 1 ? 'selected' : ''}`}
							onClick={() => handleSizeClick(1)}
						>
							S
						</div>
						<div
							className={`Size ${selectsize === 2 ? 'selected' : ''}`}
							onClick={() => handleSizeClick(2)}
						>
							M
						</div>
						<div
							className={`Size ${selectsize === 3 ? 'selected' : ''}`}
							onClick={() => handleSizeClick(3)}
						>
							L
						</div>
						<div
							className={`Size ${selectsize === 4 ? 'selected' : ''}`}
							onClick={() => handleSizeClick(4)}
						>
							XL
						</div>
					</div>
					<div className="product-page-description">
						<div className="product-page-description-text">
							Description: <span>{filteredProduct.description}</span>
						</div>
					</div>
					<div className="product-page-buttons">
						<div>
							<button>Add to cart</button>
						</div>
						<div>
							<button>Add to wishlist</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Products;
