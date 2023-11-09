import {
	FETCH_ALL_POSTS_SUCCESS,
	FETCH_ALL_POSTS_REQUEST,
	FETCH_ALL_POSTS_FAILURE,
	FETCH_USER_POSTS_SUCCESS,
	FETCH_USER_POSTS_REQUEST,
	FETCH_USER_POSTS_FAILURE,
	FETCH_POST_REQUEST,
	FETCH_POST_SUCCESS,
	FETCH_POST_FAILURE,
	CREATE_POST_REQUEST,
	CREATE_POST_SUCCESS,
	CREATE_POST_FAILURE
} from '../actions/post_actions'


const initialState = {
	isLoading: false,
	error: null,
	posts: [], 
	total_pages: 1,
	current_page: 1, 
	total_posts: 0
};

const postsReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_ALL_POSTS_REQUEST:
		case FETCH_POST_REQUEST:
		case CREATE_POST_REQUEST:
			return { ...state, isLoading: true, error: null };
		case FETCH_ALL_POSTS_SUCCESS:
			return { ...state, 
				isLoading: false, 
				error: null, 
				posts: [...state['posts'], ...action.payload['posts']], // Concatenate old and new posts
				total_pages: action.payload['total_pages'],
				current_page: action.payload['current_page'],
				total_posts: action.payload['total_posts'],
			};
		case CREATE_POST_SUCCESS:
			const createdPost = action.payload['post']
			return {
				...state,
				isLoading: false,
				error: null,
				posts: [ createdPost, ...state['posts'] ]
			}
		case FETCH_ALL_POSTS_FAILURE:
			return { ...state, isLoading: false, error: action.payload, posts: null };
		case FETCH_USER_POSTS_REQUEST:
			return { ...state, isLoading: true, error: null};
		case FETCH_USER_POSTS_SUCCESS:
			return { ...state, isLoading: false, error: null, posts: action.payload['posts']
			};
		case FETCH_USER_POSTS_FAILURE:
			return { ...state, isLoading: false, error: action.payload, posts: null }
		case FETCH_POST_SUCCESS:
			return { ...state, isLoading: false, error: null, post: action.payload['post'] }
		case FETCH_POST_FAILURE:
		case CREATE_POST_FAILURE:
			return { ...state, isLoading: false, error: action.payload, post: null }
		default:
			return state;
	}
}

export default postsReducer;