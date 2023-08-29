import React from 'react';
import {Link} from 'react-router-dom'

const TimelineMatchCard = ({match, matchesByCompetition, idx, competitions}) => {
	// const [showLeague, setShowLeague] = useState(false);
	const id = match.fixture.id
	const status = match.fixture.status;
	
	const league = `${match.league.country} ${match.league.name} ${match.league.round}`
	const events = match.events.length === 0 ? null : match.events
	
	const homeTeam = match.teams.home.name
	const awayTeam = match.teams.away.name
	
	const homeGoals = match.goals.home
	const awayGoals = match.goals.away
	
	const homeIcon = match.teams.home.logo;
	const awayIcon = match.teams.away.logo;
	
	const displayStatus = (status) => {
		if (status.long === 'First Half' || status.long === "Second Half") {
			return `${status.elapsed}'`
		}

		if (status.short === 'FT') {
			return 'Final'
		}
	}

	return (
		<Link to={`/match-overview/${id}`} className='timeline-match-card-container'>
			<div id='competition-indicator'>
				<p>
					{match.league.name}
				</p>
				<p>
					{match.league.country}
				</p>
			</div>
			<li key={idx}>
				<div className='timeline-match-card'>
					<div className='home-team-bar'>
						<p className='team-name-display'>
							<img src={homeIcon}/>
							{homeTeam}
						</p>
						<p>
							{homeGoals}
						</p>
					</div>
					<div className='away-team-bar'>
						<p className='team-name-display'>
							<img src={awayIcon}/>
							{awayTeam}
						</p>
						<p>
							{awayGoals}
						</p>
					</div>
					<div className='status-area'>
						{displayStatus(match.fixture.status)}
					</div>
				</div>
			</li>
		</Link>
	)
}

export default TimelineMatchCard;
