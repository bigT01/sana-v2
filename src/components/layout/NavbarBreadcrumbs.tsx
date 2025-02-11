import * as React from 'react';
import {styled} from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Breadcrumbs, {breadcrumbsClasses} from '@mui/material/Breadcrumbs';
import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded';
import {useLocation, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {RoutingConstants} from "../../constants/Routings";

const StyledBreadcrumbs = styled(Breadcrumbs)(({theme}) => ({
    margin: theme.spacing(1, 0),
    [`& .${breadcrumbsClasses.separator}`]: {
        color: (theme.vars || theme).palette.action.disabled,
        margin: 1,
    },
    [`& .${breadcrumbsClasses.ol}`]: {
        alignItems: 'center',
    },
}));

export default function NavbarBreadcrumbs() {
    const location = useLocation()
    const navigate = useNavigate()
    const [pathname, setPathname] = useState<string[]>([''])

    useEffect(() => {
        if (location) {
            const pathnames = location.pathname.split('/');
            pathnames.shift()
            if (pathnames) {
                setPathname(pathnames)
            }
        }
    }, [location]);

    const handleChangePage = (link: string) => {
        navigate(link)
    }

    return (
        <StyledBreadcrumbs
            aria-label="breadcrumb"
            separator={<NavigateNextRoundedIcon fontSize="small"/>}
        >
            <Typography sx={{cursor: 'pointer'}} variant="body1" onClick={() => handleChangePage('/')}>Dashboard</Typography>
            {pathname.map(pathnameItem => (
                <Typography variant="body1" sx={{color: 'text.primary', fontWeight: 600, cursor: 'pointer'}}
                            onClick={() => handleChangePage(RoutingConstants[pathnameItem]?.link ? RoutingConstants[pathnameItem]?.link : pathnameItem)}>
                    {RoutingConstants[pathnameItem]?.name ? RoutingConstants[pathnameItem]?.name : pathnameItem}
                </Typography>
            ))}
        </StyledBreadcrumbs>
    );
}