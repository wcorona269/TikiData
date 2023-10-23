import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import leaguesByCountry from './leagues/leaguesByCountry';
import { Link } from '@mui/material';
import Flag from 'react-world-flags';
import topLeagues from './leagues/topLeagues';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

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
	const displayTableRow = (country, idx) => {
		const [name, info] = country;
		const result = [
			<StyledTableCell>{name} <Flag code={info['countryCode']} height='16' /></StyledTableCell>
		];

		{
			Object.entries(info['leagues']).map(([league, id]) => {
				result.push(
					<StyledTableCell>
						<Link underline='hover'>
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

	return (
		<Paper elevation={2}>
			<Typography variant='h5' className='section-heading'>
				Explore
			</Typography>
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
		</Paper>
	);
}

export default Explore