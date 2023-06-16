import React, { useEffect, useState } from 'react';
import MatchListItem from './matchListItem';
import { withRouter } from 'react-router-dom'
// import response from './response';

// array as a result of 'matches.response'
import response from './response';

const MatchesTimeline = ({apiKey}) => {
	const [matches, setMatches] = useState(response)
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		// fetchMatches()
	}, [])

	const fetchMatches = async () => {
		
	};

	if (loading) {
		return <div>Loading...</div>;
	}

	console.log(matches);

	return (
		<div className='timeline'>
			Matches Timeline
			<ul className='matches-timeline'>
				{matches.map(match => (
					<MatchListItem match={match} />
				)
				)}
			</ul>
		</div>
	)
}

export default MatchesTimeline;