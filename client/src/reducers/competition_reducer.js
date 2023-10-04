import {
	FETCH_COMPETITION_REQUEST,
	FETCH_COMPETITION_SUCCESS,
	FETCH_COMPETITION_FAILURE,
	REMOVE_COMPETITION
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
			return { ...state, 
				standings: action.payload['standings'],
				top_scorers: action.payload['top scorers'],
				top_assists: action.payload['top assists'],
				fixtures: action.payload['fixtures'],
				news: action.payload['news'],
				isLoading: false, 
				error: null 
			};
		case FETCH_COMPETITION_FAILURE:
			return { ...state, isLoading: false, error: action.payload };
		case REMOVE_COMPETITION:
			return { isLoading: false, error: null };
		default:
			return state;
	}
};

export default competitionReducer;