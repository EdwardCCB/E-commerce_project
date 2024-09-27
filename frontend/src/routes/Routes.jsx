import React from 'react';
import { Routes, Route} from "react-router-dom";
import Home from '../pages/Home.jsx';
import Product from '../pages/Product.jsx';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:productName" element={<Product />} />
        </Routes>
    )
}

export default AppRoutes;