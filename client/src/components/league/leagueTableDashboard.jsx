import React from 'react'

const LeagueTableDashboard = ({response}) => {
	let leagueInfo = [response][0][0]['league'];
	const standings = leagueInfo['standings'][0];
	const columns = ['Position', 'Club', 'Played', 'Won', 'Drawn', 'Lost', 'GF', 'GC', 'GD', 'Points', 'Form'];

	return (
		<table>
			<thead>
				<tr>
					{columns.map((column, idx) => (
						<th key={idx} className={column}>{column}</th>
					))}
				</tr>
			</thead>
			<tbody>
				{standings.map((club, idx) => (
					<tr key={idx}>
						<td>{club['rank']}</td>
						<td>{club['team']['name']} <img src={club['team']['logo']}/></td>
						{console.log(club['team'])}
						<td>{club['all']['played']}</td>
						<td>{club['all']['win']}</td>
						<td>{club['all']['lose']}</td>
						<td>{club['all']['draw']}</td>
						<td>{club['all']['goals']['for']}</td>
						<td>{club['all']['goals']['against']}</td>
						<td>{club['goalsDiff']}</td>
						<td>{club['points']}</td>
						<td>{club['form']}</td>
					</tr>
				))}
			</tbody>

		</table>
	)
}

export default LeagueTableDashboard

