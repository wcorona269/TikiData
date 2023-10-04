import React, { useEffect, useState, useRef } from 'react';
import './league-profile.scss';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
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

	const [season, setSeason] = useState('2023/24');
	const [showSeason, setShowSeason] = useState(false);
	const [selectedTab, setSelectedTab] = useState(0);


	useEffect(() => {
		let selectedSeason = season.split('/')[0];
		dispatch(fetchCompetition(leagueId, selectedSeason))
	}, [season]);


	useEffect(() => {
	}, [isLoading]);

	useEffect(() => {
		const observerOptions = {
			root: null, // use the viewport as the root
			rootMargin: '0px', // no margin
			threshold: 0.5, // when 50% of the element is visible
		};

		const handleIntersection = (entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					// update the selected tab based on the observed element
					if (entry.target === tableRef.current) {
						setSelectedTab(0);
					} else if (entry.target === statsRef.current) {
						setSelectedTab(1);
					} else if (entry.target === fixturesRef.current) {
						setSelectedTab(2);
					}
				}
			});
		};

		const observer = new IntersectionObserver(handleIntersection, observerOptions);

		// observe the elements
		if (tableRef.current) {
			observer.observe(tableRef.current);
		}
		if (statsRef.current) {
			observer.observe(statsRef.current);
		}
		if (fixturesRef.current) {
			observer.observe(fixturesRef.current);
		}

		// cleanup observer on component unmount
		return () => {
			if (tableRef.current) {
				observer.unobserve(tableRef.current);
			}
			if (statsRef.current) {
				observer.unobserve(statsRef.current);
			}
			if (fixturesRef.current) {
				observer.unobserve(fixturesRef.current);
			}
		};
	}, []); // empty dependency array ensures the effect runs once after the initial render

	const handleChange = (newValue) => {
		setSelectedTab(newValue);
		if (newValue === 0 && tableRef.current) {
			const rect = tableRef.current.getBoundingClientRect();
			window.scrollTo({
				top: window.pageYOffset + rect.top - 50,
				behavior: 'smooth'
			});
		} else if (newValue === 1 && statsRef.current) {
			const rect = statsRef.current.getBoundingClientRect();
			window.scrollTo({
				top: window.pageYOffset + rect.top - 50,
				behavior: 'smooth'
			});
		} else if (newValue === 2 && fixturesRef.current) {
			const rect = fixturesRef.current.getBoundingClientRect();
			window.scrollTo({
				top: window.pageYOffset + rect.top - 50,
				behavior: 'smooth'
			});
		}
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
					<Tabs value={selectedTab} onChange={handleChange}>
						<Tab label='Table' onClick={() => handleChange(0)} />
						<Tab label='Stats' onClick={() => handleChange(1)} />
						<Tab label='Fixtures' onClick={() => handleChange(2)} />
					</Tabs>
				</div>
				<div ref={tableRef}>
					<LeagueTableDashboard table={table}  />
				</div>
				<div ref={statsRef} >
					<LeagueStatsDashboard top_scorers={top_scorers} top_assists={top_assists} />
				</div>
				<div ref={fixturesRef}>
					<LeagueFixturesDashboard fixtures={fixtures} />
				</div>
			</div>
		</div>
		<ScrollToTopOnLoad/>
		</>
	)
}

export default LeagueProfile;

