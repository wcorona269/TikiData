import React, { useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom'

const Leagues = () => {
	const leagues = {
		'La Liga': ['Real Madrid', 'Barcelona', 'Atletico Madrid', 'Real Sociedad', 'Real Betis'],
		'Premier League': ['Manchester City', 'Chelsea', 'Liverpool', 'Arsenal', 'Manchester United', 'Tottenham Hotspur'],
		'Ligue 1': ['Paris Saint-Germain', 'Lille OSC', 'OCG Nice', 'Marsielle', 'Rennes', 'Lyon', 'AS Monaco'],
		'Serie A': ['Juvenuts', 'Napoli', 'Torino', 'AC Milan', 'Inter Milan', 'AS Roma']
	}

	const listLeagues = (leagues) => {
		return (
			<div>
				{Object.entries(leagues).map(([league, teams]) => (
					<div key={league}>
						<h3>{league}</h3>
						<ul>
							{teams.map(team => (
								<li key={team}>{team}</li>
							))}
						</ul>
					</div>
				))}
			</div>
		)
	}

	return (
		<div className='leagues-list-container'>
			{listLeagues(leagues)}
		</div>
	)
}

export default Leagues