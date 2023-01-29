import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
// import { UserContext } from '../../App';

const PrivateRoute = ({ children }) => {
    const location = useLocation()
    const jsonUser = localStorage.getItem('user');
    const Luser = JSON.parse(jsonUser)
    console.log(Luser);
    // const [logedInUser] = useContext(UserContext)
    return Luser.email ? children : <Navigate  to={{
        pathname: "/signin",
        state: { from: location }
      }} />;
};

export default PrivateRoute;