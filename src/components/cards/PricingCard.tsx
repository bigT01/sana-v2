import {Card, CardContent} from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {brand} from "../../theme/themePrimitives";

interface PricingPlan {
    title: string;
    price: string;
    enhancements: number;
    features: string[];
    recommended?: boolean;
    onSelect: () => void;
}

const PricingCard: React.FC<PricingPlan> = ({
                                                title,
                                                price,
                                                enhancements,
                                                features,
                                                recommended,
                                                onSelect,
                                            }) => {
    return (
        <Card
            sx={{
                width: 400,
                height: 600,
                p: 2,
                backgroundColor: recommended ? brand[100] : 'white',
                color: "black",
                borderRadius: "16px",
            }}
        >
            <CardContent>
                {recommended && (
                    <Typography sx={{fontSize: 12, color: "#FFD700"}}>
                        RECOMMENDED
                    </Typography>
                )}
                <Typography variant="h5" fontWeight="bold">
                    {title}
                </Typography>
                <Typography variant="h4" fontWeight="bold" mt={1}>
                    {price}
                </Typography>
                <Typography variant="body2" color="gray" mb={2}>
                    {enhancements} enhancements
                </Typography>
                <Box>
                    {features.map((feature, index) => (
                        <Typography key={index} variant="body2" sx={{mb: 1}}>
                            ✅ {feature}
                        </Typography>
                    ))}
                </Box>
                <Button
                    variant="contained"
                    fullWidth
                    color={'secondary'}
                    sx={{mt: 'auto', bgcolor:'primary.light', color: "white"}}
                    onClick={onSelect}
                >
                    Upgrade to {title}
                </Button>
            </CardContent>
        </Card>
    );
};

export default PricingCard