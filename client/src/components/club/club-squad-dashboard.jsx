import './club-squad.scss';
import React from 'react';
import ClubSquadListItem from './club-squad-list-item';
import { Avatar, Box, Grid, Paper, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const ClubSquadDashboard = ({name, logo, squad}) => {
	let columns = ['Name', 'Age', 'Pos'];

	let squadPositions = {

	}

	squad.map(player => {
		const position = player.position
		if (!(position in squadPositions)) {
			squadPositions[position] = [];
		}
		squadPositions[position].push(player);
	})

	const displaySquad = (squadPositions) => {
		let result = []
		for (let key in squadPositions) {
			result.push(
				<Typography variant='h5'>{key}s</Typography>
			)
			
			let grid_items = []
			let grid = <Grid container >{grid_items}</Grid>

			for (let player of squadPositions[key]) {
				grid_items.push(
					<Grid item xs={2} key={player.name} className='club-squad-grid-item' >
						<ClubSquadListItem player={player} />
					</Grid>
				)
			}

			result.push(grid);
		}

		return result;
	}

	return (
		<Paper elevation={2} sx={{marginTop: '1rem'}}>
			<Typography variant='h6' className='section-heading'>
				<img src={logo} style={{ height: '1.5rem', width: '1.5rem', marginRight: '.25rem' }} />
				{name} Squad
			</Typography>
			<Box sx={{margin: '1rem'}}>
				{displaySquad(squadPositions)}
			</Box>
		</Paper>
	)
}

export default ClubSquadDashboard;