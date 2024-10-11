import React from 'react';
import { Routes, Route} from "react-router-dom";
import Home from '../pages/Home.jsx';
import Product from '../pages/Product.jsx';
import Account from "../pages/Account.jsx";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/account" element={<Account />} />
            <Route path="/product/:productName" element={<Product />} />
        </Routes>
    )
}

export default AppRoutes;