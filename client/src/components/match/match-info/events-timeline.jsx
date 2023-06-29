import React from 'react'

const EventsTimeline = ({match}) => {
	const homeTeam = match.teams.home.name;
	const awayTeam = match.teams.away.name;
	const events = match.events;
	console.log({events})

	return (
		<ul className='match-event-timeline'>
			{events.map((event, idx) => {


				return (
					<li>
						<p>
							{event.player.name}
						</p>
					</li>
				)
			})}
		</ul>
	)
}

export default EventsTimeline;