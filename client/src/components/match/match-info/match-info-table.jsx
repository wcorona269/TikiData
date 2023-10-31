import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, useTheme } from '@mui/material'
import React from 'react'
import SectionHeading from '../../util/section-heading'
import DisplayTime from '../../util/display-time';

const MatchInfoTable = ({ match }) => {
	const theme = useTheme();
	const leagueName = match?.league?.name;
	const date = match?.fixture?.date;
	const status = match?.fixture?.status?.long;
	const referee = match?.fixture?.referee;
	const time_zone = match?.fixture?.referee;
	const venue = match?.fixture?.venue?.name;
	const leagueLogo = match?.league?.logo;
	const country = match?.league?.country;
	const flag = match?.league?.flag;
	const round = match?.league?.round;

	const matchInfo = {
		'Date': date,
		'Country': country,
		'League': leagueName, 
		'Round': round,
		'Referee': referee,
		'Status': status,
		'Time Zone': time_zone,
		'Venue': venue
	}

	const displayTable = (matchInfo) => {
		let result = [];

		for (let key in matchInfo) {
			result.push(
				<TableRow>
					<TableCell component='th' sx={{padding: 1}}>
						{key}
					</TableCell>
					<TableCell sx={{padding: 1}}>
						{matchInfo[key]}
					</TableCell>
				</TableRow>
			)
		}

		return result;
	}



	return (
		<Paper elevation={2}>
			<SectionHeading variant='h5' content='Match Info' />
			<TableContainer>
				<Table size="small" aria-label="a dense table">
					<TableBody>
						{displayTable(matchInfo)}
					</TableBody>
				</Table>
			</TableContainer>
		</Paper>
	)
}

export default MatchInfoTable;