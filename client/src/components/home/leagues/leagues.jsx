import React, { useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom'
import LeagueListItem from './leagueListItem';
import leaguesByCountry from './leaguesByCountry';
import topLeagues from './topLeagues';
import LeagueListTable from './league-list-table';

const Explore = () => {
	const sortedLeaguesByCountry = Object.entries(leaguesByCountry)
		.sort((a, b) => a[0].localeCompare(b[0]))
		.reduce((acc, [key, value]) => {
			acc[key] = value;
			return acc;
		}, {})

	const listTopLeagues = () => {
		return (
			<div className='top-leagues-container'>
				<h1>Top Leagues</h1>
				<div className='top-leagues-display'>
					{Object.entries(topLeagues).map((info, idx) => {
						const [key, value] = info;

						return (
						<div key={key}>
							<Link to={`/league-overview/${value}`}>
								{key}
							</Link>
						</div>
						)
					})}
				</div>
			</div>
		)
	}

	const listAllLeagues = (nations) => {
		return (
			<div className='all-leagues'>
				<h1>More Leagues</h1>
				{Object.entries(nations).map((nation) => (
					<LeagueListItem nation={nation}/>
				))}
			</div>
		)
	}

	return (
		<div className='leagues-list-container'>
			{listTopLeagues()}
			<LeagueListTable sortedLeaguesByCountry={sortedLeaguesByCountry}/>
		</div>
	)
}

export default Explore;