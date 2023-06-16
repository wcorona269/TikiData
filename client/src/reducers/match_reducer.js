import {
	FETCH_MATCH_REQUEST,
	FETCH_MATCH_SUCCESS,
	FETCH_MATCH_FAILURE
} from '../actions/api_actions';

const initialState = {
	users: [],
	user: null,
	isLoading: false,
	error: null
};

const matchReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_MATCH_REQUEST:
			return { ...state, isLoading: true, error: null };
		case FETCH_MATCH_SUCCESS:
			return { ...state, user: action.payload, isLoading: false, error: null };
		case FETCH_MATCH_FAILURE:
			return { ...state, isLoading: false, error: action.payload };
		default:
			return state;
	}
};

export default matchReducer;