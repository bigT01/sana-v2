import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { useParams } from "react-router-dom";
import { getCourseByOrganizationId } from '../../store/storeAction/course/getCourseByOrganizationId';
import { IState } from "../../constants/interfaces";
import { useStore } from "../../store/useStore";
import { useEffect } from "react";

const OrganizationCourse = () => {
    const getCourseByOrganizationId = useStore((state: IState) => state.getCourseByOrganizationId);
    const params = useParams();

    useEffect(() => {
        if(params.organizationId){
            const fetchCourseData = async() =>{
                const data = await getCourseByOrganizationId(params.organizationId || '');
                console.log(data)
            }
            fetchCourseData()
        }
    }, [])

    return (
        <Box sx={{width: '100%', maxWidth: {sm: '100%', md: '1700px'}}}>
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
                        <TableCell>Students</TableCell>
                        <TableCell>Action</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    <TableRow>
                        <TableCell>Frozen yoghurt</TableCell>
                        <TableCell>109</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Cupcake</TableCell>
                        <TableCell>305</TableCell>
                    </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}
export default OrganizationCourse;