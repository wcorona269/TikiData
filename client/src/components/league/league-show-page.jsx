import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LeagueHomeDashboard from './home/league-home-dashboard';
import LeagueTableDashboard from './league-table-dashboard'
import LeagueFixturesDashboard from './league-fixtures-dashboard'
import LeagueStatsDashboard from './league-stats-dashboard';
import { fetchCompetition, removeCompetition } from '../../actions/api_actions';
import response from './response';
import { Tabs, Tab, Grid, Paper, Typography, Box, Divider, useTheme } from '@mui/material';
import LoadingMessage from '../util/loading/loading-screen';
import NoDataMessage from '../util/no-data/no-data-message';
import LeagueShowPageHeader from './league-show-page-header'
import ScrollToTopOnLoad from '../util/scroll-to-top-on-load';
import Title from '../util/section-heading';

const LeagueShowPage = () => {
	const theme = useTheme();
	const dispatch = useDispatch();
	const { id } = useParams();

	const competition = useSelector(state => state.competition);
	const isLoading = useSelector(state => state.competition.isLoading);

	const [season, setSeason] = useState('2023/24');
	const [selectedTab, setSelectedTab] = useState(0);

	const table = competition['standings'];
	const top_scorers = competition['top_scorers'];
	const top_assists = competition['top_assists']; 
	const fixtures = competition['fixtures'];
	const news = competition['news'];

	fixtures?.sort((a, b) => new Date(a.fixture.date) - new Date(b.fixture.date))
	const uniqueDates = [...new Set(fixtures?.map(fixture => fixture.fixture.date.split('T')[0]))];

	useEffect(() => {
		let selectedSeason = season.split('/')[0];
		dispatch(fetchCompetition(id, selectedSeason))
	}, [id]);

	useEffect(() => {
window.scrollTo(0, 0)
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

	const leagueInfo = table[0]?.league;
	const country = leagueInfo?.country;
	const flag = leagueInfo?.flag;
	const logo = leagueInfo?.logo;
	const name = leagueInfo?.name;

	return (
		<Grid item xs={9}>
			<Box>
				<Paper elevation={1} sx={{marginBottom: '1rem'}}>
					<Title variant='h5' content={name} img={logo} back={true} button={true} />
						<Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
							<Tabs value={selectedTab}>
								<Tab label='Home' onClick={() => handleChange(0)} />
								<Tab label='Fixtures' onClick={() => handleChange(1)} />
								<Tab label='Table' onClick={() => handleChange(2)} />
								<Tab label='Stats' onClick={() => handleChange(3)} />
							</Tabs>
							<Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginRight: '1rem' }} >
								<img style={{ height: '2rem', width: '2rem', marginRight: '.5rem' }} src={logo} alt='' />
								<Typography variant='subtitle1'>{name}</Typography>
								<Divider orientation="vertical" sx={{py: 3, mx: 2}}/>
								<Typography variant='subtitle1' sx={{color: theme.palette.text.disabled }} >{country}</Typography>
								<img src={flag} style={{ height: '2rem', width: '2rem', marginLeft: '.5rem' }} />
							</Box>
						</Box>
						<Divider/>
				</Paper>
				{selectedTab === 0 && <LeagueHomeDashboard name={name} logo={logo} news={news} fixtures={fixtures} uniqueDates={uniqueDates} table={table} top_scorers={top_scorers} />}
				{selectedTab === 1 && <LeagueFixturesDashboard name={name} logo={logo} fixtures={fixtures} uniqueDates={uniqueDates} />}
				{selectedTab === 2 && <LeagueTableDashboard name={name} logo={logo} table={table}  />}
				{selectedTab === 3 && <LeagueStatsDashboard name={name} logo={logo} top_scorers={top_scorers} top_assists={top_assists} />}
			</Box>
		<ScrollToTopOnLoad/>
		</Grid>
	)
}

export default LeagueShowPage;

