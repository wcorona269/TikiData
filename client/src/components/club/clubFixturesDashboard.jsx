import React from 'react'
import ClubFixtureListItem from './clubFixtureListItem';
import monthsOfYear from './monthsOfYear';

const ClubFixturesDashboard = ({fixtures}) => {
	console.log(fixtures);
	const fixturesSortedByDate = fixtures.sort((a, b) => new Date(a.fixture.date) - new Date(b.fixture.date));


	// for (let fixture of fixtures) {
	// 	let dateString = fixture['fixture']['date'];
	// 	const date = new Date(dateString);
	// 	const year = date.getFullYear();
	// 	const month = date.getMonth()

	// 	const monthOfMatch = `${monthsOfYear[month]} ${year}`

	// 	if (monthOfMatch in fixturesByMonth) {
	// 		fixturesByMonth[monthOfMatch].push(fixture);
	// 	} else {
	// 		fixturesByMonth[monthOfMatch] = [fixture]
	// 	}
	// }

	// console.log(fixturesByMonth)

	return (
		<div className='club-fixtures-dashboard'>
			<ul>
				{fixtures.map((fixture, idx) => {
					return (
						<ClubFixtureListItem fixture={fixture} idx={idx} />
					)
			})}
			</ul>
		</div>
	)
}

export default ClubFixturesDashboard;