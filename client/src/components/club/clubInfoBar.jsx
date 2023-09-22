import React from 'react'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ClubSquadDashboard from './clubSquadDashboard';
import ClubStatsDashboard from './clubStatsDashboard';
import ClubFixturesDashboard from './clubFixturesDashboard';

const ClubInfoBar = ({ fixtures, squad, stats }) => {
	const [showFixtures, setShowFixtures] = useState(true);
	const [showSquad, setShowSquad] = useState(false);
	const [showStats, setShowStats] = useState(false);

	squad = squad[0]['players'];

	const handleChange = (e) => {
		if (e.target.name === 'fixtures') {
			setShowStats(false)
			setShowSquad(false);
			setShowFixtures(true)
		} else if (e.target.name === 'news') {
			setShowStats(false)
			setShowFixtures(false);
			setShowSquad(false);
		} else if (e.target.name === 'squad') {
			setShowStats(false)
			setShowFixtures(false);
			setShowSquad(true)
		} else if (e.target.name === 'stats') {
			setShowFixtures(false);
			setShowSquad(false);
			setShowStats(true)
		}
	}

	const setClassName = (name) => {
		if (
			(name === 'fixtures' && showFixtures === true) ||
			(name === 'squad' && showSquad === true) ||
			(name === 'stats' && showStats === true)
		) {
			return 'selected-tab'
		}

		return '';
	}

	const displayNavBar = () => {
		const tabs = ['fixtures', 'squad', 'stats'];
		let result = []

		for (let tab of tabs) {
			result.push(
				<button key={tab} className={setClassName(tab)} name={tab} onClick={handleChange}>{tab}</button>
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
				{showFixtures && <ClubFixturesDashboard fixtures={fixtures} />}
				{showSquad && <ClubSquadDashboard squad={squad} />}
				{showStats && <ClubStatsDashboard stats={stats}/>}
			</div>
		</div>
	)
}

export default ClubInfoBar;