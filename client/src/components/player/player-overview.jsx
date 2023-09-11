import React from 'react'
import shorthandMonthsOfYear from '../league/shorthandMonths';

const PlayerOverview = ({player}) => {
	const fullName = `${player.player.firstname} ${player.player.lastname}`

	const displayBirthDate = (birthInfo) => {
		// call with player.player.birth
		let dateFormat;

		let [year, month, day] = birthInfo.date.split('-');
		return `${day} ${shorthandMonthsOfYear[Number(month)]} ${year}`
	}

	return (
		<div className='player-overview'>
			<div className='player-profile-icon'>
				<p>
					{player.player.name}
				</p>
				<img src={player.player.photo} />
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
						<td>{player.player.age}</td>
					</tr>
					<tr>
						<th>Nationality</th>
						<td>
							{player.player.nationality}
						</td>
					</tr>
					<tr>
						<th>Date of Birth</th>
						<td>{displayBirthDate(player.player.birth)}</td>
					</tr>
					<tr>
						<th>Place of Birth</th>
						<td>{player.player.birth.place}, {player.player.birth.country}</td>
					</tr>
					<tr>
						<th>Height</th>
						<td>{player.player.height}</td>
					</tr>
					<tr>
						<th>Weight</th>
						<td>{player.player.weight}</td>
					</tr>
				</tbody>
			</table>
		</div>
	)
}

export default PlayerOverview;