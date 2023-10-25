import React from 'react';
import DisplayTime from '../util/display-time';
import { Box, Link, Container, Grid, Typography, Paper, Button, useTheme, ListItemButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from '@emotion/react';

const MatchCard = ({fixture, key, league}) => {	
	const theme = useTheme()
	const navigate = useNavigate();

	const home = fixture.teams.home.name;
	const away = fixture.teams.away.name;

	const homeLogo = fixture.teams.home.logo;
	const awayLogo = fixture.teams.away.logo;

	const homeGoals = fixture.goals.home;
	const awayGoals = fixture.goals.away;

	const displayTeams = (fixture) => {
		let result = [];
		let teams = fixture.teams;

		for (let team of Object.keys(teams)) {
			const team_name = teams[team].name;
			const team_logo = teams[team].logo;
			const team_id = teams[team].id;
			const winner = teams[team].winner;
			const num_goals = fixture.goals[team] || 0

			result.unshift(
				<Grid container className={winner === true ? 'winning team' : ''}>
					<Grid item xs={10} align='left' sx={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
						<img src={team_logo} style={{height: '2rem', width: '2rem', marginRight: '.25rem'}} />
						<Typography variant='body2'>
							{team_name}
						</Typography>
					</Grid>
					<Grid item xs={2}>
						<Typography id='goal-display' variant='h6'>
							{num_goals}
						</Typography>
					</Grid>
				</Grid>
			)
		}

		return result;
	}
	
	return (
		<Grid item xs={4} >
			<Paper elevation={5} key={key} sx={{width: '100%', color: theme.palette.text.primary }}>
				<ListItemButton variant='text' sx={{width: '100%', height: '100%'}} onClick={() => navigate(`/match/${fixture.fixture.id}`)}>
					<Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', gap: '.5rem' }}>
						<Typography align='left' sx={{color: theme.palette.text.disabled }} variant='body2'>
							<DisplayTime match={fixture} />
						</Typography>
						{displayTeams(fixture)}
						{ !!league && 
							<Typography align='left' display='flex' alignItems='center' sx={{color: theme.palette.text.disabled }} variant='body2'>
								<img src={league[1]} style={{ height: '1rem', width: '1rem', marginRight: '.25rem' }} />
								{league[0]}
							</Typography>
						 }
					</Box>
				</ListItemButton>
			</Paper>	
		</Grid>
	)
}

export default MatchCard;