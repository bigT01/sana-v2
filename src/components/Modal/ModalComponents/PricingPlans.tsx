import Box from "@mui/material/Box";
import PricingCard from "../../cards/PricingCard";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    bgcolor: 'transparent',
    borderRadius: '24px',
    p: 4,
};

const PricingPlans = () => {
    return (
        <Box sx={{ ...style, display: "flex", gap: 3, justifyContent: "center" }}>
            <PricingCard
                title="Professional"
                price="$20/month"
                enhancements={100}
                features={["All Starter features", "Up to 100 enhancements", "API access", "Presets", "Organize with folders"]}
                recommended
                onSelect={() => alert("Upgraded to Professional")}
            />
            <PricingCard
                title="Business"
                price="$50/month"
                enhancements={500}
                features={["All Professional features", "Up to 500 enhancements", "Workflows", "Company account", "User roles & permissions"]}
                onSelect={() => alert("Upgraded to Business")}
            />
        </Box>
    );
};

export default PricingPlans;