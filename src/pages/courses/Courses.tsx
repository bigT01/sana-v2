import React from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CourseCard from "../../components/cards/CourseCard";

const Courses = () => {
    return (
        <Box sx={{width: '100%', maxWidth: {sm: '100%', md: '1700px'}}}>
            {/* cards */}
            <Typography component="h2" variant="h5" sx={{mb: 2}}>
                Courses
            </Typography>
            <CourseCard
                category="DESIGN"
                title="Create 3D With Blender"
                subtitle="16 Lessons 48 Hours"
                lessons={16}
            />
        </Box>
    );
};

export default Courses;