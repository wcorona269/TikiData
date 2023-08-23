import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { registerUser, removeUserErrors } from '../../actions/user_actions';
import { loginUser } from '../../actions/session_actions';
import { showModal, closeModal } from '../../actions/modal_actions';
import AuthForm from './authForm';

const SignupForm = () => {
	const dispatch = useDispatch();
	const currentUser = useSelector(state => state.session.user);
	const errorMessage = useSelector(state => state.users.error);

	const fields = ['username', 'email', 'password', 'confirmPassword'];
	
	const onSubmit = (formData) => {
		dispatch(registerUser(formData));
	}

	const changeFormType = () => {
		dispatch(closeModal());
		dispatch(showModal('login'));
	}

	return (
		<div className='auth-form-container'>
			<AuthForm
				fields={fields}
				onSubmit={onSubmit}
			/>
			<div onClick={() => changeFormType()} className='form-switch-button'>Already have an account? Log in.</div>
		</div>
	)
}

export default SignupForm