import React from 'react'

const LeagueProfileHeader = ({ league }) => {
	console.log(league);
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
		</div>
	)
}

export default LeagueProfileHeader;
