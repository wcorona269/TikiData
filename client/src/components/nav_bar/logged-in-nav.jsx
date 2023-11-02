import React from 'react';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../actions/session_actions';
import AccountMenu from './account-menu';

const LoggedInNav = ({ lightMode, setLightMode }) => {
	const dispatch = useDispatch();

	const handleClick = () => {
		dispatch(logoutUser());
	}

	return (
		<AccountMenu lightMode={lightMode} setLightMode={setLightMode} handleClick={handleClick} />
	)
}

export default LoggedInNav;