import { Box, Button, TextField, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { ILesson, IState } from "../../../../../constants/interfaces";
import { useStore } from "../../../../../store/useStore";
import { useEffect, useState } from "react";
import { MuiFileInput } from "mui-file-input";
import { AttachFileOutlined, SendAndArchiveOutlined } from "@mui/icons-material";
import { FiEye } from "react-icons/fi";


const LessonOrganizationCourse = () => {
    const getLessonById = useStore((state: IState) => state.getLessonById)

    const params = useParams();

    const [lesson, setLesson] = useState<null | ILesson>(null)
    const [name, setName] = useState<string>("")
    const [description, setDescription] = useState<string>("")
    const [sourseURL, setSourseURL] = useState<string>("")

    const [value, setValue] = useState<File | null>(null)

    const handleChange = (newValue: File | null) => {
        setValue(newValue)
    }

    useEffect(() => {
        if(params?.lessonId){
            const fetchLesson = async () => {
                try {
                    const data = await getLessonById(params?.lessonId || '0'); // Ожидаем завершения асинхронной операции
                    if (data) {
                        setLesson(data); // Устанавливаем данные в состояние
                    }
                } catch (error) {
                    console.error("Failed to fetch lesson:", error);
                    setLesson(null); // Обрабатываем ошибку, например, сбрасываем состояние
                 }
            }
            fetchLesson();
        }
    }, [])
    
    useEffect(() => {
        if(lesson){
            setName(lesson.name)
            setDescription(lesson.description)
            setSourseURL(lesson.source_url)
        }
    }, [lesson])
    return(
        <Box sx={{width: '100%', maxWidth: {sm: '100%', md: '1700px'}}}>
            {lesson ? (
                <Box>
                    <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2}}>
                        <Typography component="h2" variant="h4" sx={{mb: 2}}>
                            {name}
                        </Typography>
                    </Box>
                    <Box sx={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
                        <TextField value={name} onChange={(e) => setName(e.target.value)} id="outlined-basic" label="Lesson name" variant="outlined" sx={{mb: 2, width: '40%'}}/>
                        <TextField value={description} onChange={(e) => setDescription(e.target.value)} id="outlined-multiline-flexible" variant="filled" label="Lesson description" multiline rows={4} sx={{mb: 2, width: '60%'}}/>    
                        <Box sx={{display: 'flex', gap: '1rem'}}>
                            <MuiFileInput
                                value={value}
                                onChange={handleChange}
                                hideSizeText
                                sx={{mb: 2, width: '40%'}}
                                placeholder="Upload preview image"
                                InputProps={{
                                    startAdornment: <AttachFileOutlined />,
                                }}
                            />
                            <Button variant="contained" color="secondary" endIcon={<FiEye />}>
                                Preview
                            </Button>
                        </Box>
                        <Box sx={{display: 'flex', gap: '1rem'}}>
                            <MuiFileInput
                                value={value}
                                onChange={handleChange}
                                hideSizeText
                                sx={{mb: 2, width: '40%'}}
                                placeholder="Upload soure URL"
                                InputProps={{
                                    startAdornment: <AttachFileOutlined />,
                                }}
                            />
                            <Button variant="contained" color="secondary" endIcon={<FiEye />}>
                                Preview
                            </Button>
                        </Box>
                        <Box sx={{display: 'flex', gap: '1rem'}}>
                            <MuiFileInput
                                value={value}
                                onChange={handleChange}
                                hideSizeText
                                sx={{mb: 2, width: '40%'}}
                                placeholder="Upload video URL"
                                InputProps={{
                                    startAdornment: <AttachFileOutlined />,
                                }}
                            />
                            <Button variant="contained" color="secondary" endIcon={<FiEye />}>
                                Preview
                            </Button>
                        </Box>
                        <Box sx={{display: 'flex', gap: '1rem'}}>
                            <Button variant="contained" color="success">
                                Save
                            </Button>
                            <Button variant="contained" color="error">
                                Delete
                            </Button>
                        </Box>
                        
                    </Box>
                </Box>
            ): "there is no Lesson with this id"}
        </Box>
    )
}

export default LessonOrganizationCourse;