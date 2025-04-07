import { ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { ReactNode, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

type MenuContentInformationProps = {
    items: {text: string, 
    icon: ReactNode, 
    link: string,
    }[]
}

const MenuContentInformation = ({items}: MenuContentInformationProps) => {
    const navigate = useNavigate();
    const location = useLocation();

    const [activeItem, setActiveItem] = useState<string>('/')

    useEffect(() => {
            for (let item of items) {
                const shiftedLink = item.link
                if (location.pathname.split('/').includes(shiftedLink)) {
                    setActiveItem(item.link)
                }
            }
        }, [location])
    
    return(
        <>
            {items.map((item, index) => (
                <ListItem key={index} disablePadding sx={{display: 'block'}}>
                    <ListItemButton
                        sx={{cursor: 'pointer'}}
                        selected={activeItem === `${item.link}`}
                        onClick={() => navigate(item.link)}
                    >
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText primary={item.text}/>
                    </ListItemButton>
                </ListItem>
            ))}
        </>
    )
}

export default MenuContentInformation