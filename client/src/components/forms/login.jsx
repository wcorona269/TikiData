import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, removeSessionErrors } from '../../actions/session_actions';
import AuthForm from './authForm';
import { showModal, closeModal } from '../../actions/modal_actions';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, useTheme } from '@mui/material';

const LoginForm = (props) => {
	const theme = useTheme();
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const fields = ['email', 'password'];

	const onSubmit = (formData) => {
		dispatch(loginUser(formData)).then(() => {navigate('/home')})
	}

	const changeFormType = () => {
		dispatch(closeModal());
		dispatch(showModal('signup'));
	}

	return (
		<Box sx={{ width: 'fit-content', margin: 'auto' }}>
			<AuthForm
				fields={fields}
				onSubmit={onSubmit}
			/>
			<Typography variant='body2' sx={{ marginTop: 2, color: theme.palette.text.secondary }} onClick={() => changeFormType()}>Don't have an account? Sign up.</Typography>
		</Box>
	);
}

export default LoginForm;