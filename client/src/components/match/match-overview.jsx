import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchMatch } from '../../actions/api_actions';
import response from './response';
import ScoreDisplay from './score-display';
import MatchInfo from './match-info/match-info';
import LoadingMessage from '../util/loading-screen';
import NoDataMessage from '../util/no-data-message';
import ScrollToTopOnLoad from '../util/scroll-to-top-on-load';

const MatchOverview = () => {
	const dispatch = useDispatch();
	// const match = response[0]
	const [isLoading, setIsLoading] = useState(false)
	const { matchId } = useParams();
	const match = useSelector(state => state.match.match);

	useEffect(()=> {
		setIsLoading(true)
		dispatch(fetchMatch(matchId))
			.then(() => setIsLoading(false))
			.catch(error => {
				console.log('Error fetching match', error);
				setIsLoading(false)
			})
	}, [])

	
	if (isLoading) {
		return (
			<LoadingMessage/>
		)
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