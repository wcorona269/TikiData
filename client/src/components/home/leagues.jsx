import React, { useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom'

const Leagues = () => {

// TODO: refactor so all leagues have corresponding country flag / league icon
	const leaguesByCountry = {
		'England': { leagues: [2, 3], countryCode: 'GB' },
		'Spain': { leagues: [87, 88], countryCode: 'ES' },
		'Germany': { leagues: [8, 9], countryCode: 'DE' },
		'Italy': { leagues: [94, 95], countryCode: 'IT' },
		'France': { leagues: [16, 17], countryCode: 'FR' },
		'Netherlands': { leagues: [12, 13], countryCode: 'NL' },
		'Portugal': { leagues: [28, 29], countryCode: 'PT' },
		'Scotland': { leagues: [19, 20], countryCode: 'GB' },
		'Belgium': { leagues: [18, 33], countryCode: 'BE' },
		'Turkey': { leagues: [24, 25], countryCode: 'TR' },
		'Russia': { leagues: [10, 11], countryCode: 'RU' },
		'Ukraine': { leagues: [46, 47], countryCode: 'UA' },
		'Switzerland': { leagues: [23, 57], countryCode: 'CH' },
		'Austria': { leagues: [14, 21], countryCode: 'AT' },
		'Greece': { leagues: [33, 72], countryCode: 'GR' },
		'Denmark': { leagues: [6, 7], countryCode: 'DK' },
		'Sweden': { leagues: [22, 24], countryCode: 'SE' },
		'Norway': { leagues: [1, 2], countryCode: 'NO' },
		'Croatia': { leagues: [70, 71], countryCode: 'HR' },
		'Poland': { leagues: [26, 27], countryCode: 'PL' },
		'MLS': { leagues: [253], countryCode: 'US' },
		'Liga MX': { leagues: [58], countryCode: 'MX' },
		'UEFA Champions League': { leagues: [2], countryCode: '' },
		'UEFA Europa League': { leagues: [3], countryCode: '' },
		'UEFA Europa Conference League': { leagues: [283], countryCode: '' }
		// Add more countries and leagues as needed
	};

	const listLeagues = (nations) => {
		return (
			<div>
				{Object.entries(nations).map(([nation, leagues]) => (
					<div key={nation}>
						<h3>{nation}</h3>
					</div>
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