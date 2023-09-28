import './match-overview.scss';
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchMatch } from '../../actions/api_actions';
import ScoreDisplay from './score-display';
import MatchInfo from './match-info/match-info';
import LoadingMessage from '../util/loading/loading-screen';
import NoDataMessage from '../util/no-data/no-data-message';
import ScrollToTopOnLoad from '../util/scroll-to-top-on-load';
import { 
	AppBar,
	Tab,
	Tabs,
 } from '@mui/material';

const MatchOverview = () => {
	const dispatch = useDispatch();
	// const match = response[0]
	const isLoading = useSelector(state => state.match.isLoading);
	const { matchId } = useParams();
	const match = useSelector(state => state.match.match);

	useEffect(()=> {
		dispatch(fetchMatch(matchId))
			.catch(error => {
				console.log('Error fetching match', error);
			})
	}, [])

	useEffect(() => {

	}, [isLoading])

	
	if (isLoading) {
		return <LoadingMessage/>
	}

	if (!match) {
		return <NoDataMessage/>
	}
	
	return (
		<div className='match-overview'>
			<ScoreDisplay match={match[0]}/>
			<MatchInfo match={match[0]}/>
			<ScrollToTopOnLoad/>
		</div>
	)
}

export default MatchOverview;