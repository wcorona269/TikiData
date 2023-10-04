import React, { useEffect, useState, useRef } from 'react';
import './league-profile.scss';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LeagueHomeDashboard from './home/league-home-dashboard';
import LeagueTableDashboard from './league-table-dashboard'
import LeagueFixturesDashboard from './league-fixtures-dashboard'
import LeagueStatsDashboard from './league-stats-dashboard';
import { fetchCompetition, removeCompetition } from '../../actions/api_actions';
import response from './response';
import { Tabs, Tab } from '@mui/material';
import LoadingMessage from '../util/loading/loading-screen';
import NoDataMessage from '../util/no-data/no-data-message';
import LeagueProfileHeader from './league-profile-header'
import ScrollToTopOnLoad from '../util/scroll-to-top-on-load';

const LeagueProfile = () => {
	const dispatch = useDispatch();
	const { leagueId } = useParams();
	const competition = useSelector(state => state.competition);
	// const competition = response;
	const isLoading = useSelector(state => state.competition.isLoading);

	const tableRef = useRef(null);
	const statsRef = useRef(null);
	const fixturesRef = useRef(null);

	const table = competition['standings'];
	const top_scorers = competition['top_scorers'];
	const top_assists = competition['top_assists']; 
	const fixtures = competition['fixtures'];
	const news = competition['news'];

	const [season, setSeason] = useState('2023/24');
	const [showSeason, setShowSeason] = useState(false);
	const [selectedTab, setSelectedTab] = useState(0);


	useEffect(() => {
		let selectedSeason = season.split('/')[0];
		dispatch(fetchCompetition(leagueId, selectedSeason))
	}, [season]);

	useEffect(() => {
	}, [isLoading]);

	const handleChange = (newValue) => {
		setSelectedTab(newValue);
	}
	if (isLoading) {
		return <LoadingMessage/>
	}
	if (!competition || !table || !top_scorers || !top_assists) {
		return <NoDataMessage/>
	}
	const handleSeasonChange = (event, newValue) => {
		setShowSeason(false);
		setSeason(newValue.props.value);
	}


	return (
		<>
		<div>
			<LeagueProfileHeader
			 league={table} 
			 handleSeasonChange={handleSeasonChange} 
			 season={season} 
			 showSeason={showSeason} 
			 setShowSeason={setShowSeason}
			 />
			<div className='league-profile-dashboard-container'>
				<div class='league-profile-nav-bar'>
					<Tabs value={selectedTab}>
						<Tab label='Home' onClick={() => handleChange(0)} />
						<Tab label='Table' onClick={() => handleChange(1)} />
						<Tab label='Stats' onClick={() => handleChange(2)} />
						<Tab label='Fixtures' onClick={() => handleChange(3)} />
					</Tabs>
				</div>

					{selectedTab === 0 && <LeagueHomeDashboard news={news} fixtures={fixtures} table={table} top_scorers={top_scorers} />}
				{ selectedTab === 1 && <LeagueTableDashboard table={table}  />}
				{selectedTab === 2 && <LeagueStatsDashboard top_scorers={top_scorers} top_assists={top_assists} />}
				{selectedTab === 3 && <LeagueFixturesDashboard fixtures={fixtures} />}
			</div>
		</div>
		<ScrollToTopOnLoad/>
		</>
	)
}

export default LeagueProfile;

