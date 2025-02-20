import React from 'react';
import {styled} from "@mui/material";
import MuiCard from "@mui/material/Card";
import {useStore} from "../../../store/useStore";
import {IState} from "../../../constants/interfaces";
import Typography from "@mui/material/Typography";
import OrganizationTypeSelector from "./OrganizationTypeSelector";

const Card = styled(MuiCard)(({theme}) => ({
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center',
    width: '100%',
    padding: theme.spacing(4),
    gap: theme.spacing(2),
    margin: 'auto',
    [theme.breakpoints.up('sm')]: {
        maxWidth: '650px',
    },
    boxShadow:
        'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
    ...theme.applyStyles('dark', {
        boxShadow:
            'hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px',
    }),
}));

const OrganizationSelect = () => {
    const token = useStore((state: IState) => state.token)

    return (
        <Card variant="outlined">
            <Typography
                component="h1"
                variant="h4"
                sx={{width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)', mb: 4}}
            >
                Select Organization
            </Typography>
            <OrganizationTypeSelector/>
        </Card>
    );
};

export default OrganizationSelect;