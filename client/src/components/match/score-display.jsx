import React from 'react';
import DisplayTime from '../util/display-time';

const ScoreDisplay = ({match}) => {
	
	return (
		<>
		<div className='score-display'>

			<div className='match-overview-header'>
				<p>
					<img src={match.league.logo}/>
					{match.league.name}
				</p>
				<p>
					Match Overview
				</p>
				<p>
					{match.league.round}
				</p>
			</div>
			<div className='match-overview-score-display'>
				<div className='match-overview-teams'>
					<div className='match-overview-team-bar'>
						<img src={match.teams.home.logo}/>
						<p>{match.teams.home.name}</p>
					</div>
					<div className='match-overview-team-bar'>
						<img src={match.teams.away.logo}/>
						<p>{match.teams.away.name}</p>
					</div>
				</div>
				<div className='match-overview-scores'>
					<p>{match.goals.home}</p>
					<p>{match.goals.away}</p>
				</div>
				<div className='match-overview-details'>
					<DisplayTime match={match}/>
				</div>
			</div>
		</div>
		</>
	)
}

export default ScoreDisplay;