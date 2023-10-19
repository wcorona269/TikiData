import { Avatar, Container, Divider, List, ListItem, ListItemAvatar, ListItemButton, Paper, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchNotifications } from '../../actions/notification_actions'

const HomeNotifications = () => {
	const dispatch = useDispatch()
	// const notifications = useSelector(state => state.notifications?.notifications)
	const notifications = {
		"notifications": [
			{
				"created_at": "2023-10-19 06:07:03",
				"id": 1,
				"is_read": false,
				"message": "willyc liked your post",
				"post_id": 2,
				"recipient_id": 2,
				"sender_id": 1
			}
		]
	}

	const user_id = useSelector(state => state.users.user.id);

	useEffect(() => {
		if (!notifications?.length) {
			// dispatch(fetchNotifications(user_id))
		}
	}, [])

	const displayNotifications = (notifications) => {
		let array = notifications['notifications'];
		let result = [];

		for (let i = 0; i < array.length; i++) {
			result.push(
				<ListItem disablePadding divider alignItems='flex-start'>
					{/* TODO: onclick - take to post page */}
					<ListItemButton>
						<ListItemAvatar>
							<Avatar>
								
							</Avatar>
						</ListItemAvatar>
						<Typography variant='body1'>
							{array[i]['message']}
						</Typography> 
					</ListItemButton>
				</ListItem>,
			)
		}
		return result;
	}

	return (
		<Paper elevation={2} sx={{minHeight: '40rem'}}>
			<Typography variant='h6' className='section-heading'>
				Notifications
			</Typography>
			<List>
				{displayNotifications(notifications)}
			</List>
		</Paper>
	)
}

export default HomeNotifications;