import { Avatar, Container, Divider, List, ListItem, ListItemAvatar, ListItemButton, Paper, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ScrollToTopOnLoad from '../util/scroll-to-top-on-load';
import { fetchNotifications } from '../../actions/notification_actions'

const HomeNotifications = () => {
	const dispatch = useDispatch()
	const notifications = useSelector(state => state.notifications?.notifications)

	const user_id = useSelector(state => state.users.user.id);

	useEffect(() => {
		if (!notifications) {
			dispatch(fetchNotifications(user_id))
		}
	}, [])

	useEffect(() => {}, [notifications])

	const displayNotifications = (notifications) => {
		let result = [];

		if (!notifications?.length) return ;

		for (let i = 0; i < notifications.length; i++) {
			result.push(
				<ListItem disablePadding divider alignItems='flex-start' key={i}>
					{/* TODO: onclick - take to post page */}
					<ListItemButton>
						<ListItemAvatar>
							<Avatar>
								
							</Avatar>
						</ListItemAvatar>
						<Typography variant='body1'>
							{notifications[i]['message']}
						</Typography> 
					</ListItemButton>
				</ListItem>,
			)
		}
		return result;
	}

	return (
		<>
			<Paper elevation={2} sx={{minHeight: '40rem'}}>
				<Typography variant='h5' className='section-heading'>
					Notifications
				</Typography>
				<List>
					{displayNotifications(notifications)}
				</List>
			</Paper>
			<ScrollToTopOnLoad/>
		</>
	)
}

export default HomeNotifications;