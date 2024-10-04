import React from 'react';
import './BuyProduct.css';

function BuyProduct({ img, name, price }) {
    return (
        <div className="buy-product-container">
            <div className="buy-product-image">
                <img src={img} alt={name} />
            </div>
            <div className="buy-product-details">
                <h2 className="product-name">{name}</h2>
                <p className="product-price">${price}</p>
                <p className="product-shipping">FREE SHIPPING</p>
                <div className="product-quantity">
                    <span>Quantity</span>
                    <input type="number" value="1" min="1" className="quantity-input" />
                </div>
                <button className="add-cart-button">Add cart</button>
                <button className="buy-now-button">Buy now</button>
            </div>
        </div>
    );
}

export default BuyProduct;
