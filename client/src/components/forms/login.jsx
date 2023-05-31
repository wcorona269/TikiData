// user auth: username, email, password. Thats it.

import React, { useEffect, useState } from 'react'
// import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../actions/session_actions'
import { closeModal } from '../../actions/modal_actions';

const LoginForm = (props) => {
	const dispatch = useDispatch();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(loginUser({
			email: email,
			password: password
		}))
		// dispatch(closeModal())
	};

	return (
		<form 
		onSubmit={handleSubmit}
		>
			<input type="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
			<input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
			<button type="submit">Register</button>
		</form>
	);
}

export default LoginForm