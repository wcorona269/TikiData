import React, { useState, useEffect } from 'react';

import TopScorers from './topScorers';
import TopAssists from './topAssists';

const LeagueStatsDashboard = ({top_scorers, top_assists}) => {
	const [showGoals, setShowGoals] = useState(true);

	useEffect(() => {

	}, [showGoals])

	
	return (
		<div className='league-stats-container'>
			<div className='league-stats-nav-bar'>
				<button onClick={() => setShowGoals(true)}>Top Scorers</button>
				<button onClick={() => setShowGoals(false)}>Top Assist</button>
			</div>
			{
			showGoals === true ? 
				<TopScorers data={top_scorers} /> :
				<TopAssists data={top_assists} />
			}
		</div>
	)
}

export default LeagueStatsDashboard;
