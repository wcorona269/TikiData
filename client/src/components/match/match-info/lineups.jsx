import './lineups.scss';
import React from 'react'
import NoDataMessage from '../../util/no-data/no-data-message';
import { Grid, Table, TableBody, TableCell, TableContainer, TableRow, useTheme } from '@mui/material';

const Lineups = ({lineups}) => {
	const theme = useTheme();
	debugger;

	if (!lineups.length) {
		return <NoDataMessage/>
	}

	let result = [];

	lineups.map((lineup, idx) => {
		const coach = lineup.coach.name;
		const eleven = lineup.startXI;
		const subs = lineup.substitutes;

		result.push(
			<TableContainer>
				<Table size='small' aria-label='a dense table'>
					<TableBody>
						<TableRow>
							<TableCell sx={{ fontFamily: theme.typography.bold, backgroundColor: theme.palette.action.hover, p: 1 }} >
								Coach
							</TableCell>
						</TableRow>
						<TableRow>
							<TableCell sx={{p: 1}}>
								{coach}
							</TableCell>
						</TableRow>
						<TableRow>
							<TableCell sx={{ fontFamily: theme.typography.bold, backgroundColor: theme.palette.action.hover, p: 1 }} >   
								Starting XI
							</TableCell>
						</TableRow>
						{eleven.map((player, idx) => (
							<TableRow key={idx}><TableCell sx={{p: 1}} >{player.player.name}</TableCell></TableRow>
						))}
						<TableRow>
							<TableCell sx={{ p: 1, fontFamily: theme.typography.bold, backgroundColor: theme.palette.action.hover }} >
								Bench
							</TableCell>
						</TableRow>
						{subs.map((sub, idx) => (
							<TableRow key={idx} >
								<TableCell sx={{ p: 1 }}>
									{sub.player.name}
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		)
	})

	return (
		<Grid container>
			<Grid item xs={6}>
				{result[0]}
			</Grid>
			<Grid item xs={6}>
				{result[1]}
			</Grid>
		</Grid>
	)
}

export default Lineups;