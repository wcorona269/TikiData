import { Box, Grid, List, Paper, Typography, useTheme } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import ScrollToTopOnLoad from '../util/scroll-to-top-on-load';
import HomeFixturesColumn from './home-fixtures-column';
import Title from '../util/section-heading';
import NotificationContainer from './home-notification-container';

const Notifications = () => {
	const theme = useTheme();
	const notifications = useSelector(state => state.notifications?.notifications);

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
			const notif = notifications[i]

			result.push(
				<NotificationContainer notif={notif} idx={i} />
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
						{displayNotifications(notifications)}
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