import {
	FETCH_ALL_POSTS_SUCCESS,
	FETCH_ALL_POSTS_REQUEST,
	FETCH_ALL_POSTS_FAILURE,
	FETCH_USER_POSTS_SUCCESS,
	FETCH_USER_POSTS_REQUEST,
	FETCH_USER_POSTS_FAILURE
} from '../actions/post_actions'


const initialState = {
	isLoading: false,
	error: null
}

const postsReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_ALL_POSTS_REQUEST:
			return { ...state, isLoading: true, error: null };
		case FETCH_ALL_POSTS_SUCCESS:
			return { ...state, isLoading: false, error: null, posts: action.payload['posts'] };
		case FETCH_ALL_POSTS_FAILURE:
			return { ...state, isLoading: false, error: action.payload, posts: null };
		case FETCH_USER_POSTS_REQUEST:
			return { ...state, isLoading: true, error: null};
		case FETCH_USER_POSTS_SUCCESS:
			return { ...state, isLoading: false, error: null, posts: action.payload['posts']
			};
		case FETCH_USER_POSTS_FAILURE:
			return { ...state, isLoading: false, error: action.payload, posts: null }
		default:
			return state;
	}
}

export default postsReducer;