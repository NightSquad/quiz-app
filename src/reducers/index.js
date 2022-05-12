import { combineReducers, createStore } from "redux";
import stepReducer from "./stepReducer";
import gameStateReducer from "./gameStateReducer";
import categoriesReducer from "./categoriesReducer";
import apiGetResults from "./apiGetResults";
import { composeWithDevTools } from "redux-devtools-extension";
import selectedAnswersReducer from "./selectedAnswersReducer";

const rootReducer = combineReducers({stepReducer, answersReducer: selectedAnswersReducer, gameStateReducer, categoriesReducer, apiGetResults})

export const store = createStore(rootReducer, composeWithDevTools())