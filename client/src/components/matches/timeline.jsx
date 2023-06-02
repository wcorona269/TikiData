import React, { useEffect, useState } from 'react';
import MatchListItem from './matchListItem';
import { withRouter } from 'react-router-dom'

// array as a result of 'matches.response'
import { response } from './response';

const MatchesTimeline = ({apiKey}) => {
	const [matches, setMatches] = useState(response)
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		// fetchMatches()
		// console.log(matches)
	}, [])

	// const fetchMatches = async () => {
	// 	try {
	// 		const response = await fetch(`https://v3.football.api-sports.io/fixtures?live=all`, {
	// 			method: 'GET',
	// 			headers: {
	// 				'x-rapidapi-host': 'v3.football.api-sports.io',
	// 				'x-rapidapi-key': `${apiKey}`
	// 			}
	// 		});

	// 		if (!response.ok) {
	// 			throw new Error('Failed to fetch matches');
	// 		}

	// 		const data = await response.json();
	// 		setMatches(data);
	// 		setLoading(false);
	// 	} catch (error) {
	// 		console.error(error);
	// 		setLoading(false);
	// 	}
	// };

	if (loading) {
		return <div>Loading...</div>;
	}
	return (
		<div className='timeline'>
			Matches Timeline
			<ul>
				{matches.map(match => (
					<MatchListItem match={match} />
				)
				)}
			</ul>
		</div>
	)
}

export default MatchesTimeline