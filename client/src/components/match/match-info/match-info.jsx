import './match-info.scss';
import React, { useState, useEffect } from 'react'
import Lineups from './lineups';
import MatchStats from './match-stats';
import EventsTimeline from './events-timeline';
import { Tabs, Tab, Paper, Divider, Typography, Box } from '@mui/material';

const MatchInfo = ({match}) => {
	const [selectedTab, setSelectedTab] = useState(0);
	const [component, setComponent] = useState(<EventsTimeline match={match}/>);

	const homeTeam = match?.teams?.home?.name;
	const awayTeam = match?.teams?.away?.name;
	const homeLogo = match?.teams?.home?.logo;
	const awayLogo = match?.teams?.away?.logo;

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
		<Paper elevation={1} sx={{ p: 1 }} >
			<Tabs value={selectedTab} onChange={handleChange} className='match-nav-bar' sx={{marginBottom: 0}} variant='fullWidth'>
				<Tab label='Events'/>
				<Tab label='Lineups'/>
				<Tab label='Stats'/>
			</Tabs>
			<Divider/>
			<Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', p: 1 }}>
				<Typography variant='body1' sx={{ display: 'flex', alignItems: 'center' }} >
					<img src={homeLogo} style={{ width: '2rem', height: '2rem', marginRight: '.25rem' }} />
					{homeTeam}
				</Typography>
				<Typography variant='body1' sx={{ display: 'flex', alignItems: 'center' }} >
					{awayTeam}
					<img src={awayLogo} style={{ width: '2rem', height: '2rem', marginLeft: '.25rem' }} />
				</Typography>
			</Box>
			<Divider/>
			{component}
		</Paper>
	)
}

export default MatchInfo;