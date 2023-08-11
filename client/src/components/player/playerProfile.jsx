import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchPlayer } from '../../actions/api_actions';
import PlayerOverview from './player-overview';
import response from './response';
import shorthandMonthsOfYear from '../league/shorthandMonths';
import PlayerStats from './player-stats';

const PlayerProfile = () => {
	// const player = useSelector(state => state.player.player);
	const { playerId }= useParams();
	const dispatch = useDispatch();
	
	const player = response[0];
	const statistics = player.statistics;
	

	useEffect(() => {
		// dispatch(fetchPlayer(playerId))
	}, [])

	return (
		<div className='player-profile-container'>
			<PlayerOverview player={player}/>
			<PlayerStats statistics={statistics}/>
		</div>
	)
}

export default PlayerProfile;