import {
	FETCH_PLAYER_REQUEST,
	FETCH_PLAYER_SUCCESS,
	FETCH_PLAYER_FAILURE
} from '../actions/api_actions';

const initialState = {
	users: [],
	user: null,
	isLoading: false,
	error: null
};

const playerReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_PLAYER_REQUEST:
			return { ...state, isLoading: true, error: null };
		case FETCH_PLAYER_SUCCESS:
			return { ...state, player: action.payload, isLoading: false, error: null };
		case FETCH_PLAYER_FAILURE:
			return { ...state, isLoading: false, error: action.payload };
		default:
			return state;
	}
};

export default playerReducer;