import React, { useState, useEffect } from 'react'
import MatchNavBar from './match-nav-bar';
import Lineups from './lineups';
import MatchStats from './match-stats';
import EventsTimeline from './events-timeline';

const MatchInfo = ({match}) => {
	const [selectedTab, setSelectedTab] = useState('Events');
	let component;

	const changeTab = (tab) => {
		setSelectedTab(tab)
	}

	useEffect(() => {
		if (selectedTab === 'Events') {
			component = <EventsTimeline match={match} />
		} else if (selectedTab === 'Lineups') {
			component = <Lineups match={match}/>
		} else {
			component = <MatchStats match={match}/>
		}
	}, [selectedTab])

	return (
		<div>
			<MatchNavBar changeSelection={changeTab} selectedTab={selectedTab}/>
			{component}
		</div>
	)
}

export default MatchInfo;