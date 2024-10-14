import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ user, children }) => {
    return user ? children : <Navigate to="/account" />;
};

export default ProtectedRoute;