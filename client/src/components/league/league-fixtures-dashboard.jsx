import React, { useState, useEffect } from 'react';
import FixtureNavBar from './fixture-nav-bar';
import FixturesDisplay from './fixtures-display';
import NoDataMessage from '../util/no-data/no-data-message';

const LeagueFixturesDashboard = ({fixtures}) => {
	const uniqueDates = [...new Set(fixtures.map(fixture => fixture.fixture.date.split('T')[0]))].sort();
	const [selectedDate, setSelectedDate] = useState(uniqueDates[0]);

	useEffect(() => {
	}, [selectedDate])

	const handleTabSelect = (date) => {
		setSelectedDate(date);
	}

	
	if (!fixtures.length) {
		return <NoDataMessage/>
	}


	return (
		<div>
			<FixtureNavBar selectedDate={selectedDate} dates={uniqueDates} onTabSelect={handleTabSelect}/>
			<FixturesDisplay fixtures={fixtures} selectedDate={selectedDate}/>
		</div>
	)
}


export default LeagueFixturesDashboard;