import React from 'react'

const MatchTimelineTable = ({competition, matches}) => {

	const displayMatch = (match) => {
		const homeTeamName = match.teams.home.name;
		const homeTeamLogo = match.teams.home.logo;
		const awayTeamName = match.teams.away.name;
		const awayTeamLogo = match.teams.away.logo;

		return (
			<div className='timeline-match-teams'>
				<p className='team-indicator' id='home-team-indicator'>
					{homeTeamName} <img src={homeTeamLogo} alt={homeTeamName}/>
				</p>
				<p className='versus'>
					{displayScore(match)}
				</p>
				<p className='team-indicator' id='away-team-indicator'>
					<img src={awayTeamLogo} alt={awayTeamName} />{awayTeamName} 
				</p>
			</div>
		)
	}

	const displayScore = (match) => {
		const status = match.fixture.status.short;

		const inPlayStatuses = ['1H', '2H', 'ET', 'BT', 'P', 'INT', 'LIVE'];
		const finishedStatuses = ['HT', 'FT', 'AET', 'PEN'];

		if (inPlayStatuses.includes(status) || finishedStatuses.includes(status)) {
			return (
				<p>
					{match.goals.home} - {match.goals.away}
				</p>
			)
		}

		return <p>-</p>
	}

	const formatTime = (timeString, userTimeZone) => {
		const date = new Date(timeString);
		const options = {
			hour: 'numeric',
			minute: 'numeric',
			hour12: true,
			timeZone: userTimeZone
		};

		const formattedTime = new Intl.DateTimeFormat('en-US', options).format(date);
		return formattedTime;
	}


	const displayTime = (match) => {
		
		if (match.fixture.status.short == 'FT') {
			return <p>FT</p>
		}
		if (match.fixture.status.elapsed !== null) {
			return <p>{match.fixture.status.elapsed} '</p>
		}
		
		if (match.fixture.status.short === 'NS') {
			const timeString = match.fixture.date;
			const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
			const formattedTime = formatTime(timeString, userTimeZone);

			return (
				<p>
					{formattedTime}
				</p>
			)
		}
	}

	const displayMatches = (matches) => {
		let result = [];

		for (let match of matches) {
			const location = (match.fixture.venue.name !== null && match.fixture.venue.city !== null) ? `${match.fixture.venue.name}, ${match.fixture.venue.city}` : '-'

			result.push(
				<tr>
					<td>
						{displayMatch(match)}
					</td>
					<td>
						{displayTime(match)}
					</td>
					<td id='location'>
						{location}
					</td>
				</tr>
			)
		}

		return (
				result
		)
	}

	return (
		<div className='match-timeline-table'>
			<h2>{competition}</h2>
			<table>
				<thead>
					<tr>
						<th className='match-column'>Match</th>
						<th className='time-column'>Time</th>
						<th className='location-column'>Location</th>
					</tr>
				</thead>
				<tbody>
					{displayMatches(matches)}
				</tbody>
			</table>
		</div>
	)
}

export default MatchTimelineTable;