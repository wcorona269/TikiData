import React, { useState, useEffect } from 'react';
import FixtureNavBar from './fixture-nav-bar';
import FixturesDisplay from './fixtures-display';
import NoDataMessage from '../util/no-data/no-data-message';
import Typography from '@mui/material/Typography';
import { Box, Container, Paper } from '@mui/material';

const LeagueFixturesDashboard = ({fixtures, uniqueDates}) => {
	
	const [selectedDate, setSelectedDate] = useState(0);

	const handleChange = (event, date) => {
		setSelectedDate(date);
	}
	
	if (!fixtures.length) {
		return <NoDataMessage/>
	}

	const leagueName = fixtures[0].league.name
	const leagueLogo = fixtures[0].league.logo

	return (
		<Paper elevation={2} sx={{ marginTop: '1rem', mx: 'auto', marginTop: '1rem' }}>
			<Typography variant="h6" gutterBottom className='section-heading'>
				<img src={leagueLogo} style={{ height: '1.5rem', width: '1.5rem', marginRight: '.25rem' }} />
				{leagueName} Fixtures
			</Typography>
			<FixtureNavBar selectedDate={selectedDate} dates={uniqueDates} handleChange={handleChange} setSelectedDate={setSelectedDate}/>
			<FixturesDisplay fixtures={fixtures} selectedDate={selectedDate} uniqueDates={uniqueDates}/>
		</Paper>
	)
}


export default LeagueFixturesDashboard;