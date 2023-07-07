import React from 'react'
import YellowCard from '../../../images/yellow.png';
import RedCard from '../../../images/red.png';
import Substitution from '../../../images/sub.png';
import Goal from '../../../images/goal.png';

const EventsTimeline = ({match}) => {
	const homeTeam = match.teams.home.name;
	const awayTeam = match.teams.away.name;
	const events = match.events;
	console.log(events);

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

	return (
		<ul className='events-timeline'>
			{events.map((event, idx) => {
				const isHome = event.team.name === homeTeam
				return (
					<li key={idx} className='match-event-item'>
						<div>
							{isHome && 
							<div className='home-event-info'>
								<p>
									{event.time.elapsed}'
								</p>
								<p>
									{event.player.name}
								</p>
							</div>	
							}
						</div>
						<div className='timeline-event-image'>
							
							<img src={determineEventImage(event)}/>
						</div>
						<div>
							{!isHome && 
							<div className='away-event-info'>
								<p>
									{event.time.elapsed}'
								</p>
								<p>
									{event.player.name}
								</p>
							</div>	
							}
						</div>
					</li>
				)
			})}
		</ul>
	)
}

export default EventsTimeline;