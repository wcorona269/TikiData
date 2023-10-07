import React from 'react'
import { Link, useParams } from 'react-router-dom';
import monthsOfYear from './monthsOfYear';
import { Box, Grid, Paper, TableBody, TableCell, TableRow, ThemeProvider, Typography, createTheme } from '@mui/material';
import HomeFixturesComponent from '../league/home/league-home-fixtures';
import DisplayTime from '../util/display-time';

export const formatDate = (date) => {
	const dateString = new Date(date)
	const month = dateString.getMonth();
	const day = dateString.getDate();
	const abbreviatedMonth = monthsOfYear[month].slice(0, 3)
	return `${abbreviatedMonth} ${day}`;
}

const theme = createTheme({
	typography: {
		fontFamily: 'Ubuntu'
	}
})

const ClubFixturesTable = ({fixtures}) => {
	const { clubId } = useParams();

	return (
		<ThemeProvider theme={theme}>
			<TableBody className='club-fixtures-tbody'>
				{fixtures.map((fixture, idx) => {
					let teams = [fixture.teams.home.name, fixture.teams.away.name];
					let ids = [fixture.teams.home.id, fixture.teams.away.id];
					let logos = [fixture.teams.home.logo, fixture.teams.away.logo]
					let league = [fixture.league.name, fixture.league.logo];
					let score = [fixture.goals.home || 0, fixture.goals.away || 0];

					return (
						<TableRow>
							<TableCell sx={{width: '50px'}}>
								{formatDate(fixture.fixture.date)}
							</TableCell>
							<TableCell sx={{width: '150px', whiteSpace: 'nowrap', overflow: 'hidden'}}>
								<Link to={`/club/${ids[0]}`}>
									{teams[0]}
								</Link>
							</TableCell>
							<TableCell align='center' sx={{width: '100px'}}>
								<Box sx={{ margin: 'auto', width: '75px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
									<img src={logos[0]}/>
									{score[0]} - {score[1]}
									<img src={logos[1]}/>
								</Box>
							</TableCell>
							<TableCell sx={{width: '150px', whiteSpace: 'nowrap', overflow: 'hidden'}}>
								<Link to={`/club/${ids[1]}`}>
									{teams[1]}
								</Link>
							</TableCell>
							<TableCell sx={{width: '100px'}}>
								<DisplayTime match={fixture}/>
							</TableCell>
							<TableCell sx={{ display: 'flex', alignItems: 'center'}}>
								<img style={{marginRight: '4px'}} src={league[1]}/>{league[0]}
							</TableCell>
						</TableRow>
					)
				})}
			</TableBody>
		</ThemeProvider>
	)
}

export default ClubFixturesTable;