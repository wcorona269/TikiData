import React, { useState } from 'react'
import YellowCard from '../../../images/yellow.png';
import RedCard from '../../../images/red.png';
import Substitution from '../../../images/sub.png';
import Goal from '../../../images/goal.png';

const EventsTimeline = ({match}) => {
	const homeTeam = match.teams.home.name;
	const awayTeam = match.teams.away.name;
	const events = match.events;
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
					const player = event.player.name;

					return (
						<>
							{determineNewPeriods(elapsed, extraTime)}
							<tr key={idx} className='match-event-item' id={isHome ? `home-event-info` : `away-event-info`}>
								<td id='elapsed'>
									{extraTime === null ? `${elapsed}'` : `${elapsed} + ${extraTime}`}
								</td>
								<td>
									<img src={determineEventImage(event)}/>
								</td>
								<td id='player-name'>{event.player.name}</td>
								<td id='assist-name'>{event.assist.name}</td>
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