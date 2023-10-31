import { FETCH_STANDINGS_REQUEST, FETCH_STANDINGS_SUCCESS, FETCH_STANDINGS_FAILURE } from "../actions/standings_actions";

const initialState = {
	isLoading: false,
	error: null
};

const standingsReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_STANDINGS_REQUEST:
			return { ...state, isLoading: true, error: null };
		case FETCH_STANDINGS_SUCCESS:
			return {
				...state,
				standings: action.payload,
				isLoading: false,
				error: null
			};
		case FETCH_STANDINGS_FAILURE:
			return { ...state, isLoading: false, error: action.payload };
		default:
			return state;
	}
};

export default standingsReducer;