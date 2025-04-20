import { Box, CircularProgress, CssBaseline } from "@mui/material"
import AppTheme from "../theme/AppTheme"

const Loading = (props: { disableCustomTheme?: boolean }) => {
    return (
        <AppTheme {...props}>
            <CssBaseline enableColorScheme/>
            <Box sx={{width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <CircularProgress color="secondary" size={48} />    
            </Box>
        </AppTheme>
    );
}
export default Loading;