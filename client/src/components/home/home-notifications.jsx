import { Avatar, Box, Container, Divider, Grid, List, ListItem, ListItemAvatar, ListItemButton, Paper, Typography, useTheme } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ScrollToTopOnLoad from '../util/scroll-to-top-on-load';
import { fetchNotifications } from '../../actions/notification_actions'
import HomeFixturesColumn from './home-fixtures-column';
import Title from '../util/section-heading';

const Notifications = () => {
	const dispatch = useDispatch()
	const notifications = useSelector(state => state.notifications?.notifications)
	const theme = useTheme();
	const user_id = useSelector(state => state.session?.user?.id);

	useEffect(() => {
		dispatch(fetchNotifications(user_id))
	}, [])

	useEffect(() => {}, [notifications])

	const displayNotifications = (notifications) => {
		let result = [];

		if (!notifications?.length) return (
			<Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
				<Typography variant='h6' sx={{ margin: 'auto', marginTop: '5rem', textAlign: 'center', height: '100%', color: theme.palette.text.disabled}}>
					No new notifications to show.
				</Typography>
			</Box>
		)

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
				<Paper elevation={1} sx={{minHeight: '20rem'}}>
					<Title variant='h5' content='Notifications' />
					<List>
						{/* {displayNotifications(notifications)} */}
					</List>
				</Paper>
			</Grid>
			<Grid item xs={3}>
				<HomeFixturesColumn/>
			</Grid>
			<ScrollToTopOnLoad/>
		</>
	)
}

export default Notifications;