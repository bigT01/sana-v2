import { Accordion, AccordionSummary, AccordionDetails, Typography, List, ListItem } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import DescriptionIcon from '@mui/icons-material/Description';
import Box from "@mui/material/Box";

interface CourseSection {
    title: string;
    duration: string;
    lessons?: { title: string; duration: string, type: string }[];
}

const courseContent: CourseSection[] = [
    {
        title: "Intro",
        duration: "22min",
        lessons: [
            { title: "Introduction", duration: "2 min" , type: 'lesson' },
            { title: "What is Figma?", duration: "5 min", type: 'lesson' },
            { title: "Understanding Figma", duration: "12 min", type: 'exam' },
            { title: "UI tour", duration: "3 min", type: 'lesson' },
        ],
    },
    { title: "Intermediate Level Stuff", duration: "1h 20min" },
    { title: "Advanced Stuff", duration: "36min" },
    { title: "Imports & Graphics", duration: "40min" },
    { title: "Component in Figma", duration: "1h 12min" },
    { title: "Styles in Figma", duration: "41min" },
    { title: "Summary", duration: "8min" },
];

const CourseContentTable = () => {
    return (
        <div>
            <Typography variant="h6" gutterBottom>
                Course content
            </Typography>
            {courseContent.map((section, index) => (
                <Accordion key={index} defaultExpanded={index === 0}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography>
                            {index + 1 < 10 ? `0${index + 1}` : index + 1}: {section.title} ({section.duration})
                        </Typography>
                    </AccordionSummary>
                    {section.lessons && (
                        <AccordionDetails>
                            <List>
                                {section.lessons.map((lesson, lessonIndex) => (
                                    <ListItem key={lessonIndex} disablePadding={false} >
                                        <ListItemButton sx={{py: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                                            <Box content={'div'} sx={{display:'flex', alignItems:'center', gap: 2}}>
                                                <ListItemIcon>
                                                    {lesson.type === 'lesson' ? <PlayArrowIcon/> : <DescriptionIcon />}
                                                </ListItemIcon>
                                                <ListItemText primary={`${lesson.title}`} />
                                            </Box>
                                            <ListItemText primary={`${lesson.duration}`} sx={{textAlign: 'end'}}/>
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
