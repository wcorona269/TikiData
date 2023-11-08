import {
	FETCH_FAVORITES_FAILURE, 
	FETCH_FAVORITES_REQUEST, 
	FETCH_FAVORITES_SUCCESS
} from '../actions/favorite_actions';

const initialState = {
	isLoading: false,
	error: null
};

const favoritesReducer = (state = initialState, action) => {
	Object.freeze(state)

	switch (action.type) {
		case FETCH_FAVORITES_REQUEST:
			return { ...state, isLoading: true, error: null };
			break;
		case FETCH_FAVORITES_SUCCESS:
			return { ...state, favorites: action.payload['favorites'] };
			break;
		case FETCH_FAVORITES_FAILURE:
			return { ...state, isLoading: false, error: action.payload };
			break;
		default:
			return state;
			break;
	}
};

export default favoritesReducer;