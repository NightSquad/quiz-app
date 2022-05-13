import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import styles from './answers.module.css'
import { useTheme, useMediaQuery } from '@mui/material';

function Answers({results}) {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));
    const activeStep = useSelector(state => state.stepReducer)
    const currentAnswer = useSelector(state => state.answersReducer)
    const dispatch = useDispatch()
    const alphabet = ['a', 'b', 'c', 'd'] 

    const handleClick = (el) => {
        const obj = {
            [activeStep]: el
        }
        dispatch({type: "setAnswer", obj})
    }
    return ( 
        <div className={styles.answers}>
            {results.map((el, index) => 
                <Button onClick={(e) => handleClick(el)} key={index} sx={{
                    borderRadius: 0,
                    backgroundColor: '#D1D1D1',
                    fontFamily: ['Poppins', 'sans-serif'].join(','),
                    fontSize: '14px',
                    fontWeight: '600',
                    color: "#000000",
                    '& span': {color: '#333333'},
                    ...(currentAnswer[activeStep] === results[index] && {
                        backgroundColor: "#FCC822",
                        color: 'white',
                        "& span": {
                            color: 'white',
                        }
                    }),
                    minHeight: matches ? '30px' : '80px',
                    width: matches ? '100%' : '150px',
                    marginLeft: matches ? '0' : index === 0 ? '0' : '50px',
                    marginTop: matches && index === 0 ? '0' : '10px',
                    '&:hover': {
                        color: '#FFFFFF',
                        backgroundColor: "#FCC822",
                    }
                }} 
                variant='contained'>
                    <span className={styles.alphabet}>{alphabet[index]}.</span>{el}
                </Button>
            )}
        </div>
    );
}

export default Answers;