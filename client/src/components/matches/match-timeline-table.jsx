import React from 'react';
import { Link } from 'react-router-dom';

const MatchTimelineTable = ({nation, matches}) => {

	const displayMatch = (match) => {
		const homeTeamName = match.teams.home.name;
		const homeTeamLogo = match.teams.home.logo;
		const awayTeamName = match.teams.away.name;
		const awayTeamLogo = match.teams.away.logo;
		const id = match.fixture.id

		return (
			<Link to={`/match-overview/${id}`} className='timeline-match-teams'>
				<p className='team-indicator' id='home-team-indicator'>
					{homeTeamName} <img src={homeTeamLogo} alt={homeTeamName}/>
				</p>
				<p className='versus'>
					{displayScore(match)}
				</p>
				<p className='team-indicator' id='away-team-indicator'>
					<img src={awayTeamLogo} alt={awayTeamName} />{awayTeamName} 
				</p>
			</Link>
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

		return <p>{match.fixture.status.short}</p>
	}

	const displayMatches = (matches) => {
		let matchesByCompetition = {};
		let result = [];

		for (let match of matches) {
			if (match.league.name in matchesByCompetition) {
				matchesByCompetition[match.league.name].push(match);
			}
			else {
				matchesByCompetition[match.league.name] = [];
				matchesByCompetition[match.league.name].push(match);
			}
		}

		for (let competition in matchesByCompetition) {
			let competitionMatches = [];

			for (let match of matchesByCompetition[competition]) {
				competitionMatches.push(
					<tr>
						<td>
							{displayMatch(match)}
						</td>
						<td>
							{displayTime(match)}
						</td>
						<td id='location'>
							{match.league.name}
						</td>
					</tr>
				)
			}

			result.push(
				<>
					<h3>{competition}</h3>
					<table>
						<thead>
							<tr>
								<th className='match-column'>Match</th>
								<th className='time-column'>Time</th>
								<th className='location-column'>Competition</th>
							</tr>
						</thead>
						<tbody>
							{competitionMatches}
						</tbody>
					</table>
				</>
				)
		}

		return (
				result
		)
	}

	return (
		<div className='match-timeline-table'>
			<h2>{nation}</h2>
			{displayMatches(matches)}
		</div>
	)
}

export default MatchTimelineTable;