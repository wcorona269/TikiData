import {
	FETCH_CLUB_REQUEST,
	FETCH_CLUB_SUCCESS,
	FETCH_CLUB_FAILURE,
} from '../actions/api_actions';

const initialState = {
	users: [],
	user: null,
	isLoading: false,
	error: null
};

const clubReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_CLUB_REQUEST:
			return { ...state, isLoading: true, error: null };
		case FETCH_CLUB_SUCCESS:
			return { ...state, club: action.payload, isLoading: false, error: null };
		case FETCH_CLUB_FAILURE:
			return { ...state, isLoading: false, error: action.payload };
		default:
			return state;
	}
};

export default clubReducer;