import React, { useEffect, useState } from 'react';
import ClubInfoBar from './club-info-bar';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchClub, fetchClubSeasons, fetchClubStats, removeClub } from '../../actions/api_actions';
import response from './response';
import LoadingMessage from '../util/loading/loading-screen';
import ClubProfileNavBar from './club-profile-nav-bar';
import { Box, Paper, Typography } from '@mui/material';

const ClubProfile = () => {
	const { clubId } = useParams();
	const dispatch = useDispatch();

	const [season, setSeason] = useState('2023/24');
	const [showSeason, setShowSeason] = useState(false);
	const isLoading = useSelector(state => state.club.isLoading);
	const [selectedTab, setSelectedTab] = useState(0);

	const club = useSelector(state => state.club.club);
	const fixtures = useSelector(state => state.club.fixtures);
	const squad = useSelector(state => state.club.squad);
	const stats = useSelector(state => state.club.stats);
	const seasons = useSelector(state => state.club.seasons);

	useEffect(() => {
		let formattedSeason = season.split('/')[0]

		if (!isLoading) {
			// dispatch(fetchClub(clubId, formattedSeason));
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

	const clubInfo = club[0];

	let name = clubInfo.team.name || 'N/A';
	let logo = clubInfo.team.logo || 'N/A';
	let city = clubInfo.venue.city || 'N/A';
	let country = clubInfo.team.country || 'N/A';


	let clubDetails = {
		'Founded': clubInfo.team.founded || 'N/A',
		'Location': `${city}, ${country}`,
		'Stadium': clubInfo.venue.name || 'N/A',
		'Capacity': clubInfo.venue.capacity || 'N/A',
		'Address': clubInfo.venue.address || 'N/A',
		'Surface': clubInfo.venue.surface || 'N/A'
	}

	return (
		<div className='club-profile-container'>
			<Paper
				className='home-paper'
			>
				<Box
					sx={{display: 'flex', flexDirection: 'column', width: '100%'}}
				>
					<ClubProfileNavBar club={club} handleSeasonChange={handleSeasonChange} seasons={seasons} season={season} availableSeasons={seasons} selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>
					<ClubInfoBar fixtures={fixtures} squad={squad} stats={stats} selectedTab={selectedTab} />
				</Box>
			</Paper>
		</div>
	)
}

export default ClubProfile;