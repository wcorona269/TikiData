import React, { useEffect, useState } from 'react';
import ClubInfoBar from './clubInfoBar';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchClub, fetchClubSeasons, fetchClubStats } from '../../actions/api_actions';
import response from './response';
import LoadingMessage from '../util/loading-screen';
import ClubProfileHeader from './club-profile-header';

const ClubProfile = () => {
	const { clubId } = useParams();
	const dispatch = useDispatch();

	const [season, setSeason] = useState('2023/24');
	const [showSeason, setShowSeason] = useState(false);

	let club = useSelector(state => state.club.club);
	let fixtures = useSelector(state => state.club.fixtures);
	let squad = useSelector(state => state.club.squad);
	console.log({club}, {fixtures}, {squad})

	useEffect(() => {
		let formattedSeason = season.split('/')[0]
		// dispatch(fetchClubSeasons(clubId));
		dispatch(fetchClub(clubId, formattedSeason));
		// dispatch(fetchClubStats(clubId, 2022, [39]))
	}, [clubId, season]);

	if (!club) {
		return <LoadingMessage/>	
	}

	const handleSeasonChange = (e) => {
		let year = e.target.getAttribute('value')
		setShowSeason(false);
		setSeason(year);
	}

	return (
		<div className='club-profile-container'>
			<ClubProfileHeader club={club} handleSeasonChange={handleSeasonChange} season={season} showSeason={showSeason} setShowSeason={setShowSeason}/>
			<ClubInfoBar fixtures={fixtures} squad={squad}/>
		</div>
	)
}

export default ClubProfile;