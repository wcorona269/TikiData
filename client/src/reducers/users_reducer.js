import {
	REGISTER_USER_REQUEST,
	REGISTER_USER_SUCCESS,
	REGISTER_USER_FAILURE,
	FETCH_USER_REQUEST,
	FETCH_USER_SUCCESS,
	FETCH_USER_FAILURE,
	REMOVE_USER_ERRORS,
	FETCH_USER_INFO_FAILURE,
	FETCH_USER_INFO_REQUEST,
	FETCH_USER_INFO_SUCCESS
} from '../actions/user_actions';


const initialState = {
	users: [],
	user: null,
	isLoading: false,
	error: null
};

const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case REGISTER_USER_REQUEST:
		case FETCH_USER_REQUEST:
			return { ...state, isLoading: true, error: null };
		case REGISTER_USER_SUCCESS:
			return { ...state, isLoading: false, error: null };
		case FETCH_USER_SUCCESS:
			return { ...state, user: action.payload, isLoading: false, error: null };
		case REGISTER_USER_FAILURE:
		case FETCH_USER_INFO_FAILURE:
		case FETCH_USER_FAILURE:
			return { ...state, isLoading: false, error: action.payload };
		case REMOVE_USER_ERRORS:
			return { ...state, isLoading: false, error: null };
		case FETCH_USER_INFO_REQUEST:
			return { ...state, isLoading: true, error: null };
		case FETCH_USER_INFO_SUCCESS:
			return { ...state, isLoading: false, users: action.payload }; 
		default:
			return state;
	}
};


export default usersReducer;