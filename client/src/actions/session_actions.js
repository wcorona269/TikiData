import axios from 'axios';

// Action types
export const LOGIN_USER_REQUEST = 'LOGIN_USER_REQUEST';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE';

export const LOGOUT_USER_REQUEST = 'LOGOUT_USER_REQUEST';
export const LOGOUT_USER_SUCCESS = 'LOGOUT_USER_SUCCESS';
export const LOGOUT_USER_FAILURE = 'LOGOUT_USER_FAILURE';

// Action creators
export const loginUser = (userData) => {
	return (dispatch) => {
		dispatch({ type: LOGIN_USER_REQUEST });
		axios.post('/auth/login', userData)
			.then((response) => {
				dispatch({ type: LOGIN_USER_SUCCESS, payload: response.data });
			})
			.catch((error) => {
				dispatch({ type: LOGIN_USER_FAILURE, payload: error.message });
			});
	};
};

export const logoutUser = () => {
	return (dispatch) => {
		dispatch({ type: LOGOUT_USER_REQUEST });
		axios.post('/auth/logout')
			.then(() => {
				dispatch({ type: LOGOUT_USER_SUCCESS });
			})
			.catch((error) => {
				dispatch({ type: LOGOUT_USER_FAILURE, payload: error.message });
			});
	};
};
