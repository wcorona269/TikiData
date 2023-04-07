import { combineReducers } from "redux";
// import entitiesReducer from "./entities_reducer";
// import errorsReducer from "./errors_reducer";
// import sessionReducer from "./session_reducer";
// import uiReducer from "./ui_reducer";
import counterReducer from './counter_reducer'

const rootReducer = {
	counter: counterReducer
};

export default rootReducer;