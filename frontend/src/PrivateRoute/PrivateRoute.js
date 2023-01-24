import React from 'react';
import { Navigate, } from 'react-router-dom';
// import { UserContext } from '../../App';

const PrivateRoutes = () => {
    const signedInUser = {name:``, email: '',user: false}
    const makeJson = JSON.stringify(signedInUser);
    localStorage.setItem('user',makeJson);
    const jsonUser = localStorage.getItem('user');
    const Luser = JSON.parse(jsonUser)
    // const [logedInUser] = useContext(UserContext)
    return Luser.user === true ? <Navigate  to={{
        pathname: "/dashboard"
      }} /> : <Navigate  to={{
        pathname: "/"
      }} />;
};

export default PrivateRoutes;