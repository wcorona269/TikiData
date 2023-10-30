import './club-fixtures.scss';
import React from 'react'
import ClubFixturesTable from './club-fixtures-table';
import monthsOfYear from './monthsOfYear';
import { Box, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, useTheme } from '@mui/material';

const ClubFixturesDashboard = ({fixtures, name, logo}) => {
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
		<Paper elevation={2} sx={{marginTop: '1rem'}}>
			<Typography variant='h6' sx={{ borderBottom: `2px solid ${theme.palette.divider}`, fontFamily: theme.typography.bold }} className='section-heading'>
				<img src={logo} style={{ height: '1.5rem', width: '1.5rem', marginRight: '.25rem' }} />
				{name} Fixtures
			</Typography>
			{fixturesByDate.map(month_of_fixtures => {
				let month = month_of_fixtures.shift();

				return (
					<Box sx={{ p: 1 }}>
						<Box sx={{width: '100%'}}>
							<Typography variant='h6' sx={{py: 1, fontFamily: theme.typography.bold}}>
								{month}
							</Typography>
						</Box>
						<ClubFixturesTable fixtures={month_of_fixtures} />
					</Box>
				)
			})}
		</Paper>
	)
}

export default ClubFixturesDashboard;