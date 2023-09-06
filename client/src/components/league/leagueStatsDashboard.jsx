import React, { useState, useEffect } from 'react';

import TopScorers from './topScorers';
import TopAssists from './topAssists';

const LeagueStatsDashboard = ({top_scorers, top_assists}) => {
	const [showGoals, setShowGoals] = useState(true);

	useEffect(() => {

	}, [showGoals])

	const buttonDisplay = (button) => {
		if (button === 'goals' && showGoals === true) {
			return 'selected-stats-tab'
		}

		if (button === 'assists' && showGoals === false) {
			return 'selected-stats-tab'
		}

		return ''
	}

	
	return (
		<div className='league-stats-container'>
			<div className='league-stats-nav-bar'>
				<button className={buttonDisplay('goals')} onClick={() => setShowGoals(true)}>Top Scorers</button>
				<button className={buttonDisplay('assists')} onClick={() => setShowGoals(false)}>Top Assist</button>
			</div>
			<div className='league-stats-table-container'>
				{
				showGoals === true ? 
					<TopScorers data={top_scorers} /> :
					<TopAssists data={top_assists} />
				}
			</div>
		</div>
	)
}

export default LeagueStatsDashboard;
