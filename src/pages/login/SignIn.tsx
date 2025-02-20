import React, {useEffect, useState} from 'react';
import '../../App.css';
import {CssBaseline, styled} from "@mui/material";
import Stack from '@mui/material/Stack';
import AppTheme from "../../theme/AppTheme";
import ColorModeSelect from "../../theme/ColorModeSelect";
import SignInComponent from "./components/SignInComponent";
import {useStore} from "../../store/useStore";
import {IState} from "../../constants/interfaces";
import OrganizationSelect from "./components/OrganizationSelect";



const SignInContainer = styled(Stack)(({theme}) => ({
    height: 'calc((1 - var(--template-frame-height, 0)) * 100dvh)',
    minHeight: '100%',
    padding: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
        padding: theme.spacing(4),
    },
    '&::before': {
        content: '""',
        display: 'block',
        position: 'absolute',
        zIndex: -1,
        inset: 0,
        backgroundImage:
            'radial-gradient(ellipse at 50% 50%, hsl(250, 89%, 93%), hsl(220, 43%, 97%))',
        backgroundRepeat: 'no-repeat',
        ...theme.applyStyles('dark', {
            backgroundImage:
                'radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))',
        }),
    },
}));

const SignIn = (props: { disableCustomTheme?: boolean }) => {
    const token = useStore((state: IState) => state.token)
    return (
        <AppTheme {...props}>
            <CssBaseline enableColorScheme/>
            <SignInContainer direction="column" justifyContent="space-between">
                <ColorModeSelect sx={{position: 'fixed', top: '1rem', right: '1rem'}}/>
                {!token ? <SignInComponent/> : <OrganizationSelect/>}
            </SignInContainer>
        </AppTheme>
    );
}

export default SignIn