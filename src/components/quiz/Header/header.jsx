import { Stepper, Step, StepLabel } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react'
import { useSelector } from 'react-redux';
import styles from './header.module.css'


function QuizHeader() {
    const activeStep = useSelector(state => state.stepReducer)
    const steps = useSelector(state => state.apiGetResults)

    const useStyles = makeStyles(() => ({
        root: {
        "& .Mui-completed .MuiStepIcon-root": {border: '6px solid #FCC822', borderRadius: '60%', backgroundColor: '#FCC822', color: "white" },
        "& .MuiStep-root .Mui-active": {border: '6px solid #FCC822', borderRadius: '50%', color: 'transparent' },
        "& .Mui-disabled .MuiStepIcon-root": { color: "#D1D1D1", border: "6px solid #BDBDBD", borderRadius: '50%' },
        "& .MuiStepLabel-iconContainer, .MuiStep-root": {padding: 0},
        "& .Mui-disabled .MuiStepConnector-line": {backgroundColor: "#ccc"},
        "& .MuiStepConnector-line": { height: 3, border: 0, backgroundColor: "#FCC822"},
        "& .MuiStepIcon-text": {fill: "black"}
        }
    }));

    const c = useStyles();

    return ( 
        <div className={styles.header}>
            <Stepper className={[c.root, styles.stepper].join(" ")} activeStep={activeStep}>
                {steps.map((el, index) =>
                    <Step key={index}>
                        <StepLabel></StepLabel>
                    </Step>)}
            </Stepper>
        </div>
    );
}

export default QuizHeader;