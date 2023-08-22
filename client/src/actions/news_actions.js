import axios from 'axios';

// Action types

// Fetch news
export const FETCH_NEWS_REQUEST = 'FETCH_NEWS_REQUEST';
export const FETCH_NEWS_SUCCESS = 'FETCH_NEWS_SUCCESS';
export const FETCH_NEWS_FAILURE = 'FETCH_NEWS_FAILURE';


// Action creators

export const fetchNews = () => {
	return (dispatch) => {
		dispatch({ type: FETCH_NEWS_REQUEST });
		return axios.get(`/news}`)
			.then((response) => {
				dispatch({ type: FETCH_NEWS_SUCCESS, payload: response.data });
			})
			.catch((error) => {
				dispatch({ type: FETCH_NEWS_FAILURE, payload: error.message })
			})
	}
}
