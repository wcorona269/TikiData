import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LoggedInNav from './logged-in-nav';
import LoggedOutNav from './logged-out-nav';
import { AppBar, Box, Container, IconButton, Tab, Tabs, Typography, useTheme } from '@mui/material';


const NavBar = ({currentUser, lightMode, setLightMode }) => {
	const navigate = useNavigate();
	const theme = useTheme();
	let component;
	currentUser === null ? component = <LoggedOutNav /> : component = <LoggedInNav lightMode={lightMode} setLightMode={setLightMode} />
	useEffect(() => {}, [currentUser])



	return (
		<AppBar>
			<Container sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
				<Typography variant='h4' sx={{color: lightMode ? theme.palette.text.primary : theme.palette.primary.main }}>
					touchline
				</Typography>
				{component}
			</Container>
		</AppBar>
	)
}

export default NavBar;