import './home.scss';
import React from 'react';
import { Container, Grid } from '@mui/material';

const ThreeColumnHome = ({ component }) => {
	return (
		<Container className='home-container' sx={{ paddingBottom: '5rem' }}>
			<Grid container alignItems='flex-start' spacing={1}>
				<Grid item xs={3} sx={{ position: 'sticky', top: '2rem' }}>
					<HomeMenu selectedTab={selectedTab} handleTabSelect={handleTabSelect} />
				</Grid>
				<Grid item xs={6}>
					{ component }
				</Grid>
				<Grid item xs={3} sx={{ position: 'sticky', top: '2rem' }}>
					<HomeFixturesColumn />
				</Grid>
			</Grid>
		</Container>
	)
}

export default ThreeColumnHome;