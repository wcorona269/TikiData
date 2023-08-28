import React , { useState } from 'react'
import { Link } from 'react-router-dom';

const LeagueListItem = ({nation}) => {
	const [name, info] = nation;
	const leagueNames = Object.keys(info['leagues']);
	const leaguesObject = info['leagues'];
	const code = info['countryCode'];


	return (
		<div 
			className='league-list-item' key={name}>
			<h3>{name}</h3>
			<ul>
				{leagueNames.map((league) => (
					<Link to={`/league-overview/${leaguesObject[league]}`}>
					<li>
						{league}
					</li>
					</Link>
				))}
			</ul>
		</div>
	)
}

export default LeagueListItem;