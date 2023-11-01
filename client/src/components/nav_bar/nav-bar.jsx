import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LoggedInNav from './logged-in-nav';
import LoggedOutNav from './logged-out-nav';
import { AppBar, Box, Container, IconButton, Tab, Tabs, Typography, useTheme } from '@mui/material';
import { useSelector } from 'react-redux';

const NavBar = ({ lightMode, setLightMode }) => {
	const currentUser = useSelector(state => state.session.user)
	const theme = useTheme();
	const [component, setComponent] = useState(null);

	useEffect(() => {
		if (currentUser === null) {
			setComponent(<LoggedOutNav />);
		} else {
			setComponent(<LoggedInNav lightMode={lightMode} setLightMode={setLightMode} />);
		}
	}, [currentUser, lightMode, setLightMode]);

	return (
		<AppBar  >
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