import React, { useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom'
import LeagueListItem from './leagueListItem';
import leaguesByCountry from './leaguesByCountry';

const Leagues = () => {

	const listLeagues = (nations) => {
		return (
			<div>
				{Object.entries(nations).map((nation) => (
					<LeagueListItem nation={nation}/>
				))}
			</div>
		)
	}

	return (
		<div className='leagues-list-container'>
			{listLeagues(leaguesByCountry)}
		</div>
	)
}

export default Leagues