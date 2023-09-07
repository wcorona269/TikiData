import React, { useEffect, useState } from 'react';
import ClubInfoBar from './clubInfoBar';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchClub } from '../../actions/api_actions';
import response from './response';
import LoadingMessage from '../util/loading-screen';

const ClubProfile = () => {
	console.log(response.club[0])
	const { clubId } = useParams();
	const dispatch = useDispatch();
	// const club = useSelector(state => state.club)
	const club = response.club[0];

	useEffect(() => {
		// dispatch(fetchClub(clubId));
	}, [])

	// if (!club) {
	// 	return <LoadingMessage/>	
	// }

	const name = club.team.name;
	const logo = club.team.logo;
	const city = club.venue.city;
	const country = club.team.country;
	const founded = club.team.founded;
	const address = club.venue.address; 
	const capacity = club.venue.capacity;
	const stadium = club.venue.name;
	const surface = club.venue.surface;

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
		<div className='club-profile-container'>
			<header>
				<div className='club-logo-area'>
					<img src={logo} alt={name}/>
					<h2>
						{name}
					</h2>
				</div>
				<table className='club-details'>
					<tbody>
						{displayClubDetails(clubDetails)}
					</tbody>
				</table>
			</header>
			<ClubInfoBar clubInfo={response}/>
		</div>
	)
}

export default ClubProfile;