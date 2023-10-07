import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const ClubSquadListItem = ({player}) => {
	return (
		<Card sx={{ width: '100%', height: 'fit-content', margin: '.5rem' }}>
			<img src={player.photo} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}/>
			<CardContent>
				<Typography gutterBottom variant="subtitle1" component="div">
					{player.name}
				</Typography>
				<Typography variant="body2" color="text.secondary">
					Age: {player.age}
					<br></br>
					No: {player.number}
				</Typography>
			</CardContent>
			<CardActions>
			</CardActions>
		</Card>
	);
}

export default ClubSquadListItem;