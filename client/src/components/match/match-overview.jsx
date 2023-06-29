import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchMatch } from '../../actions/api_actions';
import response from './response';
import ScoreDisplay from './score-display';
import MatchInfo from './match-info/match-info';

const MatchOverview = () => {
	const dispatch = useDispatch();
	// const match = useSelector(state => state.match.match);
	const match = response[0];
	console.log(match)
	const { matchId } = useParams();

	useEffect(() => {
		// dispatch(fetchMatch(matchId))
	}, [])

	return (
		<div className='match-overview'>
			<ScoreDisplay match={match}/>
			<MatchInfo match={match}/>
		</div>
	)
}

export default MatchOverview;