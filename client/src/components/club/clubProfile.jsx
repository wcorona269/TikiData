import React, { useEffect, useState } from 'react';
import ClubInfoBar from './clubInfoBar';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchClub } from '../../actions/api_actions';
import response from './response';
import LoadingMessage from '../util/loading-screen';

const ClubProfile = () => {
	console.log(response.club[0])
	const { clubId } = useParams();
	const dispatch = useDispatch();
	// const club = useSelector(state => state.club)
	const club = response.club[0];

	useEffect(() => {
		// dispatch(fetchClub(clubId));
	}, [])

	// if (!club) {
	// 	return <LoadingMessage/>	
	// }

	const name = club.team.name
	
	return (
		<div className='club-profile-container'>
			<header>
				<div>
					<p>Club Image</p>
					<h2>
						{name}
					</h2>
				</div>
				<div className='club-details'>
				</div>
			</header>
			<ClubInfoBar clubInfo={response}/>
		</div>
	)
}

export default ClubProfile;