import React, { useState, useEffect } from 'react';
import FixtureNavBar from './fixture-nav-bar';
import FixturesDisplay from './fixtures-display';
import NoDataMessage from '../util/no-data/no-data-message';

const LeagueFixturesDashboard = ({fixtures}) => {
	const uniqueDates = [...new Set(fixtures.map(fixture => fixture.fixture.date.split('T')[0]))].sort();
	const [selectedDate, setSelectedDate] = useState(0);

	useEffect(() => {
	}, [selectedDate])

	const handleChange = (event, date) => {
		setSelectedDate(date);
		console.log(selectedDate);
	}

	
	if (!fixtures.length) {
		return <NoDataMessage/>
	}


	return (
		<div>
			<FixtureNavBar selectedDate={selectedDate} dates={uniqueDates} handleChange={handleChange} setSelectedDate={setSelectedDate}/>
			<FixturesDisplay fixtures={fixtures} selectedDate={uniqueDates[selectedDate]}/>
		</div>
	)
}


export default LeagueFixturesDashboard;