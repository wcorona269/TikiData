import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TimelineNavBar from './timeline-nav-bar';
import TimelineMatchDisplay from './timeline-match-display';
import MatchListItem from './matchListItem';
import TimelineMatchCard from './timeline-match-card';
import { withRouter } from 'react-router-dom'
import { fetchMatches } from '../../actions/api_actions';
import response from './response';

// import response from './response';
// array as a result of 'matches.response'
// refactor timeline to use event cards
// sort timeline by league, and then 'all' option for all matches
// next step is player cards and then club cards

const MatchesTimeline = ({apiKey}) => {
	const dispatch = useDispatch();
	// const matches = useSelector(state => state.matches.matches);
	const matches = response;
	const competitions = new Set();
	
	useEffect(() => {
		if (!matches) {
			dispatch(fetchMatches())
		}
	}, []);

	
	
	const sortedMatches = matches?.sort((a, b) => {
		const dateA = new Date(a.fixture.timestamp * 1000);
		const dateB = new Date(b.fixture.timestamp * 1000);

		return dateA.getTime() - dateB.getTime()
	});

	const listOfNations = ['All', ...new Set(matches?.map(match => match.league.country))]
	const [selectedNation, setSelectedNation] = useState(listOfNations[0])
	
	const handleTabSelect = (nation) => {
		setSelectedNation(nation);
	}
	
	useEffect(() => {
		console.log(selectedNation)
	}, [selectedNation])
	
	if (!matches) {
		return <div>Loading...</div>;
	}
	console.log(matches);

	return (
		<>
			<h3>Matches Timeline</h3>
			<TimelineNavBar nations={listOfNations} onTabSelect={handleTabSelect}/>
			<TimelineMatchDisplay sortedMatches={sortedMatches} competitions={competitions} selectedNation={selectedNation}/>
		</>
	)
}

export default MatchesTimeline;