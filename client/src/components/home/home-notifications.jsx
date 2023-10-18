import { Avatar, Container, List, ListItem, ListItemAvatar, ListItemButton, Paper, Typography } from '@mui/material'
import React from 'react'

const HomeNotifications = () => {


	const displayNotifications = () => {
		let result = [];
		for (let i = 0; i < 20; i++) {
			result.push(
				<ListItem disablePadding alignItems='flex-start'>
					<ListItemButton>
						<ListItemAvatar>
							<Avatar>
								
							</Avatar>
						</ListItemAvatar>
						<Typography variant='body1'>
							Notification
						</Typography> 
					</ListItemButton>
				</ListItem>
			)
		}
		return result;
	}

	return (
		<Paper elevation={2}>
			<Typography variant='h6' className='section-heading'>
				Notifications
			</Typography>
			<List>
				{displayNotifications()}
			</List>
		</Paper>
	)
}

export default HomeNotifications