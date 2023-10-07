
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchClubStats } from '../../actions/api_actions';
import { TableContainer, Table, TableHead, TableBody, TableCell, TableRow } from '@mui/material';
import YellowCard from '../../images/yellow.png';
import RedCard from '../../images/red.png';

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
				<TableRow key={competition}>
					<TableCell sx={{borderRight: '1px solid var(--gray)', display: 'flex', alignItems: 'center'}}>
						<img src={logo} style={{ width: '1rem', height: '1rem', marginRight: '.5rem'}}/>
						{competition}
					</TableCell>
					<TableCell>{played}</TableCell>
					<TableCell>{wins}</TableCell>
					<TableCell>{draws}</TableCell>
					<TableCell>{losses}</TableCell>
					<TableCell>{goalsForced}</TableCell>
					<TableCell>{goalsConceded}</TableCell>
					<TableCell>{goalDifference}</TableCell>
					<TableCell>{yellowCards}</TableCell>
					<TableCell>{redCards}</TableCell>
					<TableCell>{cleanSheets}</TableCell>
				</TableRow>
			)
		}

		result.push(
			<TableRow key={totals} id='totals' sx={{ backgroundColor: 'var(--gray)' }}>
				<TableCell>All</TableCell>
				<TableCell>{totals['played']}</TableCell>
				<TableCell>{totals['wins']}</TableCell>
				<TableCell>{totals['draws']}</TableCell>
				<TableCell>{totals['losses']}</TableCell>
				<TableCell>{totals['goals_forced']}</TableCell>
				<TableCell>{totals['goals_conceded']}</TableCell>
				<TableCell>{totals['goals_forced'] - totals['goals_conceded']}</TableCell>
				<TableCell>{totals['yellow_cards']}</TableCell>
				<TableCell>{totals['red_cards']}</TableCell>
				<TableCell>{totals['clean_sheets']}</TableCell>
			</TableRow>
		)
		return result;
	}


	return (
		<TableContainer>
		<Table>
			<TableHead>
				<TableRow sx={{backgroundColor: 'var(--gray)'}}>
					<TableCell sx={{ padding: '16px !important' }}>Competition</TableCell>
					<TableCell sx={{ padding: '16px !important' }}>MP</TableCell>
					<TableCell sx={{ padding: '16px !important' }}>W</TableCell>
					<TableCell sx={{ padding: '16px !important' }}>D</TableCell>
					<TableCell sx={{ padding: '16px !important' }}>L</TableCell>
					<TableCell sx={{ padding: '16px !important' }}>GF</TableCell>
					<TableCell sx={{ padding: '16px !important' }}>GC</TableCell>
					<TableCell sx={{ padding: '16px !important' }}>GD</TableCell>
					<TableCell sx={{ padding: '16px !important' }}><img src={YellowCard} style={{ width: '1rem', height: '1rem'}}/></TableCell>
						<TableCell sx={{ padding: '16px !important' }}><img src={RedCard} style={{ width: '1rem', height: '1rem' }} /></TableCell>
					<TableCell sx={{ padding: '16px !important' }}>Clean Sheets</TableCell>
				</TableRow>
			</TableHead>
			<tbody>
				{displayTeamStats(stats)}
			</tbody>
		</Table>

		</TableContainer>
	)
}

export default ClubStatsDashboard;