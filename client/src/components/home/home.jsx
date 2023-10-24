import './home_templates/home.scss'
import React, { useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import {  Container, Grid } from '@mui/material';
import HomeMenu from './home-menu';

const Home = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const [selectedTab, setSelectedTab] = useState(0);

	const handleTabSelect = (value, location) => {
		setSelectedTab(value);
		navigate(`/${location}`)
	}

	return (
		<Container className='home-container' sx={{paddingBottom: '5rem'}}>
			<Grid container alignItems='flex-start' spacing={1}>
				<Grid item xs={3} sx={{position: 'sticky', top: '2rem'}}>
					<HomeMenu selectedTab={selectedTab} handleTabSelect={handleTabSelect}/>
				</Grid>
				<Outlet/>
			</Grid>
		</Container>
	)
}

export default Home;