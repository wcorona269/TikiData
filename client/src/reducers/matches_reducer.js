import {
	FETCH_MATCHES_REQUEST,
	FETCH_MATCHES_SUCCESS,
	FETCH_MATCHES_FAILURE,
	FETCH_LIVE_MATCHES_REQUEST,
	FETCH_LIVE_MATCHES_SUCCESS,
	FETCH_LIVE_MATCHES_FAILURE,
} from '../actions/api_actions';

const initialState = {
	users: [],
	user: null,
	isLoading: false,
	error: null
};

const matchesReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_MATCHES_REQUEST:
			return { ...state, isLoading: true, error: null };
		case FETCH_MATCHES_SUCCESS:
			return { ...state, matches: action.payload, isLoading: false, error: null };
		case FETCH_MATCHES_FAILURE:
			return { ...state, isLoading: false, error: action.payload };
		case FETCH_LIVE_MATCHES_REQUEST:
			return { ...state, isLoading: true, error: null };
		case FETCH_LIVE_MATCHES_SUCCESS:
			return { ...state, matches: action.payload, isLoading: false, error: null };
		case FETCH_LIVE_MATCHES_FAILURE:
			return { ...state, isLoading: false, error: action.payload };
		default:
			return state;
	}
};

export default matchesReducer;