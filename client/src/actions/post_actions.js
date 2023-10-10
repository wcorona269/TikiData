import axios from 'axios';

// fetch all posts
export const FETCH_ALL_POSTS_REQUEST = 'FETCH_ALL_POSTS_REQUEST'
export const FETCH_ALL_POSTS_SUCCESS = 'FETCH_ALL_POSTS_SUCCESS'
export const FETCH_ALL_POSTS_FAILURE = 'FETCH_ALL_POSTS_FAILURE'

export const fetchPosts = () => {
	return (dispatch) => {
		dispatch({ type: FETCH_ALL_POSTS_REQUEST });
		return axios.get('/posts/all')
			.then((response) => {
				dispatch({ type: FETCH_ALL_POSTS_SUCCESS, payload: response.data })
			})
			.catch((error) => {
				dispatch({ type: FETCH_ALL_POSTS_FAILURE, payload: error.message })
			})
	}
}


// fetch user posts
export const FETCH_USER_POSTS_REQUEST = 'FETCH_USER_POSTS_REQUEST'
export const FETCH_USER_POSTS_SUCCESS = 'FETCH_USER_POSTS_SUCCESS'
export const FETCH_USER_POSTS_FAILURE = 'FETCH_USER_POSTS_FAILURE'

export const fetchUserPosts = (userId) => {
	return (dispatch) => {
		dispatch({ type: FETCH_USER_POSTS_REQUEST });
		return axios.get(`/posts/${userId}`)
		.then((response) => {
			dispatch({ type: FETCH_USER_POSTS_SUCCESS })
		})
		.catch((error) => {
			dispatch({ type: FETCH_USER_POSTS_FAILURE, payload: error.message })
		})
	}
}

// create post
export const CREATE_POST_REQUEST = 'CREATE_POST_REQUEST'
export const CREATE_POST_FAILURE = 'CREATE_POST_FAILURE'
export const CREATE_POST_SUCCESS = 'CREATE_POST_SUCCESS'

export const createPost = (postData) => {
	return (dispatch) => {
		dispatch({ type: CREATE_POST_REQUEST });
		return axios.post('/posts/create', postData)  // Assuming your backend endpoint for creating posts is '/posts/create'
			.then((response) => {
				dispatch({ type: CREATE_POST_SUCCESS, payload: response.data });
			})
			.catch((error) => {
				dispatch({ type: CREATE_POST_FAILURE, payload: error.message });
			});
	};
};

// create post like
export const CREATE_LIKE_REQUEST = 'CREATE_LIKE_REQUEST'
export const CREATE_LIKE_SUCCESS = 'CREATE_LIKE_SUCCESS'
export const CREATE_LIKE_FAILURE = 'CREATE_LIKE_FAILURE'

// remove post like
export const DELETE_LIKE_REQUEST = 'DELETE_LIKE_REQUEST'
export const DELETE_LIKE_SUCCESS = 'DELETE_LIKE_SUCCESS'
export const DELETE_LIKE_FAILURE = 'DELETE_LIKE_FAILURE'

