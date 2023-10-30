import './league-table-dashboard.scss';
import React, {useEffect} from 'react'
import NoDataMessage from '../util/no-data/no-data-message';
import MultiTableDashboard from './multi-table-dashboard';
import Typography from '@mui/material/Typography';
import { TableCell, TableRow, TableContainer, Table, TableHead, TableBody, Link, Avatar, useTheme, Paper } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import SectionHeading from '../util/section-heading';

const LeagueTableDashboard = ({table}) => {
	const theme = useTheme();
	const navigate = useNavigate();
	useEffect(() => {}, [table])

	const leagueName = table[0].league.name;
	const leagueLogo = table[0].league.logo;

	if (!table?.length) {
		return <NoDataMessage/>
	}

	let leagueInfo = table[0]['league'];
	let standings = leagueInfo['standings'];

	if (standings?.length > 1) {
		return <MultiTableDashboard standings={standings}/>
	}

	standings = leagueInfo['standings'][0];

	if (!standings?.length) {
		return <NoDataMessage/>
	}


	const columns = ['Position', 'Club', 'MP', 'W', 'D', 'L', 'GF', 'GC', 'GD', 'Pts', 'Form'];

	const displayForm = (form) => {
		let icons = {
			'W': '\u{1F7E2}',
			'D': '\u{1F7E1}',
			'L': '\u{1F534}'
		};

		return (
			<p id='form-display'>
				{form.split('').map((symbol, index) => (
					<span key={index}>{icons[symbol]}</span>
				))}
			</p>
		);
	};

	if (!standings?.length) {
		return <NoDataMessage/>
	}


	return (
		<Paper elevation={2} sx={{marginTop: '1rem', mx: 'auto', marginTop: '1rem'}}>
			<SectionHeading variant='h6' content={`${leagueName} Table`} img={leagueLogo} />
			<TableContainer>
				<Table>
					<TableHead>
						<TableRow>
							{columns.map((column, idx) => (
								<TableCell key={idx} id={column}>{column}</TableCell>
								))}
						</TableRow>
					</TableHead>
					<TableBody className='league-table-body'>
						{standings.map((club, idx) => {
							const clubId = club['team']['id'];
							const rank = club['rank'];
							const clubName = club['team']['name'];
							const clubLogo = club['team']['logo'];
							const clubData = club['all'];
							const goalsDiff = club['goalsDiff'];
							const points = club['points'];
							const form = club['form']
							
							return (
								<TableRow key={idx} className='league-table-row'>
								<TableCell>{club['rank']}</TableCell>
								<TableCell id='Club' >
									<Link underline='hover' sx={{color: theme.palette.text.primary }} onClick={() => navigate(`/club/${clubId}`)} >
										<img src={club['team']['logo']} style={{ height: '1.5rem', width: '1.5rem', marginRight: '.25rem' }} alt=''/>
										<Typography variant='body1'>{clubName}</Typography>
									</Link>
								</TableCell>
								<TableCell>
									<Typography variant='body1'>
										{clubData['played']}
									</Typography>
								</TableCell>
								<TableCell>
									<Typography variant='body1'>
										{clubData['win']}
									</Typography>
								</TableCell>
								<TableCell>
									<Typography variant='body1'>
										{clubData['lose']}
									</Typography>
								</TableCell>
								<TableCell>
									<Typography variant='body1'>
										{clubData['draw']}
									</Typography>
								</TableCell>
								<TableCell>
									<Typography variant='body1'>
										{clubData['goals']['for']}
									</Typography>
								</TableCell>
								<TableCell>
									<Typography variant='body1'>
										{clubData['goals']['against']}
									</Typography>
								</TableCell>
								<TableCell>
									<Typography variant='body1'>
										{goalsDiff}
									</Typography>
								</TableCell>
								<TableCell>
									<Typography variant='body1'>
										{points}
									</Typography>
								</TableCell>
								<TableCell>
									<Typography variant='body1'>
										{displayForm(form)}
									</Typography>
								</TableCell>
							</TableRow>
							)
						})}
					</TableBody>
				</Table>
			</TableContainer>
		</Paper>
	)
}

export default LeagueTableDashboard

