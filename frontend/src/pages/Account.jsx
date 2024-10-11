import React from "react";
import {Nav} from "../components/shared/Nav/Nav.jsx"
import Footer from "../components/shared/Footer/Footer.jsx";
import AccountBanner from "../components/Account/Banner/banner.jsx";

function Account() {
    return (
        <div>
            <Nav />
            <AccountBanner />
            <Footer />
        </div>
    );
}

export default Account;