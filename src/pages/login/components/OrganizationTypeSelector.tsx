import React, {useState} from 'react';
import {Card, CardActionArea, CardContent, Typography, Box} from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import BadgeIcon from '@mui/icons-material/Badge';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import {brand} from "../../../theme/themePrimitives";

const userTypes = [
    {label: 'Student', icon: <SchoolIcon/>, value: 'student'},
    {label: 'Faculty', icon: <BadgeIcon/>, value: 'faculty'},
    {label: 'Staff', icon: <PermIdentityIcon/>, value: 'staff'},
    {label: 'Staff', icon: <PermIdentityIcon/>, value: 'staff'}
];

const OrganizationTypeSelector = () => {
    const [selected, setSelected] = useState('faculty');

    return (
        <Box display="flex" flexWrap={'wrap'} justifyContent={'space-between'} gap={2}>
            {userTypes.map((type) => (
                <Card
                    key={type.value}
                    sx={{
                        width: 160,
                        minHeight: 160,
                        textAlign: 'center',
                        opacity: selected === type.value ? 1 : 0.5,
                        border: selected === type.value ? `2px solid ${brand[400]}` : '1px solid grey',
                        borderRadius: '8px'
                    }}
                >
                    <Card sx={{border: 'none', cursor: 'pointer'}} onClick={() => setSelected(type.value)}>
                        <CardContent >
                            <Box color={selected === type.value ? 'primary.main' : 'grey'} fontSize={40}>
                                {type.icon}
                            </Box>
                            <Typography color={selected === type.value ? 'primary.main' : 'grey'}>
                                {type.label}
                            </Typography>
                        </CardContent>
                    </Card>
                </Card>
            ))}
        </Box>
    );
};

export default OrganizationTypeSelector;
