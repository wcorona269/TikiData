import './league-profile-header.scss';
import React, { useState } from 'react'
import SeasonSelect from '../util/season-select/season-select';

const LeagueProfileHeader = ({ league, season, handleSeasonChange, showSeason, setShowSeason }) => {
	const leagueInfo = league[0]?.league;
	const country = leagueInfo?.country;
	const flag = leagueInfo?.flag;
	const logo = leagueInfo?.logo;
	const name = leagueInfo?.name;

	return (
		<div className='league-profile-header'>
			<img src={logo}/>
			<div>
				<p>{name}</p>
			</div>
			<SeasonSelect season={season} showSeason={showSeason} setShowSeason={setShowSeason} handleSeasonChange={handleSeasonChange}/>
		</div>
	)
}

export default LeagueProfileHeader;
