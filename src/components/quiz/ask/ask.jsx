import { Box } from '@mui/material';
import styles from './ask.module.css'
import { useSelector } from 'react-redux';

function Ask() {
    const activeStep = useSelector(state => state.stepReducer)
    const currentQuestion = useSelector(state => state.apiGetResults[activeStep])
    return (
        <Box className={styles.container}>
            <h1 className={styles.ask}>{atob(currentQuestion.question)}</h1>
            <span>{atob(currentQuestion.category)}</span>
        </Box>
    );
}

export default Ask;