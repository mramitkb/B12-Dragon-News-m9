import React, { use } from 'react';
import { AuthContext } from '../contexts/AuthContext/AuthContext';
import { ClockLoader } from 'react-spinners';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {
    const {user, loading} = use(AuthContext);

    const location = useLocation();
    console.log(location);

    if(loading) {
        return <ClockLoader color="#D72050"></ClockLoader>
    }

    if(!user) {
        return <Navigate to="/auth/login" state={location?.pathname}></Navigate>;
    }

    return children;
};

export default PrivateRoute;