import './match-info.scss';
import React, { useState, useEffect } from 'react'
import Lineups from './lineups';
import MatchStats from './match-stats';
import EventsTimeline from './events-timeline';
import { Tabs, Tab } from '@mui/material';

const MatchInfo = ({match}) => {
	const [selectedTab, setSelectedTab] = useState(0);
	const [component, setComponent] = useState(<EventsTimeline match={match}/>)

	const handleChange = (event, newValue) => {
		setSelectedTab(newValue)
	}

	useEffect(() => {
		if (selectedTab === 0) {
			setComponent(<EventsTimeline match={match} />)
		} else if (selectedTab === 1) {
			setComponent(<Lineups lineups={match.lineups}/>)
		} else {
			setComponent(<MatchStats match={match}/>)
		}
	}, [selectedTab])

	return (
		<div>
			{/* <MatchNavBar changeSelection={changeTab} selectedTab={selectedTab}/> */}
			<div className='match-overview-component'>
			<Tabs value={selectedTab} onChange={handleChange} className='match-nav-bar'>
				<Tab label='Events'/>
				<Tab label='Lineups'/>
				<Tab label='Stats'/>
			</Tabs>
			{component}
			</div>
		</div>
	)
}

export default MatchInfo;