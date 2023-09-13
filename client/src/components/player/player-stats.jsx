import React from 'react'
import NoDataMessage from '../util/no-data-message';

const PlayerStats = ({statistics}) => {

	if (!statistics.length) {
		return <NoDataMessage/>
	}

	const displayStats = (statistics) => {
		
		let result = [];

		let totals = {
			'apps': 0,
			'goals': 0,
			'assists': 0,
			'passes': 0,
			'dribbles': 0,
			'tackles': 0,
			'interceptions': 0,
			'yellow': 0,
			'red': 0,
		}

		for (let i of statistics) {
			const competition = i.league.name || 0;
			const team = i.team.name || 0;
			const apps = i.games.appearences || 0;
			const goals = i.goals.total || 0;
			const assists = i.goals.assists || 0;
			const passes = i.passes.total || 0;
			const dribbles = i.dribbles.success || 0;
			const tackles = i.tackles.total || 0;
			const interceptions = i.tackles.interceptions || 0;
			const yellow = i.cards.yellow || 0;
			const red = i.cards.red || 0;

			totals['apps'] += apps;
			totals['goals'] += goals;
			totals['assists'] += assists;
			totals['passes'] += passes;
			totals['dribbles'] += dribbles;
			totals['tackles'] += tackles;
			totals['interceptions'] += interceptions;
			totals['yellow'] += yellow;
			totals['red'] += red;

			result.push(
				<tr>
					<td id='competition'>{competition}</td>
					<td id='team'>{team}</td>
					<td>{apps}</td>
					<td>{goals}</td>
					<td>{assists}</td>
					<td>{passes}</td>
					<td>{dribbles}</td>
					<td>{tackles}</td>
					<td>{interceptions}</td>
					<td>{yellow}</td>
					<td>{red}</td>
				</tr>
			)
		}

		result.push(
			<tr id='stats-totals'>
				<td id='competition'>-</td>
				<td id='team'>-</td>
				<td>{totals['apps']}</td>
				<td>{totals['goals']}</td>
				<td>{totals['assists']}</td>
				<td>{totals['passes']}</td>
				<td>{totals['dribbles']}</td>
				<td>{totals['tackles']}</td>
				<td>{totals['interceptions']}</td>
				<td>{totals['yellow']}</td>
				<td>{totals['red']}</td>
			</tr>
		)


		return result;
	}

	return (
		<div className='player-stats-dashboard'>
			<h3>Statistics</h3>
			<table className='player-stats-table'>
				<thead>
					<th id='competition'>Competition</th>
					<th id='team'>Team</th>
					<th>Apps</th>
					<th>Goals</th>
					<th>Assists</th>
					<th>Passes</th>
					<th>Dribbles</th>
					<th>Tackles</th>
					<th>Interceptions</th>
					<th>Yellow</th>
					<th>Red</th>
				</thead>
				<tbody>
					{displayStats(statistics)}
				</tbody>
			</table>
		</div>
	)
}

export default PlayerStats;
