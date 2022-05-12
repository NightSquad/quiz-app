
import React from 'react'
import { useSelector } from 'react-redux';
import QuizFooter from './footer/footer';
import QuizHeader from './Header/header';
import Answers from './answers/answers';
import Ask from './ask/ask';
import ScoreModal from './Modal/scoreModal';
import "./quiz.css"

function Quiz({answers}) {
    const activeStep = useSelector(state => state.stepReducer)
    const isFinish = useSelector(state => state.finishReducer)

    return ( 
        <div className='quiz'>
            <QuizHeader/>
            <Ask/>
            <Answers results={answers[activeStep]}/>
            <QuizFooter/>
            {isFinish && <ScoreModal></ScoreModal>}
        </div>
    );
}

export default Quiz;