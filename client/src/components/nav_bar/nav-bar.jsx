import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import LoggedInNav from './logged-in-nav';
import LoggedOutNav from './logged-out-nav';

const NavBar = () => {
	const currentUser = useSelector(state => state.session.user);
	let component;

	useEffect(() => {

	}, [currentUser, component])

	currentUser === null ? component = <LoggedOutNav/> : component = <LoggedInNav/>

	return (
		<nav className='nav-bar-container'>
			<button>
				touchline
			</button>
			{component}
		</nav>
	)
}

export default NavBar;