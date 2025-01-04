import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './css/Mens.css';
import Men_Products_Data from '../Data/MenProductsData.jsx';
import heart_icon from '../icons/heart.svg';
import search_icon from '../icons/search.svg';
import { useProducts } from '../usecontext/Product_Context';

function Mens() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const { setProducts } = useProducts();

	const storeProductsDetails = (id, name) => {
		const newProduct = {
			id: id,
			name: name,
		};
		setProducts(newProduct);
	};

	return (
		<div>
			<div className="page">MENS PRODUCTS</div>
			<div className="products-first">
				{Men_Products_Data.map((product, index) => (
					<div key={index} className="product-card">
						<div className="products-images">
							<img className="products-image1" src={product.imageLink1} alt={product.productName} />
							<img className="products-image2" src={product.imageLink2} alt={product.productName} />
							<div className="products-options">
								<Link to={`/Products`}>
									<img
										onClick={() => storeProductsDetails(product.id, product.productName)}
										src={search_icon}
										alt="View Details"
                    title='View Details'
									/>
								</Link>
								<Link>
									<img src={heart_icon} alt="Wishlist" title='Add to Wishlish'/>
								</Link>
							</div>
							<div className="add-to-cart">Add to Cart</div>
						</div>
						<div className="product-info">
							<h3 className="product-name">{product.productName}</h3>
							<p className="product-price">Price: ${product.price}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default Mens;
