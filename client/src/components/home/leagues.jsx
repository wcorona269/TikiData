import React, { useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom'

const Leagues = () => {
	const leagues = ['La Liga', 'Premier League', 'Serie A', 'Ligue 1', 'MLS']

	return (
		<div className='leagues-list-container'>
			Poop
			<ul>
				{leagues.map((league, idx) => {
					<li key={idx}>
						{league}
					</li>
				})}
			</ul>
		</div>
	)
}

export default Leagues