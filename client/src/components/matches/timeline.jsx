import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TimelineNavBar from './timeline-nav-bar';
import TimelineMatchDisplay from './timeline-match-display';
import LoadingMessage from '../util/loading-screen';
import TimelineCalendar from './timeline-calendar';
import { fetchMatches } from '../../actions/api_actions';
import response from './response';
import NoDataMessage from '../util/no-data-message';

const MatchesTimeline = ({apiKey}) => {
	const dispatch = useDispatch();
	// const matches = useSelector(state => state.matches.matches);
	const matches = response;
	const competitions = new Set();
	const [date, setDate] = useState(new Date());
	
	useEffect(() => {
		const month = (date.getMonth() + 1).toString().padStart(2, '0');
		const year = (date.getFullYear()).toString()
		const day = (date.getDate()).toString().padStart(2, '0');

		const dateString = `${year}-${month}-${day}`

		dispatch(fetchMatches(dateString))
	}, [date]);

	const sortMatches = () => {
		if (!matches) return {}
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

		const keysArray = Object.keys(result);

		keysArray.sort();

		const sortedResult = {};
		for (const key of keysArray) {
			sortedResult[key] = result[key];
		}

		return sortedResult;
	}

	
	

	const sortedMatches = sortMatches();
	const listOfNations = ['All', ...Object.keys(sortedMatches)];
	const [selectedNation, setSelectedNation] = useState(listOfNations[0]);
	
	
	const handleTabSelect = (e) => {
		const selectedValue = e.target.value;
		setSelectedNation(selectedValue);	
	}
	
	
	useEffect(() => {
	}, [selectedNation])
	

	if (!matches) {
		return (<LoadingMessage />)
	}

	if (matches.length === 0) {
		return <NoDataMessage/>
	}

	return (
		<>
			<TimelineNavBar selectedNation={selectedNation} nations={listOfNations} onTabSelect={handleTabSelect} date={date} setDate={setDate}/>
			<TimelineMatchDisplay matches={sortedMatches} competitions={competitions} selectedNation={selectedNation}/>
		</>
	)
}

export default MatchesTimeline;