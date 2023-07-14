import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MatchListItem from './matchListItem';
import TimelineMatchCard from './timeline-match-card';
import { withRouter } from 'react-router-dom'
import { fetchMatches } from '../../actions/api_actions';

// import response from './response';
// array as a result of 'matches.response'
import response from './response';

const MatchesTimeline = ({apiKey}) => {
	const dispatch = useDispatch();
	const matches = useSelector(state => state.matches.matches)
	const [loading, setLoading] = useState(false);
	const competitions = new Set();
	
	useEffect(() => {
		dispatch(fetchMatches())
	}, []);
	
	if (!matches) {
		return <div>Loading...</div>;
	}
	
	const sortedMatches = matches.sort((a, b) => a.league.id > b.league.id);
	// refactor timeline to use event cards
	// sort timeline by league, and then 'all' option for all matches
	// next step is player cards and then club cards

	return (
		<div className='timeline'>
			Matches Timeline
			<ul className='matches-timeline'>
				{sortedMatches.map((match, idx) => {
					if (!competitions.has(match.league.name)) {
						competitions.add(match.league.name)

						return (
							<>
								<p>
									{match.league.name}
								</p>
								<TimelineMatchCard match={match} idx={idx}/>
							</>
						)
					}

					return (
						<TimelineMatchCard match={match} idx={idx} />
					)
				}
				)}
			</ul>
		</div>
	)
}

export default MatchesTimeline;