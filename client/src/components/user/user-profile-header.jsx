import { useTheme, Avatar, IconButton, Divider, Typography, Box, Button } from '@mui/material';
import React from 'react' 
import { useNavigate, useParams } from 'react-router-dom';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SectionHeading from '../util/section-heading';
import { useSelector } from 'react-redux';
import ReactTimeAgo from 'react-time-ago'

const UserProfileHeader = () => {
	const navigate = useNavigate();
	const theme = useTheme();
	const { username } = useParams();
	const currentUser = useSelector(state => state.session.user?.username);
	const isUserProfile = username == currentUser;

	const handleClick = () => {
		navigate(`/edit-profile/${currentUser}`)
	}

	const content = [
		<IconButton sx={{ p: 0, m: 0, marginRight: 2 }} onClick={() => navigate('/home')}>
			<ArrowBackIcon />
		</IconButton>,
		username
	]

	return (
		<>
			<SectionHeading variant='h5' content={content} />
			<Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'left', alignItems: 'flex-end', padding: 2, gap: 1 }} >
				<Avatar sx={{ height: 100, width: 100, marginRight: 1 }} />
				<Box display='flex' flexDirection='column'>
					<Typography variant='h6'>
						{username}
					</Typography>
					<Typography variant='subtitle1' sx={{ color: theme.palette.text.secondary }} >
						{/* Joined <ReactTimeAgo date={created_at} locale="en-US"/> */}
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
			<Divider />
		</>
	)
}

export default UserProfileHeader;