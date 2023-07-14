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
		<div className='auth-buttons'>
			<button onClick={() => loginModal()}>Log In</button>
			<button onClick={() => signupModal()}>Sign Up</button>
		</div>
	)
}

export default LoggedOutNav