import { CircularProgress, Container } from '@mui/material';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Body from './components/Body/Body';
import CategoriesModal from './components/Categories/Categories';
import Header from './components/header/header';
import Quiz from './components/quiz/quiz';

function App() {
  let gameState = useSelector(state => state.gameStateReducer)
  const [selectCategory, setSelectCategory] = useState(false)
  const [randomAnswersArray, setRandomAnswersArray] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)

  return (
      <Container maxWidth='md' className="App"> 
      <Router>
        <Header/>
          <Routes>
            <Route path='/login' element={<h1>Login</h1>}/>
            <Route path='/' element={!gameState && <Body setSelectCategory={setSelectCategory}/>}/>
            <Route path='/quiz' element={
              <div className='main'>
              {gameState &&!isLoaded && <CircularProgress size={150} sx={{color: '#FCC822', marginBottom: '20px'}}></CircularProgress>}
              {gameState && randomAnswersArray.length > 0 && isLoaded && <Quiz setIsLoaded={setIsLoaded} setRandomAnswersArray={setRandomAnswersArray} answers={randomAnswersArray}/>}
            </div>
            }/>
          </Routes>
          {selectCategory && <CategoriesModal setIsLoaded={setIsLoaded} setRandomAnswersArray={setRandomAnswersArray} state={setSelectCategory}/>}
        </Router>
      </Container>
  );
}

export default App;
