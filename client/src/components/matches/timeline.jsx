import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TimelineNavBar from './timeline-nav-bar';
import TimelineMatchDisplay from './timeline-match-display';
import MatchListItem from './matchListItem';
import TimelineMatchCard from './timeline-match-card';
import { withRouter } from 'react-router-dom'
import { fetchMatches } from '../../actions/api_actions';
import response from './response';
import LoadingMessage from '../util/loading-screen';

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

	const sortMatches = () => {
		let result = {};

		for (let match of matches) {
			let country = `${match.league.country}`
			if (country in result) {
				result[country].push(match)
			} else {
				result[country] = [];
				result[country].push(match);
			}
		}
		return result;
	}
	
	
	const listOfNations = ['All', ...new Set(matches?.map(match => match.league.country))]
	const [selectedNation, setSelectedNation] = useState(listOfNations[0])
	

	const handleTabSelect = (nation) => {
		setSelectedNation(nation);
	}

	
	useEffect(() => {
	}, [selectedNation])
	

	if (!matches) {
		return (<LoadingMessage/>)
	}


	const sortedMatches = sortMatches();


	return (
		<>
			<TimelineNavBar selectedNation={selectedNation} nations={listOfNations} onTabSelect={handleTabSelect}/>
			<TimelineMatchDisplay matches={sortedMatches} competitions={competitions} selectedNation={selectedNation}/>
		</>
	)
}

export default MatchesTimeline;