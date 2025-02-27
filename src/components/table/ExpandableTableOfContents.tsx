import React, { useState } from 'react';
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from "@mui/material/Box";
import {grey} from "@mui/material/colors";

interface ExpandableTableOfContentsProps {
    title: string;
    items: { name: string; description: string }[];
}

const ExpandableTableOfContents: React.FC<ExpandableTableOfContentsProps> = ({ title, items }) => {
    const [expanded, setExpanded] = useState<string | false>(false);

    const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Typography variant="h6" sx={{ fontWeight: '500', fontSize: 14, py: 2, color: grey[500] }}>
                {title}
            </Typography>

            {items.map((item, index) => (
                <Accordion
                    key={index}
                    sx={{width: '100%'}}
                    expanded={expanded === `panel${index}`}
                    onChange={handleChange(`panel${index}`)}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls={`panel${index}-content`}
                        id={`panel${index}-header`}
                    >
                        <Typography>{item.name}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>{item.description || 'Additional details go here...'}</Typography>
                    </AccordionDetails>
                </Accordion>
            ))}
        </Box>
    );
};

export default ExpandableTableOfContents;