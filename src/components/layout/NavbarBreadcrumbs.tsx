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
            const filteredPathnames = pathnames.filter(item => !/^\d+$/.test(item));
            filteredPathnames.shift()
            if (filteredPathnames) {
                setPathname(filteredPathnames)
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
            <Typography sx={{cursor: 'pointer', color: 'text.primary', fontWeight: 600}} variant="body1" onClick={() => handleChangePage('/')}>Dashboard</Typography>
            {pathname.map((pathnameItem, index) => (
                <Typography variant="body1" sx={{color: 'text.primary', opacity: index === pathname.length - 1 ? 0.5 : 1, fontWeight: index === pathname.length - 1 ? 400 : 600, cursor: index === pathname.length - 1 ? 'not-allowed' : 'pointer'}}
                            onClick={() => handleChangePage(RoutingConstants[pathnameItem]?.link ? RoutingConstants[pathnameItem]?.link : `${location.pathname.split(pathnameItem)[0]}${pathnameItem}`)}>
                    {RoutingConstants[pathnameItem]?.name ? RoutingConstants[pathnameItem]?.name : pathnameItem.split('-').join(' ')}
                </Typography>
            ))}
        </StyledBreadcrumbs>
    );
}