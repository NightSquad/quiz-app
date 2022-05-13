import { useState } from 'react'
import { Box, Modal, ToggleButtonGroup, Collapse, Alert } from '@mui/material';
import ToggleButton, {toggleButtonClasses} from '@mui/material/ToggleButton';
import CustomButton from '../UI/CustomButton';
import styles from './Categories.module.css'
import { makeStyles } from '@mui/styles';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Link } from 'react-router-dom';

function randomAnswers(answers) {
    let arr = []
      function fillArray(answers) {
        if (answers.length === 0) return arr
        let random = Math.floor(Math.random() * answers.length)
        arr.push(answers[random])
        let filteredArray = answers.filter(el => el !== answers[random])
        return fillArray(filteredArray)
      }
      return fillArray(answers)
  }

function CategoriesModal({setRandomAnswersArray, state, setIsLoaded}) {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));
    console.log(theme)
    const formats = useSelector(state => state.categoriesReducer);
    let selectedCategories = useSelector(state => state.categoriesReducer)
    const [error, setError] = useState(false)
    const dispatch = useDispatch()

    const handleFormat = (event, newFormats) => {
        if (event.currentTarget.value === 'any') {
            return dispatch({type: 'setCategories', newFormats: ['any']}) 
        } else
        if(formats.includes('any')) {
            return dispatch({type: "setCategories", newFormats: newFormats.filter(el => el !== 'any')})
        }
        dispatch({type: "setCategories", newFormats})
    };

    async function fetchQuiz() {
        let random = Math.floor(Math.random() * selectedCategories.length)
        let category = selectedCategories[random]
        let params = {amount: 10, category: category === 'any' ? null : category, encode: 'base64'}
        let results = await axios.get(`https://opentdb.com/api.php`, { params })
        let inputArray = results.data.results.map(el => el.incorrect_answers.map(el => atob(el)).concat(atob(el.correct_answer)))
        dispatch({type: 'setQuestions', data: results.data.results})
        let outputArray = inputArray.map(el => randomAnswers(el))
        return outputArray
    }

    const handleStart = () => {
        if (formats.length >= 5 || formats.includes("any")) {
            state(false)
            dispatch({type: "STARTGAME"}) 
            fetchQuiz().then(res => {
                setRandomAnswersArray(res)
                setIsLoaded(true)
            })
        }
        else {
            setError(true)
            setTimeout(() => setError(false), 3000)
        }
    }

    const categories = [
        ["any", "Any Category"],
        ["9", "General Knowledge"],
        ["10", "Entertainment: Books"],
        ["11", "Entertainment: Film"],
        ["12", "Entertainment: Music"],
        ["13", "Entertainment: Musicals & Theatres"],
        ["14", "Entertainment: Television"],
        ["15", "Entertainment: Video Games"],
        ["16", "Entertainment: Board Games"],
        ["17", "Science & Nature"],
        ["18", "Science: Computers"],
        ["19", "Science: Mathematics"],
        ["20", "Mythology"],
        ["21", "Sports"],
        ["22", "Geography"],
        ["23", "History"],
        ["24", "Politics"],
        ["25", "Art"],
        ["26", "Celebrities"],
        ["27", "Animals"],
        ["28", "Vehicles"],
        ["29", "Entertainment: Comics"],
        ["30", "Science: Gadgets"],
        ["31", "Entertainment: Japanese Anime & Manga"],
        ["32", "Entertainment: Cartoon & Animations"]
    ]

    const useStyles = makeStyles(() => ({
        root: {
            [`&.${toggleButtonClasses.root}`]: {
                backgroundColor: "#D1D1D1",
                border: 'none !important',
                height: 27,
                fontFamily: 'Roboto',
                fontWeight: '500',
                fontSize: '13px',
                lineHeight: '15px',
                color: '#000000',
                textTransform: 'none',
                marginTop: '10px',
                marginLeft: '10px !important',
                '&:hover': {
                    background: "#FCC822 !important"
                }
            },
            [`&.${toggleButtonClasses.selected}`]: {
                backgroundColor: '#FCC822 !important',
                position: 'relative',
                marginRight: 27,
            },
            [`&.${toggleButtonClasses.selected}::after`]: {
                content: '"X"',
                position: 'absolute',
                right: -26,
                width: 27,
                height: 27,
                backgroundColor: 'black',
                color: 'white',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }
        }
    }))

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        height: 'fit-content',
        width: 715,
        bgcolor: 'white',
        display: 'flex',
        flexDirection: 'column', 
        justifyContent: 'center',
        alignItems: 'center'
    };

    const c = useStyles()

    return ( 
        <Modal
        sx={{backgroundColor: "rgba(0, 0, 0, 0.5)", overflow: 'scroll'}}
        open={true}>
            <Box className={styles.Box} sx={style}>
                <Collapse sx={{width: '100%'}} in={error}>
                    <Alert sx={{borderRadius: '0'}} variant='filled' severity='error'>
                        Select more than 5 topics to start quiz
                    </Alert>
                </Collapse>
                <h2 className={styles.title}>Choose your favorite topic</h2>
                <p className={styles.hint}>Select more than 5 topics to start quiz {matches && '(scrollable)'}</p>
                <div className={styles.categories}>
                    <ToggleButtonGroup
                    value={formats}
                    onChange={handleFormat}
                    sx={{display: 'flex', flexDirection: matches ? 'column' : 'raw', flexWrap: matches ? "nowrap" : 'wrap'}}
                    className={styles.ButtonGroup}
                    >
                        {categories.map(category => <ToggleButton size='small' className={c.root} key={category[0]} value={category[0]}>{category[1]}</ToggleButton>)}
                    </ToggleButtonGroup>
                </div>
                <Link to="/quiz" style={{textDecoration: 'none'}}><CustomButton variant='contained' sx={{position: 'absolute', right: 30, bottom: 30}} onClick={handleStart}>Start Quiz</CustomButton></Link>
            </Box>
        </Modal>
     );
}

export default CategoriesModal;