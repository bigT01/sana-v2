import React from 'react';
import { Card, CardContent, Typography, LinearProgress, Button } from '@mui/material';
import { MdOutlinePlayCircleOutline } from "react-icons/md";
import Box from "@mui/material/Box";
import {gray} from "../../theme/themePrimitives";

interface ProgressCardProps {
    title: string;
    subtitle: string;
    currentTime: string;
    totalTime: string;
    progress: number;
}

const ProgressCard: React.FC<ProgressCardProps> = ({ title, subtitle, currentTime, totalTime, progress }) => {
    return (
        <Card sx={{ maxWidth: 350 }}>
            <CardContent>
                <Box content={'div'} sx={{display: 'flex', justifyContent: 'space-between', alignItems:'center', marginBottom: '1rem'}}>
                    <Box content={'div'} sx={{
                        backgroundColor: (theme) => theme.palette.mode === 'dark' ? `${gray[900]}` : 'hsl(210, 67%, 99%)',
                        display: "flex", padding: '0.1rem 0.8rem',
                        borderRadius: '2rem'}}>
                        <Typography variant="body2" color="text.primary" fontWeight={400}>
                            {subtitle}
                        </Typography>
                    </Box>
                    <img src="/logo192.png" alt="img:react" width={36} height={36}/>
                </Box>
                <Typography gutterBottom variant="h6" component="div">
                    {title}
                </Typography>
                <Box content={'div'} sx={{display: 'flex', justifyContent:'space-between', alignItems: 'flex-end', gap: '1rem'}}>
                    <Box content={'div'} sx={{width: '60%'}}>
                        <LinearProgress color={'primary'} variant="determinate" value={progress} sx={{mb: 1}} />
                        <Box content={'div'} sx={{width: '100%', display:'flex', justifyContent:'space-between'}}>
                            <Typography variant="body2" fontSize={14} color="text.secondary">
                                {currentTime} of {totalTime}
                            </Typography>
                            <Typography variant="body2" fontSize={14} color="text.secondary">
                                80%
                            </Typography>
                        </Box>
                    </Box>
                    <Box content={'div'} sx={{width: '40%'}}>
                        <Button variant="outlined" sx={{width: '100%'}} endIcon={<MdOutlinePlayCircleOutline />}>
                            Continue
                        </Button>
                    </Box>
                </Box>
            </CardContent>
        </Card>
    );
};

export default ProgressCard;