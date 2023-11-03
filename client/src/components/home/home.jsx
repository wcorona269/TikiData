import './home_templates/home.scss'
import React, { useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import {  Container, Grid } from '@mui/material';
import HomeMenu from './home-menu';
import { useSelector } from 'react-redux';

const Home = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const [selectedTab, setSelectedTab] = useState(0);
	const username = useSelector(state => state.session.user?.username);

	useEffect(() => {
		if (location.pathname.includes('home')) {
			setSelectedTab(0)
		} else if (location.pathname.includes('notifications')) {
			setSelectedTab(1)
		} else if (location.pathname.includes('matches')) {
			setSelectedTab(2)
		} else if (location.pathname.includes('news')) {
			setSelectedTab(4)
		} else if (location.pathname.includes(username)) {
			setSelectedTab(5)
		} else {
			setSelectedTab(3)
		}
	}, [location])


	const handleTabSelect = (value, location) => {
		setSelectedTab(value);
		navigate(`/${location}`)
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		})
	}

	return (
		<Container className='home-container' sx={{paddingBottom: '5rem'}}>
			<Grid container alignItems='flex-start' spacing={2}>
				<Grid item xs={3} sx={{position: 'sticky', top: '2rem'}}>
					<HomeMenu selectedTab={selectedTab} handleTabSelect={handleTabSelect}/>
				</Grid>
				<Outlet/>
			</Grid>
		</Container>
	)
}

export default Home;