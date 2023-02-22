import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const location = useLocation();
    const Luser = JSON.parse(localStorage.getItem('user')) || {};
    const { token } = Luser;
    
    return token ? children : <Navigate to={{ pathname: '/signin', state: { from: location } }} />;
};

export default PrivateRoute;
