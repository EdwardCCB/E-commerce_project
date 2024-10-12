import React, { useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Home from '../pages/Home.jsx';
import Product from '../pages/Product.jsx';
import Account from "../pages/Account.jsx";
import { auth } from '../firebase/config';
import { onAuthStateChanged } from 'firebase/auth';

const AppRoutes = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });

        return () => unsubscribe();
    }, []);

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:productName" element={<Product />} />
            <Route path="/account" element={<Account />} />
        </Routes>
    );
}

export default AppRoutes;