import React from 'react';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ExpandableTableOfContents from "../../../components/table/ExpandableTableOfContents";
import {grey} from "@mui/material/colors";
import {FiBook, FiShoppingBag} from "react-icons/fi";
import {RiBarChart2Line} from "react-icons/ri";
import {
    FaCertificate,
    FaClock,
    FaClosedCaptioning, FaCommentDots,
    FaFileAlt,
    FaLanguage,
    FaUserGraduate
} from "react-icons/fa";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import {useNavigate} from "react-router-dom";


const contents = [
    { title: 'Introduction', content: 'Overview of the course and objectives.' },
    { title: 'Preparing the character', content: 'Steps to set up your character in Blender.' },
]

const Course = () => {
    const navigate = useNavigate()
    return (
        <Box sx={{width: '100%', maxWidth: {sm: '100%', md: '1700px'}}}>

            <Box sx={{display: 'grid', gridTemplateColumns: '3fr 2fr', gridColumnGap: '3rem'}}>
                <Box content={'div'} sx={{width: '100%'}}>
                    <img src="/React.png" alt="img:React"
                         style={{width: '100%', borderRadius: '2rem', marginBottom: '2rem'}}/>
                    <Typography component="h6" variant="h6" fontWeight={550} color={'primary'} fontSize={16}
                                sx={{mb: 2}}>
                        <b style={{opacity: 0.5, color: '#000000'}}>Category: </b> Frontend development
                    </Typography>
                    <Typography component="h1" variant="h2" fontWeight={550} sx={{mb: 2}}>
                        Frontend Development: with React
                    </Typography>
                    <Typography component="p" variant="body1" paragraph={true} fontWeight={550} sx={{mb: 3}}>
                        What is Lorem Ipsum?
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                        of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                        but also the leap into electronic typesetting, remaining essentially unchanged. It was
                        popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                        and more recently with desktop publishing software like Aldus PageMaker including versions of
                        Lorem Ipsum.
                        <br/>
                        <br/>
                        Why do we use it?<br/>
                        It is a long established fact that a reader will be distracted by the readable content of a page
                        when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                        distribution of letters, as opposed to using 'Content here, content here', making it look like
                        readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as
                        their default model text, and a search for 'lorem ipsum' will uncover many web sites still in
                        their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on
                        purpose (injected humour and the like).
                        <br/>
                        <br/>
                        Where does it come from?br
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
                        classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a
                        Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin
                        words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in
                        classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32
                        and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
                        written in 45 BC. This book is a treatise on the theory of ethics, very popular during the
                        Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
                        section 1.10.32.
                    </Typography>
                    <ExpandableTableOfContents title="COURSE TABLE OF CONTENTS" items={contents} />
                </Box>
                <Box content={'div'} sx={{width: '100%'}}>
                    <Box content={'div'} sx={{width: '100%', height: '48px', boxShadow: '0px 5px 16px #00000010', borderRadius: '1rem', display: 'flex', mb: 3, border: `1px solid ${grey[400]}`}}>
                        <Box content={'div'} sx={{width: '50%', display: 'flex', pl: '0.5rem', gap: 2, alignItems:'center', borderRight: `1px solid ${grey[400]}`}}>
                            <FiBook size={24}/>
                            <Box content={'div'} sx={{ display:'flex', flexDirection: 'column', gap: 0.1}}>
                                <Typography component="span" variant="body2" sx={{opacity: 0.5}} fontWeight={400}>
                                    Lesson
                                </Typography>
                                <Typography component="span" variant="body2" fontWeight={550}>
                                    12
                                </Typography>
                            </Box>
                        </Box>
                        <Box content={'div'} sx={{width: '50%', display: 'flex', pl: '0.5rem', gap: 2, alignItems:'center'}}>
                            <RiBarChart2Line size={24}/>
                            <Box content={'div'} sx={{ display:'flex', flexDirection: 'column', gap: 0.1}}>
                                <Typography component="span" variant="body2" sx={{opacity: 0.5}} fontWeight={400}>
                                    Difficulty
                                </Typography>
                                <Typography component="span" variant="body2" fontWeight={550}>
                                    Moderate
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Stack spacing={2} mb={4}>

                        <Stack direction="row" alignItems="center" spacing={1}>
                            <FaUserGraduate size={18}/>
                            <Typography fontSize={16}>Students: <strong>3,215</strong></Typography>
                        </Stack>

                        <Stack direction="row" alignItems="center" spacing={1}>
                            <FaLanguage size={18}/>
                            <Typography fontSize={16}>Language: <strong>English</strong></Typography>
                        </Stack>

                        <Stack direction="row" alignItems="start" spacing={1}>
                            <FaClosedCaptioning size={18}/>
                            <Typography fontSize={16}>Subtitles: <strong>English, Spanish, French, Italian, Russian, Polish, Dutch, German</strong></Typography>
                        </Stack>

                        <Stack direction="row" alignItems="center" spacing={1}>
                            <FaFileAlt size={18}/>
                            <Typography fontSize={16}>Additional resources: <strong>12 files</strong></Typography>
                        </Stack>

                        <Stack direction="row" alignItems="center" spacing={1}>
                            <FaClock size={18}/>
                            <Typography fontSize={16}>Duration: <strong>8h 23m</strong></Typography>
                        </Stack>

                        <Stack direction="row" alignItems="center" spacing={1}>
                            <FaCommentDots size={18}/>
                            <Typography fontSize={16}>Critique session: <strong>Individual recordings</strong></Typography>
                        </Stack>

                        <Stack direction="row" alignItems="center" spacing={1}>
                            <FaCertificate size={18}/>
                            <Typography fontSize={16}>Certificate: <strong>Upon completion of the course</strong></Typography>
                        </Stack>
                    </Stack>
                    <Stack direction="row" spacing={2} mb={4}>
                        <Button sx={{
                            bgcolor: (theme) => theme.palette.mode === 'dark' ? '#FFFFFF' :'#000000',
                            width: '45%'
                        }} onClick={() => navigate('lesson/Introduction')} variant="contained" startIcon={<FiShoppingBag />}>
                            Enroll a course
                        </Button>

                        <Button sx={{
                            // borderColor: (theme) => theme.palette.mode === 'dark' ? '#FFFFFF' :'#000000',
                            width: '45%'
                        }} variant="outlined" startIcon={<FiShoppingBag />}>
                            Buy as a Gift
                        </Button>
                    </Stack>
                    <Divider sx={{mb: 4}}/>
                    <Box sx={{ maxWidth: '90%', lineHeight: 1.6 }}>
                        <Typography variant="subtitle2" sx={{ fontWeight: "medium", color: "gray", mb: 1 }}>
                            ASSIGNMENT
                        </Typography>
                        <Typography variant="body1" sx={{ mb: 3 }}>
                            Plan to dedicate a minimum of 1-2 hours per day to watch lecture videos, engage in Q&A sessions, and complete assignments.
                        </Typography>

                        <Typography variant="subtitle2" sx={{ fontWeight: "medium", color: "gray", mb: 1 }}>
                            PREREQUISITES
                        </Typography>
                        <Typography variant="body1" sx={{ mb: 3 }}>
                            Familiarity with Blender’s user interface and navigation, basic manipulation of SOPs (Surface Operators), and understanding of fundamental mathematical concepts related to vectors are recommended.
                        </Typography>

                        <Typography variant="subtitle2" sx={{ fontWeight: "medium", color: "gray", mb: 1 }}>
                            MATERIALS
                        </Typography>
                        <Typography variant="body1">
                            Blender 2.93 (or higher) | Recommended system requirements: 8-core processor and 32GB of RAM. To participate in this workshop, you can download the free educational edition of Blender.
                        </Typography>
                    </Box>
                </Box>
            </Box>

        </Box>
    );
};

export default Course;