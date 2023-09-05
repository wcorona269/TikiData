import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LeagueTableDashboard from './leagueTableDashboard'
import LeagueFixturesDashboard from './leagueFixturesDashboard'
import LeagueStatsDashboard from './leagueStatsDashboard';
import { fetchCompetition } from '../../actions/api_actions';
import response from './response';
import LoadingMessage from '../util/loading-screen';

const LeagueProfile = () => {
	const dispatch = useDispatch();
	const { leagueId } = useParams();
	const competition = useSelector(state => state.competition);

	const [showTable, setShowTable] = useState(true);
	const [showStats, setShowStats] = useState(false);
	const [showFixtures, setShowFixtures] = useState(false);

	const table = response['standings'];
	const top_scorers = response['top_scorers'];
	const top_assists = response['top_assists']; 
	const fixtures = response['fixtures'];

	useEffect(() => {
		// dispatch(fetchCompetition(leagueId));
	}, []);

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

	if (competition === undefined) {
		return <LoadingMessage/>
	}

	const detectSelection = (e) => {
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
			<div className='league-profile-nav-bar'>
				<button className={detectSelection('table')} name='table' onClick={handleChange}>Table</button>
				<button className={detectSelection('stats')} name='stats' onClick={handleChange}>Stats</button>
				<button className={detectSelection('fixtures')} name='fixtures' onClick={handleChange}>Fixtures</button>
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

