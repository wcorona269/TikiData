import React from 'react'
import { Link } from 'react-router-dom';

const MultiTableDashboard = ({standings}) => {

	const displayIndividualTable = (table, idx) => {
	
		const leagueInfo = table[0].group || table[0].description;

		const columns = ['Position', 'Club', 'Played', 'Won', 'Drawn', 'Lost', 'GF', 'GC', 'GD', 'Points'];

		return (
			<div className='multi-table-dashboard'>
				<h2>
					{leagueInfo}
				</h2>
				<table className='league-table' key={idx}>
					<thead>
						<tr>
							{columns.map((column, idx) => (
								<th key={idx} className='league-table-header' id={column}>{column}</th>
							))}
						</tr>
					</thead>
					<tbody className='league-table-body'>
						{table.map((club, idx) => {
							const clubId = club['team']['id'];
							const rank = club['rank'];
							const clubName = club['team']['name'];
							const clubLogo = club['team']['logo'];
							const clubData = club['all'];
							const goalsDiff = club['goalsDiff'];
							const points = club['points'];
							const form = club['form']

							return (
							<tr key={idx} className='league-table-row'>
								<td>{rank}</td>
								<td id='Club' >
									<Link to={`/club/${clubId}`}>
										<img src={club['team']['logo']} />
										<span>{clubName}</span>
									</Link>
								</td>
								<td>{clubData['played']}</td>
								<td>{clubData['win']}</td>
								<td>{clubData['lose']}</td>
								<td>{clubData['draw']}</td>
								<td>{clubData['goals']['for']}</td>
								<td>{clubData['goals']['against']}</td>
								<td>{goalsDiff}</td>
								<td>{points}</td>
							</tr>
							)
						})}
					</tbody>
				</table>
			</div>
		)
	}

	return (
		<div>
			{standings.map((group, idx) => (
				displayIndividualTable(group, idx)
			))}
		</div>
	)
}

export default MultiTableDashboard;