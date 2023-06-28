import React from 'react';
import EventCard from './fixtureDisplay';

// FIXTURE DISPLAY
// Second component will show fixtures from selectedDate state variable
// Need declared function that will set state variable, and pass that function on to nav bar
// need selectedDate variable passed on to filter fixtures

const FixturesDisplay = ({fixtures, selectedDate}) => {
	const filteredFixtures = fixtures.filter(fixture => fixture.fixture.date.split('T')[0] === selectedDate)
	console.log(filteredFixtures)

	return (
		<div className='fixtures-display'>
			<ul>
				{filteredFixtures.map((fixture, idx) => (
					<EventCard fixture={fixture} idx={idx} />
				))}
			</ul>
		</div>
	)
}

export default FixturesDisplay;