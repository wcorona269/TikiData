import './league-fixtures.scss'
import React, { useState, useEffect } from 'react';
import FixtureNavBar from './fixture-nav-bar';
import FixturesDisplay from './fixtures-display';
import NoDataMessage from '../util/no-data/no-data-message';
import Typography from '@mui/material/Typography';

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
		<div>
			<Typography variant="h5" gutterBottom className='section-heading'>
				<img src={leagueLogo}/>
				{leagueName} Fixtures
			</Typography>
			<FixtureNavBar selectedDate={selectedDate} dates={uniqueDates} handleChange={handleChange} setSelectedDate={setSelectedDate}/>
			<FixturesDisplay fixtures={fixtures} selectedDate={selectedDate} uniqueDates={uniqueDates}/>
		</div>
	)
}


export default LeagueFixturesDashboard;