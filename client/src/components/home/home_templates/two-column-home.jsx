import './home.scss';
import React, { useState } from 'react';
import { Container, Grid } from '@mui/material';

const TwoColumnHome = ({ component }) => {
	return (
		<Container className='home-container' sx={{ paddingBottom: '5rem' }}>
			<Grid container alignItems='flex-start' spacing={1}>
				<Grid item xs={3} sx={{ position: 'sticky', top: '2rem' }}>
					<HomeMenu />
				</Grid>
				<Grid item xs={9}>
					{component}
				</Grid>
			</Grid>
		</Container>
	)
}

export default TwoColumnHome;