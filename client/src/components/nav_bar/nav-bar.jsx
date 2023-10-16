import './nav-bar.scss';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LoggedInNav from './logged-in-nav';
import LoggedOutNav from './logged-out-nav';
import HomeIcon from '@mui/icons-material/Home';
import SportsIcon from '@mui/icons-material/Sports';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import { AppBar, Box, Container, IconButton, Tab, Tabs, Typography } from '@mui/material';


const NavBar = ({currentUser}) => {
	const navigate = useNavigate();
	let component;
	currentUser === null ? component = <LoggedOutNav /> : component = <LoggedInNav />
	useEffect(() => {}, [currentUser])
	let [selectedTab, setSelectedTab] = useState(0);

	useEffect(() => {

	}, [])

	const handleChange = (value) => {
		setSelectedTab(value);

		switch (value) {
			case 0:
				navigate('/home')
				break;
			case 1:
				navigate('/news')
				break;
			case 2:
				navigate('/matches')
				break;
		}
	}


	return (
		<AppBar variant='outlined' sx={{backgroundColor: 'var(--white)'}}>
			<Container sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%', alignItems: 'center'}}>
				<Typography variant='h4'>
					Touchline
				</Typography>
				<Tabs value={selectedTab} >
					<Tab
						onClick={() => handleChange(0)}
						icon={<HomeIcon />}
						aria-label="home"
					/>
					<Tab
						onClick={() => handleChange(1)}
						icon={<NewspaperIcon/>}
						aria-label="home"
					/>
					<Tab
						onClick={() => handleChange(2)}
						icon={<SportsIcon/>}
						aria-label="home"
					/>
				</Tabs>
			</Container>
		</AppBar>
	)
}

export default NavBar;