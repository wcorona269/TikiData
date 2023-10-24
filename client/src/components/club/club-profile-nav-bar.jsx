
import React from 'react'
import SeasonSelect from '../util/season-select/season-select';
import { Typography, Box, Tab, Tabs, Divider } from '@mui/material';
import Flag from 'react-world-flags';

const ClubProfileNavBar = ({club, season, showSeason, setShowSeason, handleSeasonChange, availableSeasons, selectedTab, setSelectedTab}) => {
	const clubInfo = club[0];
	let name = clubInfo.team.name || 'N/A';
	let logo = clubInfo.team.logo || 'N/A';
	let country = clubInfo.team.country || 'N/A';
	
	const tabs = ['Home', 'Fixtures', 'Stats', 'Squad'];

	return (
		<>
			<Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between !important', width: '100%'}}>
				<Tabs value={selectedTab }>
					{tabs.map((tab, idx) => (
						<Tab label={tab} onClick={() => setSelectedTab(idx)} />
					))}
				</Tabs>
				<div className='league-logo-bar'>
					<img src={logo} alt='' />
					<p>{name}</p>
					<p>
						|
					</p>
					<p>{country}</p>
					<Flag code={country} height='20' />
				</div>
				{/* <SeasonSelect season={season} showSeason={showSeason} setShowSeason={setShowSeason} handleSeasonChange={handleSeasonChange} availableSeasons={availableSeasons}/> */}
			</Box>
			<Divider/>
		</>
	)
}

export default ClubProfileNavBar;