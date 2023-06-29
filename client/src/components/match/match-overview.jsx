import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchMatch } from '../../actions/api_actions';
import response from './response';
import ScoreDisplay from './score-display';
import MatchInfo from './match-info/match-info';

const MatchOverview = () => {
	const dispatch = useDispatch();
	const match = response[0]
	const [isLoading, setIsLoading] = useState(false)
	const { matchId } = useParams();

	// useEffect(()=> {
	// 	dispatch(fetchMatch(matchId))
	// 		.then(() => setIsLoading(false))
	// 		.catch(error => {
	// 			console.log('Error fetching match', error);
	// 			setIsLoading(false)
	// 		})
	// }, [])

	
	if (isLoading) {
		return (
			<div>
				Loading...
			</div>
		)
	}

	if (match === undefined) {
		return <div>Error fetching match</div>
	}

	
	return (
		<div className='match-overview'>
			<ScoreDisplay match={match}/>
			<MatchInfo match={match}/>
			Hello
		</div>
	)
}

export default MatchOverview;