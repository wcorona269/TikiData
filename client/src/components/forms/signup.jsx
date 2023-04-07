import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
// import { registerUser } from '../redux/actions';


const SignupForm = (props) => {
	const dispatch = useDispatch()
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('')
	const validatePasswordLength = password.length < 8
	const checkPasswordsMatch = (password !== confirmPassword)

	const validatePassword = () => {
		return validatePasswordLength && checkPasswordsMatch
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		const user = { username, email, password }
		if (validatePassword) {
			// dispatch(registerUser(user));
		}
	};


	return (
		<div className='modal-form-container'>
			<form
				// onSubmit={handleSubmit}
			>
				<input type='text' placeholder='username' name='username' onChange={(e) => setUsername(e.target.value)} />
				<input type='text' placeholder='email' name='email' onChange={(e) => setEmail(e.target.value)} />
				<input type='password' placeholder='password' name='password' onChange={(e) => setPassword(e.target.value)} />
				{validatePasswordLength && <p className='form-error-message'>Password must be at least 8 Characters</p>}
				<input type='password' placeholder='confirm password' name='confirmPassword' onChange={(e) => setConfirmPassword(e.target.value)} />
				{checkPasswordsMatch && <p className='form-error-message'>Passwords do not match</p>}
				<button type="submit">Register</button>
			</form>
		</div>
	)
}

export default SignupForm