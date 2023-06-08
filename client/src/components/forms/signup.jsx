import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { registerUser, removeUserErrors } from '../../actions/user_actions';
import { loginUser } from '../../actions/session_actions';

const SignupForm = (props) => {
	const dispatch = useDispatch()
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const errorMessage = useSelector(state => state.users.error);
	const [error, setError] = useState(null);
	const validatePasswordLength = (password.length >= 8);
	const validatePasswordMatch = (password === confirmPassword);
	
	useEffect(() => {
		if (errorMessage !== null) {
			setError(true)
		}
	}, [errorMessage])

	useEffect(() => {
		dispatch(removeUserErrors())
		setError(false)
	}, [email, username, password, confirmPassword])

	const handleSubmit = (e) => {
		e.preventDefault();
		if (validatePasswordLength && validatePasswordMatch) {
			dispatch(registerUser({
				username: username,
				email: email,
				password: password
			}))
		}
	};

	return (
		<div className='modal-form-container'>
			<form
				onSubmit={handleSubmit}
			>
				<input type='text' placeholder='username' name='username' onChange={(e) => setUsername(e.target.value)} />
				<input type='text' placeholder='email' name='email' onChange={(e) => setEmail(e.target.value)} />
				<input type='password' placeholder='password' name='password' onChange={(e) => setPassword(e.target.value)} />
				{!validatePasswordLength && <p className='form-error-message'>Password must be at least 8 Characters</p>}
				<input type='password' placeholder='confirm password' name='confirmPassword' onChange={(e) => setConfirmPassword(e.target.value)} />
				{!validatePasswordMatch && <p className='form-error-message'>Passwords do not match</p>}
				<button type="submit">Register</button>
				{error && <p className='form-error-message'>404 error</p>}
			</form>
		</div>
	)
}

export default SignupForm