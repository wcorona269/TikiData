import {
	LOGIN_USER_REQUEST,
	LOGIN_USER_SUCCESS,
	LOGIN_USER_FAILURE,
	LOGOUT_USER_REQUEST,
	LOGOUT_USER_SUCCESS,
	LOGOUT_USER_FAILURE,
	REMOVE_SESSION_ERRORS,
	FETCH_USER_REQUEST,
	FETCH_USER_SUCCESS,
	FETCH_USER_FAILURE
} from '../actions/session_actions';

const initialState = {
	user: null,
	isLoading: false,
	error: null
}

const sessionReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOGIN_USER_REQUEST:
		case FETCH_USER_REQUEST:
			return { ...state, isLoading: true, error: null };
		case LOGOUT_USER_REQUEST:
			return { ...state, isLoading: true, error: null };
		case FETCH_USER_SUCCESS:
			return { ...state, user: action.payload, isLoading: false, error: null };
		case LOGIN_USER_SUCCESS:
			return { ...state, user: action.payload, isLoading: false, error: null };
		case LOGOUT_USER_SUCCESS:
			return { ...state, user: null, isLoading: false, error: null };
		case FETCH_USER_FAILURE:
		case LOGIN_USER_FAILURE:
		case LOGOUT_USER_FAILURE:
			return { ...state, isLoading: false, error: action.payload };
		case REMOVE_SESSION_ERRORS:
			return { ...state, isLoading: false, error: null }
		default:
			return state;
	}
};

export default sessionReducer;
