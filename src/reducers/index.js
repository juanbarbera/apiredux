import { combineReducers } from "redux";
import apiReducer from './apiReducer';
import languageReducer from "./languageReducer";

export default combineReducers({
  api: apiReducer, 
  language: languageReducer 
});