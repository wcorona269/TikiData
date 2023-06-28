import React from 'react';
import { Link } from 'react-router-dom';


const EventCard = ({fixture, idx}) => {

	const displayMatchStatus = (status) => {
		if (status === 'FT') {
			return 'Final'
		}
	}

	return (
		<li className='event-card' key={idx}>
			<Link>
				<div className='event-card-info'>
					<div className='event-card-teams'>
						<div className='event-card-team-row'>
							<img src={fixture.teams.home.logo}/>
							<p>{fixture.teams.home.name}</p>
						</div>
						<div className='event-card-team-row'>
							<img src={fixture.teams.away.logo}/>
							<p>{fixture.teams.away.name}</p>
						</div>
					</div>
					<div className='event-card-scores'>
							<p>{fixture.goals.home}</p>
							<p>{fixture.goals.away}</p>
					</div>
					<div className='event-card-status'>{displayMatchStatus(fixture.fixture.status.short)}</div>
				</div>
			</Link>
		</li>
	)
}

export default EventCard;