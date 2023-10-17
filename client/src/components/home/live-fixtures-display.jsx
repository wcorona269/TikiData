import { Box, Grid, List, ListItem, ListItemButton, Typography, useTheme } from '@mui/material'
import React, { useEffect } from 'react'
// import { displayTeams } from '../club/home/club-home-fixtures'

const LiveFixturesDisplay = ({ matches }) => {
	const theme = useTheme();

	useEffect(() => {

	}, [matches])

	const displayTeams = (fixture) => {
		let result = [];
		let teams = fixture.teams;
		console.log(fixture)

		for (let team of Object.keys(teams)) {
			const team_name = teams[team].name;
			const team_logo = teams[team].logo;
			const team_id = teams[team].id;
			const winner = teams[team].winner;
			const num_goals = fixture.goals[team] || 0;
			
			result.unshift(
				<Grid container className={winner === true ? 'winning team' : ''}>
					<Grid item xs={2}>
						<img src={team_logo} style={{display: 'flex', alignItems: 'center', justifyContent: 'left'}}/>
					</Grid>
					<Grid item xs={9}>
						<Typography variant='body2' className={winner === true ? 'winning-team' : ''}>
							{team_name}
						</Typography>
					</Grid>
					<Grid item xs={1}>
						<Typography id='goal-display' variant='body2'>
							{num_goals}
						</Typography>
					</Grid>
				</Grid>
			)
		}

		return (
			<ListItem disablePadding>
				<ListItemButton sx={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
					<Box sx={{display: 'flex', flexDirection: 'column', width: '100%', gap: '4px'}}>
						{result}
					</Box>
					<Typography variant='caption' sx={{marginLeft: '.25rem', color: theme.palette.grey['400']}}>
						{fixture.fixture.status.elapsed}'
					</Typography>
				</ListItemButton>
			</ListItem>
		);
	}

	const displayLiveMatches = (matches) => {
		if (!matches?.length) return 
		let matchesByCompetition = {};
		let result = [];

		for (let match of matches) {
			if (match.league.name in matchesByCompetition) {
				matchesByCompetition[match.league.name].push(match);
			}
			else {
				matchesByCompetition[match.league.name] = [];
				matchesByCompetition[match.league.name].push(match);
			}
		}

		console.log(matchesByCompetition)

		for (let competition in matchesByCompetition) {
			result.push(
				<Typography variant="subtitle1" gutterBottom className='new-league-heading' sx={{ marginBottom: '0px', paddingLeft: '.5rem !important', padding: '.25rem', borderTop: `1px solid ${theme.palette.grey['700']}`, borderBottom: `1px solid ${theme.palette.grey['700']}`, fontFamily: theme.typography.bold}}>
					{competition}
				</Typography>
			)
			
			let competitionMatches = [];

			for (let match of matchesByCompetition[competition]) {
				competitionMatches.push(
					displayTeams(match)
				)
			}

			result.push(
				<List sx={{padding: '0px'}}>
					{competitionMatches}
				</List>
			)
		}
		return result;
	}

	return (
		<Box className='live-fixtures-display'>
			<Box sx={{maxHeight: '40rem', overflowX: 'scroll'}}>
				{displayLiveMatches(matches)}
			</Box>
		</Box>
	)
}

export default LiveFixturesDisplay
