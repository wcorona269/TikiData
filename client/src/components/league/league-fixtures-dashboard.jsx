import React, { useState, useEffect } from 'react';
import FixtureNavBar from './fixture-nav-bar';
import FixturesDisplay from './fixtures-display';
import NoDataMessage from '../util/no-data/no-data-message';
import Typography from '@mui/material/Typography';
import { Box, Container, Paper } from '@mui/material';
import SectionHeading from '../util/section-heading';

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
		<Paper elevation={1} sx={{ marginTop: '1rem', mx: 'auto', marginTop: '1rem' }}>
			<SectionHeading variant='h6' img={leagueLogo} content={`${leagueName} Fixtures`} />
			<FixtureNavBar selectedDate={selectedDate} dates={uniqueDates} handleChange={handleChange} setSelectedDate={setSelectedDate}/>
			<FixturesDisplay fixtures={fixtures} selectedDate={selectedDate} uniqueDates={uniqueDates}/>
		</Paper>
	)
}


export default LeagueFixturesDashboard;