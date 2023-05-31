import axios from 'axios';

// Action types
export const REGISTER_USER_REQUEST = 'REGISTER_USER_REQUEST';
export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';
export const REGISTER_USER_FAILURE = 'REGISTER_USER_FAILURE';

export const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE';


// Action creators
export const registerUser = (userData) => {
	return (dispatch) => {
		dispatch({ type: REGISTER_USER_REQUEST });
		axios.post('/auth/register', userData)
			.then((response) => {
				dispatch({ type: REGISTER_USER_SUCCESS, payload: response.data });
			})
			.catch((error) => {
				dispatch({ type: REGISTER_USER_FAILURE, payload: error.message });
			});
	};
};


export const fetchUser = (userId) => {
	return (dispatch) => {
		dispatch({ type: FETCH_USER_REQUEST });
		axios.get(`/users/${userId}`)
			.then((response) => {
				dispatch({ type: FETCH_USER_SUCCESS, payload: response.data });
			})
			.catch((error) => {
				dispatch({ type: FETCH_USER_FAILURE, payload: error.message });
			});
	};
};