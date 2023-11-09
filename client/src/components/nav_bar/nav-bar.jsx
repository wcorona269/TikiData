import React, { useState } from 'react';
import { AppBar, Box, Button, ButtonGroup, Container, Typography, useTheme } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../actions/session_actions';
import AccountMenu from './account-menu';
import { useNavigate } from 'react-router-dom';

const NavBar = ({ lightMode, setLightMode }) => {
	const currentUser = useSelector(state => state.session.user);
	const favorites = useSelector(state => state.favorites?.favorites);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const theme = useTheme();

	const handleClick = () => {
		dispatch(logoutUser());
	}

	const displayFavorites = () => {
		if (!favorites) return null;

		let result = []
		for (let favorite of favorites) {
			result.push(
				<Button size='small' onClick={() => navigate(`/${favorite.target_type}/${favorite.target_id}`)}>
					{favorite.name}
				</Button>
			)
		}
		return (
			<ButtonGroup variant="text" aria-label="text button group">
				{result}
			</ButtonGroup>
		)
	}

	if (currentUser === null) return null;
	return (
		<AppBar  >
			<Container sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
				<Typography variant='h4' sx={{color: lightMode ? theme.palette.text.primary : theme.palette.primary.main }}>
					touchline
				</Typography>
				{/* <Box>
					{displayFavorites()}
				</Box> */}
				<AccountMenu lightMode={lightMode} setLightMode={setLightMode} handleClick={handleClick} />
			</Container>
		</AppBar>
	)
}

export default NavBar;