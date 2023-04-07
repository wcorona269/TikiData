// user auth: username, email, password. Thats it.

import React, { useEffect, useState } from 'react'
// import { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { loginUser } from '../redux/actions';

const LoginForm = (props) => {
	const dispatch = useDispatch();
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		// dispatch(loginUser({ username, email, password }));
	};

	return (
		<form 
		onSubmit={handleSubmit}
		>
			<input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
			<input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
			<input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
			<button type="submit">Register</button>
		</form>
	);
}

export default LoginForm