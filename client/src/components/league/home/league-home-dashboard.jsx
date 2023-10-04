import './league-home.scss'
import { Paper, Typography } from '@mui/material'
import React from 'react'

const LeagueHomeDashboard = ({ news, fixtures, table, top_scorers }) => {


	const leagueName = table[0].league.name
	const leagueLogo = table[0].league.logo

	return (
		<div className='league-home-dashboard-container'>
			<Typography variant="h5" gutterBottom className='section-heading'>
				<img src={leagueLogo} />
				{leagueName} Home
			</Typography>
			<div className='league-home-dashboard'>
				<Paper className='league-home-fixtures'>
					<Typography variant="h6" gutterBottom className='section-heading' >
						Fixtures
					</Typography>
				</Paper>
			</div>
		</div>
	)
}

export default LeagueHomeDashboard
