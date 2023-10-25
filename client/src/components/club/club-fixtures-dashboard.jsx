import './club-fixtures.scss';
import React from 'react'
import ClubFixturesTable from './club-fixtures-table';
import monthsOfYear from './monthsOfYear';
import { Box, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, useTheme } from '@mui/material';

const ClubFixturesDashboard = ({fixtures}) => {
	const theme = useTheme()
	const fixturesSortedByDate = fixtures.sort((a, b) => new Date(a.fixture.date) - new Date(b.fixture.date));
	const monthsOfFixtures = new Set();
	let fixturesByDate = [];

	const determineNewMonth = (fixture) => {
		const dateString = fixture.fixture.date;
		const date = new Date(dateString);
		const year = date.getFullYear();
		const month = date.getMonth();

		const monthOfMatch = `${monthsOfYear[month]} ${year}`

		if (monthsOfFixtures.has(monthOfMatch)) {
			return [false, monthOfMatch];
		} else {
			monthsOfFixtures.add(monthOfMatch);
			return [true, monthOfMatch];
		}
	}

	for (let fixture of fixturesSortedByDate) {
		const [boolean, month] = determineNewMonth(fixture);
		if (boolean === true) {
			fixturesByDate.push([]);
			fixturesByDate[fixturesByDate.length - 1].push(month);
		}
		fixturesByDate[fixturesByDate.length - 1].push(fixture);
	}
	

	return (
		<div className='club-fixtures-dashboard'>
			{fixturesByDate.map(month_of_fixtures => {
				let month = month_of_fixtures.shift();

				return (
					<>
						<Box sx={{width: '100%'}}>
							<Typography variant='subtitle1' sx={{padding: '1rem'}}>
								{month}
							</Typography>
						</Box>
						<ClubFixturesTable fixtures={month_of_fixtures} />
					</>
				)
			})}
		</div>
	)
}

export default ClubFixturesDashboard;