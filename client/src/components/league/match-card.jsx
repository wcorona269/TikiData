import React from 'react';
import { Link } from 'react-router-dom';
import DisplayTime from '../util/display-time';


const MatchCard = ({fixture, idx}) => {	
	return (
		<li className='event-card' key={idx}>
			<Link to={`/match-overview/${fixture.fixture.id}`}>
				<div className='event-card-info'>
					<div className='event-card-teams'>
						<div className='event-card-team-row'>
							<img src={fixture.teams.home.logo} alt=''/>
							<p>{fixture.teams.home.name}</p>
						</div>
						<div className='event-card-team-row'>
							<img src={fixture.teams.away.logo} alt=''/>
							<p>{fixture.teams.away.name}</p>
						</div>
					</div>
					<div className='event-card-scores'>
							<p>{fixture.goals.home}</p>
							<p>{fixture.goals.away}</p>
					</div>
					<div className='event-card-status'><DisplayTime match={fixture}/></div>
				</div>
			</Link>
		</li>
	)
}

export default MatchCard;