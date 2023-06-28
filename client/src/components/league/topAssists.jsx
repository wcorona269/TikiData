import React from 'react'

const TopAssists = ({data}) => {
	const columns = ['Rank', 'Player', 'Club', 'Nationality', 'Assists'];

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
					const club = statistics['team']['logo'];
					const icon = player['player']['photo'];
					const goals = statistics['goals']['assists']
					const name = `${player['player']['firstname']} ${player['player']['lastname']}`
					const nation = player['player']['nationality'];

					return (
						<tr key={idx} className='league-table-row'>
							<td>{idx + 1}</td>
							<td id='Player'><img src={icon} />{name}</td>
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