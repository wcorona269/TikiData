import React from 'react'
import shorthandMonthsOfYear from '../league/shorthandMonths';

const PlayerOverview = ({player}) => {
	console.log(player)
	const fullName = `${player.player.firstname} ${player.player.lastname}`

	const displayBirthDate = (birthInfo) => {
		if (birthInfo === 'N/A') return 'N/A'

		let [year, month, day] = birthInfo.date.split('-');
		return `${day} ${shorthandMonthsOfYear[Number(month)]} ${year}`
	}

	const name = player.player.name || 'Name Unavailable';
	const photo = player.player.photo;
	const age = player.player.age || 'N/A';
	const nationality = player.player.nationality || 'N/A';
	const birth = player.player.birth || 'N/A';
	const birthPlace = `${player.player.birth.place}, ${player.player.birth.country}`
	const height = player.player.height || 'N/A';
	const weight = player.player.weight || 'NA';

	return (
		<div className='player-overview'>
			<div className='player-profile-icon'>
				<p>
					{name}
				</p>
				<img src={photo} />
			</div>
			<table className='player-info'>
				<tbody>
					<tr>
						<th id='table-caption' colSpan={2}>Personal Information</th>
					</tr>
					<tr>
						<th>Full Name</th>
						<td>{fullName}</td>
					</tr>
					<tr>
						<th>Age</th>
						<td>{age}</td>
					</tr>
					<tr>
						<th>Nationality</th>
						<td>
							{nationality}
						</td>
					</tr>
					<tr>
						<th>Date of Birth</th>
						<td>{displayBirthDate(birth)}</td>
					</tr>
					<tr>
						<th>Place of Birth</th>
						<td>{birthPlace}</td>
					</tr>
					<tr>
						<th>Height</th>
						<td>{height}</td>
					</tr>
					<tr>
						<th>Weight</th>
						<td>{weight}</td>
					</tr>
				</tbody>
			</table>
		</div>
	)
}

export default PlayerOverview;