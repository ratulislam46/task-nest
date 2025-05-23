import React, { use } from 'react';
import { AuthContext } from '../auth/AuthProvider/AuthProver';
import { Navigate, useLocation } from 'react-router';
import Loading from '../Page/Loading/Loading';

const PrivateRouter = ({ children }) => {

    const { user, loading } = use(AuthContext);
    const location  = useLocation();

    if(loading) return <Loading></Loading>
    if (user && user?.email) {
        return children
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default PrivateRouter;