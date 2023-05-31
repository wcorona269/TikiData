import { combineReducers } from "redux";
import counterReducer from './counter_reducer'
import usersReducer from "./users_reducer";
import uiReducer from "./ui_reducer";
import sessionReducer from "./session_reducer";

const rootReducer = combineReducers({
	counter: counterReducer,
	users: usersReducer,
	session: sessionReducer,
	ui: uiReducer
});

export default rootReducer;