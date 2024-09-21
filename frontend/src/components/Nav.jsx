import React from 'react';
import '../styles/Nav.css'

//Importacion de imagenes
import logoWorldMark from "../assets/nav-assets/wordMark.png"
import userIcon from "../assets/nav-assets/userIcon.png"
import heartIcon from "../assets/nav-assets/heartIcon.png"
import carIcon from "../assets/nav-assets/shoppingCar.png"
import searchIcon from "../assets/nav-assets/searchIcon.png"

export function Nav ({}) {
    return (
        <nav>
            <div className="nav-logo-div">
                <img src="" alt="Logo" className="nav-logo-img" />
                <img src={logoWorldMark} className="nav-logo-text"/>
            </div>
            <div className="nav-search-section">
                <select className="nav-search-select">
                    <option>All categories</option>
                    <option>CPU</option>
                </select>
                <div className='nav-search-line'/>
                <input type="text" placeholder="Search for products" className="nav-search-input" />
                <button className="nav-search-button">
                    <img src={searchIcon} alt='lupa' className='nav-search-button-icon'/>
                </button>
            </div>
            <div className="nav-icons-section">
                <a><img src={userIcon} alt="Usuario" className="icon" /></a>
                <a><img src={heartIcon} alt="Me gusta" className="icon" /></a>
                <a><img src={carIcon} alt="Carrito" className="icon-car" /></a>
            </div>
        </nav>
    )
}