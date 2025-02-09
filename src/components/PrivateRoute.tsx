import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

interface PrivateRouteProps {
  authenticationPath: string;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ authenticationPath }) => {
    const isAuthenticated = true;
    if (!isAuthenticated) {
        return <Navigate to={authenticationPath} replace />;
    }

    return <Outlet />;
};

export default PrivateRoute;