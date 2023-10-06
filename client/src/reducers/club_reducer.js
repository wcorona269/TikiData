import {
	FETCH_CLUB_REQUEST,
	FETCH_CLUB_SUCCESS,
	FETCH_CLUB_FAILURE,
	REMOVE_CLUB
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
			return {
				...state,
				club: action.payload['club'],
				squad: action.payload['squad'],
				fixtures: [...action.payload['fixtures']], // Create a new array
				seasons: action.payload['seasons'],
				stats: action.payload['stats'],
				news: action.payload['news'],
				isLoading: false,
				error: null
			};
		case FETCH_CLUB_FAILURE:
			return { ...state, isLoading: false, error: action.payload };
		case REMOVE_CLUB:
			return { ...state, isLoading: false, error: null }
		default:
			return state;
	}
};

export default clubReducer;