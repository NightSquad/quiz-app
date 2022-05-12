import axios from 'axios';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Body from './components/Body/Body';
import CategoriesModal from './components/Categories/Categories';
import Header from './components/header/header';
import Quiz from './components/quiz/quiz';

function App() {
  let gameState = useSelector(state => state.gameStateReducer)
  let categories = useSelector(state => state.categoriesReducer)
  const [selectCategory, setSelectCategory] = useState(false)
  const [randomAnswersArray, setRandomAnswersArray] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)
  const dispatch = useDispatch();

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

  async function fetchQuiz() {
    let random = Math.floor(Math.random() * categories.length)
    let category = categories[random]
    let params = {amount: 10, category: category === 'any' ? null : category, encode: 'base64'}
    let results = await axios.get(`https://opentdb.com/api.php`, { params })
    let inputArray = results.data.results.map(el => el.incorrect_answers.map(el => atob(el)).concat(atob(el.correct_answer)))
    dispatch({type: 'setQuestions', data: results.data.results})
    let outputArray = inputArray.map(el => randomAnswers(el))
    return outputArray
  }

  gameState && randomAnswersArray.length < 1 && fetchQuiz().then(val => {
    setRandomAnswersArray(val)
    setIsLoaded(true)
  })

  return (
      <div className="App"> 
      <Router>
        <Header/>
          <Routes>
            <Route path='/login' element={<h1>Login</h1>}/>
            <Route path='/' element={!gameState && <Body setSelectCategory={setSelectCategory}/>}/>
          </Routes>
        </Router>

        {gameState && isLoaded && <Quiz answers={randomAnswersArray}/>}
        {selectCategory && <CategoriesModal state={setSelectCategory}/>}
      </div>
  );
}

export default App;
