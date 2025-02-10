import React from 'react';
import {Navigate, Outlet} from 'react-router-dom';
import {useStore} from "../store/useStore";
import {IState} from "../constants/interfaces";

interface PrivateRouteProps {
    authenticationPath: string;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({authenticationPath}) => {
    const token = useStore((state: IState) => state.token)
    if (!token) {
        return <Navigate to={authenticationPath} replace/>;
    }

    return <Outlet/>;
};

export default PrivateRoute;