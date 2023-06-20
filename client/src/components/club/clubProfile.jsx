import React, { useEffect, useState } from 'react';
import ClubInfoBar from './clubInfoBar';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchClub } from '../../actions/api_actions';
import response from './response';

const ClubProfile = () => {
	const { clubId } = useParams();
	const dispatch = useDispatch();

	useEffect(() => {
		// dispatch(fetchClub(clubId));
	}, [])
	
	return (
		<div className='club-profile-container'>
			<header>
			<h2>
				Club Name
			</h2>
			<p>Club Image</p>
			</header>
			<ClubInfoBar clubInfo={response}/>
		</div>
	)
}

export default ClubProfile;