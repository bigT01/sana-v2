import './App.css';
import {alpha} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import AppNavbar from './components/layout/AppNavbar';
import Header from './components/layout/Header';
import SideMenu from './components/layout/SideMenu';
import AppTheme from './theme/AppTheme';
import {Outlet} from "react-router-dom";
import ModalContent from "./components/Modal";


function App(props: { disableCustomTheme?: boolean }) {

    return (
        <AppTheme {...props}>
            <CssBaseline enableColorScheme/>
            <Box sx={{display: 'flex'}}>
                <SideMenu/>
                <AppNavbar/>
                {/* Main content */}
                <Box
                    component="main"
                    sx={(theme) => ({
                        flexGrow: 1,
                        backgroundColor: theme.vars
                            ? `rgba(${theme.vars.palette.background.defaultChannel} / 1)`
                            : alpha(theme.palette.background.default, 1),
                        overflow: 'auto',
                    })}
                >
                    <Stack
                        spacing={2}
                        sx={{
                            alignItems: 'center',
                            mx: 3,
                            pb: 5,
                            mt: {xs: 8, md: 0},
                        }}
                    >
                        <Header/>
                        <Outlet/>
                        {/*<MainGrid/>*/}
                    </Stack>
                </Box>
                <ModalContent/>
            </Box>
        </AppTheme>
    );
}

export default App;
