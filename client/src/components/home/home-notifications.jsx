import { Avatar, Container, List, ListItem, ListItemAvatar, ListItemButton, Paper, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchNotifications } from '../../actions/notification_actions'

const HomeNotifications = () => {
	const dispatch = useDispatch()
	const notifications = useSelector(state => state.notifications?.notifications)
	const user_id = useSelector(state => state.users.user.id);

	useEffect(() => {
		if (!notifications?.length) {
			dispatch(fetchNotifications(user_id))
		}
	}, [])

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

export default HomeNotifications;