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
	Object.freeze(state)

	switch (action.type) {
		case FETCH_COMPETITION_REQUEST:
			return { ...state, isLoading: true, error: null };
		case FETCH_COMPETITION_SUCCESS:
			const { standings, 'top scorers': topScorers, 'top assists': topAssists, fixtures, news } = action.payload;
			return Object.assign({}, state, {
				standings: [ ...standings ],
				top_scorers: Array.isArray(topScorers) ? [...topScorers] : { ...topScorers },
				top_assists: Array.isArray(topAssists) ? [...topAssists] : { ...topAssists },
				fixtures: Array.isArray(fixtures) ? [...fixtures] : { ...fixtures },
				news: Array.isArray(news) ? [...news] : { ...news },
				isLoading: false,
				error: null
			});
		case FETCH_COMPETITION_FAILURE:
			return { ...state, isLoading: false, error: action.payload };
		case REMOVE_COMPETITION:
			return { isLoading: false, error: null };
		default:
			return state;
	}
};

export default competitionReducer;