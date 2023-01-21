import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';

const PrivateRoute = ({ children }) => {
    const location = useLocation()
    const [logedInUser,setLoggedInUser] = useContext(UserContext)
    return logedInUser.email ? children : <Navigate  to={{
        pathname: "/auth",
        state: { from: location }
      }} />;
};

export default PrivateRoute;