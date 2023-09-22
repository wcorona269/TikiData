import React, { useEffect, useState } from 'react';
import ClubInfoBar from './clubInfoBar';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchClub, fetchClubSeasons, fetchClubStats, removeClub } from '../../actions/api_actions';
import response from './response';
import LoadingMessage from '../util/loading-screen';
import ClubProfileHeader from './club-profile-header';

const ClubProfile = () => {
	const { clubId } = useParams();
	const dispatch = useDispatch();

	const [season, setSeason] = useState('2023/24');
	const [showSeason, setShowSeason] = useState(false);
	const isLoading = useSelector(state => state.club.isLoading);

	const club = useSelector(state => state.club.club);
	const fixtures = useSelector(state => state.club.fixtures);
	const squad = useSelector(state => state.club.squad);
	const stats = useSelector(state => state.club.stats);
	const seasons = useSelector(state => state.club.seasons)

	useEffect(() => {
		let formattedSeason = season.split('/')[0]

		if (!isLoading) {
			dispatch(fetchClub(clubId, formattedSeason));
		}
	}, [season]);

	// useEffect(() => {
	// 	return () => {
	// 		dispatch(removeClub());
	// 	}
	// }, []);

	if (isLoading || !club) {
		return <LoadingMessage/>	
	}

	const handleSeasonChange = (e) => {
		let year = e.target.getAttribute('value')
		setShowSeason(false);
		setSeason(year);
	}

	
	const listCompetitions = (fixtures) => {
		let competitions = {}
	
		for (let fixture of fixtures) {
			if (!(fixture.league.name in competitions)) {
				competitions[fixture.league.name] = fixture.league.id;
			}
		}
	
		return competitions;
	}

	return (
		<div className='club-profile-container'>
			<ClubProfileHeader club={club} handleSeasonChange={handleSeasonChange} seasons={seasons} season={season} showSeason={showSeason} setShowSeason={setShowSeason} availableSeasons={seasons}/>
			<ClubInfoBar fixtures={fixtures} squad={squad} stats={stats}/>
		</div>
	)
}

export default ClubProfile;