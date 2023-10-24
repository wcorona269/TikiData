import React, { useEffect, useState } from 'react'
import { Paper, Link, Button, Box, Typography, List, ListItem, Grid, Avatar } from '@mui/material'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { useNavigate } from 'react-router-dom';

const LeagueHomeStats = ({top_scorers}) => {
	const navigate = useNavigate();
	const [showMore, setShowMore] = useState(false);

	const handleChange = () => {
		setShowMore(!showMore)
	}

	const displayTable = (top_scorers) => {
		let result = [];

		for (let i = 0; i < top_scorers.length; i++) {
			const id = top_scorers[i].player.id;
			const name = top_scorers[i].player.name;
			const photo = top_scorers[i].player.photo;
			const goals = top_scorers[i].statistics[0].goals.total;

			result.push(
				<TableRow key={i}>
					<TableCell component="th" scope="row">
						<Typography variant='body2' id='team-name'>
							<Link underline='hover' onClick={() => navigate(`/player/${id}`)} 
								sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'left'}}
							>
								<Avatar src={photo} sx={{ height: '1.5rem', width: '1.5rem', marginRight: '.25rem' }} />
								{name}
							</Link>
						</Typography>
					</TableCell>
					<TableCell align="center">{goals}</TableCell>
				</TableRow>
			)
		}


		return result;
	}

	return (
		<Paper elevation={2} className='home-paper'>
			<Typography variant='h6' gutterBottom className='section-heading' >
				Top Scorers
			</Typography>
			<div
				style={{
					height: showMore ? '600px' : '250px',
					overflow: 'hidden',
					transition: 'height 0.3s ease-in-out',
					display: 'flex',
					alignItems: 'flex-start'
				}}
			>
				<TableContainer>
					<Table size='small' aria-label='a dense table'>
						<TableHead>
							<TableRow>
								<TableCell align='left'>Player</TableCell>
								<TableCell align='center'>Goals</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{displayTable(top_scorers)}
						</TableBody>
					</Table>
				</TableContainer>
			</div>
			<Button variant="contained" startIcon={!showMore ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />} onClick={handleChange} sx={{width: '100%'}} >
				{!showMore ? 'Show More' : 'Show Less'}
			</Button>
		</Paper>
	)
}

export default LeagueHomeStats;