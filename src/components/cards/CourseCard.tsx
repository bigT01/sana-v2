import React from 'react';
import { Card, CardContent, Typography, Button, Box } from '@mui/material';
import CategoryUi from "../../UI/CategoryUI";
import {useNavigate} from "react-router-dom";

interface CourseCardProps {
    id: number;
    category: string;
    title: string;
    subtitle: string;
    lessons: number;
    image_url:string
}

const CourseCard: React.FC<CourseCardProps> = ({id, category, title, subtitle, lessons, image_url }) => {
    const navigate = useNavigate()
    const handleChangePage = () => {
        navigate(`${id}/${title.split(' ').join('-')}`)
    }

    return (
        <Card sx={{ maxWidth: 345, borderRadius: 2, boxShadow: 3, cursor: 'pointer' }} onClick={() => {handleChangePage()}}>
            <CardContent>
                <Box content={'div'} sx={{position: 'relative', width: '100%', height: 165, mb: 2}}>
                    <img src={image_url} alt="img:React"
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