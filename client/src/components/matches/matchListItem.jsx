import React, {useEffect, useState} from 'react';
import { withRouter } from 'react-router-dom';


const MatchListItem = ({match}) => {

	// set variables for easy access
	const id = match.fixture.id
	const league = `${match.league.country} ${match.league.name} ${match.league.round}`
	const homeTeam = match.teams.home.name
	const awayTeam = match.teams.away.name
	
	const homeGoals = match.goals.home
	const awayGoals = match.goals.away

	const homeIcon = match.teams.home.logo;
	const awayIcon = match.teams.away.logo;

	// list each match individually
	console.log(match)
	return (
		<li key={id}>
			<div className='match-info-bar'>
				{league}
			</div>
			<div className='scoreline-bar'>
				<img src={homeIcon}/>
				{homeGoals} - {awayGoals}
				<img src={awayIcon}/>
			</div>
			<div className='match-summary-bar'>

			</div>
		</li>
	)
}

export default MatchListItem