// src/components/Home/Sections/Sections.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Sections.css';

export function Sections({ title, description, products = [] }) {
    return (
        <div className="section-products">
            {title && (
                <div className="section-text">
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
            )}

            <div className="product-card">
                {products.map((product, index) => {
                    const productLink = `/product/${product.name.toLowerCase().replace(/\s+/g, '-')}`;

                    return (
                        <div key={index} className="container-product-img">
                            <Link to={productLink} className="producto-group">
                                <img src={product.img} alt={product.name} className="product-img" />
                            </Link>
                            <div className="product">
                                <h3 className="product-name">{product.name}</h3>
                                <p className="price">{product.price}$</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
