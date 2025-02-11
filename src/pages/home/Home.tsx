import React from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ProgressCard from "../../components/cards/ProgressCard";

const Home = () => {
    return (
        <Box sx={{width: '100%', maxWidth: {sm: '100%', md: '1700px'}}}>
            {/* cards */}
            <Typography component="h2" variant="h5" sx={{mb: 2}}>
                Welcome back, Scott !
            </Typography>
            <Typography component="h3" variant="h6" sx={{mb: 2}}>
                Courses in progress
            </Typography>
            <ProgressCard
                title="Learn angular.js from scratch to experts"
                subtitle="Frontend Development"
                currentTime="2:35h"
                totalTime="4:30h"
                progress={80}
            />
        </Box>
    );
};

export default Home;