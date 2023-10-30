import { Avatar, Container, Divider, Grid, List, ListItem, ListItemAvatar, ListItemButton, Paper, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ScrollToTopOnLoad from '../util/scroll-to-top-on-load';
import { fetchNotifications } from '../../actions/notification_actions'
import HomeFixturesColumn from './home-fixtures-column';
import SectionHeading from '../util/section-heading';

const Notifications = () => {
	const dispatch = useDispatch()
	const notifications = useSelector(state => state.notifications?.notifications)

	const user_id = useSelector(state => state.users.user.id);

	useEffect(() => {
		dispatch(fetchNotifications(user_id))
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
			<Grid item xs={6}>
				<Paper elevation={2} sx={{minHeight: '40rem'}}>
					<SectionHeading variant='h5' content='Notifications' />
					<List>
						{displayNotifications(notifications)}
					</List>
				</Paper>
			</Grid>
			<Grid item xs>
				<HomeFixturesColumn/>
			</Grid>
			<ScrollToTopOnLoad/>
		</>
	)
}

export default Notifications;