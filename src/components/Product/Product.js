import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';
const Product = (props) => {
    const {name,seller,price,stock,img}=props.pd;
    return (
        <div className='product'>
            <div className='product-image'>
                <img src={img} alt="hr"/>
            </div>
            <div className='product-description'>
                <h3 className='product-name'>{name}</h3>
                <p> By: {seller}</p>
                <p>Price: ${price}</p>
                <p><small>Only {stock} left in stock- order soon</small></p>
                <button className='btn' onClick={()=>{props.handleAddProduct(props.pd)} }><FontAwesomeIcon icon={faShoppingCart}/> add to cart</button>
            </div>
        </div>
    );
};

export default Product;