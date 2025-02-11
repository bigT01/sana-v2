import React from 'react';
import { Card, CardContent, Typography, Button, Box } from '@mui/material';
import CategoryUi from "../../UI/CategoryUI";

interface CourseCardProps {
    category: string;
    title: string;
    subtitle: string;
    lessons: number;
}

const CourseCard: React.FC<CourseCardProps> = ({ category, title, subtitle, lessons }) => {
    return (
        <Card sx={{ maxWidth: 345, borderRadius: 2, boxShadow: 3, cursor: 'pointer' }}>
            <CardContent>
                <Box content={'div'} sx={{position: 'relative', width: '100%', height: 165, mb: 2}}>
                    <img src="/React.png" alt="img:React"
                         style={{objectFit: 'cover', width: '100%', height: '100%', borderRadius: '1rem'}}/>

                </Box>
                <Box content={'div'} sx={{display: 'flex', mb: 1}}>
                    <CategoryUi subtitle={category}/>
                </Box>
                <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {subtitle}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default CourseCard;