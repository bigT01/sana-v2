import React from 'react';
import { Card, CardContent, Typography, LinearProgress, Button } from '@mui/material';

interface ProgressCardProps {
    title: string;
    subtitle: string;
    currentTime: string;
    totalTime: string;
    progress: number;
}

const ProgressCard: React.FC<ProgressCardProps> = ({ title, subtitle, currentTime, totalTime, progress }) => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {subtitle}
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                    {currentTime} of {totalTime}
                </Typography>
                <LinearProgress variant="determinate" value={progress} sx={{ mt: 2, mb: 2 }} />
                <Button variant="contained" fullWidth>
                    Continue
                </Button>
            </CardContent>
        </Card>
    );
};

export default ProgressCard;