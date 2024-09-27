import React from 'react';
import './Promo.css';

const Promo = ({ promo }) => {
    return (
        <div className="promo">
            <img className="promo-img" src={promo} alt="Promo" />
            <div className="promo-info">
                <a href={"#"}>
                    <button className="promo-button">Learn more</button>
                </a>
            </div>
        </div>
    );
};

export default Promo;
