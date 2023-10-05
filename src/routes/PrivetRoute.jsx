import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivetRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <Spinner animation='border' variant='primary' />
    }

    if(user){
        return children;
    }
    return <Navigate state={{from: location}} to='/login'></Navigate>
};

export default PrivetRoute;

/**
 * -------------------
 *      STEPS
 * -------------------
 * 1. check user logged in or not
 * 2. if user logged in, then allow to visit the route
 * 3. else redirect user to login page
 * 4. set up the privet router
 * 5. handle login
 * */ 