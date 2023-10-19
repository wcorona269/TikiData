import { 
	FETCH_NOTIFICATIONS_FAILURE, 
	FETCH_NOTIFICATIONS_REQUEST, 
	FETCH_NOTIFICATIONS_SUCCESS } 
from "../actions/notification_actions";

const initialState = {
	isLoading: false,
	error: null
}

const notificationsReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_NOTIFICATIONS_REQUEST:
			return { ...state, isLoading: true, error: null };
		case FETCH_NOTIFICATIONS_SUCCESS:
			return { ...state, isLoading: false, error: null, notifications: action.payload['notifications'] };
		case FETCH_NOTIFICATIONS_FAILURE:
			return { ...state, isLoading: false, error: action.payload, notifications: [] };
		default:
			return state;
	}
}

export default notificationsReducer;