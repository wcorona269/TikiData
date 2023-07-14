import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchPlayer } from '../../actions/api_actions';
import response from './response';

const PlayerProfile = () => {
	const { playerId }= useParams();
	const dispatch = useDispatch();
	const player = response[0];
	console.log(response);
	// const player = useSelector(state => state.player.player);

	useEffect(() => {
		// dispatch(fetchPlayer(playerId))
	}, [])

	return (
		<div className='player-profile-container'>
			<div className='player-overview'>
				<div className='player-profile-icon'>
					<p>
						{player.player.name}
					</p>
					<img src={player.player.photo}/>
				</div>
				<div className='player-info'>
					Player info
				</div>
			</div>
			<div className='player-stats-dashboard'>

			</div>
		</div>
	)
}


export default PlayerProfile