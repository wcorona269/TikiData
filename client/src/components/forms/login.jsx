import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, removeSessionErrors } from '../../actions/session_actions';
import AuthForm from './authForm';
import { showModal, closeModal } from '../../actions/modal_actions';

const LoginForm = (props) => {
	const dispatch = useDispatch();
	const currentUser = useSelector(state => state.session.user);
	const errorMessage = useSelector(state => state.session.error);

	const fields = ['email', 'password'];

	const onSubmit = (formData) => {
		console.log(formData)
		dispatch(loginUser(formData))
	}

	const changeFormType = () => {
		dispatch(closeModal());
		dispatch(showModal('signup'));
	}

	return (
		<div className='auth-form-container'>
			<AuthForm
				fields={fields}
				onSubmit={onSubmit}
			/>
			<div onClick={() => changeFormType()} className='form-switch-button'>Don't have an account? Sign up.</div>
		</div>
	);
}

export default LoginForm