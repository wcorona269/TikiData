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
	// const competition = useSelector(state => state.competition.competition);

	useEffect(() => {

	}, []);
	return (
		<div>
			<LeagueTableDashboard response={response}/>
			<LeagueStatsDashboard/>
			<LeagueFixturesDashboard/>
		</div>
	)
}

export default LeagueProfile;

