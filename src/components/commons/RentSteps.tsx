import React from "react";
import styles from "@styles/rent/Rent.module.css";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { makeStyles } from "@material-ui/core/styles";
import { styled } from "@mui/material/styles";

import StepConnector, {
    stepConnectorClasses,
} from "@mui/material/StepConnector";

const useStyles = makeStyles(() => ({
    root: {
        "& .Mui-active": { color: "#4D60AA" },
        "& .Mui-completed": { color: "#4D60AA" },
        "& .Mui-disabled .MuiStepIcon-root": { color: "#d0dce6" },
    },
}));

const StyledConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.active}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            backgroundColor: "#d0dce6",
        },
    },
    [`&.${stepConnectorClasses.completed}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            backgroundColor: "#d0dce6",
        },
    },
    [`& .${stepConnectorClasses.line}`]: {
        height: 2,
        border: 0,
        backgroundColor: "#d0dce6",
    },
}));

const steps = ["1", "2", "3"];

function RentStepper({ step }: { step: 0 | 1 | 2 }): React.ReactElement {
    const c = useStyles();
    return (
        <Box sx={{ width: "100%" }}>
            <Stepper
                activeStep={step}
                className={c.root}
                connector={<StyledConnector />}
                alternativeLabel
            >
                {steps.map((s, index) => (
                    <Step key={s}>
                        <StepLabel>
                            <div className={styles.step_label}>
                                {step === index && `STEP${step + 1}`}
                            </div>
                        </StepLabel>
                    </Step>
                ))}
            </Stepper>
        </Box>
    );
}

export default RentStepper;
