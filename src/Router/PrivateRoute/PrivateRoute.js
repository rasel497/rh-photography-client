import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();


    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }

    if (loading) {
        return <h2 className='text-2sxl'>Loading...</h2>
    }
    return children;

};

export default PrivateRoute;