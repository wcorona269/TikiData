import './club-squad.scss';
import React from 'react';
import ClubSquadListItem from './club-squad-list-item';
import { Avatar, Box, Grid, Paper, Typography, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import Title from '../util/title-util';

const ClubSquadDashboard = ({name, logo, squad}) => {
	const theme = useTheme();
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
		<Paper elevation={1} sx={{marginTop: '1rem'}}>
			<Title variant='h6' content={`${name} Squad`} img={logo} />
			<Box sx={{margin: '1rem'}}>
				{displaySquad(squadPositions)}
			</Box>
		</Paper>
	)
}

export default ClubSquadDashboard;