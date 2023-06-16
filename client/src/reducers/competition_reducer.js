import {
	FETCH_COMPETITION_REQUEST,
	FETCH_COMPETITION_SUCCESS,
	FETCH_COMPETITION_FAILURE,
} from '../actions/api_actions';

const initialState = {
	users: [],
	user: null,
	isLoading: false,
	error: null
};

const competitionReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_COMPETITION_REQUEST:
			return { ...state, isLoading: true, error: null };
		case FETCH_COMPETITION_SUCCESS:
			return { ...state, competition: action.payload, isLoading: false, error: null };
		case FETCH_COMPETITION_FAILURE:
			return { ...state, isLoading: false, error: action.payload };
		default:
			return state;
	}
};

export default competitionReducer;