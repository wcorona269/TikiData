import React, { useState } from 'react';
import Chip from '@mui/material/Chip';
import leaguesByCountry from './leagues/leaguesByCountry';
import { Container, useTheme, Grid, Link } from '@mui/material';
import Flag from 'react-world-flags';
import { styled } from '@mui/material/styles';
import { Box, Table, TableCell, TableHead, TableRow, Paper, Typography, TableContainer, TableBody } from '@mui/material';
import { tableCellClasses } from '@mui/material/TableCell';
import StarIcon from '@mui/icons-material/Star';
import { useNavigate } from 'react-router-dom';
import SectionHeading from '../util/section-heading';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
	[`&.${tableCellClasses.head}`]: {
		backgroundColor: theme.palette.common.black,
		color: theme.palette.common.white,
	},
	[`&.${tableCellClasses.body}`]: {
		fontSize: 14,
	},
}));

const sortedLeaguesByCountry = Object.entries(leaguesByCountry)
	.sort((a, b) => a[0].localeCompare(b[0]))
	.reduce((acc, [key, value]) => {
		acc[key] = value;
			return acc;
}, {})

const StyledTableRow = styled(TableRow)(({ theme }) => ({
	'&:nth-of-type(odd)': {
		backgroundColor: theme.palette.action.hover,
	},
	// hide last border
	'&:last-child td, &:last-child th': {
		border: 0,
	},
}));

const Explore = () =>  {
	const navigate = useNavigate();
	const theme = useTheme();

	const displayTableRow = (country, idx) => {
		const [name, info] = country;
		const result = [
			<StyledTableCell sx={{display: 'flex', alignItems: 'center'}}><Flag code={info['countryCode']} height='14' width='20' style={{marginRight: '.25rem'}} />{name} </StyledTableCell>
		];

		{
			Object.entries(info['leagues']).map(([league, id]) => {
				result.push(
					<StyledTableCell>
						<Link underline='hover' onClick={() => navigate(`/league/${id}`)} >
							{league}
						</Link>
					</StyledTableCell>
				)
			})
		}

		while (result.length < 4) {
			result.push(
				<StyledTableCell>-</StyledTableCell>
			)
		}

		return (
			<StyledTableRow>
				{result}
			</StyledTableRow>
		)
	}

	const handleChipClick = (id) => {
		navigate(`/league/${id}`)
	}

	const listTopLeagues = () => {

		const topLeagues = [
			['Premier League', 39],
			['La Liga', 140],
			['Bundesliga', 78],
			['Serie A', 135],
			['Ligue 1', 61],
			['UEFA Champions League', 2],
			['UEFA Europa League', 3],
		]

		let result = [];

		topLeagues.map((league) => {
			let [name, id] = league;

			result.push(
				<Chip onClick={() => handleChipClick(id)} label={name} sx={{backgroundColor: theme.palette.primary.light }}/>
			)
		});

		return (
			<Container sx={{display: 'flex', flexDirection: 'column', padding: '1rem', gap: '1rem'}}> 
				<Typography variant='subtitle1' sx={{display: 'flex', alignItems: 'center'}}>
					Top Leagues
				</Typography>
				<Box sx={{display: 'flex', flexDirection: 'row', gap: '.5rem'}}>
					{result}
				</Box>
			</Container>
		)
	}

	return (
		<Grid item xs>
			<Paper elevation={2}>
				<SectionHeading variant='h5' content='Explore' />
				<Box sx={{display: 'flex', flexDirection: 'column'}}>
					{listTopLeagues()}
				<TableContainer component={Paper}>
					<Table sx={{ minWidth: 700 }} aria-label="customized table">
						<TableHead>
							<TableRow>
								<StyledTableCell>Nation</StyledTableCell>
								<StyledTableCell align="left">1st Division</StyledTableCell>
								<StyledTableCell align="left">2nd Division</StyledTableCell>
								<StyledTableCell align="left">3rd Division</StyledTableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{Object.entries(sortedLeaguesByCountry).map((country, idx) => (
								displayTableRow(country, idx)
							))}
						</TableBody>
					</Table>
				</TableContainer>
				</Box>
			</Paper>
		</Grid>
	);
}

export default Explore