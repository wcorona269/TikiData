import axios from 'axios';

// Action types
export const LOGIN_USER_REQUEST = 'LOGIN_USER_REQUEST';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE';

export const LOGOUT_USER_REQUEST = 'LOGOUT_USER_REQUEST';
export const LOGOUT_USER_SUCCESS = 'LOGOUT_USER_SUCCESS';
export const LOGOUT_USER_FAILURE = 'LOGOUT_USER_FAILURE';

export const REMOVE_SESSION_ERRORS = 'REMOVE_SESSION_ERRORS'


export const removeSessionErrors = () => ({
	type: REMOVE_SESSION_ERRORS
})

// Action creators
export const loginUser = (userData) => {
	return (dispatch) => {
		dispatch({ type: LOGIN_USER_REQUEST });
		return axios.post('/auth/login', userData)
			.then((response) => {
				dispatch({ type: LOGIN_USER_SUCCESS, payload: response.data });
			})
			.catch((error) => {
			if (error.response && error.response.data && error.response.data.message) {
				dispatch({ type: LOGIN_USER_FAILURE, payload: error.response.data.message });
			} else {
				dispatch({ type: LOGIN_USER_FAILURE, payload: error.message });
		}});
	};
};

export const logoutUser = (data) => {
	return (dispatch) => {
		dispatch({ type: LOGOUT_USER_REQUEST });
		axios.post('/auth/logout', data)
			.then((response) => {
				dispatch({ type: LOGOUT_USER_SUCCESS, payload: response.data });
			})
			.catch((error) => {
				dispatch({ type: LOGOUT_USER_FAILURE, payload: error.message });
			});
	};
};
