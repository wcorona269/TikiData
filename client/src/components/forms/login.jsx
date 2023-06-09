import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, removeSessionErrors } from '../../actions/session_actions';
import AuthForm from './authForm';

const LoginForm = (props) => {
	const dispatch = useDispatch();
	const currentUser = useSelector(state => state.session.user);
	const errorMessage = useSelector(state => state.session.error);

	const fields = ['email', 'password'];

	const onSubmit = (formData) => {
		dispatch(loginUser(formData))
	}

	return (
		<div className='auth-form-container'>
			<AuthForm
				fields={fields}
				onSubmit={onSubmit}
			/>
		</div>
	);
}

export default LoginForm