import React from 'react'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ClubSquadDashboard from './clubSquadDashboard';
import ClubStatsDashboard from './clubStatsDashboard';
import ClubNews from './clubNews';
import ClubFixturesDashboard from './clubFixturesDashboard';

const ClubInfoBar = ({clubInfo}) => {
	const [showSquad, setShowSquad] = useState(false);
	const [showNews, setShowNews] = useState(false);
	const [showFixtures, setShowFixtures] = useState(true);
	const [showStats, setShowStats] = useState(true);

	const fixtures = clubInfo['fixtures'];
	const club = clubInfo['club'][0];
	const squad = clubInfo['squad'][0]['players'];

	const handleChange = (e) => {
		if (e.target.name === 'fixtures') {
			setShowNews(false);
			setShowStats(false)
			setShowSquad(false);
			setShowFixtures(true)
		} else if (e.target.name === 'news') {
			setShowStats(false)
			setShowFixtures(false);
			setShowSquad(false);
			setShowNews(true);
		} else if (e.target.name === 'squad') {
			setShowStats(false)
			setShowFixtures(false);
			setShowNews(false);
			setShowSquad(true)
		} else if (e.target.name === 'stats') {
			setShowFixtures(false);
			setShowNews(false);
			setShowSquad(false);
			setShowStats(true)
		}
	}

	const setClassName = (name) => {
		if (
			(name === 'fixtures' && showFixtures === true) ||
			(name === 'news' && showNews === true) ||
			(name === 'squad' && showSquad === true) ||
			(name === 'stats' && showStats === true)
		) {
			return 'selected-tab'
		}

		return '';
	}

	const displayNavBar = () => {
		const tabs = ['fixtures', 'news', 'squad', 'stats'];
		let result = []

		for (let tab of tabs) {
			result.push(
				<button className={setClassName(tab)} name={tab} onClick={handleChange}>{tab}</button>
			)
		}

		return result
	}

	return (
		<div>
			<div className='club-profile-nav-bar'>
				{displayNavBar()}
			</div>
			<div className='club-profile-main'>
				{ showFixtures && <ClubFixturesDashboard fixtures={fixtures}/> }
				{ showSquad && <ClubSquadDashboard squad={squad}/> }
				{ showStats && <ClubStatsDashboard/> }
				{ showNews &&  <ClubNews/> }
			</div>
		</div>
	)
}

export default ClubInfoBar;