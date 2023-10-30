import { Box, Grid, Paper, OutlinedInput, InputAdornment, IconButton, Skeleton, TextField, Stack, Button, InputLabel, useTheme, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import UserProfileHeader from './user-profile-header';
import HomeFixturesColumn from '../home/home-fixtures-column';
import SectionHeading from '../util/section-heading';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { updateUser } from '../../actions/session_actions';

const initial_values = {
	'Password': '',
	'Confirm Password': ''
}

const UserUpdatePage = () => {
	const theme = useTheme();
	const dispatch = useDispatch();
	const isLoading = useSelector(state => state.users.isLoading);
	const currentUsername = useSelector(state => state.users?.user?.username);

	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);
	const isMatching = password === confirmPassword;
	const isValidLength = password.length > 7;
	let error_message;

	if (!isValidLength) error_message = 'Password must be at least 8 characters'
	if (!isMatching) error_message = 'Passwords Must Match';
	if (isValidLength && isMatching) error_message=''

	const handleChange = (event) => {
		const { name, value } = event.target;
		if (name == 'password') setPassword(value);
		if (name == 'confirm') setConfirmPassword(value);
	}

	const handleSubmit = () => {
		let userInfo = {
			'username': currentUsername,
			'password': password
		}
		dispatch(updateUser(userInfo))
	}

	const handleClickShowPassword = () => setShowPassword((show) => !show);
	const handleClickShowConfirmPassword = () => setShowConfirmPassword((show) => !show);

	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};


	const handleUpdateUser = () => {

	}

	return (
		<>
			<Grid item xs={6}>
				{
					isLoading ?
						<Skeleton
							animation="wave"
							height={100}
							width='100%'
						/>
						:
						<Paper elevation={2}>
							<UserProfileHeader />
							<Box>
								<SectionHeading variant='h6' content='Edit Profile' />
								<Box sx={{ p: '1rem' }}>
									<Stack spacing={2} sx={{paddingTop: 2}}>
										<InputLabel>Change Password</InputLabel>
										<OutlinedInput
											id="outlined-adornment-password"
											type={showPassword ? 'text' : 'password'}
											name='password'
											value={password}
											onChange={handleChange}
											helperText="New password"
											endAdornment={
												<InputAdornment position="end">
													<IconButton
														aria-label="toggle password visibility"
														onClick={handleClickShowPassword}
														onMouseDown={handleMouseDownPassword}
														edge="end"
													>
														{showPassword ? <VisibilityOff /> : <Visibility />}
													</IconButton>
												</InputAdornment>
											}
										/>
										<InputLabel>Change Password</InputLabel>
										<OutlinedInput
											id="outlined-adornment-password"
											type={showConfirmPassword ? 'text' : 'password'}
											name='confirm'
											value={confirmPassword}
											onChange={handleChange}
											helperText="New password"
											endAdornment={
												<InputAdornment position="end">
													<IconButton
														aria-label="toggle password visibility"
														onClick={handleClickShowConfirmPassword}
														onMouseDown={handleMouseDownPassword}
														edge="end"
													>
														{showConfirmPassword ? <VisibilityOff /> : <Visibility />}
													</IconButton>
												</InputAdornment>
											}
										/>
										<Box sx={{margin: 5, height: 10, color: theme.palette.error.main, fontFamily: theme.typography.bold }}>
											{error_message}
										</Box>
										<Button variant='contained' disabled={!isMatching || !isValidLength} onClick={handleSubmit} >
											Update Password
										</Button>
									</Stack>
								</Box>
							</Box>
						</Paper>
				}
			</Grid>
			<Grid item xs={3}>
				<HomeFixturesColumn />
			</Grid>
		</>
	)
}

export default UserUpdatePage;