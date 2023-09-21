import {
	FETCH_CLUB_REQUEST,
	FETCH_CLUB_SUCCESS,
	FETCH_CLUB_FAILURE,
	FETCH_CLUB_STATS_REQUEST,
	FETCH_CLUB_STATS_SUCCESS,
	FETCH_CLUB_STATS_FAILURE,
	FETCH_CLUB_SEASONS_REQUEST,
	FETCH_CLUB_SEASONS_SUCCESS,
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
				fixtures: action.payload['fixtures'],
				isLoading: false,
				error: null
			};
		case FETCH_CLUB_FAILURE:
			return { ...state, isLoading: false, error: action.payload };
		case FETCH_CLUB_STATS_REQUEST:
			return { ...state, isLoading: true, error: null };
		case FETCH_CLUB_STATS_SUCCESS:
			return {
				...state,
				isLoading: false,
				stats: action.payload
			}
		case FETCH_CLUB_STATS_FAILURE:
			return { ...state, isLoading: false, error: action.payload }
		case FETCH_CLUB_SEASONS_REQUEST:
			return { ...state, isLoading: true, error: null };
		case FETCH_CLUB_SEASONS_SUCCESS:
			return {
				...state,
				isLoading: false,
				seasons: action.payload
			}
		default:
			return state;
	}
};

export default clubReducer;