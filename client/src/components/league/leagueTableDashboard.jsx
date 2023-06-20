import React from 'react'

const LeagueTableDashboard = ({table}) => {
	let leagueInfo = [table][0][0]['league'];
	const standings = leagueInfo['standings'][0];
	const columns = ['Position', 'Club', 'Played', 'Won', 'Drawn', 'Lost', 'GF', 'GC', 'GD', 'Points', 'Form'];

	const displayForm = (form) => {
		let icons = {
			'W': '\u{1F7E2}',
			'D': '\u{1F7E1}',
			'L': '\u{1F534}'
		};

		return (
			<p id='form-display'>
				{form.split('').map((symbol, index) => (
					<span key={index}>{icons[symbol]}</span>
				))}
			</p>
		);
	};

	return (
		<table className='league-table'>
			<thead>
				<tr>
					{columns.map((column, idx) => (
						<th key={idx} className='league-table-header' id={column}>{column}</th>
					))}
				</tr>
			</thead>
			<tbody className='league-table-body'>
				{standings.map((club, idx) => (
					<tr key={idx} className='league-table-row'>
						<td>{club['rank']}</td>
						<td id='Club' >{club['team']['name']} <img src={club['team']['logo']}/></td>
						<td>{club['all']['played']}</td>
						<td>{club['all']['win']}</td>
						<td>{club['all']['lose']}</td>
						<td>{club['all']['draw']}</td>
						<td>{club['all']['goals']['for']}</td>
						<td>{club['all']['goals']['against']}</td>
						<td>{club['goalsDiff']}</td>
						<td>{club['points']}</td>
						<td>{displayForm(club['form'])}</td>
					</tr>
				))}
			</tbody>
		</table>
	)
}

export default LeagueTableDashboard

