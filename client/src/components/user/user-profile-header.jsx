import { useTheme, Avatar, IconButton, Divider, Typography, Box, Button, Paper } from '@mui/material';
import React from 'react' 
import { useNavigate, useParams } from 'react-router-dom';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Title from '../util/section-heading';
import { useSelector } from 'react-redux';
import moment from 'moment';

const UserProfileHeader = () => {
	const navigate = useNavigate();
	const theme = useTheme();
	const { username } = useParams();
	const currentUser = useSelector(state => state.session.user?.username);
	const created_at = useSelector(state => state.users.users?.user?.created_at);
	const bio = useSelector(state => state.users.users?.user?.bio);
	const isUserProfile = username == currentUser;

	const handleClick = () => {
		navigate(`/edit-profile/${currentUser}`)
	}

	return (
		<Paper elevation={1}>
			<Title variant='h6' content={username} back={true} />
			<Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'left', alignItems: 'flex-end', padding: 2, gap: 1 }} >
				<Avatar sx={{ height: 100, width: 100, marginRight: 1 }} />
				<Box display='flex' flexDirection='column'>
					<Typography variant='h6'>
						{username}
					</Typography>
					<Typography variant='body2' sx={{ color: theme.palette.text.secondary }} >
						Joined {moment(created_at).fromNow()}
					</Typography>
				</Box>
				{
					isUserProfile &&
					<Button onClick={handleClick} variant='contained' sx={{ marginLeft: 'auto', marginBottom: 'auto' }}>
						<ManageAccountsIcon />
						Edit Profile
					</Button>
				}
			</Box>
			<Typography variant='body1' sx={{padding: 2}}>
				{bio}
			</Typography>
			<Divider />
		</Paper>
	)
}

export default UserProfileHeader;