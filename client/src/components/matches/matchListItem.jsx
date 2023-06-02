import React, {useEffect, useState} from 'react';
import { withRouter } from 'react-router-dom';


const MatchListItem = ({match}) => {

	// set variables for easy access
	const id = match.fixture.id
	const homeTeam = match.teams.home.name
	const awayteam = match.teams.away.name
	const homeGoals = match.goals.home
	const awayGoals = match.goals.away

	// list each match individually
	console.log(match)
	return (
		<li key={id}>
			{homeTeam} {homeGoals} - {awayGoals} {awayteam}
		</li>
	)
}

export default MatchListItem