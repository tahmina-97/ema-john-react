import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewItem.css'

const ReviewItem = ({ product, handleRemoveItem }) => {
    const { id, img, name, price, quantity, shipping } = product;
    return (
        <div className='review-item'>
            <img src={img} alt="" />
            <div className='review-details-container'>
                <div className='review-details'>
                    <p>{name}</p>
                    <p>Price: {price}</p>
                    <p>Quantity: {quantity}</p>
                    <p>Shipping: {shipping}</p>

                </div>
                <div className='review-delete'>
                    <button onClick={() => handleRemoveItem(id)} className='btn-delete'>
                        <FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon>
                    </button>

                </div>

            </div>

        </div>
    );
};

export default ReviewItem;