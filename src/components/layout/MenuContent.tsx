import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import HelpRoundedIcon from '@mui/icons-material/HelpRounded';
import BackpackIcon from '@mui/icons-material/Backpack';
import {useLocation, useNavigate} from "react-router-dom";

const mainListItems = [
    {text: 'Home', icon: <HomeRoundedIcon/>, link: '/'},
    {text: 'Courses', icon: <BackpackIcon/>, link: '/courses'},
];

const secondaryListItems = [
    {text: 'Settings', icon: <SettingsRoundedIcon/>, link: '/'},
    {text: 'About', icon: <InfoRoundedIcon/>, link: '/'},
    {text: 'Feedback', icon: <HelpRoundedIcon/>, link: '/'},
];

export default function MenuContent() {
    const location = useLocation();
    const navigate = useNavigate();

    return (
        <Stack sx={{ flexGrow: 1, p: 1, justifyContent: 'space-between' }}>
            <List dense>
                {mainListItems.map((item, index) => (
                    <ListItem key={index} disablePadding sx={{ display: 'block' }}>
                        <ListItemButton
                            sx={{cursor: 'pointer'}}
                            selected={location.pathname === item.link}
                            onClick={() => navigate(item.link)}
                        >
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <List dense>
                {secondaryListItems.map((item, index) => (
                    <ListItem key={index} disablePadding sx={{ display: 'block' }}>
                        <ListItemButton
                            selected={location.pathname === item.link}
                            onClick={() => navigate(item.link)}
                        >
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Stack>
    );
}