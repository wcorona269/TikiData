import './fixtures-display.scss';
import React from 'react';
import MatchCard from './match-card';

// FIXTURE DISPLAY
// Second component will show fixtures from selectedDate state variable
// Need declared function that will set state variable, and pass that function on to nav bar
// need selectedDate variable passed on to filter fixtures

const FixturesDisplay = ({fixtures, selectedDate}) => {
	const filteredFixtures = fixtures.filter(fixture => fixture.fixture.date.split('T')[0] === selectedDate);

	return (
		<div className='fixtures-display'>
			<ul>
				{filteredFixtures.map((fixture, idx) => (
					<MatchCard key={idx} fixture={fixture} idx={idx}/>
					))}
			</ul>
		</div>
	)
}

export default FixturesDisplay;