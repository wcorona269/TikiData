import './club-home-dashboard.scss';
import { Box, Grid, Paper } from '@mui/material';
import React from 'react'
import ClubHomeInfo from './club-home-info';
import HomeFixturesComponent from '../../league/home/league-home-fixtures';
import LeagueHomeNews from '../../league/home/league-home-news';

const ClubHomeDashboard = ({ club, fixtures, squad, news }) => {

	return (
		<Box className='club-home-container'>
			<Grid spacing={1} container className='club-home-grid'>
				<Grid item xs={8} >
					<LeagueHomeNews news={news} />
				</Grid>
				<Grid item xs={4} >
					<ClubHomeInfo club={club}  />
					<HomeFixturesComponent fixtures={fixtures} />
				</Grid>
			</Grid>
		</Box>
	)
}

export default ClubHomeDashboard;