import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import './Nav.css';
import { auth } from '../../../firebase/config'; // Importa Firebase
import { onAuthStateChanged } from 'firebase/auth';

// Importación de imágenes
import logoWordMark from "./assets/logo.png";
import userIcon from "./assets/userIcon.png";
import heartIcon from "./assets/heartIcon.png";
import carIcon from "./assets/shoppingCar.png";
import searchIcon from "./assets/searchIcon.png";

export function Nav() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });

        // Cleanup
        return () => unsubscribe();
    }, []);

    return (
        <nav>
            <div className="nav-logo-div">
                <Link to="/">
                    <img src={logoWordMark} alt="" className="nav-logo" />
                </Link>
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
                {user ? (
                    // Si el usuario está logueado, muestra el nombre o email
                    <>
                        <span className="nav-username">Hello, {user.displayName || user.email}</span>
                        <button onClick={() => auth.signOut()}>Log Out</button>
                    </>
                ) : (
                    <Link to="/account">
                        <img src={userIcon} alt="Usuario" className="icon" />
                    </Link>
                )}
                <Link to="/favorite">
                    <img src={heartIcon} alt="Me gusta" className="icon" />
                </Link>
                <Link to="/cart">
                    <img src={carIcon} alt="Carrito" className="icon-car" />
                </Link>
            </div>
        </nav>
    );
}