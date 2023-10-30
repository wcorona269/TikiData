import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Paper, Box, Avatar, Icon, IconButton, Grid, Tabs, Tab, Container, Typography, Divider, List, useTheme, Skeleton } from '@mui/material';
import PostContainer from '../home/post-container';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserInfo } from '../../actions/user_actions';
import { formatDistanceToNow } from 'date-fns';
import RepostContainer from '../home/repost-container';
import SectionHeading from '../util/section-heading';
import HomeFixturesColumn from '../home/home-fixtures-column';
// import ReactTimeAgo from 'react-time-ago'

const UserProfile = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const theme = useTheme();
	const { username } = useParams();
	const posts = useSelector(state => state.users.users?.user?.posts);
	const reposts = useSelector(state => state.users.users?.user?.reposts);
	const created_at = useSelector(state => state.users.users?.user?.created_at);
	const isLoading = useSelector(state => state.users.isLoading);

	const [selectedTab, setSelectedTab] = useState(0);

	useEffect(() => {
		dispatch(fetchUserInfo(username));
	}, [])

	const noPostsMessage = (
		<Container >
			<Typography textAlign='center' variant='h6' sx={{ color: theme.palette.text.disabled, padding: 5 }}>
				{username} hasn't posted yet.
			</Typography>
		</Container>
)

	const displayPosts = () => {
		let result = [];

		if (isLoading) return ;

		if (selectedTab === 0) {
			if (!posts?.length) return noPostsMessage;
			for (let post of posts) {
				result.push(
					<PostContainer post={post} />
				)	
			}
		} else {
			if (!reposts?.length) return noPostsMessage;
			for (let i = 0; i < reposts.length; i++) {
				result.push(<RepostContainer post={reposts[i]} idx={i} />)
			}
		}

		return result;
	}

	const handleChange = (event, newValue) => {
		setSelectedTab(newValue);
	};

	const displayTabs = () => {
		const tabs = ['Posts', 'Reposts'];
		let result = []

		tabs.map((tab, idx) => {
			result.push(
				<Tab key={idx} label={tab} />
			)
		})

		return result;
	}

	const content = [
		<IconButton sx={{ p: 0, m: 0, marginRight: 2 }} onClick={() => navigate('/home')}>
			<ArrowBackIcon />
		</IconButton>,
		username
	]

	return (
		<>
			<Grid item xs={6}>
				{
					isLoading ? 
						<Skeleton
							animation="wave"
							height={100}
							width='100%'
						/>
						:
					<Paper elevation={2}>
						<SectionHeading variant='h5' content={content} />
						<Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'left', alignItems: 'flex-end', padding: 2, gap: 1 }} >
							<Avatar sx={{height: 100, width: 100, marginRight: 1 }} />
							<Box display='flex' flexDirection='column'>
								<Typography variant='h6'>
									{username}
								</Typography>
								<Typography variant='subtitle1' sx={{ color: theme.palette.text.secondary }} >
									{/* Joined <ReactTimeAgo date={created_at} locale="en-US"/> */}
								</Typography>
							</Box>
						</Box>
						<Divider/>
						<Box>
							<Tabs onChange={handleChange} value={selectedTab} variant='fullWidth'>
								<Tab label={'Posts'} />
								<Tab label={'Reposts'} />
							</Tabs>
							<Divider/>
							{displayPosts()}
						</Box>
					</Paper>
				}
			</Grid>
			<Grid item xs={3}>
				<HomeFixturesColumn/>
			</Grid>
		</>
	)
}

export default UserProfile;