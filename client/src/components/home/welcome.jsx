import React from 'react'
import {  Typography, Container, Grid, useTheme, Divider, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { showModal } from '../../actions/modal_actions';

const Welcome = () => {
	const theme = useTheme();
	const dispatch = useDispatch();

	const loginModal = (e) => {
		dispatch(showModal('login'))
	}

	const signupModal = (e) => {
		dispatch(showModal('signup'))
	}

	return (
		<Container>
			<Grid container sx={{height: '100%'}}>
				<Grid item xs={6}>
					<Typography variant='h1' sx={{ color: theme.palette.primary.main }}>
						touchline
					</Typography>
					<Divider sx={{ my: 2}}/>
					<Typography variant='h4' sx={{ color: theme.palette.primary.main }} >
						The everything app for soccer
					</Typography>
				</Grid>
				<Grid item xs={6} sx={{display: 'flex', flexDirection: 'column', paddingTop: 4}}>
					<Button 
						variant='contained' 
						onClick={loginModal}
						sx={{width: '50%', borderRadius: '2rem', fontFamily: theme.typography.bold, margin: 'auto'}}
					>
						Log in
					</Button>
					<Button 
						variant='outlined' 
						onClick={signupModal}
						sx={{ width: '50%', borderRadius: '2rem', fontFamily: theme.typography.bold, margin: 'auto' }} 
					>
						Sign up
					</Button>
				</Grid>
			</Grid>
		</Container>
	)
}

export default Welcome;