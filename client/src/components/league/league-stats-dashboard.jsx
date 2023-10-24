import React, { useState, useEffect } from 'react';
import { Tabs, Tab, Paper, Box } from '@mui/material';
import './league-stats.scss';
import Typography from '@mui/material/Typography';
import LeagueStatsTable from './LeagueStatsTable';

const LeagueStatsDashboard = ({top_scorers, top_assists}) => {
	const [selectedTab, setSelectedTab] = useState(0);

	
	const handleChange = (event, newValue) => {
		setSelectedTab(newValue)
	}

	const leagueName = top_scorers[0].statistics[0].league.name
	const leagueLogo = top_scorers[0].statistics[0].league.logo;

	
	return (
		<Paper elevation={2} sx={{ marginTop: '1rem', mx: 'auto', marginTop: '1rem' }}>
			<Typography variant="h5" gutterBottom className='section-heading'>
				<img src={leagueLogo} />
				{leagueName} Stats
			</Typography>
			<Box>
				<Tabs value={selectedTab} onChange={handleChange} >
					<Tab label='Goals'/>
					<Tab label='Assists'/>
				</Tabs>
				<Box>
					{
						selectedTab === 0 ? 
						<LeagueStatsTable data={top_scorers} category={'Goals'} /> :
						<LeagueStatsTable data={top_assists} category={'Assists'}/>
					}
				</Box>
			</Box>
		</Paper>
	)
}

export default LeagueStatsDashboard;
