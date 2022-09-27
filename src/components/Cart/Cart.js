import React from 'react';

const Cart = (props) => {
    const { cart } = props;

    return (
        <div>
            <h1>Order Summary</h1>
            <p>Selected items: {cart.length}</p>

        </div>
    );
};

export default Cart;