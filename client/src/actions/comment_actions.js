import axios from "axios";

// create comment
export const CREATE_COMMENT_REQUEST = 'CREATE_COMMENT_REQUEST'
export const CREATE_COMMENT_FAILURE = 'CREATE_COMMENT_FAILURE'
export const CREATE_COMMENT_SUCCESS = 'CREATE_COMMENT_SUCCESS'

export const createComment = (commentData) => {
	return (dispatch) => {
		dispatch({ type: CREATE_COMMENT_REQUEST });
		return axios.post('/comments/create', commentData)  // Assuming your backend endpoint for creating posts is '/posts/create'
			.then((response) => {
				dispatch({ type: CREATE_COMMENT_SUCCESS, payload: response.data });
			})
			.catch((error) => {
				dispatch({ type: CREATE_COMMENT_FAILURE, payload: error.message });
			});
	};
};