import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LeagueTableDashboard from './leagueTableDashboard'
import LeagueFixturesDashboard from './leagueFixturesDashboard'
import LeagueStatsDashboard from './leagueStatsDashboard';
import { fetchCompetition, removeCompetition } from '../../actions/api_actions';
import response from './response';
import LoadingMessage from '../util/loading-screen';
import NoDataMessage from '../util/no-data-message';
import LeagueProfileHeader from './league-profile-header'

const LeagueProfile = () => {
	const dispatch = useDispatch();
	const { leagueId } = useParams();
	const competition = useSelector(state => state.competition);
	// const competition = response;
	const isLoading = useSelector(state => state.competition.isLoading);

	const [showTable, setShowTable] = useState(true);
	const [showStats, setShowStats] = useState(false);
	const [showFixtures, setShowFixtures] = useState(false);

	const table = competition['standings'];
	const top_scorers = competition['top_scorers'];
	const top_assists = competition['top_assists']; 
	const fixtures = competition['fixtures'];

	useEffect(() => {
		dispatch(fetchCompetition(leagueId))
		.catch(error => {
			console.log('Error fetching match', error);
		})

		return () => {
			dispatch(removeCompetition())
		}
	}, []);

	useEffect(() => {

	}, [isLoading])


	const handleChange = (e) => {
		if (e.target.name === 'table') {
			setShowStats(false);
			setShowFixtures(false)
			setShowTable(true);
		} else if (e.target.name === 'stats') {
			setShowTable(false);
			setShowFixtures(false);
			setShowStats(true);
		} else if (e.target.name === 'fixtures') {
			setShowStats(false);
			setShowTable(false);
			setShowFixtures(true);
		}
	}
	
	if (isLoading) {
		return <LoadingMessage/>
	}
	
	if (!competition || !table || !top_scorers || !top_assists) {
		return <NoDataMessage/>
	}

	const changeTab = (e) => {
		const isSelected = 'selected-dashboard'
		if (e === 'table' && showTable === true) {
			return isSelected
		}

		if (e === 'stats' && showStats === true) {
			return isSelected
		}

		if (e === 'fixtures' && showFixtures === true) {
			return isSelected
		}

		return ''
	}

	return (
		<div>
			<LeagueProfileHeader league={table}/>
			<div className='league-profile-nav-bar'>
				<button className={changeTab('table')} name='table' onClick={handleChange}>Table</button>
				<button className={changeTab('stats')} name='stats' onClick={handleChange}>Stats</button>
				<button className={changeTab('fixtures')} name='fixtures' onClick={handleChange}>Fixtures</button>
			</div>
			<div className='league-profile-dashboard-container'>
				{ showTable && <LeagueTableDashboard table={table}/>}
				{ showStats && <LeagueStatsDashboard top_scorers={top_scorers} top_assists={top_assists}/>}
				{ showFixtures && <LeagueFixturesDashboard fixtures={fixtures}/>}
			</div>
		</div>
	)
}

export default LeagueProfile;

