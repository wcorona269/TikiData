import React from 'react';
import DisplayTime from '../../util/display-time';
import { styled, Box, Container, Table, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TableRow, Typography, Link, useTheme, Paper, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Title from '../../util/title-util';
import MatchCard from '../../league/match-card';


const MatchFeedItem = ({nation, matches}) => {
	const theme = useTheme();
	const navigate = useNavigate();
	let flag;

	const handleClick = (id) => {
		navigate(`/match/${id}`)
	}

	const displayMatch = (match) => {
		const homeTeamName = match.teams.home.name;
		const homeTeamLogo = match.teams.home.logo;
		const awayTeamName = match.teams.away.name;
		const awayTeamLogo = match.teams.away.logo;
		const id = match.fixture.id

		return (
			<Link onClick={() => handleClick(id)} underline="none" className='timeline-match-teams' color='inherit' component="button" variant="body2" sx={{ width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center'}} >
				<Typography variant='body2' className='team-indicator' id='home-team-indicator' sx={{width: '45%', display: 'flex',alignItems: 'center', justifyContent: 'right', gap: '.5rem'}}>
					{homeTeamName} <img style={{ height: '1.5rem', width: '1.5rem' }} src={homeTeamLogo} />
				</Typography>
				<Typography variant='body2' className='versus' sx={{width: '10%'}} >
					{displayScore(match)}
				</Typography>
				<Typography variant='body2' className='team-indicator' id='away-team-indicator' sx={{width: '45%', display: 'flex', justifyContent: 'left', gap: '.5rem', alignItems: 'center'}}>
					<img style={{ height: '1.5rem', width: '1.5rem' }} src={awayTeamLogo}/>{awayTeamName} 
				</Typography>
      </Link>
		)
	}


	const displayScore = (match) => {
		const status = match.fixture.status.short;

		const inPlayStatuses = ['1H', '2H', 'ET', 'BT', 'P', 'INT', 'LIVE'];
		const finishedStatuses = ['HT', 'FT', 'AET', 'PEN'];

		if (inPlayStatuses.includes(status) || finishedStatuses.includes(status)) {
			return (
				<Typography variant='body1'>
					{match.goals.home} - {match.goals.away}
				</Typography>
			)
		}

		return <p>-</p>
	}

	const displayMatches = (matches) => {
		let result = [];

		for (let match of matches) {
			if (flag === undefined) flag = match?.league?.flag;
			
			result.push(
				<MatchCard  fixture={match} league={true} />
				// <TableRow key={match.fixture.idsty}>
				// 	<TableCell sx={{ width: '50% !important'}}>
				// 		{displayTeams(match)}
				// 		{/* {displayMatch(match)} */}
				// 	</TableCell>
				// 	<TableCell sx={{ width: '10% !important'}}>
				// 		<DisplayTime match={match}/>
				// 	</TableCell>
				// 	<TableCell sx={{ width: '20% !important'}}>
				// 		{match.league.name}
				// 	</TableCell>
				// </TableRow >
			)
		}
			
		return (
			<Box elevation={1}>
				<Title variant='h6' img={flag} content={nation} />
				<Grid container columns={8} spacing={1} sx={{padding: 2}}>
					{result}
				</Grid>
				{/* <TableContainer size='small'>
					<Table size='small' aria-label='a dense table'>
						<TableHead sx={{backgroundColor: theme.palette.action.hover}} >
							<TableRow >
							<TableCell sx={{width: '50% !important'}}>Match</TableCell>
							<TableCell align='left' sx={{ width: '10% !important' }}>Time</TableCell>
							<TableCell align='left' sx={{ width: '20% !important' }}>Competition</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{result}
						</TableBody>
					</Table>
				</TableContainer> */}
			</Box>
		)
	}

	return (
		<Box>
			{displayMatches(matches)}
		</Box>
	)
}

export default MatchFeedItem;