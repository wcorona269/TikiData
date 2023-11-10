import { 
	FETCH_NOTIFICATIONS_FAILURE, 
	FETCH_NOTIFICATIONS_REQUEST, 
	FETCH_NOTIFICATIONS_SUCCESS,
	READ_NOTIFICATIONS_REQUEST,
	READ_NOTIFICATIONS_SUCCESS,
	READ_NOTIFICATIONS_FAILURE
}
from "../actions/notification_actions";

const initialState = {
	isLoading: false,
	error: null
}

const notificationsReducer = (state = initialState, action) => {
	Object.freeze(state);
	let nextState = Object.assign({}, state);
	switch (action.type) {
		case READ_NOTIFICATIONS_REQUEST:
		case FETCH_NOTIFICATIONS_REQUEST:
			return { ...nextState, isLoading: true, error: null};
		case FETCH_NOTIFICATIONS_SUCCESS:
			return { ...nextState, isLoading: false, error: null, notifications: action.payload['notifications'] };
		case READ_NOTIFICATIONS_SUCCESS:
			const readNotification = action.payload['notification']
			const updatedNotifications = nextState.notifications.map((notification) => {
				return notification.id !== readNotification.id ? notification : readNotification
			})
			return { ...nextState, notifications: updatedNotifications, isLoading: false, error: null }
		case FETCH_NOTIFICATIONS_FAILURE:
		case READ_NOTIFICATIONS_FAILURE:
			return { ...nextState, isLoading: false, error: action.payload, notifications: null };
		default:
			return nextState;
	}
}

export default notificationsReducer;