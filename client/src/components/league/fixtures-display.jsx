import React, { useState, useEffect } from 'react';
import MatchCard from './match-card';
import shorthandMonthsOfYear from './shorthandMonths';
import { Typography } from '@mui/material';


// FIXTURE DISPLAY
// Second component will show fixtures from selectedDate state variable
// Need declared function that will set state variable, and pass that function on to nav bar
// need selectedDate variable passed on to filter fixtures

const FixturesDisplay = ({fixtures, selectedDate, uniqueDates}) => {
	const dates = uniqueDates.slice(selectedDate, selectedDate + 7)
	let fixturesByDate = {};

	for (let date of dates) {
		fixturesByDate[date] = [];
	}

	for (let fixture of fixtures) {
		let fixtureDate = fixture.fixture.date.split('T')[0]
		if (fixtureDate in fixturesByDate) {
			fixturesByDate[fixtureDate].push(fixture)
		}
	}

	const displayFixturesByDate = (fixturesByDate) => {
		let result = [];

		for (let date in fixturesByDate) {
			let matchesOfTheDay = [];
			fixturesByDate[date].map((fixture, idx) => {
				matchesOfTheDay.push(
					<MatchCard key={idx} fixture={fixture}/>
				)
			})
			
			const dateInfo = date.split('-');
			const formattedDate = `${shorthandMonthsOfYear[Number(dateInfo[1]) - 1]} ${dateInfo[2]}`

			result.push(
				<>
					<Typography variant="h6" gutterBottom>
						{formattedDate}
					</Typography>
					<ul>
						{matchesOfTheDay}
					</ul>
				</>
			)
		}

		return result;
	}

	// console.log(fixturesByDate);

	return (
		<div className='fixtures-display'>
			{displayFixturesByDate(fixturesByDate)}
		</div>
	)
}

export default FixturesDisplay;