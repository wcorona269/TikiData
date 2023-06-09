import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { registerUser, removeUserErrors } from '../../actions/user_actions';
import { loginUser } from '../../actions/session_actions';
import { closeModal } from '../../actions/modal_actions';
import AuthForm from './authForm';

const SignupForm = () => {
	const dispatch = useDispatch()
	const currentUser = useSelector(state => state.session.user);
	const errorMessage = useSelector(state => state.users.error);

	const fields = ['username', 'email', 'password', 'confirmPassword'];
	
	const onSubmit = (formData) => {
		dispatch(registerUser(formData));
	}

	return (
		<div className='modal-form-container'>
			<AuthForm
				fields={fields}
				onSubmit={onSubmit}
				error={errorMessage !== null}
				errorMessage={'Invalid credentials'}
			/>
		</div>
	)
}

export default SignupForm