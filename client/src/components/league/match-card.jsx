import React from 'react';
import { Link } from 'react-router-dom';
import DisplayTime from '../util/display-time';
import { Box, Container, Grid, Typography, Paper } from '@mui/material';


const MatchCard = ({fixture, key}) => {	
	return (
		<Paper elevation={2} key={key} sx={{width: '40%'}}>
			<Link to={`/match/${fixture.fixture.id}`}>
				<Box >
					<Box >
						<Box >
							<img src={fixture.teams.home.logo} alt=''/>
							<p>{fixture.teams.home.name}</p>
						</Box>
						<Box >
							<img src={fixture.teams.away.logo} alt=''/>
							<p>{fixture.teams.away.name}</p>
						</Box>
					</Box>
					<Box >
							<p>{fixture.goals.home}</p>
							<p>{fixture.goals.away}</p>
					</Box>
					<Box><DisplayTime match={fixture}/></Box>
				</Box>
			</Link>
		</Paper>
	)
}

export default MatchCard;