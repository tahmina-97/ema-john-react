import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css'

const Product = (props) => {
    const { handleAddToCart, product } = props;
    const { name, img, seller, price, ratings } = product;


    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
                <p className='product-name'>{name}</p>
                <p className='price'>price: ${price}</p>
                <p className='seller'>Manufacturer: {seller}</p>
                <p className='ratings'>Ratings: {ratings} stars</p>
            </div>
            <button onClick={() => handleAddToCart(product)} className='btn-add-cart'>
                <p>Add to Cart </p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>

            </button>

        </div>
    );
};

export default Product;