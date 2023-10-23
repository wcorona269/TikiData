import React from 'react'
import { Link } from 'react-router-dom';
import Flag from 'react-world-flags';

const LeagueListTable = ({ sortedLeaguesByCountry }) => {

	const displayTableRow = (country, idx) => {
		const [name, info ] = country;
		const result = [
			<td>{name} <Flag code={info['countryCode']} height='16' /></td>
		];

		{Object.entries(info['leagues']).map(([league, id]) => {
			result.push(
				<td>
					<Link key={id} to={`/league-overview/${id}`}>
						{league}
					</Link>
				</td>
			)
		})}
		
		while (result.length < 4) {
			result.push(
				<td>-</td>
			)
		}

		return (
			<tr>
				{result}
			</tr>
		) 
	}
	

	return (
		<div className='league-list-table'>
			<h1>Explore Leagues</h1>
			<table>
				<thead>
					<tr>
						<th>Country</th>
						<th>First Division</th>
						<th>Second Division</th>
						<th>Third Division</th>
					</tr>
				</thead>
				<tbody>
					{Object.entries(sortedLeaguesByCountry).map((country, idx) => (
						displayTableRow(country, idx)
					))}
				</tbody>
			</table>
		</div>
	)
}

export default LeagueListTable;