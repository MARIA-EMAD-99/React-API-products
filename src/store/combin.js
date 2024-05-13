import { combineReducers } from "redux";
import { productReducer } from './reducerthunk';
import { languageReducer } from "./reduce";

export default combineReducers({
    products:productReducer,
    language:languageReducer
})