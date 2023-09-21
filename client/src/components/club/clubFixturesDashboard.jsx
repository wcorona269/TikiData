import React from 'react'
import ClubFixtureListItem from './clubFixtureListItem';
import monthsOfYear from './monthsOfYear';

const ClubFixturesDashboard = ({fixtures}) => {
	const fixturesSortedByDate = fixtures.sort((a, b) => new Date(a.fixture.date) - new Date(b.fixture.date));
	const monthsOfFixtures = new Set();

	const determineNewMonth = (fixture) => {
		const dateString = fixture.fixture.date;
		const date = new Date(dateString);
		const year = date.getFullYear();
		const month = date.getMonth()

		const monthOfMatch = `${monthsOfYear[month]} ${year}`

		if (monthsOfFixtures.has(monthOfMatch)) {
			return [false, 'NA'];
		} else {
			monthsOfFixtures.add(monthOfMatch);
			return [true, monthOfMatch];
		}
	}
	

	return (
		<div className='club-fixtures-dashboard'>
			<ul>
				{fixturesSortedByDate.map((fixture, idx) => {

					const [boolean, month] = determineNewMonth(fixture);

					return (
						<ClubFixtureListItem
							fixture={fixture} 
							idx={idx}
							key={idx}
							isNewMonth={boolean}
							month={month}
							/>
					)
			})}
			</ul>
		</div>
	)
}

export default ClubFixturesDashboard;