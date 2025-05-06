import { Box, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { useNavigate, useParams, useRoutes } from "react-router-dom";
import { useStore } from "../../../store/useStore";
import { ICourse, IEnrollment, IState, ITopic } from "../../../constants/interfaces";
import { useEffect, useState } from "react";
import { IoMdEye } from "react-icons/io";
import { MdDeleteOutline, MdEdit, MdOutlineDone } from "react-icons/md";
import { DeleteForever } from "@mui/icons-material";


const ViewCourseManager = () => {
    const getCourseById = useStore((state: IState) => state.getCourseById)
    const giveAccessToStudent = useStore((state: IState) => state.giveAccessToStudent)
    const setModal = useStore((state: IState) => state.setModal)

    const params = useParams();
    const navigate = useNavigate();

    const [course, setCourse] = useState<ICourse | null>(null)
    const [IsButtonsLoading, setIsButtonsLoading] = useState<boolean>(false)

    useEffect(() => {
        const fetchCourses = async () => {
            if(params?.courseId){
                try {
                    const data = await getCourseById(params.courseId); // Ожидаем завершения асинхронной операции
                    if (data) {
                        setCourse(data); // Устанавливаем данные в состояние
                    }
                } catch (error) {
                    console.error("Failed to fetch courses:", error);
                    setCourse(null); // Обрабатываем ошибку, например, сбрасываем состояние
                }
            }
        }
        fetchCourses();
    }, [params])


    const handleGiveAccessToStudent = async (id: number, isAccess: boolean) => {
        setIsButtonsLoading(true)
        try {
            const data = await giveAccessToStudent(id, isAccess); // Ожидаем завершения асинхронной операции
            if (data) {
                setCourse((prevCourse:any) => {
                    if (prevCourse) {
                        const updatedEnrollments = prevCourse.enrollments?.map((enrollment:IEnrollment) => {
                            if (enrollment.id === id) {
                                return {
                                    ...enrollment,
                                    status: isAccess ? "approved" : "rejected",
                                };
                            }
                            return enrollment;
                        });
                        return {
                            ...prevCourse,
                            enrollments: updatedEnrollments,
                        };
                    }
                    return prevCourse;
                });
                setIsButtonsLoading(false)
            }
        } catch (error) {
            console.error("Failed to give access to student:", error);
            // Обрабатываем ошибку, например, показываем уведомление
            setIsButtonsLoading(false)
        }
    };
    return (
        <Box sx={{width: '100%', maxWidth: {sm: '100%', md: '1700px'}}}>
            {course ? (
                <Box>
                    <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2}}>
                        <Typography component="h2" variant="h4" sx={{mb: 2}}>
                            {course.name}
                        </Typography>
                    </Box>
                    {course.topics ? (
                        <>
                            <Typography component="h2" variant="h5" sx={{mb: 1}}>
                                Topics
                            </Typography>
                            <TableContainer
                                sx={{marginBottom: 5}}
                                component={Paper}
                                variant="outlined"
                            >
                                <Table  aria-label="demo table">
                                    <TableHead>
                                    <TableRow>
                                        <TableCell>Id</TableCell>
                                        <TableCell>Name</TableCell>
                                        <TableCell>Description</TableCell>
                                        <TableCell>Action</TableCell>
                                    </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {
                                            course.topics[0] ? course.topics.map((row: ITopic) => (
                                                <TableRow key={row.id}>
                                                    <TableCell>{row.id}</TableCell>
                                                    <TableCell>{row.name}</TableCell>
                                                    <TableCell sx={{width: "40%"}}>{row.description}</TableCell>
                                                    <TableCell>
                                                        <IconButton onClick={() => navigate(`${row.id}/${row.name}`)} color="primary" sx={{mr: 1}} aria-label="show" size="small">
                                                            <IoMdEye size="16px"/>
                                                        </IconButton>
                                                        <IconButton color="warning" sx={{mr: 1}} aria-label="edit" size="small">
                                                            <MdEdit size="16px"/>
                                                        </IconButton>
                                                        <IconButton color="error" aria-label="delete" size="small">
                                                            <DeleteForever fontSize="small"/>
                                                        </IconButton>
                                                    </TableCell>
                                                </TableRow>
                                            )) : (
                                                <TableRow>
                                                    <TableCell colSpan={5}>
                                                        <Typography component="h5" variant="body1" sx={{mb: 2, textAlign: 'center'}}>
                                                            No Course Found
                                                        </Typography>    
                                                    </TableCell>
                                                </TableRow>
                                            )
                                        }
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </>
                    ) : null}
                    {course.enrollments ? (
                        <>
                            <Typography component="h2" variant="h5" sx={{mb: 1}}>
                                Enrollments
                            </Typography>
                            <TableContainer
                                component={Paper}
                                variant="outlined"
                            >
                                <Table aria-label="demo table">
                                    <TableHead>
                                    <TableRow>
                                        <TableCell colSpan={1}>Id</TableCell>
                                        <TableCell colSpan={1}>User</TableCell>
                                        <TableCell colSpan={1}>Status</TableCell>
                                        <TableCell colSpan={1}>Action</TableCell>
                                    </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {
                                            course.enrollments[0] ? course.enrollments.map((row: IEnrollment) => (
                                                <TableRow key={row.id}>
                                                    <TableCell sx={{width: '25%'}} colSpan={1}>{row.id}</TableCell>
                                                    <TableCell sx={{width: '25%'}} colSpan={1}>{row?.user ? row.user.name : row.user_id}</TableCell>
                                                    <TableCell sx={{width: '25%'}} colSpan={1}>{row.status}</TableCell>
                                                    <TableCell sx={{width: '25%'}} colSpan={1}>
                                                        <IconButton loading={IsButtonsLoading} onClick={() => handleGiveAccessToStudent(row.id, true)} color="primary" sx={{mr: 1}} aria-label="show" size="small">
                                                            <MdOutlineDone size="16px"/>
                                                        </IconButton>
                                                        <IconButton loading={IsButtonsLoading} onClick={() => handleGiveAccessToStudent(row.id, false)} color="error" aria-label="edit" size="small">
                                                            <MdDeleteOutline size="16px"/>
                                                        </IconButton>
                                                    </TableCell>
                                                </TableRow>
                                            )) : (
                                                <TableRow>
                                                    <TableCell colSpan={4}>
                                                        <Typography component="h5" variant="body1" sx={{mb: 2, textAlign: 'center'}}>
                                                            No any Enrollments Found
                                                        </Typography>    
                                                    </TableCell>
                                                </TableRow>
                                            )
                                        }
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </>
                    ) : null}
                </Box>
                )
                : "there is no course with this id"
            }
        </Box>    
    );
}
export default ViewCourseManager;