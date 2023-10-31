import './score-display.scss';
import React from 'react';
import DisplayTime from '../util/display-time';

import { Box, Divider, Grid, Link, Paper, Stack, Typography, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const MatchOverviewHeader = ({match}) => {
	const theme = useTheme();
	const navigate = useNavigate();
	const leagueName = match?.league?.name;
	const leagueLogo = match?.league?.logo;

	const country = match?.league?.country;
	const flag = match?.league?.flag;
	const round = match?.league?.round;

	const homeTeam = match?.teams?.home?.name
	const homeLogo = match?.teams?.home?.logo;
	const awayTeam = match?.teams?.away?.name
	const awayLogo = match?.teams?.away?.logo;

	const homeGoals = match?.goals?.home
	const awayGoals = match?.goals?.away
	const timeDisplay = <DisplayTime match={match}/>;

	const displayTeams = (teams) => {
		let result = [];

		for (let ele in teams) {
			const team = teams[ele]; 
			
			result.push(
				<Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
					<Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'left', alignItems: 'center' }}>
						<img src={team.logo} style={{height: '3rem', width: '3rem', marginRight: '.5rem'}} />
						<Typography variant='h6'>
							<Link underline='hover' onClick={() => navigate(`/club/${team.id}`)} sx={{ color: theme.palette.text.primary }}>
								{team.name}
							</Link>
						</Typography>
					</Box>
					<Typography variant='h4' >
						{match.goals[ele]}
					</Typography>
				</Box>
			)
		}

		return result;
	}
	
	return (
		<Paper elevation={2} sx={{ p: 3 }}>
			<Stack spacing={2}>
				<Typography variant='h6' sx={{color: theme.palette.text.secondary}} >
					{timeDisplay}
				</Typography>
				{displayTeams(match.teams)}
			</Stack>
		</Paper>
	)
}

export default MatchOverviewHeader;