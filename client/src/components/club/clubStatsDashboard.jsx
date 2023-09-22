import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchClubStats } from '../../actions/api_actions';

const ClubStatsDashboard = ({ stats }) => {
	let totals = {}

	const displayTeamStats = (stats) => {
		let result = [];
		let totals = {
			'played': 0,
			'wins': 0,
			'losses': 0,
			'draws': 0,
			'goals_forced': 0,
			'goals_conceded': 0,
			'yellow_cards': 0,
			'red_cards': 0,
			'clean_sheets': 0,
		}

		for (let league of stats) {
			const competition = league.league.name || 'N/A';
			const played = league.fixtures.played.total || 0;
			const wins = league.fixtures.wins.total || 0
			const losses = league.fixtures.loses.total || 0;
			const draws = league.fixtures.draws.total || 0;
			const logo = league.league.logo || null;
			const goalsForced = league.goals.for.total.total || 0;
			const goalsConceded = league.goals.against.total.total || 0;
			const goalDifference = goalsForced - goalsConceded;
			let yellowCards = 0;
			let redCards = 0;
			let cleanSheets = league.clean_sheet.total || 0;

			for (let key in league.cards.yellow) {
				let total = league.cards.yellow[key].total || 0;
				yellowCards += total;
			}

			for (let key in league.cards.red) {
				let total = league.cards.red[key].total || 0;
				redCards += total;
			}

			totals['played'] += played;
			totals['wins'] += wins;
			totals['losses'] += losses;
			totals['draws'] += draws;
			totals['goals_forced'] += goalsForced;
			totals['goals_conceded'] += goalsConceded;
			totals['yellow_cards'] += yellowCards;
			totals['red_cards'] += redCards;
			totals['clean_sheets'] += cleanSheets;

			result.push(
				<tr key={competition}>
					<td>{competition}</td>
					<td>{played}</td>
					<td>{wins}</td>
					<td>{losses}</td>
					<td>{draws}</td>
					<td>{goalsForced}</td>
					<td>{goalsConceded}</td>
					<td>{goalDifference}</td>
					<td>{yellowCards}</td>
					<td>{redCards}</td>
					<td>{cleanSheets}</td>
				</tr>
			)
		}

		result.push(
			<tr key={totals} id='totals'>
				<td>All</td>
				<td>{totals['played']}</td>
				<td>{totals['wins']}</td>
				<td>{totals['losses']}</td>
				<td>{totals['draws']}</td>
				<td>{totals['goals_forced']}</td>
				<td>{totals['goals_conceded']}</td>
				<td>{totals['goals_forced'] - totals['goals_conceded']}</td>
				<td>{totals['yellow_cards']}</td>
				<td>{totals['red_cards']}</td>
				<td>{totals['clean_sheets']}</td>
			</tr>
		)
		return result;
	}


	return (
		<table className='club-stats-table'>
			<thead>
				<tr>
					<th>Competition</th>
					<th>Played</th>
					<th>Wins</th>
					<th>Losses</th>
					<th>Draws</th>
					<th>GF</th>
					<th>GC</th>
					<th>GD</th>
					<th>Yellow Cards</th>
					<th>Red Cards</th>
					<th>Clean Sheets</th>
				</tr>
			</thead>
			<tbody>
				{displayTeamStats(stats)}
			</tbody>
		</table>
	)
}

export default ClubStatsDashboard;