import React from 'react';
import { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const Orders = () => {
    const { products, initialCart } = useLoaderData();
    const [cart, setCart] = useState(initialCart);
    const handleRemoveItem = (id) => {
        const remainingCart = cart.filter(product => product.id !== id);
        setCart(remainingCart);
        removeFromDb(id);
    }

    const handleClearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }

    return (
        <div className='shop-container'>
            <div className="orders-container">
                {
                    cart.map(product => <ReviewItem
                        key={product.id}
                        product={product}
                        handleRemoveItem={handleRemoveItem}
                    ></ReviewItem>)
                }

                {
                    cart.length === 0 && <h1>No items for review. Please <Link to='/shop'>Shop</Link> some products .</h1>
                }


            </div>

            <div className="cart-container">
                <Cart
                    handleClearCart={handleClearCart}
                    cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Orders;