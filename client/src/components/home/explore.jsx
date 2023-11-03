import React, { useEffect, useState } from 'react';
import Chip from '@mui/material/Chip';
import leaguesByCountry from './leagues/leaguesByCountry';
import { Container, useTheme, Grid, Link, Stack } from '@mui/material';
import Flag from 'react-world-flags';
import { styled } from '@mui/material/styles';
import { Box, Table, TableCell, TableHead, TableRow, Paper, Typography, TableContainer, TableBody } from '@mui/material';
import { tableCellClasses } from '@mui/material/TableCell';
import StarIcon from '@mui/icons-material/Star';
import { useNavigate } from 'react-router-dom';
import Title from '../util/section-heading';

const sortedLeaguesByCountry = Object.entries(leaguesByCountry)
	.sort((a, b) => a[0].localeCompare(b[0]))
	.reduce((acc, [key, value]) => {
		acc[key] = value;
			return acc;
}, {})

const Explore = () =>  {
	const navigate = useNavigate();
	const theme = useTheme();

	useEffect(() => { window.scrollTo(0,0) }, [])

	const displayTableRow = (country, idx) => {
		const [name, info] = country;
		const result = [
			<TableCell sx={{display: 'flex', alignItems: 'center'}}><Flag code={info['countryCode']} height='14' width='20' style={{marginRight: '.25rem'}} />{name} </TableCell>
		];

		{
			Object.entries(info['leagues']).map(([league, id]) => {
				result.push(
					<TableCell>
						<Link underline='hover' onClick={() => navigate(`/league/${id}`)} sx={{ color: theme.palette.secondary.main }} >
							{league}
						</Link>
					</TableCell>
				)
			})
		}

		while (result.length < 4) {
			result.push(
				<TableCell>-</TableCell>
			)
		}

		return (
			<TableRow>
				{result}
			</TableRow>
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
				<Chip onClick={() => handleChipClick(id)} label={name} sx={{backgroundColor: theme.palette.secondary.main, fontFamily: theme.typography.bold, color: theme.palette.text.primary }}/>
			)
		});

		return (
			<Container sx={{display: 'flex', flexDirection: 'column', padding: '1rem', gap: '1rem'}}> 
				<Box sx={{display: 'flex', flexDirection: 'row', gap: '.5rem'}}>
					{result}
				</Box>
			</Container>
		)
	}

	return (
		<Grid item xs={9}>
			<Box>
				<Paper elevation={1}>
					<Title variant='h5' content='Explore' />
				</Paper>
				<Stack spacing={2}>
					<Paper elevation={1}>
						<Title variant='h6' content='Top Leagues' />
						{listTopLeagues()}
					</Paper>
					<Paper elevation={1}>
						<Title variant='h6' content='All Leagues' />
						<TableContainer component={Paper}>
							<Table sx={{ minWidth: 700 }} size='small' >
								<TableHead>
									<TableRow sx={{backgroundColor: theme.palette.action.hover }}>
										<TableCell>Nation</TableCell>
										<TableCell align="left">1st Division</TableCell>
										<TableCell align="left">2nd Division</TableCell>
										<TableCell align="left">3rd Division</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{Object.entries(sortedLeaguesByCountry).map((country, idx) => (
										displayTableRow(country, idx)
									))}
								</TableBody>
							</Table>
						</TableContainer>
					</Paper>

				</Stack>
			</Box>
		</Grid>
	);
}

export default Explore;