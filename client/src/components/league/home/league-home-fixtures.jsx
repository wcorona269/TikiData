import React from 'react'
import DisplayTime from '../../util/display-time';
import { formatDate } from '../../club/club-fixture-list-item';
import monthsOfYear from '../../club/monthsOfYear';
import { 
	Box,
	Paper, 
	Grid,
	Typography, 
	List,
	ListItem,
	ListItemButton,
	ListItemText,
	Link
 } from '@mui/material'


const LeagueHomeFixtures = ({fixtures, uniqueDates}) => {

	const displayTeams = (fixture) => {
		let result = [];
		let teams = fixture.teams;

		for (let team of Object.keys(teams)) {
			const team_name = teams[team].name;
			const team_logo = teams[team].logo;
			const team_id = teams[team].id;
			const winner = teams[team].winner;
			const num_goals = fixture.goals[team] || '-'

			result.unshift(
				<Grid container className={winner === true ? 'winning team' : ''}>
					<Grid item xs={2}>
							<img src={team_logo} />
					</Grid>
					<Grid item xs={9}>
						<Typography variant='subtitle1' className={winner === true ? 'winning-team' : ''}>
							{team_name}
						</Typography>
					</Grid>
					<Grid item xs={1}>
						<Typography id='goal-display' variant='h6'>
							{num_goals}
						</Typography>
					</Grid>
				</Grid>
			)
		}

		return result;
	}

	const displayUpcomingFixtures = (fixtures) => {
		const match_dates = new Set()
		let result = []

		let today = new Date();
		today.setHours(0, 0, 0, 0);

		for (let fixture of fixtures) {
			if (result.length === 20) {
				break;
			}
			const match_date = fixture.fixture.date;
			const day_of_week = new Date(fixture.fixture.date).getDay();
			const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
			const day_name = days[day_of_week];
			
			if (new Date(match_date) > today ) {
				let NewSectionHeading;
				if (!match_dates.has(match_date.split('T')[0])) {
					NewSectionHeading = (
						<Typography variant="h6" gutterBottom className='new-date-heading'>
							{day_name}, {formatDate(match_date)}
						</Typography>
					)
					match_dates.add(match_date.split('T')[0]);
				}
				result.push(
					<>
						{NewSectionHeading}
						<ListItem disablePadding className='home-fixture-li-container'>
							<ListItemButton>
								<Box className='home-fixture-li'>
									<Typography id='time-element'>
										<DisplayTime match={fixture}/>
									</Typography>
									{displayTeams(fixture)}
								</Box>
							</ListItemButton>
						</ListItem>
					</>
				)
			}
		}

		return result;
	}


	return (
		<Paper 
			className='league-home-paper'
			id='sticky-paper'
			elevation={6}
		>
			<Typography variant="h6" gutterBottom className='section-heading'>
				Upcoming Fixtures
			</Typography>
			<List>
				{displayUpcomingFixtures(fixtures)}
			</List>
		</Paper>
	)
}

export default LeagueHomeFixtures;