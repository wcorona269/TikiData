import React, { useState, useEffect } from 'react';
import MatchCard from './match-card';
import shorthandMonthsOfYear from './shorthandMonths';
import { Box, Divider, Grid, List, Stack, Typography, useTheme } from '@mui/material';



// FIXTURE DISPLAY
// Second component will show fixtures from selectedDate state variable
// Need declared function that will set state variable, and pass that function on to nav bar
// need selectedDate variable passed on to filter fixtures

const FixturesDisplay = ({fixtures, selectedDate, uniqueDates}) => {
	const dates = uniqueDates.slice(selectedDate, selectedDate + 7)
	const theme = useTheme();
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
				<Box sx={{display: 'flex', flexDirection: 'column'}} >
					{/* <Divider/> */}
					<Typography variant="h6" gutterBottom sx={{marginTop: '1rem'}} >
						{formattedDate}
					</Typography>
					{/* <Divider /> */}
					<Grid container spacing={1} direction='row' sx={{ my: '1rem', width: '100%', marginTop: 0 }}>
						{matchesOfTheDay}
					</Grid>
				</Box>
			)
		}

		return result;
	}

	return (
		<Box sx={{padding: '1rem'}}>
			{displayFixturesByDate(fixturesByDate)}
		</Box>
	)
}

export default FixturesDisplay;