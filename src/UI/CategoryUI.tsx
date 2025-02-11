import React from 'react';
import {gray} from "../theme/themePrimitives";
import {Typography} from "@mui/material";
import Box from "@mui/material/Box";

type CategoryUiProps = {
    subtitle: string
}

const CategoryUi = ({subtitle}: CategoryUiProps) => {
    return (
        <Box content={'div'} sx={{
            backgroundColor: (theme) => theme.palette.mode === 'dark' ? `${gray[900]}` : 'hsl(210, 67%, 99%)',
            display: "flex", padding: '0.1rem 0.8rem',
            borderRadius: '2rem'}}>
            <Typography variant="body2" color="text.primary" fontWeight={400}>
                {subtitle}
            </Typography>
        </Box>
    );
};

export default CategoryUi;