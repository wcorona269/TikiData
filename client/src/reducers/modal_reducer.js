import {
	SHOW_MODAL,
	CLOSE_MODAL
} from '../actions/modal_actions'

const modalReducer = (oldState = {}, action) => {
	Object.freeze(oldState);

	switch (action.type) {
		case SHOW_MODAL:
			return { ...oldState, modal: action.modal }
			break;
		case CLOSE_MODAL:
			return {}
			break;
		default:
			return oldState;
	}
}


export default modalReducer;