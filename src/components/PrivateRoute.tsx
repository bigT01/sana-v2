import React, { useEffect } from 'react';
import {Navigate, Outlet} from 'react-router-dom';
import {useStore} from "../store/useStore";
import {IState} from "../constants/interfaces";

interface PrivateRouteProps {
    authenticationPath: string;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({authenticationPath}) => {
    const getProfile = useStore((state: IState) => state.getProfile);
    const token = useStore((state: IState) => state.token); 

    const [isLoaded, setIsLoaded] = React.useState(false);

    useEffect(() => {
        const fetchProfile = async () => {
            const response = await getProfile();
            
            setIsLoaded(true);
        };

        fetchProfile();
    }
    , []);
    
    if (!isLoaded) {
        return <div>Loading...</div>;
    }
    if (!token) {
        return <Navigate to={authenticationPath} />;
    }

    return  <Outlet/>;
};

export default PrivateRoute;