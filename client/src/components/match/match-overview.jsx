import './match-overview.scss';
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchMatch } from '../../actions/api_actions';
import MatchOverviewHeader from './match-overview-header';
import MatchInfo from './match-info/match-info';
import LoadingMessage from '../util/loading/loading-screen';
import SectionHeading from '../util/section-heading';
import NoDataMessage from '../util/no-data/no-data-message';
import ScrollToTopOnLoad from '../util/scroll-to-top-on-load';
import { Grid, Paper, Stack } from '@mui/material';
import HomeFixturesColumn from '../home/home-fixtures-column';
import MatchInfoTable from './match-info/match-info-table';

const MatchOverview = () => {
	const dispatch = useDispatch();
	const isLoading = useSelector(state => state.match.isLoading);
	const { id } = useParams();
	const match = useSelector(state => state.match.match);

	useEffect(()=> {
		// dispatch(fetchMatch(id))
			// .catch(error => {
			// 	console.log('Error fetching match', error);
			// })
	}, [])

	useEffect(() => {

	}, [isLoading])

	
	if (isLoading) {
		return <LoadingMessage/>
	}

	if (!match) {
		return <NoDataMessage/>
	}
	
	return (
		<>
			<Grid item xs={6}>
				<Paper>
					<SectionHeading variant='h5' content='Match Summary' />
					<Stack spacing={2}>
						<MatchOverviewHeader match={match[0]}/>
						{/* <MatchInfo match={match[0]}/> */}
					</Stack>
				</Paper>
			</Grid>
			<Grid item xs={3} sx={{ position: 'sticky', top: '1rem' }}>
				<MatchInfoTable match={match[0]} />
			</Grid>
		</>
	)
}

export default MatchOverview;