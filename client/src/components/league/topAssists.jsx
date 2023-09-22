import React from 'react'
import { Link } from 'react-router-dom';
import NoDataMessage from '../util/no-data/no-data-message';

const TopAssists = ({data}) => {
	const columns = ['Rank', 'Player', 'Club', 'Nationality', 'Assists'];

	if (!data.length) {
		return <NoDataMessage/>
	}

	return ( 
		<table className='stat-dashboard'>
			<thead>
				<tr>
					{columns.map((column, idx) => (
						<th key={idx} className='stat-dashboard-header' id={column}>{column}</th>
					))}
				</tr>
			</thead>
			<tbody className='stat-dashboard-body'>
				{data.map((player, idx) => {
					let statistics = player['statistics'][0];
					const id = player.player.id
					const club = statistics['team']['logo'];
					const icon = player['player']['photo'];
					const goals = statistics['goals']['assists']
					const name = `${player['player']['firstname']} ${player['player']['lastname']}`
					const nation = player['player']['nationality'];

					return (
						<tr key={idx} className='league-table-row'>
							<td>{idx + 1}</td>
							<td id='Player'><img src={icon} /><Link to={`/player-profile/${id}`}>{name}</Link></td>
							<td id='Club'><img src={club} /></td>
							<td>{nation}</td>
							<td>{goals}</td>
						</tr>
					)
				})}
			</tbody>
		</table>
	)
}

export default TopAssists;