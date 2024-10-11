import React from 'react';
import "./banner.css";
import iconUser from "./assets/user.svg";
import figure from "./assets/background.svg";

function AccountBanner() {
    return (
        <div className="banner-container">
            <div className="banner-background">
                <img src={figure} alt="background" />
            </div>
            <div className="banner-title">
                <img src={iconUser} alt="user icon" />
                <h2 className="banner-text">My account</h2>
            </div>
        </div>
    );
}

export default AccountBanner;
