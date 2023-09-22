import './events-timeline.scss';
import React, { useState } from 'react'
import YellowCard from '../../../images/yellow.png';
import RedCard from '../../../images/red.png';
import Substitution from '../../../images/sub.png';
import Goal from '../../../images/goal.png';
import NoDataMessage from '../../util/no-data/no-data-message';

const EventsTimeline = ({match}) => {
	const homeTeam = match.teams.home.name;
	const awayTeam = match.teams.away.name;
	const events = match.events;

	if (!events.length) {
		return <NoDataMessage/>
	}

	let periods = 0;

	const determineEventImage = (event) => {
		if (event.detail.includes('Goal')) {
			return Goal
		} else if (event.detail === 'Yellow Card') {
			return YellowCard
		} else if (event.detail === 'Red Card') {
			return RedCard
		} else {
			return Substitution
		}
	}
	
	const determineNewPeriods = (elapsed, extraTime) => {
		if (periods === 0) {
			periods += 1;
			return <tr id='new-period'><td>First Half</td></tr>
		}

		if (periods === 1 && elapsed > 45 && extraTime === null) {
			periods += 1
			return <tr id='new-period'><td>Second Half</td></tr>
		}

		if (periods === 2 && elapsed > 90 && extraTime === null) {
			periods += 1
			return <tr id='new-period'><td>First Half ET</td></tr>
		}

		if (periods === 3 && elapsed > 105 && extraTime === null) {
			periods += 1
			return <tr id='new-period'><td>Second Half ET</td></tr>
		}
	}

	return (
		<table className='events-timeline'>
			<tbody>
				{events.map((event, idx) => {
					const isHome = event.team.name === homeTeam;
					const elapsed = event.time.elapsed;
					const extraTime = event.time.extra;
					const player = event.player.name || 'N/A';
					const assist = event.assist.name || '';

					return (
						<>
							{determineNewPeriods(elapsed, extraTime)}
							<tr key={idx} className='match-event-item' id={isHome ? `home-event-info` : `away-event-info`}>
								<td id='elapsed'>
									{extraTime === null ? `${elapsed}'` : `${elapsed} + ${extraTime}`}
								</td>
								<td>
									<img src={determineEventImage(event)} alt=''/>
								</td>
								<td id='player-name'>{player}</td>
								<td id='assist-name'>{assist}</td>
								<td></td>
							</tr>
						</>
					)
				})}
			</tbody>
		</table>
	)
}

export default EventsTimeline;