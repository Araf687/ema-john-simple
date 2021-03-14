import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const formatNumber= (num) =>  Number(num.toFixed(2));


    const cart=props.cart;
    const totalPrice=formatNumber(cart.reduce((totalPrice,prd)=> totalPrice+prd.price,0)) ;
    const shippingCost=formatNumber(cart.reduce((shippingCost,prd)=> shippingCost+prd.shipping,0));
    const tax=formatNumber((totalPrice*0.1));
    const grandTotal=formatNumber((shippingCost+totalPrice+tax));

    
    return (
        <div>
            <h4>Order Summery</h4>
            <p>Items ordered: {cart.length} </p>
            <p>Total price: ${totalPrice}</p>
            <p><small>Shipping & Handling: ${shippingCost}</small></p>
            <p><small>tax: ${tax}</small></p>
            <p>Total price: ${grandTotal}</p>
            <h3></h3>
            <button className='btn'>    Review your order    </button>
        </div>
    );
};

export default Cart;