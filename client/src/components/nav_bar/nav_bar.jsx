import React, { useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom'
import { showModal } from '../../actions/modal_actions';
import { useDispatch, useSelector } from 'react-redux';

const NavBar = () => {
	const dispatch = useDispatch();
	const modal = useSelector(state => state.ui.modal);
	// console.log(modal)

	const loginModal = (e) => {
		dispatch(showModal('login'))
	}

	const signupModal = (e) => {
		dispatch(showModal('signup'))
	}

	return (
		<div className='nav-bar-container'>
			touchline
			<div className='nav-bar'>
					<Link to='/matches'>matches</Link><br></br>
					<Link to='/nations'>nations</Link><br></br>
					<Link to='/leagues'>leagues</Link>
			</div>
			<div className='auth-buttons'>
				<button onClick={() => loginModal()}>Log In</button>
				<button onClick={() => signupModal()}>Sign Up</button>
			</div>
		</div>
	)
}

export default NavBar