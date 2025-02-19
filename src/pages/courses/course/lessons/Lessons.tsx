import React, {useEffect, useState} from 'react';
import Box from "@mui/material/Box";
import {IoIosArrowBack} from "react-icons/io";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CategoryUi from "../../../../UI/CategoryUI";
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import CourseContentTable from "../../../../components/table/courseContentTable";
import {Outlet, useLocation, useNavigate} from "react-router-dom";

const Lessons = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const [backWard, setBackward] = useState('')


    useEffect(() => {
        const arrLocation = location ? location.pathname.split('/') : null
        if(arrLocation){
            if(arrLocation.length === 5){
                arrLocation.pop()
            }
            arrLocation.pop()
            setBackward(arrLocation.join('/'))
        }
    }, []);
    return (
        <Box sx={{width: '100%', maxWidth: {sm: '100%', md: '1700px'}}}>
            <Box content={'div'} sx={{display: 'flex', gap: 2, alignItems: 'flex-start', mb: 1}}>
                <IconButton aria-label="delete" onClick={() => {navigate(backWard)}}>
                    <IoIosArrowBack />
                </IconButton>
                <Box content={'div'} sx={{display: 'flex', flexDirection: 'column', gap: 0.5}}>
                    <Box content={'div'} sx={{display: 'flex', gap: 2}}>
                        <Typography component="h2" variant="h5">
                            Frontend Development: with React
                        </Typography>
                        <Box content={'div'} sx={{width:'fit-content', height: 'fit-content'}}>
                            <CategoryUi subtitle={"Frontend development"}/>
                        </Box>
                    </Box>
                    <Box content={'div'} sx={{display: 'flex', gap: 2}}>
                        <Box content={'div'} sx={{display: 'flex', gap: 0.5, alignItems: 'center'}}>
                            <PlayCircleOutlineIcon fontSize={'small'} color={'primary'}/>
                            <Typography component="span" variant="body2">
                                38 lessons
                            </Typography>
                        </Box>
                        <Box content={'div'} sx={{display: 'flex', gap: 0.5, alignItems: 'center'}}>
                            <QueryBuilderIcon fontSize={'small'} color={'primary'}/>
                            <Typography component="span" variant="body2">
                                4h 31min
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box sx={{display: 'grid', gridTemplateColumns: '3fr 2fr', gridColumnGap: '3rem'}}>
                <Box content={'div'} sx={{width: '100%'}}>
                    <Outlet/>
                </Box>
                <Box content={'div'} sx={{width: '100%'}}>
                    <CourseContentTable/>
                </Box>
            </Box>
        </Box>
    );
};

export default Lessons;