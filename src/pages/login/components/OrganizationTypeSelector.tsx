import React, {useEffect, useState} from 'react';
import {Card, CardContent, Typography, Box} from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import {brand} from "../../../theme/themePrimitives";
import {useStore} from "../../../store/useStore";
import {IOrganization, IState} from "../../../constants/interfaces";
import Button from "@mui/material/Button";


const OrganizationTypeSelector = () => {
    const token = useStore((state: IState) => state.token);
    const getMyOrganizations = useStore((state: IState) => state.getMyOrganizations);

    const [organizations, setOrganizations] = useState<IOrganization[] | null>(null)
    const [selected, setSelected] = useState<number>(-100);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const data = await getMyOrganizations(); // Ожидаем завершения асинхронной операции
                if (data) {
                    setOrganizations(data); // Устанавливаем данные в состояние
                }
            } catch (error) {
                console.error("Failed to fetch courses:", error);
                setOrganizations(null); // Обрабатываем ошибку, например, сбрасываем состояние
            }
        };

        // if(token){
            fetchCourses();
        // }
    }, [token]);

    return (
        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <Box display="flex" flexWrap={'wrap'} justifyContent={'space-between'} gap={2} marginBottom={4}>
                {organizations ? organizations.map((type) => (
                    <Card
                        key={type.id}
                        sx={{
                            width: 160,
                            minHeight: 160,
                            textAlign: 'center',
                            opacity: selected === type.id ? 1 : 0.5,
                            border: (theme) => selected === type.id ? theme.palette.mode === 'dark' ? `2px solid ${brand[200]}` : `2px solid ${brand[400]}` : '1px solid grey',
                            borderRadius: '8px',
                            bgcolor: (theme) => selected === type.id ? theme.palette.mode === 'dark' ? `${brand[700]}` : `${brand[50]}` : 'transparent',
                        }}
                    >
                        <Card sx={{
                            border: 'none',
                            cursor: 'pointer',
                            bgcolor: (theme) => selected === type.id ? theme.palette.mode === 'dark' ? `${brand[700]}` : `${brand[50]}` : 'transparent',
                        }} onClick={() => setSelected(type.id)}>
                            <CardContent >
                                <Box color={ (theme) => selected === type.id ? theme.palette.mode === 'dark' ? 'primary.light' : 'primary.main' : 'grey'} fontSize={40}>
                                    <SchoolIcon/>
                                </Box>
                                <Typography sx={{
                                    color: (theme) => selected === type.id ? theme.palette.mode === 'dark' ? 'primary.light' : 'primary.main' : 'grey'
                                }}>
                                    {type.name}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Card>
                )) : 'you not joined any organization yet'}

            </Box>
            <Button variant="contained" size={'large'} color={'info'} disabled={selected > 0 ? false : true} sx={{mx: 'auto', fontSize: '24px', color: 'white', fontWeight: '600'}}>
                Select
            </Button>
        </Box>
    );
};

export default OrganizationTypeSelector;
