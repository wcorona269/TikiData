import React from 'react';
import { Typography, Paper, Box, Table, TableRow, TableCell, TableHead, TableContainer, TableBody } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material';

const ClubHomeInfo = ({ club }) => {
	const clubInfo = club[0];
	console.log(clubInfo);

	let city = clubInfo.venue.city || 'N/A';
	let country = clubInfo.team.country || 'N/A';

	const theme = createTheme({
		typography: {
			fontFamily: 'Ubuntu'
		}
	})



	let clubDetails = {
		'Logo': clubInfo.team.logo || 'N/A',
		'Name': clubInfo.team.name || 'N/A',
		'Location': `${city}, ${country}`,
		'Founded': clubInfo.team.founded || 'N/A',
		'National': clubInfo.team.national || 'false',
		'Stadium': clubInfo.venue.name || 'N/A',
		'Capacity': clubInfo.venue.capacity || 'N/A',
		'Address': clubInfo.venue.address || 'N/A',
		'Image': clubInfo.venue.image || 'N/A',
		'Surface': clubInfo.venue.surface || 'N/A'
	}

	const displayTable = (clubDetails) => {
		let result = [];

		for (let key in clubDetails) {
			if (key === 'Image' || key === 'Logo') {
				console.log('hello')
			} else {
				result.push(
					<TableRow key={key}>
						<TableCell component='th' align='left'>
							<Typography variant='body2' className='table-key' >
								{key}
							</Typography>
						</TableCell>
						<TableCell align='left'>
							<Typography variant='body2'>
								{clubDetails[key]}
							</Typography>
						</TableCell>
					</TableRow>
				)
			}
		}

		return result;
	}
	return (
		<ThemeProvider theme={theme}>
			<Paper className='home-paper club-home-table' id='sticky-paper' elevation={6} sx={{ top: '1rem', overflow: 'hidden'}}>
				<Typography variant='h6' gutterBottom className='section-heading'>
					Info
				</Typography>
				<Box sx={{ display: 'flex', justifyContent: 'center', padding: '.5rem' }}>
					<Typography variant='caption' className='table-key'>
						{clubDetails['Stadium']}
					</Typography>
				</Box>
				<img src={clubDetails['Image']} style={{width: '90%', height: '90%', objectFit: 'cover', margin: 'auto', display: 'flex'}} />
				<TableContainer >
					<Table size='small' aria-label='a dense table'>
						<TableHead>
							<TableRow>
								<TableCell align='left' colSpan={2}>{clubDetails['name']}</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{displayTable(clubDetails)}
						</TableBody>
					</Table>
				</TableContainer>
			</Paper>
		</ThemeProvider>
	)
}

export default ClubHomeInfo
