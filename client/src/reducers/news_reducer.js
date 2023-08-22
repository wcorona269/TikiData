import {
	FETCH_NEWS_REQUEST,
	FETCH_NEWS_SUCCESS,
	FETCH_NEWS_FAILURE
} from '../actions/news_actions';

const initialState = {
	users: [],
	user: null,
	isLoading: false,
	error: null
};

const newsReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_NEWS_REQUEST:
			return { ...state, isLoading: true, error: null };
		case FETCH_NEWS_SUCCESS:
			return { ...state, news: action.payload, isLoading: false, error: null };
		case FETCH_NEWS_FAILURE:
			return { ...state, isLoading: false, error: action.payload };
		default:
			return state;
	}
};

export default newsReducer;