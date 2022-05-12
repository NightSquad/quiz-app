import React, { useState } from 'react';
import styles from './scoreModal.module.css'
import { Modal } from '@mui/material';
import { Box } from '@mui/system';
import scoreImage from '../../images/scoreImage.png'
import getScore from '../../../_functions/getScore';
import { useDispatch, useSelector } from 'react-redux';
import CustomButton from '../../UI/CustomButton';

function ScoreModal({setIsLoaded, setRandomAnswersArray, setFinish}) {
    const answers = useSelector(state => state.answersReducer)
    const [scorePage, setScorePage] = useState(true)
    const [score, answersResults] = getScore(answers)
    const dispatch = useDispatch()

    const handleClick = () => {
        setFinish(false)
        setRandomAnswersArray([])
        setIsLoaded(false)
        dispatch({type: "FINISHGAME"})
        dispatch({type: "RESET"})
        dispatch({type: "setQuestions", data: []})
    }

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -65%)',
        height: '415px',
        width: 715,
        bgcolor: 'white',
        display: 'flex',
        flexDirection: 'column', 
        justifyContent: 'center',
        alignItems: 'center'
    };

    return ( 
        <Modal
        sx={{backgroundColor: "rgba(0, 0, 0, 0.5)"}}
        open={true}
        onClose={handleClick}
        >
            {scorePage 
            ? 
            <Box sx={style}>
                <img src={scoreImage} alt="" width={445} height={360} style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: '-1'}}/>
                <h2 className={styles.scoreTitle}>Your Score</h2>
                <p className={styles.score}>{score}</p>
                <CustomButton variant='contained' sx={{position: 'absolute', right: 30, bottom: 30}} onClick={() => setScorePage(false)}>Answers</CustomButton>
            </Box>
            :
            <Box sx={style}>
                <h2 className={styles.resultsTitle}>Your Results</h2>
                <ol>
                {answersResults.map((el, index) => 
                    <li key={index} className={styles.answer} style={{color: el ? "green" : "red"}}>{answers[index] ? answers[index] : "-"}</li>
                )}
                </ol>
            <CustomButton variant='contained' sx={{position: 'absolute', right: 30, bottom: 30}} onClick={handleClick}>Complete</CustomButton>
        </Box>
            }
        </Modal>
    );
}

export default ScoreModal;