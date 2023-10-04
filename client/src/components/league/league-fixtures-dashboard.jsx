import React, { useState, useEffect } from 'react';
import FixtureNavBar from './fixture-nav-bar';
import FixturesDisplay from './fixtures-display';
import NoDataMessage from '../util/no-data/no-data-message';
import Typography from '@mui/material/Typography';

const LeagueFixturesDashboard = ({fixtures}) => {
	const uniqueDates = [...new Set(fixtures.map(fixture => fixture.fixture.date.split('T')[0]))].sort();
	const [selectedDate, setSelectedDate] = useState(0);

	const handleChange = (event, date) => {
		setSelectedDate(date);
		console.log(selectedDate);
	}
	
	if (!fixtures.length) {
		return <NoDataMessage/>
	}

	return (
		<div>
			<Typography variant="h5" gutterBottom className='section-heading'>
				Fixtures
			</Typography>
			<FixtureNavBar selectedDate={selectedDate} dates={uniqueDates} handleChange={handleChange} setSelectedDate={setSelectedDate}/>
			<FixturesDisplay fixtures={fixtures} selectedDate={selectedDate} uniqueDates={uniqueDates}/>
		</div>
	)
}


export default LeagueFixturesDashboard;