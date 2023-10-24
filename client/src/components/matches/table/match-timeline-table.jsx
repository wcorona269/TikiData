import React from 'react';
import DisplayTime from '../../util/display-time';
import { styled, Box, Container, Table, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TableRow, Typography, Link, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';


const MatchTimelineTable = ({nation, matches}) => {
	const theme = useTheme();
	const navigate = useNavigate();

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

	const StyledTableRow = styled(TableRow)(({ theme }) => ({
		'&:nth-of-type(odd)': {
			backgroundColor: theme.palette.action.hover,
		},
	}));

	const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    padding: '4px', // Add padding here
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    padding: '4px', // Add padding here
  },
}));
	
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
		let matchesByCompetition = {};
		let result = [];
		let flag;

		for (let match of matches) {
			if (flag === undefined) flag = match.league.flag;

			if (match.league.name in matchesByCompetition) {
				matchesByCompetition[match.league.name].push(match);
			}
			else {
				matchesByCompetition[match.league.name] = [];
				matchesByCompetition[match.league.name].push(match);
			}
		}

		for (let competition in matchesByCompetition) {
			let competitionMatches = [];

			for (let match of matchesByCompetition[competition]) {
				competitionMatches.push(
					<StyledTableRow key={match.fixture.idsty}>
						<StyledTableCell sx={{padding: '.25rem'}}>
							{displayMatch(match)}
						</StyledTableCell>
						<StyledTableCell sx={{padding: '.25rem'}}>
							<DisplayTime match={match}/>
						</StyledTableCell>
						<StyledTableCell sx={{padding: '.25rem'}}>
							{match.league.name}
						</StyledTableCell>
					</StyledTableRow >
				)
			} 

			result.push(
				<>
					<Box sx={{display: 'flex', alignItems: 'center', margin: '.5rem'}}>
						<img src={flag} alt='' style={{height: '1.5rem', width: '1.5rem', marginRight: '.5rem'}}/>
						<Typography variant='body1'>{nation} - {competition}</Typography >
					</Box>
					<TableContainer size='small'>
						<Table>
							<TableHead>
								<TableRow>
									<StyledTableCell sx={{width: '50% !important'}}>Match</StyledTableCell>
									<StyledTableCell sx={{ width: '10% !important' }}>Time</StyledTableCell>
									<StyledTableCell sx={{ width: '20% !important' }}>Competition</StyledTableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{competitionMatches}
							</TableBody>
						</Table>
					</TableContainer>
				</>
			)
		}

		return (
				result
		)
	}

	return (
		<Container className='match-timeline-table' disablepadding sx={{padding: '0px !important', margin: '0px!important', zIndex: '0'}}>
			{displayMatches(matches)}
		</Container>
	)
}

export default MatchTimelineTable;