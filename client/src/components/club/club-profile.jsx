import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchClub, fetchClubSeasons, fetchClubStats, removeClub } from '../../actions/api_actions';
import response from './response';
import LoadingMessage from '../util/loading/loading-screen';
import ClubProfileNavBar from './club-profile-nav-bar';
import ClubFixturesDashboard from './club-fixtures-dashboard';
import ClubSquadDashboard from './club-squad-dashboard';
import ClubStatsDashboard from './club-stats-dashboard';
import ClubHomeDashboard from './home/club-home-dashboard';
import { Box, Grid, Paper, Typography, useTheme } from '@mui/material';

const ClubProfile = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const theme = useTheme();

	const [season, setSeason] = useState('2023/24');
	const [showSeason, setShowSeason] = useState(false);
	const isLoading = useSelector(state => state.club.isLoading);
	const [selectedTab, setSelectedTab] = useState(0);

	const club = useSelector(state => state.club.club);
	const fixtures = useSelector(state => state.club.fixtures);
	const squad = useSelector(state => state.club.squad);
	const stats = useSelector(state => state.club.stats);
	const seasons = useSelector(state => state.club.seasons);
	const news = useSelector(state => state.club.news);

	useEffect(() => {
		let formattedSeason = season.split('/')[0]
		dispatch(fetchClub(id, formattedSeason))
	}, [season]);

	if (isLoading || !club) {
		return <LoadingMessage/>	
	}

	const handleSeasonChange = (e) => {
		let year = e.target.getAttribute('value')
		setShowSeason(false);
		setSeason(year);
	}

	const clubInfo = club[0];
	const name = clubInfo?.team?.name
	const logo = clubInfo?.team?.logo

	return (
		<Grid item xs={9}>
			<Paper>
				<Typography variant='h5' className='section-heading' sx={{ borderBottom: `2px solid ${theme.palette.divider}`, fontFamily: theme.typography.bold }} >
					<img src={logo} style={{ height: '2rem', width: '2rem'}} />
					{name}
				</Typography>
				<ClubProfileNavBar club={club} handleSeasonChange={handleSeasonChange} seasons={seasons} season={season} availableSeasons={seasons} selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>
				{ selectedTab === 0 && <ClubHomeDashboard name={name} logo={logo} club={club} fixtures={fixtures} squad={squad} news={news} /> }
				{ selectedTab === 1 && <ClubFixturesDashboard fixtures={fixtures} name={name} logo={logo} /> }
				{ selectedTab === 2 && <ClubStatsDashboard stats={stats} name={name} logo={logo} /> }
				{ selectedTab === 3 && <ClubSquadDashboard name={name} logo={logo} squad={squad[0].players}  /> }
			</Paper>
		</Grid>
	)
}

export default ClubProfile;