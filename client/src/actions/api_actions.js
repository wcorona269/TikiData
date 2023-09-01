// Action creators for making backend calls to the API-football API from API-Sports.

import axios from 'axios';

// Action types

// Fetch individual match
export const FETCH_MATCH_REQUEST = 'FETCH_MATCH_REQUEST';
export const FETCH_MATCH_SUCCESS = 'FETCH_MATCH_SUCCESS';
export const FETCH_MATCH_FAILURE = 'FETCH_MATCH_FAILURE';

// Fetch multiple matches
export const FETCH_MATCHES_REQUEST = 'FETCH_MATCHES_REQUEST';
export const FETCH_MATCHES_SUCCESS = 'FETCH_MATCHES_SUCCESS';
export const FETCH_MATCHES_FAILURE = 'FETCH_MATCHES_FAILURE';

// Fetch competition info (standings, top scorers, top assists)
export const FETCH_COMPETITION_REQUEST = 'FETCH_COMPETITION_REQUEST'
export const FETCH_COMPETITION_SUCCESS = 'FETCH_COMPETITION_SUCCESS'
export const FETCH_COMPETITION_FAILURE = 'FETCH_COMPETITION_FAILURE'

// Fetch club info
export const FETCH_CLUB_SUCCESS = 'FETCH_CLUB_SUCCESS';
export const FETCH_CLUB_REQUEST = 'FETCH_CLUB_REQUEST';
export const FETCH_CLUB_FAILURE = 'FETCH_CLUB_FAILURE';

// Fetch player info
export const FETCH_PLAYER_REQUEST = 'FETCH_PLAYER_REQUEST';
export const FETCH_PLAYER_SUCCESS = 'FETCH_PLAYER_SUCCESS';
export const FETCH_PLAYER_FAILURE = 'FETCH_PLAYER_FAILURE';


// Action creators

export const fetchMatch = (matchId) => {
	return (dispatch) => {
		dispatch({ type: FETCH_MATCH_REQUEST });
		return axios.get(`/match/${matchId}`)
			.then((response) => {
				dispatch({ type: FETCH_MATCH_SUCCESS, payload: response.data });
			})
			.catch((error) => {
				dispatch({ type: FETCH_MATCH_FAILURE, payload: error.message })
			})
	}
}

export const fetchMatches = (date) => {
	return (dispatch) => {
		dispatch({ type: FETCH_MATCHES_REQUEST });
		return axios.get(`/matches/${date}`)
		.then((response) => {
			dispatch({ type: FETCH_MATCHES_SUCCESS, payload: response.data })
		})
		.catch((error) => {
			dispatch({ type: FETCH_MATCHES_FAILURE, payload: error.message })
		})
	}
}

export const fetchCompetition = (leagueId) => {
	return (dispatch) => {
		dispatch({ type: FETCH_COMPETITION_REQUEST });
		return axios.get(`/competition/${leagueId}`)
		.then((response) => {
			dispatch({ type: FETCH_COMPETITION_SUCCESS, payload: response.data })
		})
		.catch((error) => {
			dispatch({ type: FETCH_COMPETITION_FAILURE, payload: error.message })
		})
	}
}


export const fetchClub = (clubId) => {
	return (dispatch) => {
		dispatch({ type: FETCH_CLUB_REQUEST });
		return axios.get(`/clubs/${clubId}`)
		.then((response) => {
			dispatch({ type: FETCH_CLUB_SUCCESS, payload: response.data })
		})
		.catch((error) => {
			dispatch({ type: FETCH_CLUB_FAILURE, payload: error.message })
		})
	}
}

export const fetchPlayer = (playerId) => {
	return (dispatch) => {
		dispatch({ type: FETCH_PLAYER_REQUEST });
		return axios.get(`/players/${playerId}`)
		.then((response) => {
			dispatch({ type: FETCH_PLAYER_SUCCESS, payload: response.data })
		})
		.catch((error) => {
			dispatch({ type: FETCH_PLAYER_FAILURE, payload: error.message })
		})
	}
}