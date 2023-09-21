import React from 'react'
import SeasonSelect from '../util/season-select';

const ClubProfileHeader = ({club, season, showSeason, setShowSeason, handleSeasonChange}) => {
	const clubInfo = club[0];

	let name = clubInfo.team.name || 'N/A';
	let logo = clubInfo.team.logo || 'N/A';
	let city = clubInfo.venue.city || 'N/A';
	let country = clubInfo.team.country || 'N/A';
	let founded = clubInfo.team.founded || 'N/A';
	let address = clubInfo.venue.address || 'N/A';
	let capacity = clubInfo.venue.capacity || 'N/A';
	let stadium = clubInfo.venue.name || 'N/A';
	let surface = clubInfo.venue.surface || 'N/A';


	let clubDetails = {
		'Founded': founded,
		'Location': `${city}, ${country}`,
		'Stadium': stadium,
		'Capacity': capacity,
		'Address': address,
		'Surface': surface
	}


	const displayClubDetails = (clubDetails) => {
		let result = [];

		for (let key in clubDetails) {
			result.push(
				<tr key={key}>
					<td className='club-details-header'>{key}</td>
					<td className='club-details-detail'>{clubDetails[key]}</td>
				</tr>
			)
		}

		return result;
	}


	return (
		<header>
			<div className='club-logo-area'>
				<img src={logo} alt={name} />
				<h2>
					{name}
				</h2>
			</div>
			<table className='club-details'>
				<tbody>
					{displayClubDetails(clubDetails)}
				</tbody>
			</table>
			<SeasonSelect season={season} showSeason={showSeason} setShowSeason={setShowSeason} handleSeasonChange={handleSeasonChange}/>
		</header>
	)
}

export default ClubProfileHeader;