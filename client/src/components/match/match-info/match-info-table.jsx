import { Paper, Table, TableBody, TableContainer, TableHead, useTheme } from '@mui/material'
import React from 'react'
import SectionHeading from '../../util/section-heading'
import DisplayTime from '../../util/display-time';

const MatchInfoTable = ({ match }) => {
	const theme = useTheme();
	const leagueName = match?.league?.name;
	const leagueLogo = match?.league?.logo;
	const country = match?.league?.country;
	const flag = match?.league?.flag;
	const round = match?.league?.round;

	const homeTeam = match?.teams?.home?.name
	const homeLogo = match?.teams?.home?.logo;


	const awayTeam = match?.teams?.away?.name
	const awayLogo = match?.teams?.away?.logo;

	const homeGoals = match?.goals?.home
	const awayGoals = match?.goals?.away
	const timeDisplay = <DisplayTime match={match} />
	return (
		<Paper elevation={2}>
			<SectionHeading variant='h5' content='Match Info' />
			<TableContainer>
			</TableContainer>
		</Paper>
	)
}

export default MatchInfoTable