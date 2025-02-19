import React, {useEffect, useState} from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CourseCard from "../../components/cards/CourseCard";
import {ICourse, IState} from "../../constants/interfaces";
import {useStore} from "../../store/useStore";

const Courses = () => {
    const [courses, setCourses] = useState<ICourse[] | null>(null)
    const getAllCourses = useStore((state: IState) => state.getAllCourses)

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const data = await getAllCourses(); // Ожидаем завершения асинхронной операции
                if (data) {
                    setCourses(data); // Устанавливаем данные в состояние
                }
            } catch (error) {
                console.error("Failed to fetch courses:", error);
                setCourses(null); // Обрабатываем ошибку, например, сбрасываем состояние
            }
        };

        fetchCourses();
    }, []);
    return (
        <Box sx={{width: '100%', maxWidth: {sm: '100%', md: '1700px'}}}>
            {/* cards */}
            <Typography component="h2" variant="h5" sx={{mb: 2}}>
                Courses
            </Typography>
            {
                courses ? courses.map(course => (
                    <CourseCard
                        key={course.id}
                        id={course.id}
                        category={course.category?.name ? course.category?.name : ''}
                        title={course.name}
                        subtitle={course.difficulty}
                        lessons={16}
                        image_url={course.image_url}
                    />
                )) : 'there no any kind of courses here'
            }

        </Box>
    );
};

export default Courses;