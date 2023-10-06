import './club-home-dashboard.scss';
import { Box, Grid, Paper } from '@mui/material';
import React from 'react'
import ClubHomeInfo from './club-home-info';
import HomeFixturesComponent from '../../league/home/league-home-fixtures';
import LeagueHomeNews from '../../league/home/league-home-news';

const ClubHomeDashboard = ({ club, fixtures, squad, news }) => {

	return (
		<Box className='club-home-container'>
			<Grid container className='club-home-grid'>
				<Grid item xs={3} >
					<ClubHomeInfo club={club}  />
				</Grid>
				<Grid item xs={5} >
					<LeagueHomeNews news={news} />
				</Grid>
				<Grid item xs={4} >
					<HomeFixturesComponent fixtures={fixtures} />
				</Grid>
			</Grid>
		</Box>
	)
}

export default ClubHomeDashboard;