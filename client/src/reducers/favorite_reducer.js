import {
	FETCH_FAVORITES_FAILURE, 
	FETCH_FAVORITES_REQUEST, 
	FETCH_FAVORITES_SUCCESS,
	CREATE_FAVORITE_REQUEST,
	CREATE_FAVORITE_SUCCESS,
	CREATE_FAVORITE_FAILURE,
	DELETE_FAVORITE_FAILURE,
	DELETE_FAVORITE_REQUEST,
	DELETE_FAVORITE_SUCCESS
} from '../actions/favorite_actions';

const initialState = {
	isLoading: false,
	error: null
};

const favoritesReducer = (state = initialState, action) => {
	Object.freeze(state)

	switch (action.type) {
		case FETCH_FAVORITES_REQUEST:
		case CREATE_FAVORITE_REQUEST:
		case DELETE_FAVORITE_REQUEST:
			return { ...state, isLoading: true, error: null };
			break;
		case FETCH_FAVORITES_SUCCESS:
			return { ...state, isLoading: false, favorites: action.payload['favorites'] };
			break;
		case CREATE_FAVORITE_SUCCESS:
			const newFavorite = action.payload['favorite']
			return { ...state, favorites: [...state.favorites, newFavorite], isLoading: false };
		case DELETE_FAVORITE_SUCCESS:
			const deletedFavoriteId = action.payload['id']
			const updatedFavorites = state.favorites.filter(
				(favorite) => favorite.id !== deletedFavoriteId
			);
			return { ...state, favorites: updatedFavorites, isLoading: false };
		case FETCH_FAVORITES_FAILURE:
		case CREATE_FAVORITE_FAILURE:
		case DELETE_FAVORITE_FAILURE:
			return { ...state, isLoading: false, error: action.payload };
			break;
		default:
			return state;
			break;
	}
};

export default favoritesReducer;