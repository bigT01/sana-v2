import { Box, Button, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { IState } from "../../constants/interfaces";
import { useStore } from "../../store/useStore";
import { useEffect, useState } from "react";
import { MdAdd, MdEdit } from "react-icons/md";
import { IoMdEye } from "react-icons/io";
import { DeleteForever } from "@mui/icons-material";

const OrganizationCourse = () => {
    const getCourseByOrganizationId = useStore((state: IState) => state.getCourseByOrganizationId);
    const params = useParams();

    const [data, setData] = useState<any>([]);

    useEffect(() => {
        if(params.organizationId){
            const fetchCourseData = async() =>{
                const data = await getCourseByOrganizationId(params.organizationId || '');
                setData(data)
            }
            fetchCourseData()
        }
    }, [])

    return (
        <Box sx={{width: '100%', maxWidth: {sm: '100%', md: '1700px'}}}>
            <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2}}>
                <Typography component="h2" variant="h5" sx={{mb: 2}}>
                    Courses
                </Typography>
                <Button variant="outlined" startIcon={<MdAdd size="24px"/>}>
                    New Course
                </Button>
            </Box>
           
            <TableContainer
                component={Paper}
                variant="outlined"
            >
                <Table aria-label="demo table">
                    <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Category</TableCell>
                        <TableCell>Difficulty</TableCell>
                        <TableCell>Action</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            data[0] ? data.map((row: any) => (
                                <TableRow key={row.id}>
                                    <TableCell>{row.id}</TableCell>
                                    <TableCell>{row.name}</TableCell>
                                    <TableCell>{row.category.name}</TableCell>
                                    <TableCell>{row.difficulty}</TableCell>
                                    <TableCell>
                                        <IconButton color="primary" sx={{mr: 1}} aria-label="show" size="small">
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
        </Box>
    );
}
export default OrganizationCourse;