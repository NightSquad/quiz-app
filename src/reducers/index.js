import { combineReducers, createStore } from "redux";
import finishReducer from "./finishReducer";
import stepReducer from "./stepReducer";
import answersReducer from "./answersReducer";
import gameStateReducer from "./gameStateReducer";
import categoriesReducer from "./categoriesReducer";
import apiGetResults from "./apiGetResults";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({finishReducer, stepReducer, answersReducer, gameStateReducer, categoriesReducer, apiGetResults})

export const store = createStore(rootReducer, composeWithDevTools())