import React from "react";
import { Nav } from "../components/shared/Nav/Nav.jsx";
import Footer from "../components/shared/Footer/Footer.jsx";
import AccountBanner from "../components/Account/Banner/banner.jsx";
import Login from "../components/Account/Login/Login.jsx";
import Register from "../components/Account/Register/Register.jsx";

function Account() {
    return (
        <div>
            <Nav />
            <AccountBanner />
            <div className="account-container" style={{ display: 'flex', alignItems: 'stretch' }}>
                <div className="login-section" style={{ flex: 1 }}>
                    <Login isRegister={false} onSubmit={() => console.log("Login")} />
                </div>
                <div className="separator" style={{ width: '1px', backgroundColor: '#C6C6C6' }}></div>
                <div className="register-section" style={{ flex: 1 }}>
                    <Register />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Account;