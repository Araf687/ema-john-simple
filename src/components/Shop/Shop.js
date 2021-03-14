import React, { useState } from 'react';
import '../../fakeData';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const first10=fakeData.slice(0,10);
    const [products,setProducts]=useState(first10);
    const [cart,setCart]=useState([]);
 
    
    const handleAddProduct=(props)=>{
        console.log(props);
        const newCart=[...cart,props];
        setCart(newCart);
    }

    
    return (
        <div className="shop-container">
            <div className="product-container">

                {products.map(product=><Product pd={product} handleAddProduct={handleAddProduct}></Product>)}
                
            </div>
            <div className='cart-container'>
                
                <Cart cart={cart}></Cart>



            </div>
        </div>
    );
};

export default Shop;