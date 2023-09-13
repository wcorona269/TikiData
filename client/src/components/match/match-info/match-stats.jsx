import React from 'react';
import NoDataMessage from '../../util/no-data-message';

const MatchStats = ({match}) => {
	let stats = match.statistics;

	if (!stats.length) {
		return <NoDataMessage/>
	}

	let combinedStats = {}

	for (let team of stats) {
		for (let category of team.statistics) {
			console.log(team.statistics[category]);
			if (category.type in combinedStats) {
				combinedStats[category.type].push(category.value || 0);
			} else {
				combinedStats[category.type] = [];
				combinedStats[category.type].push(category.value || 0);
			}
		}
	}

	const percentageStringToInteger = (percentageString) => {
		if (Number.isInteger(percentageString)) return percentageString;

		const cleanedString = percentageString.replace(/%/g, '').trim();

		// Parse the cleaned string as an integer
		const intValue = parseInt(cleanedString, 10);

		return intValue;
	}

	const displayTeamStats = (combinedStats) => {
		let result = [];

		for (let key in combinedStats) {
			let homeStat = combinedStats[key][0];
			let awayStat = combinedStats[key][1]
			let homeValue = percentageStringToInteger(homeStat);
			let awayValue = percentageStringToInteger(awayStat);
			let percentageHome;
			let percentageAway;

			if (homeValue === 0 && awayValue === 0) {
				percentageHome = 0;
				percentageAway = 0
			} else if (homeValue === 0) {
				percentageHome = 0;
				percentageAway = 100;
			} else if (awayValue === 0) {
				percentageHome = 100;
				percentageAway = 0;
			} else {
				percentageHome = homeValue / (homeValue + awayValue) * 100
				percentageAway = awayValue / (homeValue + awayValue) * 100
			}

			console.log({percentageHome}, {percentageAway});

			const isHomeLeading = percentageHome > percentageAway;
			const isNonZeroStat = (homeValue !== 0 || awayValue !== 0);

			result.push(
				[
				<tr key={key}>
					<td id='stat-name-column' colSpan='3'>{key}</td>
				</tr>,
				<tr key={key + '_percentage'} id='stat-row'>
					<td colSpan='3' id='percentage-stat-td'>
						<div className='stat-containers'>
							{isNonZeroStat ? 
							<>
									<div className={isHomeLeading ? 'leading-col' : 'losing-col'} style={{width:percentageHome + '%'}}>{homeStat}</div>
									<div className={isHomeLeading ? 'losing-col' : 'leading-col'} style={{width:percentageAway + '%'}}>{awayStat}</div>
							</> :
								<>
									<div id='zero-col' style={{ width: 50 + '%'}}>{homeValue}</div>
									<div id='zero-col' style={{ width: 50 + '%'}}>{awayValue}</div>
								</>
							}
						</div>
					</td>
				</tr>
				]
			)
		}

		return result;
	}


	return (
		<div className='match-stats-container'>
			<table>
				<thead>
					<tr>
						<th>{match.teams.home.name}</th>
						<th className='stat-name-column'>Statistics</th>
						<th>{match.teams.away.name}</th>
					</tr>
				</thead>
				<tbody>
					{displayTeamStats(combinedStats)}
				</tbody>
			</table>
		</div>
	)
}

export default MatchStats;