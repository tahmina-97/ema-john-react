import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for (const product of cart) {
        total = total + product.quantity * product.price;
        shipping = shipping + product.shipping;
        quantity = quantity + product.quantity;

    }
    const tax = parseFloat((total * 0.1).toFixed(2));
    const grandTotal = total + shipping + tax;
    return (
        <div className='cart'>
            <h1>Order Summary</h1>
            <p>Selected items: ${quantity}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping Charge: ${shipping}</p>
            <p>Tax: ${tax}</p>
            <h3>Grand Total: ${grandTotal}</h3>

        </div>
    );
};

export default Cart;