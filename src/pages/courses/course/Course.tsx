import React, {useEffect, useState} from 'react';
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
import {useParams} from "react-router-dom";
import {useStore} from "../../../store/useStore";
import {ICourse, IState, ITopic} from "../../../constants/interfaces";


const Course = () => {
    const getCourseById = useStore((state: IState) => state.getCourseById)
    const getTopicByCourseId = useStore((state: IState) => state.getTopicByCourseId)

    const params = useParams();

    const [loading, setLoading] = useState(false)
    const [buttonText, setButtonText] = useState<string>('Enroll a course')
    const [isButtonDisabled, setIsButtonDisabled] = useState(false)

    const [course, setCourse] = useState<ICourse | null>(null)
    const [topic, setTopic] = useState<ITopic[] | null>(null)

    useEffect(() => {
        if(loading){
            const timeOut = setTimeout(() => {
                setButtonText('Request was sent')
                setIsButtonDisabled(true)
                setLoading(false)

            }, 1500)

            return () => clearTimeout(timeOut);
        }
    }, [loading]);

    useEffect(() => {
        const fetchCourses = async () => {
            if(params?.courseId){
                try {
                    const data = await getCourseById(params.courseId); // Ожидаем завершения асинхронной операции
                    if (data) {
                        setCourse(data); // Устанавливаем данные в состояние
                    }

                    const dataTopic = await getTopicByCourseId(params.courseId);
                    if (dataTopic) {
                        setTopic(dataTopic); // Устанавливаем данные в состояние
                    }
                } catch (error) {
                    console.error("Failed to fetch courses:", error);
                    setCourse(null); // Обрабатываем ошибку, например, сбрасываем состояние
                }
            }
        };

        fetchCourses();
    }, []);

    return (
        <Box sx={{width: '100%', maxWidth: {sm: '100%', md: '1700px'}}}>
            {course ? (
                <Box sx={{display: 'grid', gridTemplateColumns: '3fr 2fr', gridColumnGap: '3rem'}}>
                    <Box content={'div'} sx={{width: '100%'}}>
                        <img src={course.image_url} alt={`img:${course.image_url.split('.')[0]}`}
                             style={{width: '100%', borderRadius: '2rem', marginBottom: '2rem'}}/>
                        <Typography component="h6" variant="h6" fontWeight={550} color={'primary'} fontSize={16}
                                    sx={{mb: 2}}>
                            <Typography component="span" variant={'body2'} sx={{
                                opacity: 0.5,
                                fontSize: '18px',
                                fontWeight: '550',
                                color: (theme) => theme.palette.mode === 'dark' ? '#FFFFFF' : '#000000',
                            }}>Category: </Typography> {course.category?.name}
                        </Typography>
                        <Typography component="h1" variant="h2" fontWeight={550} sx={{mb: 2}}>
                            {course.name}
                        </Typography>
                        <Typography component="p" variant="body1" paragraph={true} fontWeight={550} sx={{mb: 3}}>
                            {course.description}
                        </Typography>
                        {topic && <ExpandableTableOfContents title="COURSE TABLE OF CONTENTS" items={topic}/>}
                    </Box>
                    <Box content={'div'} sx={{width: '100%'}}>
                        <Box content={'div'} sx={{
                            width: '100%',
                            height: '48px',
                            boxShadow: '0px 5px 16px #00000010',
                            borderRadius: '1rem',
                            display: 'flex',
                            mb: 3,
                            border: `1px solid ${grey[400]}`
                        }}>
                            <Box content={'div'} sx={{
                                width: '50%',
                                display: 'flex',
                                pl: '0.5rem',
                                gap: 2,
                                alignItems: 'center',
                                borderRight: `1px solid ${grey[400]}`
                            }}>
                                <FiBook size={24}/>
                                <Box content={'div'} sx={{display: 'flex', flexDirection: 'column', gap: 0.1}}>
                                    <Typography component="span" variant="body2" sx={{opacity: 0.5}} fontWeight={400}>
                                        Lesson
                                    </Typography>
                                    <Typography component="span" variant="body2" fontWeight={550}>
                                        12
                                    </Typography>
                                </Box>
                            </Box>
                            <Box content={'div'}
                                 sx={{width: '50%', display: 'flex', pl: '0.5rem', gap: 2, alignItems: 'center'}}>
                                <RiBarChart2Line size={24}/>
                                <Box content={'div'} sx={{display: 'flex', flexDirection: 'column', gap: 0.1}}>
                                    <Typography component="span" variant="body2" sx={{opacity: 0.5}} fontWeight={400}>
                                        Difficulty
                                    </Typography>
                                    <Typography component="span" variant="body2" fontWeight={550}>
                                        {course.difficulty}
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
                                <Typography fontSize={16}>Subtitles: <strong>English, Spanish, French, Italian, Russian,
                                    Polish, Dutch, German</strong></Typography>
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
                                <Typography fontSize={16}>Critique session: <strong>Individual
                                    recordings</strong></Typography>
                            </Stack>

                            <Stack direction="row" alignItems="center" spacing={1}>
                                <FaCertificate size={18}/>
                                <Typography fontSize={16}>Certificate: <strong>Upon completion of the
                                    course</strong></Typography>
                            </Stack>
                        </Stack>
                        <Stack direction="row" spacing={2} mb={4}>
                            <Button color={'info'}
                                    loading={loading}
                                    disabled={isButtonDisabled}
                                    loadingIndicator="Loading…"
                                    sx={{
                                        // bgcolor: (theme) => theme.palette.mode === 'dark' ? '#FFFFFF' : brand[500],
                                        color: '#FFFFFF !impotant',
                                        width: '45%'
                                    }} onClick={() => {
                                setLoading(true)
                            }} variant="contained" startIcon={<FiShoppingBag/>}>
                                {buttonText}
                            </Button>

                            <Button sx={{
                                // borderColor: (theme) => theme.palette.mode === 'dark' ? '#FFFFFF' :'#000000',
                                width: '45%'
                            }} variant="outlined" startIcon={<FiShoppingBag/>}>
                                Buy as a Gift
                            </Button>
                        </Stack>
                        <Divider sx={{mb: 4}}/>
                        <Box sx={{maxWidth: '90%', lineHeight: 1.6}}>
                            <Typography variant="subtitle2" sx={{fontWeight: "medium", color: "gray", mb: 1}}>
                                ASSIGNMENT
                            </Typography>
                            <Typography variant="body1" sx={{mb: 3}}>
                                Plan to dedicate a minimum of 1-2 hours per day to watch lecture videos, engage in Q&A
                                sessions, and complete assignments.
                            </Typography>

                            <Typography variant="subtitle2" sx={{fontWeight: "medium", color: "gray", mb: 1}}>
                                PREREQUISITES
                            </Typography>
                            <Typography variant="body1" sx={{mb: 3}}>
                                Familiarity with Blender’s user interface and navigation, basic manipulation of SOPs
                                (Surface Operators), and understanding of fundamental mathematical concepts related to
                                vectors are recommended.
                            </Typography>

                            <Typography variant="subtitle2" sx={{fontWeight: "medium", color: "gray", mb: 1}}>
                                MATERIALS
                            </Typography>
                            <Typography variant="body1">
                                Blender 2.93 (or higher) | Recommended system requirements: 8-core processor and 32GB of
                                RAM. To participate in this workshop, you can download the free educational edition of
                                Blender.
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            ) : 'there no information about this content'}
        </Box>
    );
};

export default Course;