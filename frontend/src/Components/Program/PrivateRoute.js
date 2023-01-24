import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
// import { UserContext } from '../../App';

const PrivateRoute = ({ children }) => {
    const location = useLocation()
    const jsonUser = localStorage.getItem('user');
    const Luser = JSON.parse(jsonUser)
    // const [logedInUser] = useContext(UserContext)
    return Luser.email ? children : <Navigate  to={{
        pathname: "/auth",
        state: { from: location }
      }} />;
};

export default PrivateRoute;