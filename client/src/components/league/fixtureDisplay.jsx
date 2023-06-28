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
					<div>
						<p>{fixture.teams.home.name}</p>
						<p>{fixture.goals.home}</p>
					</div>
					<div>
						<p>{fixture.teams.away.name}</p>
						<p>{fixture.goals.away}</p>
					</div>
					<div>{displayMatchStatus(fixture.fixture.status.short)}</div>
				</div>
			</Link>
		</li>
	)
}

export default EventCard;