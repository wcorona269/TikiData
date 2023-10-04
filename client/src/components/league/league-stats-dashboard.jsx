import React, { useState, useEffect } from 'react';
import { Tabs, Tab } from '@mui/material';
import './league-stats.scss';
import Typography from '@mui/material/Typography';

import TopScorers from './topScorers';
import TopAssists from './topAssists';

const LeagueStatsDashboard = ({top_scorers, top_assists}) => {
	const [selectedTab, setSelectedTab] = useState(0);

	
	const handleChange = (event, newValue) => {
		setSelectedTab(newValue)
	}

	const leagueName = top_scorers[0].statistics[0].league.name
	const leagueLogo = top_scorers[0].statistics[0].league.logo;

	
	return (
		<div>
			<Typography variant="h5" gutterBottom className='section-heading'>
				<img src={leagueLogo} />
				{leagueName} Stats
			</Typography>
			<div className='league-stats-container'>
				{/* <div className='league-stats-nav-bar'>
					<button className={buttonDisplay('goals')} onClick={() => setShowGoals(true)}>Top Scorers</button>
					<button className={buttonDisplay('assists')} onClick={() => setShowGoals(false)}>Top Assist</button>
				</div> */}
				<Tabs value={selectedTab} onChange={handleChange} className='league-stats-nav-bar'>
					<Tab label='Goals'/>
					<Tab label='Assists'/>
				</Tabs>
				<div className='league-stats-table-container'>
					{
						selectedTab === 0 ? 
						<TopScorers data={top_scorers} /> :
						<TopAssists data={top_assists} />
					}
				</div>
			</div>
		</div>
	)
}

export default LeagueStatsDashboard;
