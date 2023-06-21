import React from 'react'
import { Link } from 'react-router-dom'

const ClubSquadListItem = ({player, idx, isNewPos}) => {
	return (
		<tr key={idx} className='club-squad-list-row'>
			<td>
				<Link to={`/player-profile/${player.id}`}>
					<img src={player.photo} alt={player.name}/>
					{player.name}
				</Link>
			</td>
			<td id='center-align'>
				{player.age}
			</td>
			<td id="center-align">
				{player.position}
			</td>
		</tr>
	)
}

export default ClubSquadListItem
