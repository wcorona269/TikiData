import './league-home.scss'
import { Paper, Typography, Grid } from '@mui/material';
import HomeFixturesComponent from './league-home-fixtures';
import LeagueHomeNews from './league-home-news';
import LeagueHomeStats from './league-home-stats';
import LeagueHomeTable from './league-home-table';
import React from 'react';

const LeagueHomeDashboard = ({ news, fixtures, uniqueDates, table, top_scorers }) => {
	return (
		<Grid container className='league-home-dashboard'>
			<Grid item xs={8}>
				<LeagueHomeNews news={news} />
			</Grid>
			<Grid item xs>
				<LeagueHomeTable table={table} />
				<LeagueHomeStats top_scorers={top_scorers} />
				<HomeFixturesComponent fixtures={fixtures} uniqueDates={uniqueDates}/>
			</Grid>
		</Grid>
	)
}

export default LeagueHomeDashboard;