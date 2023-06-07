import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import LoggedInNav from './logged_in_nav';
import LoggedOutNav from './logged_out_nav';

const NavBar = () => {
	const currentUser = useSelector(state => state.session.user);
	let component;

	useEffect(() => {

	}, [currentUser, component])

	currentUser === null ? component = <LoggedOutNav/> : component = <LoggedInNav/>

	return (
		<div className='nav-bar-container'>
			touchline
			{component}
		</div>
	)
}

export default NavBar