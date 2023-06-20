import React from 'react'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ClubScheduleDashboard from './clubScheduleDashboard';
import ClubSquadDashboard from './clubSquadDashboard';
import ClubStatsDashboard from './clubStatsDashboard';
import ClubNews from './clubNews';

const ClubInfoBar = () => {
	const [showSquad, setShowSquad] = useState(false);
	const [showNews, setShowNews] = useState(false);
	const [showFixtures, setShowFixtures] = useState(true);
	const [showStats, setShowStats] = useState(true);

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

	return (
		<div>
			<div className='club-profile-nav-bar'>
				<button name='fixtures' onClick={handleChange}>Fixtures</button>
				<button name='news' onClick={handleChange}>news</button>
				<button name='squad' onClick={handleChange}>squad</button>
				<button name='stats' onClick={handleChange}>stats</button>
			</div>
			{ showFixtures && <ClubScheduleDashboard/> }
			{ showSquad && <ClubSquadDashboard/> }
			{ showStats && <ClubStatsDashboard/> }
			{ showNews &&  <ClubNews/> }
		</div>
	)
}

export default ClubInfoBar;