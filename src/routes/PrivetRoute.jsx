import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';

const PrivetRoute = () => {
    const {user} = useContext(AuthContext);
    return (
        <div>
            this is my privet route
        </div>
    );
};

export default PrivetRoute;

/**
 * -------------------
 *      STEPS
 * -------------------
 * 1. check user logged in or not
 * 2. if user logged in, then allow to visit the route
 * 3. else redirect user to login page
 * */ 