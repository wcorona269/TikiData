import './match-stats.scss';
import React from 'react';
import NoDataMessage from '../../util/no-data/no-data-message';
import { Box, Table, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const MatchStats = ({match}) => {
	let stats = match.statistics;

	if (!stats.length) {
		return <NoDataMessage/>
	}

	let combinedStats = {}

	for (let team of stats) {
		for (let category of team.statistics) {
			if (category.type in combinedStats) {
				combinedStats[category.type].push(category.value || 0);
			} else {
				combinedStats[category.type] = [];
				combinedStats[category.type].push(category.value || 0);
			}
		}
	}

	const percentageStringToInteger = (percentageString) => {
		if (Number.isInteger(percentageString)) return percentageString;
		const cleanedString = percentageString.replace(/%/g, '').trim();
		// Parse the cleaned string as an integer
		const intValue = parseInt(cleanedString, 10);
		return intValue;
	}

	const displayTeamStats = (combinedStats) => {
		let result = [];

		for (let key in combinedStats) {
			let homeStat = combinedStats[key][0];
			let awayStat = combinedStats[key][1]
			let homeValue = percentageStringToInteger(homeStat);
			let awayValue = percentageStringToInteger(awayStat);
			let percentageHome;
			let percentageAway;

			if (homeValue === 0 && awayValue === 0) {
				percentageHome = 0;
				percentageAway = 0
			} else if (homeValue === 0) {
				percentageHome = 0;
				percentageAway = 100;
			} else if (awayValue === 0) {
				percentageHome = 100;
				percentageAway = 0;
			} else {
				percentageHome = homeValue / (homeValue + awayValue) * 100
				percentageAway = awayValue / (homeValue + awayValue) * 100
			}

			const isHomeLeading = percentageHome > percentageAway;
			const isNonZeroStat = (homeValue !== 0 || awayValue !== 0);

			result.push(
				[
				<TableRow key={key}>
					<td id='stat-name-column' colSpan='3'>{key}</td>
				</TableRow>,
				<TableRow key={key + '_percentage'} id='stat-row'>
					<TableCell colSpan='3' id='percentage-stat-td'>
						<Box className='stat-containers'>
							{isNonZeroStat ? 
							<>
									<Box className={isHomeLeading ? 'leading-col' : 'losing-col'} style={{width:percentageHome + '%'}}>{homeStat}</Box>
									<Box className={isHomeLeading ? 'losing-col' : 'leading-col'} style={{width:percentageAway + '%'}}>{awayStat}</Box>
							</> :
								<>
									<Box id='zero-col' style={{ width: 50 + '%'}}>{homeValue}</Box>
									<Box id='zero-col' style={{ width: 50 + '%'}}>{awayValue}</Box>
								</>
							}
						</Box>
					</TableCell>
				</TableRow>
				]
			)
		}

		return result;
	}


	return (
		<TableContainer className='match-stats-container'>
			<Table size='small' aria-label='a dense table'>
				<TableHead>
					<TableRow>
						<TableCell component='th' align='left'>{match.teams.home.name}</TableCell>
						<TableCell component='th' align='center' >Statistics</TableCell>
						<TableCell component='th' align='right' >{match.teams.away.name}</TableCell>
					</TableRow>
				</TableHead>
				<tbody>
					{displayTeamStats(combinedStats)}
				</tbody>
			</Table>
		</TableContainer>
	)
}

export default MatchStats;