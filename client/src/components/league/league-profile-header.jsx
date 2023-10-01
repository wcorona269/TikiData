import React, { useState } from 'react'
import { Tabs, Tab } from '@mui/material';
import SeasonSelect from '../util/season-select/season-select';
import './league-profile-header.scss';

const LeagueProfileHeader = ({ league, season, handleSeasonChange, showSeason, setShowSeason, selectedTab, handleChange }) => {
	const leagueInfo = league[0]?.league;
	const country = leagueInfo?.country;
	const flag = leagueInfo?.flag;
	const logo = leagueInfo?.logo;
	const name = leagueInfo?.name;

	return (
		<div className='league-profile-header'>
			<div className='league-logo-bar'>
				<img src={logo} alt=''/>
				<p>{name}</p>
				<p>
				|
				</p>
				<p>{country}</p>
				<img src={flag}/>
			</div>
			<div>
				<SeasonSelect season={season} showSeason={showSeason} setShowSeason={setShowSeason} handleSeasonChange={handleSeasonChange}/>
			</div>
		</div>
	)
}

export default LeagueProfileHeader;
