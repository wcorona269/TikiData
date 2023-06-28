import React, {useEffect, useState} from 'react';
import { withRouter } from 'react-router-dom';
import TimelineEventsBar from './timelineEventsBar';

const MatchListItem = ({match}) => {
	const id = match.fixture.id
	const league = `${match.league.country} ${match.league.name} ${match.league.round}`
	const events = match.events.length === 0 ? null : match.events

	const homeTeam = match.teams.home.name
	const awayTeam = match.teams.away.name
	
	const homeGoals = match.goals.home
	const awayGoals = match.goals.away

	const homeIcon = match.teams.home.logo;
	const awayIcon = match.teams.away.logo;

	// list each match individually
	return (
		<li key={id} className='match-list-item'>
			<div className='match-info-bar'>
				{league}
			</div>
			<div className='timeline-scoreline-bar'>
				<img src={homeIcon}/>
				{homeGoals} - {awayGoals}
				<img src={awayIcon}/>
			</div>
			<div className='timeline-events-bar'>
				<TimelineEventsBar events={events}/>
			</div>
		</li>
	)
}

export default MatchListItem;