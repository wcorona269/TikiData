import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LeagueTableDashboard from './leagueTableDashboard'
import LeagueFixturesDashboard from './leagueFixturesDashboard'
import LeagueStatsDashboard from './leagueStatsDashboard';
import { fetchCompetition } from '../../actions/api_actions';
import response from './response';

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
		return <div>Loading...</div>
	}

	return (
		<div>
			<div className='league-profile-nav-bar'>
				<button name='table' onClick={handleChange}>Table</button>
				<button name='stats' onClick={handleChange}>Stats</button>
				<button name='fixtures' onClick={handleChange}>Fixtures</button>
			</div>
			{ showTable && <LeagueTableDashboard table={table}/>}
			{ showStats && <LeagueStatsDashboard top_scorers={top_scorers} top_assists={top_assists}/>}
			{ showFixtures && <LeagueFixturesDashboard/>}
		</div>
	)
}

export default LeagueProfile;

