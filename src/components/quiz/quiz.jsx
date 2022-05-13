
import { useState } from 'react'
import { useSelector } from 'react-redux';
import QuizFooter from './footer/footer';
import QuizHeader from './Header/header';
import Answers from './answers/answers';
import Ask from './ask/ask';
import ScoreModal from './Modal/scoreModal';
import "./quiz.css"

function Quiz({setIsLoaded, setRandomAnswersArray, answers}) {
    const activeStep = useSelector(state => state.stepReducer)
    const [isFinish, setFinish] = useState(false)

    console.log('render')
    return ( 
        <div className='quiz'>
            <QuizHeader/>
            <Ask/>
            <Answers results={answers[activeStep]}/>
            <QuizFooter setFinish={setFinish}/>
            {isFinish && <ScoreModal setIsLoaded={setIsLoaded} setRandomAnswersArray={setRandomAnswersArray} setFinish={setFinish}></ScoreModal>}
        </div>
    );
}

export default Quiz;