import { useEffect, useState } from 'react'
import styles from './footer.module.css'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
// import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import { useDispatch, useSelector } from 'react-redux';
import CustomButton from '../../UI/CustomButton';

function QuizFooter({setFinish}) {
    const activeStep = useSelector(state => state.stepReducer)
    const dispatch = useDispatch()
    const [timer, setTimer] = useState(60)
    let interval

    useEffect(() => {
        timer > 0 && (interval = setInterval(() => setTimer(timer - 1), 1000))
        if (timer === 0) handleNextClick()
    
        return () => {
        clearInterval(interval)
    }
    }, [timer])
    

    const handleNextClick = () => {
        if (activeStep === 9) {
            setFinish(true)
            clearInterval(interval)
            return
        }
        dispatch({type: "INCREMENT"})
        setTimer(60)
    } 

    return ( 
        <div className={styles.footer}>
            <svg className={styles.svgLine} width="195" height="72" viewBox="0 0 195 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M190.787 161.208C190.787 161.208 197.515 132.404 186.286 121.649C175.351 111.175 147.675 118.096 147.675 118.096C147.675 118.096 110.283 129.02 91.0606 118.096C58.245 99.4469 110.421 50.5191 86.2045 21.5672C59.2358 -10.6753 -20.3916 6.64371 -20.3916 6.64371" stroke="url(#paint0_linear_4_567)" strokeWidth="2.90285"/>
                <defs>
                    <linearGradient id="paint0_linear_4_567" x1="-21.0714" y1="9.47137" x2="208.253" y2="190.028" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FFDD72"/>
                        <stop offset="1" stopColor="#FCC822"/>
                    </linearGradient>
                </defs>
            </svg>
            {/* <CustomButton variant='contained' disabled={activeStep === 0} startIcon={<ArrowLeftIcon/>} onClick={() => dispatch({type: "DECREMENT"})}>Previous</CustomButton> */}
            <div style={{width: 105}}></div>
            <div>
            <svg width="21" height="44" viewBox="0 0 21 44" overflow='visible' xmlns="http://www.w3.org/2000/svg">
                <path d="M20 8.30062V2.20464C17.1044 2.20464 14.2089 2.81424 11.7705 4.03344L9.94167 2.20464C7.96048 0.223452 4.60769 0.223452 2.6265 2.20464L1.7121 3.11904C-0.269088 5.10023 -0.269088 8.45302 1.7121 10.4342L3.0837 11.8058C1.25491 14.8538 0.18811 18.2066 0.18811 22.0166C0.18811 26.7409 1.8645 31.1605 4.76009 34.6657V41.8285C4.76009 41.9809 4.76009 42.1333 4.76009 42.2857V42.4381C4.76009 42.4381 4.76009 42.4381 4.76009 42.5905C4.76009 42.7429 4.91249 42.8953 5.06489 43.0477C5.21729 43.2001 5.36969 43.2001 5.52209 43.3525C5.52209 43.3525 5.52209 43.3525 5.67449 43.3525H5.82689C5.97929 43.3525 6.13169 43.3525 6.28409 43.3525C6.43649 43.3525 6.58889 43.3525 6.74128 43.3525H6.89368C6.89368 43.3525 6.89368 43.3525 7.04608 43.3525C7.19848 43.3525 7.35088 43.2001 7.50328 43.0477L10.8561 39.6949C13.5993 41.2189 16.7996 41.9809 20.1524 41.9809V35.8849C19.3904 35.8849 18.6284 36.6469 18.6284 37.4089V38.9329C16.3424 38.7805 14.3613 38.1709 12.5325 37.1041C11.9229 36.7993 11.3133 36.3421 10.7037 36.0373C6.74128 33.2941 3.9981 28.8745 3.5409 23.8454H5.06489C5.82689 23.8454 6.58888 23.0834 6.58888 22.3214C6.58888 21.5594 5.82689 20.7974 5.06489 20.7974H3.2361C3.9981 12.4154 10.3989 6.01463 18.476 5.25263V6.77663C18.476 7.53862 19.238 8.30062 20 8.30062Z" fill="#FCC822"/>
                <text className={styles.timerText} x={timer >= 20 ? "11" : timer >= 10 ? "14" : '15'} y="27" fill='black'>{timer}</text>
            </svg>
            <svg width="21" height="44" viewBox="0 0 21 44" className={styles.rightClock} xmlns="http://www.w3.org/2000/svg">
                <path d="M20 8.30062V2.20464C17.1044 2.20464 14.2089 2.81424 11.7705 4.03344L9.94167 2.20464C7.96048 0.223452 4.60769 0.223452 2.6265 2.20464L1.7121 3.11904C-0.269088 5.10023 -0.269088 8.45302 1.7121 10.4342L3.0837 11.8058C1.25491 14.8538 0.18811 18.2066 0.18811 22.0166C0.18811 26.7409 1.8645 31.1605 4.76009 34.6657V41.8285C4.76009 41.9809 4.76009 42.1333 4.76009 42.2857V42.4381C4.76009 42.4381 4.76009 42.4381 4.76009 42.5905C4.76009 42.7429 4.91249 42.8953 5.06489 43.0477C5.21729 43.2001 5.36969 43.2001 5.52209 43.3525C5.52209 43.3525 5.52209 43.3525 5.67449 43.3525H5.82689C5.97929 43.3525 6.13169 43.3525 6.28409 43.3525C6.43649 43.3525 6.58889 43.3525 6.74128 43.3525H6.89368C6.89368 43.3525 6.89368 43.3525 7.04608 43.3525C7.19848 43.3525 7.35088 43.2001 7.50328 43.0477L10.8561 39.6949C13.5993 41.2189 16.7996 41.9809 20.1524 41.9809V35.8849C19.3904 35.8849 18.6284 36.6469 18.6284 37.4089V38.9329C16.3424 38.7805 14.3613 38.1709 12.5325 37.1041C11.9229 36.7993 11.3133 36.3421 10.7037 36.0373C6.74128 33.2941 3.9981 28.8745 3.5409 23.8454H5.06489C5.82689 23.8454 6.58888 23.0834 6.58888 22.3214C6.58888 21.5594 5.82689 20.7974 5.06489 20.7974H3.2361C3.9981 12.4154 10.3989 6.01463 18.476 5.25263V6.77663C18.476 7.53862 19.238 8.30062 20 8.30062Z" fill="#FCC822"/>
            </svg>
            </div>
            <CustomButton variant='contained' endIcon={activeStep < 9 ? <ArrowRightIcon/> : <></>} onClick={handleNextClick}>{activeStep === 9 ? 'Finish' : 'Next'}</CustomButton>
        </div>
    );
}

export default QuizFooter;