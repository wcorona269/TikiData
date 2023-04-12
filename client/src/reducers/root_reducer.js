import { combineReducers } from "redux";
import counterReducer from './counter_reducer'
import usersReducer from "./users_reducer";
import uiReducer from "./ui_reducer";

const rootReducer = combineReducers({
	counter: counterReducer,
	users: usersReducer,
	ui: uiReducer
});

export default rootReducer;