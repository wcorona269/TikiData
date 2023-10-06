import React from 'react'
import { useParams } from 'react-router-dom';
import monthsOfYear from './monthsOfYear';
import { Box, Grid, Paper, Typography } from '@mui/material';
import HomeFixturesComponent from '../league/home/league-home-fixtures';

export const formatDate = (date) => {
	const dateString = new Date(date)
	const month = dateString.getMonth();
	const day = dateString.getDate();
	const abbreviatedMonth = monthsOfYear[month].slice(0, 3)
	return `${abbreviatedMonth} ${day}`;
}

const ClubFixtureListItem = ({fixture, idx, isNewMonth, month}) => {
	const { clubId } = useParams();
	const isAway = Number(clubId) === fixture.teams.away.id;
	const versus = isAway === true ? '@' : 'vs.'
	const opponent = isAway === true ? fixture.teams.home.name : fixture.teams.away.name;
	
	const homeGoals = fixture.goals.home;
	const awayGoals = fixture.goals.away;


	const displayResult = () => {		
		if (!homeGoals || !awayGoals) {
			return '-'
		}

		if (homeGoals === awayGoals) {
			return `D ${homeGoals} - ${awayGoals}`
		}
		
		if ((!isAway && homeGoals > awayGoals) || (isAway === true && awayGoals > homeGoals)) {
			return `W ${homeGoals} - ${awayGoals}`
		}

		return `L ${homeGoals} - ${awayGoals}`
	}
	{console.log(fixture)}

	return (
		<>
			{
				isNewMonth &&
				<Grid item xs={12} key={idx + 100}>
					{month}
				</Grid>}
			<Grid item xs={3} key={idx} id='club-fixture-grid-item' >
				<Paper className='home-paper' id='club-fixture-list-item' >
					<Grid>
						<Box className='club-fixture-li-header'>
							<Typography variant='subtitle2'>
								{formatDate(fixture.fixture.date)}
							</Typography>
							<img src={fixture.league.logo}/>
						</Box>
					</Grid>
				</Paper>
			</Grid>
			</>
	)
}

export default ClubFixtureListItem;