import { Accordion, AccordionSummary, AccordionDetails, Typography, List, ListItem } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import DescriptionIcon from '@mui/icons-material/Description';
import Box from "@mui/material/Box";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {ILessonWithTopic} from "../../constants/interfaces";

type CourseContentTableProps = {
    courseContent: ILessonWithTopic[]
}

const CourseContentTable = ({courseContent}: CourseContentTableProps) => {
    const pathname = useParams()
    const navigate = useNavigate()

    return (
        <div>
            <Typography variant="h6" gutterBottom>
                Course content
            </Typography>
            {courseContent.map((section, index) => (
                <Accordion key={index} defaultExpanded={index === 0}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography>
                            {index + 1 < 10 ? `0${index + 1}` : index + 1}: {section.name}
                        </Typography>
                    </AccordionSummary>
                    {section.lessons && (
                        <AccordionDetails>
                            <List>
                                {section.lessons.map((lesson, lessonIndex) => (
                                    <ListItem key={lessonIndex} disablePadding={false} >
                                        <ListItemButton selected={pathname?.lessonName ? pathname?.lessonName?.split('-').join(' ') === lesson.name : false} onClick={() => {navigate(lesson.name.split(' ').join('-'))}} sx={{py: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                                            <Box content={'div'} sx={{display:'flex', alignItems:'center', gap: 2}}>
                                                <ListItemIcon>
                                                     <PlayArrowIcon/>
                                                </ListItemIcon>
                                                <ListItemText primary={`${lesson.name}`} />
                                            </Box>
                                            {/*<ListItemText primary={`${lesson.duration}`} sx={{textAlign: 'end'}}/>*/}
                                        </ListItemButton>
                                    </ListItem>
                                ))}
                            </List>
                        </AccordionDetails>
                    )}
                </Accordion>
            ))}
        </div>
    );
};

export default CourseContentTable;
