import React from 'react'
import { showModal } from '../../actions/modal_actions';
import { useDispatch } from 'react-redux';


const LoggedOutNav = () => {
	const dispatch = useDispatch();

	const loginModal = (e) => {
		dispatch(showModal('login'))
	}
	
	const signupModal = (e) => {
		dispatch(showModal('signup'))
	}

	return (
		<div className='logged-out-nav'>
			<button className='auth-button' id='login-button' onClick={() => loginModal()}>log in</button>
			<button className='auth-button' id='signup-button' onClick={() => signupModal()}>sign up</button>
		</div>
	)
}

export default LoggedOutNav