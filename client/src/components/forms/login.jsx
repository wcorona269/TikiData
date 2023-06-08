// user auth: username, email, password. Thats it.
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, removeSessionErrors } from '../../actions/session_actions'
import { closeModal } from '../../actions/modal_actions';

const LoginForm = (props) => {
	const dispatch = useDispatch();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const currentUser = useSelector(state => state.session.user);
	const errorMessage = useSelector(state => state.session.error);
	const [error, setError] = useState(false);

	useEffect(() => {
		if (errorMessage !== null) {
			setError(true)
		}
	}, [useSelector(state => state.session.error)])

	useEffect(() => {
		dispatch(removeSessionErrors())
		setError(false)
	}, [email, password])

	useEffect(() => {
		if (currentUser !== null) {
			dispatch(closeModal());
		}
	}, [currentUser]);

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(loginUser({
			email: email,
			password: password
		}))
	}

	return (
		<form 
		onSubmit={handleSubmit}
		>
			<input type="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
			<input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
			<button type="submit">Register</button>
			{error && <p>{errorMessage}</p>}
		</form>
	);
}

export default LoginForm