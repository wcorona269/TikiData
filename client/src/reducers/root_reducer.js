import { combineReducers } from "redux";
import counterReducer from './counter_reducer'
import usersReducer from "./users_reducer";
import uiReducer from "./ui_reducer";
import sessionReducer from "./session_reducer";
import clubReducer from "./club_reducer";
import competitionReducer from "./competition_reducer";
import matchReducer from "./match_reducer";
import matchesReducer from "./matches_reducer";
import playerReducer from "./player_reducer";

const rootReducer = combineReducers({
	counter: counterReducer,
	users: usersReducer,
	session: sessionReducer,
	ui: uiReducer,
	club: clubReducer,
	competition: competitionReducer,
	match: matchReducer,
	matches: matchesReducer,
	player: playerReducer
});

export default rootReducer;