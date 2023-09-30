import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LeagueTableDashboard from './league-table-dashboard'
import LeagueFixturesDashboard from './league-fixtures-dashboard'
import LeagueStatsDashboard from './league-stats-dashboard';
import { fetchCompetition, removeCompetition } from '../../actions/api_actions';
import response from './response';
import LoadingMessage from '../util/loading/loading-screen';
import NoDataMessage from '../util/no-data/no-data-message';
import LeagueProfileHeader from './league-profile-header'



const LeagueProfile = () => {
	const dispatch = useDispatch();
	const { leagueId } = useParams();
	const competition = useSelector(state => state.competition);
	const isLoading = useSelector(state => state.competition.isLoading);


	const table = competition['standings'];
	const top_scorers = competition['top_scorers'];
	const top_assists = competition['top_assists']; 
	const fixtures = competition['fixtures'];


	const [season, setSeason] = useState('2023/24');
	const [showSeason, setShowSeason] = useState(false);
	const [selectedTab, setSelectedTab] = useState(0)
	const [component, setComponent] = useState(<LeagueTableDashboard table={table}/>);


	useEffect(() => {
		let selectedSeason = season.split('/')[0];
		dispatch(fetchCompetition(leagueId, selectedSeason))
	}, [season]);


	useEffect(() => {
	}, [isLoading])


	useEffect(() => {
		if (selectedTab  === 0) {
			setComponent(<LeagueTableDashboard table={table}/>)
		} else if (selectedTab === 1) {
			setComponent(<LeagueStatsDashboard top_scorers={top_scorers} top_assists={top_assists}/>)
		} else {
			setComponent(<LeagueFixturesDashboard fixtures={fixtures} />)
		}
		console.log(component);
	}, [selectedTab])


	const handleChange = (event, newValue) => {
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
		<div>
			<LeagueProfileHeader
			 league={table} 
			 handleSeasonChange={handleSeasonChange} 
			 season={season} 
			 showSeason={showSeason} 
			 setShowSeason={setShowSeason}
			 selectedTab={selectedTab}
			 handleChange={handleChange}
			/>
			<div className='league-profile-dashboard-container'>
				
				{component}
			</div>
		</div>
	)
}

export default LeagueProfile;

