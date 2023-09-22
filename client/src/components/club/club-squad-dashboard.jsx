import './club-squad.scss';
import React from 'react';
import ClubSquadListItem from './club-squad-list-item';

const ClubSquadDashboard = ({squad}) => {
	let columns = ['Name', 'Age', 'Pos']
	const sortedSquad = squad.sort((a, b) => {
		if (a.position > b.position) {
			return -1
		} else if (a.position > b.position) {
			return 1
		} 
		return 0;
	})

	return (
		<table id='club-squad-table'>
			<thead id='club-squad-table-head'>
				<tr>
					{columns.map((column, idx) => (
						<th key={idx} className='club-squad-list-header' id={column}>{column}</th>
					))}
				</tr>
			</thead>
			<tbody className='club-squad-list-body'>
				{sortedSquad.map((player, idx) => (
					<ClubSquadListItem player={player} idx={idx} key={idx} />
				))}
			</tbody>
		</table>
	)
}

export default ClubSquadDashboard;