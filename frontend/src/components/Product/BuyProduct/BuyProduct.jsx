import React, { useState } from 'react';
import './BuyProduct.css';
import iconCartWhite from "./assets/iconCartWhite.png"
import iconCartBlack from "./assets/iconCartBlack.png"

function BuyProduct({ img, name, price, reviews, stars }) {
    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = (e) => {
        const value = Math.max(1, parseInt(e.target.value, 10));
        setQuantity(value);
    };


    return (
        <div className="buy-product-container">
            <div className="buy-product-image">
                <img src={img} alt={name} />
            </div>
            <div className="buy-product-details">
                <h2 className="product-name">{name}</h2>
                <div className="product-reviews">
                    <span className="stars">{stars} ★★★☆☆</span>
                    <span className="reviews">{reviews} reviews</span>
                </div>
                <p className="product-price">$ {price}</p>
                <p className="product-shipping">FREE SHIPPING</p>
                <div className="product-quantity">
                    <label htmlFor="quantity">Quantity</label>
                    <div className="quantity-wrapper">
                        <button className="quantity-button-minus"
                                onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>-
                        </button>
                        <input
                            type="number"
                            id="quantity"
                            value={quantity}
                            min="1"
                            onChange={handleQuantityChange}
                            className="quantity-input"
                        />
                        <button className="quantity-button-plus" onClick={() => setQuantity(quantity + 1)}>+</button>
                    </div>
                </div>
                <div className="product-buttons">
                    <button className="add-cart-button">
                        <img src={iconCartWhite} alt="iconCartWhite" className="button-icon button-icon-white"/>
                        Add cart
                    </button>
                    <div className="product-buttons-separator">
                        <hr/>
                        <span>Or</span>
                        <hr/>
                    </div>
                    <button className="buy-now-button">
                        <img src={iconCartBlack} alt="iconCartBlack" className="button-icon button-icon-black"/>
                        Buy now
                    </button>
                </div>
            </div>
        </div>
    );
}

export default BuyProduct;

